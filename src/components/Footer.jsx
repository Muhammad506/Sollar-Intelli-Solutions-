import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  
  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <footer className="bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430] border-t border-gray-700 text-gray-300">
      <div className="max-w-6xl mx-auto py-4 px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12 md:h-16 md:w-16 mx-auto transform transition-transform duration-300 hover:scale-110"
              src="NavBar.png"
              alt="Navbar"
            />
          </div>

          {/* Navigation Links with Link component */}
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-center">
            <Link
              to="/"
              className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${isActive("/") ? "text-yellow-400" : ""}`}
            >
              Home
              <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400 transform ${isActive("/") ? "scale-x-100" : "scale-x-0"} group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
            </Link>
            <Link
              to="/about-us"
              className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${isActive("/about-us") ? "text-yellow-400" : ""}`}
            >
              About Us
              <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400 transform ${isActive("/about-us") ? "scale-x-100" : "scale-x-0"} group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
            </Link>
            <Link
              to="/features"
              className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${isActive("/features") ? "text-yellow-400" : ""}`}
            >
              Features
              <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400 transform ${isActive("/features") ? "scale-x-100" : "scale-x-0"} group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
            </Link>
            <Link
              to="/contact-us"
              className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${isActive("/contact-us") ? "text-yellow-400" : ""}`}
            >
              Contact Us
              <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400 transform ${isActive("/contact-us") ? "scale-x-100" : "scale-x-0"} group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:text-yellow-400 hover:scale-125"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:text-yellow-400 hover:scale-125"
            >
              <FaInstagram className="w-8 h-8" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:text-yellow-400 hover:scale-125"
            >
              <FaTwitter className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 py-3 text-center text-sm text-gray-500 border-t border-gray-700">
          © 2024 Solar Intelli Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
