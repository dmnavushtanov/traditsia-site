"use client";

import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface Marker {
  lat: number;
  lng: number;
  title: string; // Can be event title or branch name
  description?: string; // Can be event description or branch city/head
  date?: string;
  hour?: string;
  city?: string;
  head?: string;
  phone?: string;
  email?: string;
}

interface GoogleMapProps {
  markers: Marker[];
  zoom?: number; // Optional zoom prop
  center?: { lat: number; lng: number; }; // Optional center prop
}

const GoogleMap: React.FC<GoogleMapProps> = ({ markers, zoom, center }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
      version: 'weekly',
    });

    loader.load().then(() => {
      
      let mapCenter = center || { lat: 42.7333, lng: 25.4858 }; // Default: Center of Bulgaria
      let mapZoom = zoom; // Use provided zoom

      if (mapZoom === undefined) {
        if (markers.length === 1) {
          mapCenter = { lat: markers[0].lat, lng: markers[0].lng };
          mapZoom = 12; // Default zoom for single marker
        } else {
          mapZoom = 8; // Default zoom for multiple/no markers
        }
      }

      const map = new google.maps.Map(mapRef.current as HTMLDivElement, {
        center: mapCenter,
        zoom: mapZoom,
      });

      const infoWindow = new google.maps.InfoWindow();

      const validMarkers = markers.filter(markerInfo => 
        typeof markerInfo.lat === 'number' && !isNaN(markerInfo.lat) &&
        typeof markerInfo.lng === 'number' && !isNaN(markerInfo.lng)
      );

      validMarkers.forEach(markerInfo => {
        const marker = new google.maps.Marker({
          position: { lat: markerInfo.lat, lng: markerInfo.lng },
          map: map,
          title: markerInfo.title,
        });

        marker.addListener('click', () => {
          let contentString = `<div><h3>${markerInfo.title}</h3>`;

          if (markerInfo.description) {
            contentString += `<p>${markerInfo.description}</p>`;
          }
          if (markerInfo.date && markerInfo.hour) {
            contentString += `<p><strong>When:</strong> ${markerInfo.date} at ${markerInfo.hour}</p>`;
          }
          if (markerInfo.city) {
            contentString += `<p><strong>Where:</strong> ${markerInfo.city}</p>`;
          }
          if (markerInfo.head) {
            contentString += `<p><strong>Head:</strong> ${markerInfo.head}</p>`;
          }
          if (markerInfo.phone) {
            contentString += `<p><strong>Phone:</strong> ${markerInfo.phone}</p>`;
          }
          if (markerInfo.email) {
            contentString += `<p><strong>Email:</strong> ${markerInfo.email}</p>`;
          }
          contentString += `</div>`;

          infoWindow.setContent(contentString);
          infoWindow.open(map, marker);
        });
      });

      // If on a small screen, fit all markers within view
      if (typeof window !== "undefined" && window.innerWidth < 768 && validMarkers.length > 1) {
        const bounds = new google.maps.LatLngBounds();
        validMarkers.forEach(m => bounds.extend({ lat: m.lat, lng: m.lng }));
        map.fitBounds(bounds);
      }
    }).catch(e => console.error("Error loading Google Maps API: ", e));
  }, [markers, zoom, center]);

  return <div ref={mapRef} className="h-96 md:h-[600px] w-full" />;
};

export default GoogleMap;
