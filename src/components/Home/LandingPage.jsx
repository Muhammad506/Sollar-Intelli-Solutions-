const LandingPage = () => {
  return (
    <main className="relative text-white overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          className="w-full h-full object-cover filter brightness-50"
          src="LandingPage.jpg"
          alt="LandingPage"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 animate-slideInLeft flex flex-col items-start justify-center text-left space-y-6 sm:space-y-8 py-24 sm:py-40 px-3 sm:px-16 max-w-screen-lg mx-auto">
        <h1 className="text-3xl text-nowrap md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
          Solar Intelli Solutions
        </h1>
        <p className="text-sm sm:text-lg max-w-lg lg:max-w-2xl drop-shadow-md">
          Our mission is to provide an outstanding customer experience through a
          combination of comprehensive documentation and guides, an active and
          supportive community, and 24/7 dedicated support. We offer detailed
          resources to help you navigate our platform efficiently, connect with
          a vibrant community for collaboration and insights, and ensure
          round-the-clock assistance to address any questions or issues you may
          have. This holistic approach is designed to make your experience with
          us seamless, enjoyable, and productive.
        </p>
        <div className="w-full sm:w-auto">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-800 rounded-3xl md:text-base px-6 py-3 md:font-bold font-semibold text-sm transition-all duration-300 hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 shadow-lg hover:shadow-xl ">
            Get In Touch With Us
          </button>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
