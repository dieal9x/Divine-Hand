import React from 'react';
import Hero from '../components/home/Hero';
import Bestsellers from '../components/home/Bestsellers';
import HowItWorks from '../components/home/HowItWorks';
import WhysUs from '../components/home/WhysUs';
import Reviews from '../components/home/Reviews';
import Instagram from '../components/home/Instagram';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhysUs />
      <Bestsellers />
      <HowItWorks />
      <Reviews />
      <Instagram />
    </main>
  );
}
