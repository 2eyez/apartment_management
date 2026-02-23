import React, { useState, useEffect } from "react";
import Hero from "../component/Hero.jsx";
import Location from "../component/Location.jsx";
import Apartments from "../component/Apartments.jsx";
import About from "../component/About.jsx";
import Testimonials from "../component/Testimonials";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Hero />
      <Location />
      {/* Apartments section with optional loading skeleton */}
      <Apartments loading={loading} showBackButton={false} />

      {/* About section */}
      <About />

      {/* Testimonials section */}
      <Testimonials />

    </>
  );
};

export default Home;
