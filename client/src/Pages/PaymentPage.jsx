import { useLocation } from "react-router-dom";
import { processPayment } from "../data/paymentLogic.js";

const PaymentPage = () => {
  const location = useLocation();
  const { checkIn, checkOut, adults, children, totalPrice, nights, apartment } = location.state;

  const formatPrice = (amount) => amount.toLocaleString("en-NG");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">

      {/* Apartment Images - Horizontal Scroll */}
      <div className="max-w-4xl w-full mb-8 overflow-x-auto flex gap-4 pb-2 scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-gray-200">
        {apartment.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${apartment.location} ${i + 1}`}
            className="w-64 h-40 object-cover rounded-2xl flex-shrink-0"
          />
        ))}
      </div>

      {/* Apartment Details */}
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl p-6 mb-8">
        <h2 className="text-3xl font-bold">{apartment.location}</h2>
        <p className="text-gray-500 mt-2">{apartment.address}</p>
        <p className="text-gray-700 mt-1 font-medium">
          ₦{formatPrice(apartment.discountPrice || apartment.price)} / night
        </p>
        {apartment.discountPrice && (
          <p className="line-through text-gray-400">
            ₦{formatPrice(apartment.price)}
          </p>
        )}
      </div>

      {/* Payment Summary */}
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-3xl p-8">
        <h3 className="text-2xl font-bold mb-6">Payment Summary</h3>

        <div className="flex justify-between text-gray-700 mb-2">
          <span>Check-in</span>
          <span className="font-semibold">{checkIn}</span>
        </div>

        <div className="flex justify-between text-gray-700 mb-2">
          <span>Check-out</span>
          <span className="font-semibold">{checkOut}</span>
        </div>

        <div className="flex justify-between text-gray-700 mb-2">
          <span>Nights</span>
          <span className="font-semibold">{nights}</span>
        </div>

        <div className="flex justify-between text-gray-700 mb-2">
          <span>Guests</span>
          <span className="font-semibold">{adults + children}</span>
        </div>

        <div className="flex justify-between font-bold text-lg mt-4">
          <span>Total Price</span>
          <span>₦{formatPrice(totalPrice)}</span>
        </div>

        <button
          onClick={() =>
            processPayment({
              ...apartment,
              checkIn,
              checkOut,
              adults,
              children,
              nights,
              totalPrice,
            })
          }
          className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-2xl font-semibold shadow-lg transition-all"
        >
          Pay Now ₦{formatPrice(totalPrice)}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;