import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import apartments from "../data/apartments";
import "remixicon/fonts/remixicon.css";

const ApartmentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const apartment = apartments.find((apt) => apt.id === Number(id));

  if (!apartment)
    return <p className="p-6 text-center">Apartment not found</p>;

  const [activeImage, setActiveImage] = useState(apartment.images[0]);
  const [liked, setLiked] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const today = new Date().toISOString().split("T")[0];

  const formatPrice = (amount) => amount.toLocaleString("en-NG");

  const getNights = (start, end) => {
    const diff = (new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    return getNights(checkIn, checkOut);
  }, [checkIn, checkOut]);

  const totalPrice = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    return nights * (apartment.discountPrice || apartment.price);
  }, [checkIn, checkOut, nights, apartment.discountPrice, apartment.price]);

  const isGuestValid =
    adults <= apartment.maxAdults && children <= apartment.maxChildren;

  // handleBookNow
  const handleBookNow = () => {
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates");
      return;
    }

    if (!isGuestValid) {
      alert(
        `Guest limit exceeded. Max adults: ${apartment.maxAdults}, Max children: ${apartment.maxChildren}`
      );
      return;
    }

    const nights = getNights(checkIn, checkOut);

    navigate(`/payment/${apartment.id}`, {
      state: { checkIn, checkOut, adults, children, totalPrice, nights, apartment },
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-6 pt-24 pb-24 relative">
      {/* Image Section */}
      <div className="relative">
        <img
          src={activeImage}
          alt={apartment.location}
          className="w-full h-[420px] object-cover rounded-2xl"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 mt-4 overflow-x-auto">
        {apartment.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`View ${index + 1}`}
            onClick={() => setActiveImage(img)}
            className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
              activeImage === img ? "border-indigo-500" : "border-transparent"
            }`}
          />
        ))}
      </div>

      {/* Info Section */}
      <div className="mt-6">
        <h1 className="text-3xl font-semibold text-indigo-500">
          {apartment.location}
        </h1>
        <p className="text-gray-500 mt-1">{apartment.address}</p>
        <p className="text-gray-700 mt-1 font-medium">{apartment.type}</p>
      </div>

      {/* Price */}
      <div className="mt-4 flex items-center gap-3 text-xl">
        {apartment.discountPrice && (
          <span className="line-through text-gray-400">
            ₦{formatPrice(apartment.price)}
          </span>
        )}
        <span className="font-bold text-indigo-600">
          ₦{formatPrice(apartment.discountPrice || apartment.price)} / night
        </span>
      </div>

      {/* Booking Controls */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
        <input
          type="date"
          value={checkIn}
          min={today}
          onChange={(e) => setCheckIn(e.target.value)}
          className="border border-gray-300 rounded-lg p-2"
        />
        <input
          type="date"
          value={checkOut}
          min={today}
          onChange={(e) => setCheckOut(e.target.value)}
          className="border border-gray-300 rounded-lg p-2"
        />
        <input
          type="number"
          min={1}
          value={adults}
          onChange={(e) => setAdults(Number(e.target.value))}
          className="border border-gray-300 rounded-lg p-2 w-24"
        />
        <input
          type="number"
          min={0}
          value={children}
          onChange={(e) => setChildren(Number(e.target.value))}
          className="border border-gray-300 rounded-lg p-2 w-24"
        />
        <button
          onClick={handleBookNow}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition"
        >
          Book Now
        </button>
      </div>

      {/* Sticky Summary */}
      {nights > 0 && (
        <div className="mt-6 sticky bottom-6 bg-white border border-indigo-200 shadow-xl p-5 rounded-2xl">
          <p className="text-gray-700 text-lg">
            <span className="font-semibold text-indigo-600">{nights}</span>{" "}
            night{nights > 1 ? "s" : ""}
          </p>
          <p className="text-xl font-bold text-indigo-700 mt-2">
            Total: ₦{formatPrice(totalPrice)}
          </p>
        </div>
      )}
    </div>
  );
};

export default ApartmentDetails;