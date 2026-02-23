import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import menu from "../data/menu";
import apartments from "../data/apartments";
import siteConfig from "../data/config";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // NEW: User state from localStorage
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const locations = [...new Set(apartments.map((apt) => apt.location))];

  // NEW: Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <>
      <nav className="bg-white shadow-md py-2 px-4 md:px-16 sticky top-0 z-50 transition-colors">
        <div className="flex justify-between items-center relative">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            {siteConfig.logo ? (
              <img
                src={siteConfig.logo}
                alt={siteConfig.name}
                className="h-14 w-auto"
              />
            ) : (
              <span className="text-2xl font-bold text-indigo-500">
                {siteConfig.name}
              </span>
            )}
          </Link>

          {/* Centered Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center absolute left-1/2 transform -translate-x-1/2">
            {menu.map((item) => (
              <li key={item.id} className="relative group">
                <Link
                  to={item.path}
                  className={`font-medium transition ${
                    item.title === "Home" || pathname === item.path
                      ? "text-indigo-500"
                      : "text-gray-700 hover:text-indigo-500"
                  }`}
                >
                  {item.title}
                </Link>

                {/* Dropdown */}
                {item.hasDropdown && locations.length > 0 && (
                  <div className="absolute top-full left-0 mt-2 bg-white border shadow-lg rounded-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto min-w-[180px] z-50">
                    {locations.map((loc, i) => (
                      <Link
                        key={i}
                        to={`/locations/${encodeURIComponent(loc)}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-500 transition"
                      >
                        {loc}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center gap-3 absolute right-0">
            {!user ? (
              <button
                onClick={() => setIsLoginOpen(true)}
                className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
              >
                Login
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-gray-700 font-medium">
                  Hi, {user.email}
                </span>

                {user.role === "owner" && user.verified && (
                  <span className="bg-green-100 text-green-600 px-2 py-1 text-xs rounded-full">
                    ✔ Verified Owner
                  </span>
                )}

                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-4 space-y-4 transition-all duration-300 ease-in-out transform ${
            isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          {menu.map((item) => (
            <div key={item.id}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-indigo-500"
              >
                {item.title}
              </Link>

              {item.hasDropdown && locations.length > 0 && (
                <div className="ml-4 mt-2 space-y-2 transition-all duration-200">
                  {locations.map((loc, i) => (
                    <Link
                      key={i}
                      to={`/locations/${encodeURIComponent(loc)}`}
                      onClick={() => setIsOpen(false)}
                      className="block text-sm text-gray-600 hover:text-indigo-500"
                    >
                      {loc}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Login / Logout */}
          {!user ? (
            <button
              onClick={() => {
                setIsOpen(false);
                setIsLoginOpen(true);
              }}
              className="block bg-indigo-500 text-white px-4 py-2 rounded-lg text-center w-full"
            >
              Login
            </button>
          ) : (
            <div className="flex items-center justify-between gap-3">
              <span className="text-gray-700 font-medium">
                Hi, {user.email}
              </span>

              {user.role === "owner" && user.verified && (
                <span className="bg-green-100 text-green-600 px-2 py-1 text-xs rounded-full">
                  ✔ Verified Owner
                </span>
              )}

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  );
};

export default Navbar;
