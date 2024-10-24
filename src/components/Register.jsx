import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="h-screen flex flex-col md:flex-row text-white overflow-visible md:overflow-hidden">
      <a
        className="absolute z-50 left-4 top-4 opacity-90 hover:opacity-100 text-white border border-white rounded-3xl px-4 py-1 transition duration-300 ease-in-out"
        href="/"
      >
        Back
      </a>
      <div className="w-full md:w-2/3 relative hidden md:block">
        <img
          src="LR-bg.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-30 md:opacity-100"
        />
      </div>

      <div className="bg-[#0F172A] w-full md:w-2/5 flex flex-col items-center p-4 md:p-2 justify-center md:relative md:top-0">
        <img src="NavBar.png" alt="navbar" className="w-20 " />
        <h1 className="font-extrabold text-3xl text-center mb-2 text-yellow-400">Register</h1>
        <p className="text-gray-400 mb-2 px-4 text-center">
          Start generating your thoughts with Solar Intelli Solutions.
        </p>

        <form className="w-full max-w-xs space-y-2">
          {/* Name */}
          <div>
            <label
              className="block text-gray-300 text-sm font-semibold mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <div className="flex items-center border border-gray-600 rounded-lg bg-gradient-to-t from-[#1C204B] to-[#10172D] py-2 px-2">
              <CgProfile className="text-white mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-white py-1 px-2 focus:outline-none placeholder-gray-400"
                type="text"
                id="name"
                placeholder="Enter your name"
                aria-label="Name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              className="block text-gray-300 text-sm font-semibold mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <div className="flex items-center border border-gray-600 rounded-lg bg-gradient-to-t from-[#1C204B] to-[#10172D] py-2 px-2">
              <MdEmail className="text-white mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-white py-1 px-2 focus:outline-none placeholder-gray-400"
                type="email"
                id="email"
                placeholder="Enter your email"
                aria-label="Email"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              className="block text-gray-300 text-sm font-semibold mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-600 rounded-lg bg-gradient-to-t from-[#1C204B] to-[#10172D] py-2 px-2">
              <RiLock2Fill className="text-white mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-white py-1 px-2 focus:outline-none placeholder-gray-400"
                type="password"
                id="password"
                placeholder="Enter your password"
                aria-label="Password"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label
              className="block text-gray-300 text-sm font-semibold mb-1"
              htmlFor="confirmation"
            >
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-600 rounded-lg bg-gradient-to-t from-[#1C204B] to-[#10172D] py-2 px-2">
              <RiLock2Fill className="text-white mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-white py-1 px-2 focus:outline-none placeholder-gray-400"
                type="password"
                id="confirmation"
                placeholder="Confirm your password"
                aria-label="Confirmation"
              />
            </div>
          </div>

          <div className="mt-4">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-600 hover:to-yellow-400 text-black font-bold py-2 px-4 rounded-full w-full shadow-lg transition-transform transform hover:scale-105 duration-300">
              Register
            </button>
          </div>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-400 hover:text-yellow-500 transition duration-200 font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Register;
