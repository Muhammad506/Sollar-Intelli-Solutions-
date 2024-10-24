import Avatar from "react-avatar";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const location = useLocation(); // Get the current location
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for hamburger toggle

  const isActive = (path) => location.pathname === path;
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430] fixed top-0 left-0 w-full z-50">
      {/* Navbar for Large Screens */}
      <nav className="hidden lg:flex justify-between items-center py-5 px-8 border-b border-gray-700 text-gray-300">
        <img
          src="NavBar.png"
          alt="Navbar"
          className="h-14 w-14 md:h-16 md:w-16 transform hover:scale-110 transition duration-300"
        />
        <div className="flex space-x-8 md:space-x-12">
          {["/", "/About-us", "/Features", "/Contact-us"].map((path, index) => (
            <Link
              key={index}
              to={path}
              className={`relative group cursor-pointer text-lg hover:text-yellow-400 ${
                isActive(path) ? "text-yellow-400" : ""
              }`}
            >
              {path.replace("/", "").replace("-", " ") || "Home"}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-yellow-400 transform ${
                  isActive(path) ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100 transition-transform duration-300`}
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          {isLoggedIn ? (
            <>
              <Link to="/dashboard">
                <button className="bg-yellow-500 px-5 py-2 rounded-full hover:scale-105 transition-transform">
                  Dashboard
                </button>
              </Link>
              <Avatar
                size="40"
                round
                className="hover:scale-110 transition"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGBxaYdGHEpJ9001ON09kQBXAnqZaCYG3--fcJQUAIbkQAjWc-BpxmbgwJrzURi0j8gc&usqp=CAU"
              />
            </>
          ) : (
            <>
              <Link to="/register">
                <button className="bg-yellow-500 px-5 py-2 text-black font-semibold rounded-full hover:scale-105 transition-transform">
                  Register
                </button>
              </Link>
              <Link to="/login">
                <button className="bg-yellow-500 px-5 py-2 text-black font-semibold rounded-full hover:scale-105 transition-transform">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Hamburger Menu for Small/Medium Screens */}
      <div className="lg:hidden flex justify-between items-center p-5">
        <img src="NavBar.png" alt="Navbar" className="h-12 w-12" />
        <button onClick={toggleMenu} className="z-50 focus:outline-none">
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-0.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Full-Screen Menu Overlay for Small/Medium Screens */}
      <div
        className={`fixed inset-0 bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430] transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-screen space-y-8 text-white text-lg">
          {["/", "/about-us", "/features", "/contact-us"].map((path, index) => (
            <Link
              key={index}
              to={path}
              onClick={toggleMenu}
              className="hover:text-yellow-400"
            >
              {path.replace("/", "").replace("-", " ") || "Home"}
            </Link>
          ))}
          <>
            <Link to="/register">
              <button className="bg-yellow-500 px-6 py-2 text-black font-semibold rounded-full hover:scale-105 transition-transform">
                Register
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-yellow-500 px-6 py-2 text-black font-semibold rounded-full hover:scale-105 transition-transform">
                Login
              </button>
            </Link>
          </>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
