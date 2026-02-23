import { useState } from "react";
import { Link } from "react-router-dom";

const ApartmentCard = ({ apt }) => {
  const [liked, setLiked] = useState(false);

  if (!apt) return null;

  const handleShare = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const shareUrl = `${window.location.origin}/apartments/${apt.id}`;

    if (navigator.share) {
      navigator.share({
        title: `${apt.type} in ${apt.location}`,
        text: `Check out this apartment in ${apt.location}`,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <Link to={`/apartments/${apt.id}`} className="block group">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">

        {/* Image Gallery with Horizontal Scroll */}
        <div className="relative overflow-x-auto flex gap-2">
          {apt.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${apt.location} ${i + 1}`}
              className="w-64 h-48 object-cover rounded-xl flex-shrink-0 group-hover:scale-105 transition duration-300"
            />
          ))}

          {/* Right Icons overlay on first image */}
          <div className="absolute top-3 right-3 flex gap-2">
            {/* Wishlist */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setLiked(!liked);
              }}
              className="bg-white/90 backdrop-blur w-9 h-9 rounded-full flex items-center justify-center shadow hover:scale-110 transition"
            >
              <i
                className={`${
                  liked
                    ? "ri-heart-fill text-red-500"
                    : "ri-heart-line text-gray-700"
                } text-lg`}
              />
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="bg-white/90 backdrop-blur w-9 h-9 rounded-full flex items-center justify-center shadow hover:scale-110 transition"
            >
              <i className="ri-share-line text-lg text-indigo-500"></i>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <p className="font-medium text-indigo-500 group-hover:underline">
            {apt.location}
          </p>

          {apt.address && (
            <div className="hidden sm:flex items-center gap-1 text-sm text-gray-500">
              <i className="ri-map-pin-line text-base" />
              <span className="truncate">{apt.address}</span>
            </div>
          )}

          <div className="flex items-center gap-1 text-sm">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`ri-star-fill ${
                  i < Math.round(apt.rating)
                    ? "text-yellow-500"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-1 font-medium text-gray-700">
              {apt.rating}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {apt.discountPrice && (
              <span className="text-sm text-gray-400 line-through">
                ₦{apt.price}/night
              </span>
            )}

            <span className="text-lg font-semibold text-gray-900">
              ₦{apt.discountPrice ?? apt.price}
              <span className="text-sm text-gray-500"> /night</span>
            </span>
          </div>

          <span className="inline-block pt-1 text-sm font-medium text-black group-hover:underline">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ApartmentCard;