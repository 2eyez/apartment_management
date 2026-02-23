import { useNavigate } from "react-router-dom";
import locations from "../data/location";

const Location = () => {
  const navigate = useNavigate();

  const handleClick = (location) => {
    navigate(`/locations/${encodeURIComponent(location)}`);
  };

  return (
    <div className="px-4 py-10">
      {/* TITLE */}
      <h2 className="text-3xl text-indigo-400 font-bold text-center mb-8 tracking-wide">
        EXPLORE TOP LOCATIONS
      </h2>

      {/* HORIZONTAL SCROLL */}
      <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4">
        {locations.map((loc, index) => (
          <div
            key={index}
            onClick={() => handleClick(loc.title)}
            className="
              snap-center
              min-w-[280px] h-[300px]
              relative
              bg-no-repeat bg-cover bg-center
              rounded-xl overflow-hidden
              transform transition duration-300
              hover:scale-105 hover:shadow-xl
              cursor-pointer
            "
            style={{ backgroundImage: `url(${loc.img})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-white text-xl font-bold tracking-wide z-10">
              {loc.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
