import { useParams, Link, useNavigate } from "react-router-dom";
import apartments from "../data/apartments";
import ApartmentCard from "../component/ApartmentCard";

const LocationPage = () => {
  const { location } = useParams();
  const decodedLocation = decodeURIComponent(location);
  const navigate = useNavigate();

  // Filter apartments by location
  const filteredApartments = apartments.filter(
    (apt) => apt.location.toLowerCase() === decodedLocation.toLowerCase()
  );

  if (filteredApartments.length === 0) {
    return (
      <div className="pt-24 px-6 text-center">
        {/* Back Arrow */}
        <button
          onClick={() => navigate("/apartments")}
          className="text-indigo-500 font-large mb-6 hover:underline"
        >
          
  <span className="text-2xl">←</span>
        </button>

        <h2 className="text-2xl font-semibold mb-4">
          No apartments found in "{decodedLocation}"
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pt-24 pb-14">
      
      

      <h1 className="text-3xl font-semibold mb-6">
        Apartments in {decodedLocation}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredApartments.map((apt) => (
          <ApartmentCard key={apt.id} apt={apt} />
        ))}
      </div>
    </div>
  );
};

export default LocationPage;
