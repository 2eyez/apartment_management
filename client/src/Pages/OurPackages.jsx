// src/pages/OurPackages.jsx
import { useNavigate } from "react-router-dom";

const OurPackages = ({ packages }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">

      <h2 className="text-3xl font-bold text-center mb-12">
        Our Packages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packages.map((pkg, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border">
            <h3 className={`text-2xl font-bold mb-4 ${pkg.color || "text-gray-700"}`}>
              {pkg.name}
            </h3>
            <p className="text-lg font-semibold mb-6">{pkg.price}</p>
            <ul className="space-y-3 text-gray-600 mb-6">
              {pkg.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded-lg text-white ${pkg.buttonColor || "bg-gray-700"}`}
            >
              {pkg.buttonText || "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPackages;
