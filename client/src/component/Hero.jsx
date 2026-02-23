// src/component/Hero.jsx
import { useState, useEffect } from "react";
import Herovid from "../assets/herovid.mp4";
import apartments from "../data/apartments";

const Hero = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Extract unique locations from apartments
    const uniqueLocations = [
      ...new Set(apartments.map((apt) => apt.location))
    ];
    setDestinations(uniqueLocations);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={Herovid}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Still Home
        </h1>
        <p className="max-w-xl text-lg md:text-xl mb-6">
          Discover Your Perfect Gateway Destination… all in one place.
        </p>

        {/* Search Form */}
        <form className="flex flex-col md:flex-row items-center gap-4 w-full max-w-3xl mt-6 text-white rounded-lg px-4 py-3">
          {/* Destination */}
          <div>
            <label htmlFor="destinationInput" className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
              </svg>
              Destination
            </label>
            <input
              list="destinations"
              id="destinationInput"
              type="text"
              placeholder="Type here"
              className="rounded border border-white px-3 py-1.5 mt-1.5 text-sm outline-none"
              required
            />
            <datalist id="destinations">
              {destinations.map((loc, i) => (
                <option key={i} value={loc} />
              ))}
            </datalist>
          </div>

          {/* Check-in */}
          <div>
            <label htmlFor="checkIn" className="flex items-center gap-2">Check in</label>
            <input
              id="checkIn"
              type="date"
              className="rounded border border-white px-3 py-1.5 mt-1.5 text-sm outline-none"
            />
          </div>

          {/* Check-out */}
          <div>
            <label htmlFor="checkOut" className="flex items-center gap-2">Check out</label>
            <input
              id="checkOut"
              type="date"
              className="rounded border border-white px-3 py-1.5 mt-1.5 text-sm outline-none"
            />
          </div>

          {/* Guests */}
          <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
            <label htmlFor="guests">Guests</label>
            <input
              id="guests"
              type="number"
              min={1}
              max={10}
              placeholder="0"
              className="rounded border border-white px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16"
            />
          </div>

          <button className="flex items-center justify-center gap-1 rounded-md py-3 px-4 text-white my-auto max-md:w-full max-md:py-1 cursor-pointer bg-indigo-500 hover:bg-indigo-600 transition">
            <span>Search</span>
          </button>
        </form>

        <button className="mt-8 w-fit bg-indigo-400 text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-indigo-500 transition">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
