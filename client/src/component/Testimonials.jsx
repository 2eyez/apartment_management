// src/component/Testimonials.jsx
import { useEffect, useState } from "react";
import testimonials from "../data/testimonials";

const Testimonials = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl text-indigo-400 font-bold text-center mb-12">
        What Our Clients Say
      </h2>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4">
        {testimonials.map((test, index) => (
          <div
            key={test.id}
            className={`flex-shrink-0 w-[300px] p-6 rounded-2xl shadow-lg bg-white transform transition duration-700 ease-out snap-center
              ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="flex flex-col items-center text-center">
              {/* Client Image */}
              <img
                src={test.img}
                alt={test.name}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />

              {/* Message */}
              <p className="text-gray-700 mb-3">&quot;{test.message}&quot;</p>

              {/* Name */}
              <h3 className="text-indigo-500 font-semibold">{test.name}</h3>

              {/* Role & Location */}
              <p className="text-gray-400 text-sm mb-2">
                {test.role} — {test.location}
              </p>

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`ri-star-fill ${
                      i < (test.rating || 5) ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
