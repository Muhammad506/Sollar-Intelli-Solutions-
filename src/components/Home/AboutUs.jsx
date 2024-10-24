import { useInView } from "react-intersection-observer";

const AboutUS = () => {
  // Use Intersection Observer to detect if the component is in view
  const { ref: leftContentRef, inView: leftContentInView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  const { ref: rightContentRef, inView: rightContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <main className="container flex flex-col items-center px-4 mx-auto mt-8 space-y-8 lg:px-16 lg:mt-16 lg:py-16 lg:flex-row lg:items-start lg:space-y-0">
      <div
        ref={leftContentRef}
        className={`lg:w-1/2 space-y-6 lg:space-y-8 lg:pr-10 ${
          leftContentInView ? "animate-slideInLeft" : "opacity-0"
        }`}
      >
        <h1 className="text-3xl font-bold text-gray-800 md:text-4xl xl:text-5xl">
          About Us
        </h1>
        <p className="max-w-full text-base text-gray-700 sm:text-lg lg:text-xl lg:max-w-2xl">
          At Solar Intelli Solutions, we specialize in innovative solar energy
          management systems designed to optimize energy efficiency and usage.
          Our platform provides a user-friendly interface to monitor and control
          solar panels in real-time, ensuring efficient and sustainable energy
          practices. With cutting-edge technologies and AI-driven insights, we
          are revolutionizing how solar energy is managed.
        </p>
        <div className="flex justify-start">
          <button className="relative bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430] text-white transition duration-300 ease-in-out rounded-full text-base px-8 py-4 font-semibold  transform hover:scale-105 overflow-hidden  focus:outline-none">
            <span className="absolute inset-0 transition duration-300 bg-blue-800 opacity-0 group-hover:opacity-30"></span>
            <span className="relative">Learn About Solar Energy</span>
          </button>
        </div>
      </div>
      <div
        ref={rightContentRef}
        className={`lg:w-1/2 ${
          rightContentInView ? "animate-slideInRight" : "opacity-0"
        }`}
      >
        <img
          className="w-full h-auto rounded-lg shadow-lg"
          src="AboutUs.jpg"
          alt="About Us"
        />
      </div>
    </main>
  );
};

export default AboutUS;
