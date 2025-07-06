'use client';

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto p-8 text-foreground"
    >
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="text-lg mb-4">
        Our organization was founded with the mission to serve our community.
      </p>
      <p className="mb-4">
        We believe in making a difference through dedicated service and community engagement.
      </p>
      <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
      <p>
        To create positive change and support those in need in our local community.
      </p>
    </motion.div>
  )
}