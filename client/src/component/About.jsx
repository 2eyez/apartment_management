// src/component/About.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import features from "../data/about.js";

const About = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-24 py-16 px-6 max-w-6xl mx-auto relative">

      {/* Section Title */}
      <h2 className="text-3xl text-indigo-400 font-bold text-center mb-12">
        About Us
      </h2>

      {/* Feature Cards */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`p-6 rounded-2xl shadow hover:shadow-lg transition-transform duration-700 ease-out
              ${feature.bgColor} transform ${
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            {/* Icon */}
            <div className={`text-4xl mb-4 ${feature.textColor}`}>
              <i className={feature.icon}></i>
            </div>

            {/* Title */}
            <h3 className={`text-xl font-semibold mb-2 ${feature.textColor}`}>
              {feature.title}
            </h3>

            {/* Description */}
            {Array.isArray(feature.description) ? (
              feature.description.map((point, i) => (
                <span key={i} className="block text-indigo-500">
                  {i + 1}. {point}
                </span>
              ))
            ) : (
              <p className="text-gray-700">{feature.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
