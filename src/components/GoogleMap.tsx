"use client";

import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface Marker {
  lat: number;
  lng: number;
  title: string;
  description: string;
  date: string;
  hour: string;
  city: string;
}

interface GoogleMapProps {
  markers: Marker[];
  zoom?: number; // Optional zoom prop
  center?: { lat: number; lng: number; }; // Optional center prop
}

const GoogleMap: React.FC<GoogleMapProps> = ({ markers, zoom, center }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("Attempting to load Google Map...");
    console.log("API Key being used: ", process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
      version: 'weekly',
    });

    loader.load().then(() => {
      console.log("Google Maps API loaded. Initializing map...");
      
      let mapCenter = center || { lat: 42.7333, lng: 25.4858 }; // Default: Center of Bulgaria
      let mapZoom = zoom; // Use provided zoom

      if (markers.length === 1) {
        mapCenter = { lat: markers[0].lat, lng: markers[0].lng };
        mapZoom = zoom !== undefined ? zoom : 12; // Use provided zoom or default to 12 for single marker
      } else if (markers.length > 1) {
        mapZoom = zoom !== undefined ? zoom : 8; // Use provided zoom or default to 8 for multiple markers
      } else {
        // No markers, use default Bulgaria center and zoom
        mapZoom = zoom !== undefined ? zoom : 8;
      }

      const map = new google.maps.Map(mapRef.current as HTMLDivElement, {
        center: mapCenter,
        zoom: mapZoom,
      });

      const infoWindow = new google.maps.InfoWindow();

      markers.forEach(markerInfo => {
        const marker = new google.maps.Marker({
          position: { lat: markerInfo.lat, lng: markerInfo.lng },
          map: map,
          title: markerInfo.title,
        });

        marker.addListener('click', () => {
          infoWindow.setContent(
            `<div>
              <h3>${markerInfo.title}</h3>
              <p>${markerInfo.description}</p>
              <p><strong>When:</strong> ${markerInfo.date} at ${markerInfo.hour}</p>
              <p><strong>Where:</strong> ${markerInfo.city}</p>
            </div>`
          );
          infoWindow.open(map, marker);
        });
      });
    }).catch(e => console.error("Error loading Google Maps API: ", e));
  }, [markers, zoom, center]);

  return <div ref={mapRef} className="h-96 md:h-[600px] w-full" />;
};

export default GoogleMap;