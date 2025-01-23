// components/ParallaxSection.js
"use client"
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

export default function ParallaxSection() {
  return (
    <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Parallax translateY={[-20, 20]} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <img
          src="/hero2.png"
          alt="background"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Parallax>
      <div style={{ position: 'relative', zIndex: 1, padding: '20px', color: 'white' }}>
        <h1>Welcome to My Parallax Page</h1>
        <p>Scroll down to see the effect!</p>
      </div>
    </div>
  );
};
