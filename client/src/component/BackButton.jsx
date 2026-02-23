import { useNavigate, useLocation } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide ONLY on home page
  if (location.pathname === "/") return null;

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-20 left-6 z-[9999] w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
    >
      <i className="ri-arrow-left-line text-2xl text-indigo-700"></i>
    </button>
  );
};

export default BackButton;