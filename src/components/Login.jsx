import { MdEmail } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="h-screen flex flex-col md:flex-row text-white overflow-visible md:overflow-hidden">
      <a
        className="absolute z-50 left-4 top-4 opacity-90 hover:opacity-100 text-white border border-white rounded-3xl px-4 py-1 transition duration-300 ease-in-out bg-black bg-opacity-50 shadow-lg"
        href="/"
      >
        Back
      </a>
      <div className="w-full md:w-2/3 relative hidden md:block">
        <img
          src="LR-bg.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-50 md:opacity-100"
        />
      </div>

      <div className="bg-[#0F172A] w-full md:w-2/5 flex flex-col items-center p-6 md:p-6 justify-center md:relative md:top-0 shadow-xl ">
        <img src="NavBar.png" alt="navbar" className="w-24 mb-4" />
        <h1 className="font-extrabold text-4xl text-center mb-3 text-yellow-400">Login</h1>
        <p className="text-gray-300 mb-3 px-4 text-center text-lg">
          Start generating your thoughts with Solar Intelli Solutions.
        </p>
        <form className="w-full max-w-xs space-y-4">
          {/* Email */}
          <div>
            <label
              className="block text-gray-300 text-sm font-semibold mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <div className="flex items-center border border-gray-600 rounded-lg bg-gradient-to-t from-[#1C204B] to-[#10172D] py-2 px-3 shadow-md">
              <MdEmail className="text-yellow-400 mr-2" />
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
            <div className="flex items-center border border-gray-600 rounded-lg bg-gradient-to-t from-[#1C204B] to-[#10172D] py-2 px-3 shadow-md">
              <RiLock2Fill className="text-yellow-400 mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-white py-1 px-2 focus:outline-none placeholder-gray-400"
                type="password"
                id="password"
                placeholder="Enter your password"
                aria-label="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <a
              href="#"
              className="inline-block font-bold text-sm text-yellow-400 hover:text-yellow-500 transition duration-200"
            >
              Forgot password?
            </a>
          </div>
          <div className="mt-4">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-600 hover:to-yellow-400 text-black font-bold py-2 px-4 rounded-full w-full shadow-lg transition-transform transform hover:scale-105 duration-300">
              Login
            </button>
          </div>
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/register" className=" font-semibold text-yellow-400 hover:text-yellow-500 transition duration-200">
              Register
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
