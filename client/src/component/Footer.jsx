import { Link } from "react-router-dom";
import siteConfig from "../data/config";
import menu from "../data/menu";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full backdrop-blur-xl bg-gray-900/80 border-t border-gray-800 text-gray-300 px-6 md:px-16 py-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-4 text-sm">

        {/* Logo + Brand */}
        <div>
          <Link to="/" className="flex items-center mb-1">
            <img
              src={siteConfig.logo}
              alt={siteConfig.name}
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-gray-400 text-xs leading-snug">
            Premium short-stay apartments across Nigeria.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-medium mb-1 text-sm">
            Quick Links
          </h4>
          <ul className="space-y-1 text-xs">
            {menu.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="hover:text-indigo-400 transition"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-medium mb-1 text-sm">
            Contact
          </h4>
          <div className="space-y-1 text-xs">
            <p>{siteConfig.contact.email}</p>
            <p>{siteConfig.contact.phone}</p>
          </div>

          <div className="flex gap-3 mt-2 text-lg">
            {siteConfig.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition"
                aria-label={social.name}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-medium mb-1 text-sm">
            Newsletter
          </h4>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed!");
            }}
            className="flex gap-2"
          >
            <input
              type="email"
              placeholder="Email"
              required
              className="bg-gray-800/70 border border-gray-700 rounded-lg px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-lg text-xs transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-indigo-500 mt-3 pt-2 text-center text-xs text-gray-400">
        © {currentYear} {siteConfig.name}
      </div>
    </footer>
  );
};

export default Footer;
