import { useInView } from "react-intersection-observer";

const SocietalImpact = () => {
  // Using Intersection Observer for the entire container
  const { ref: containerRef, inView: containerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the container is visible
  });

  return (
    <main
      ref={containerRef}
      className={`flex flex-col items-start text-left px-4 md:px-10 lg:px-20 py-8 md:py-12 lg:py-16 max-w-6xl mx-auto transition-opacity duration-1000 ${
        containerInView ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="font-bold text-3xl md:text-4xl xl:text-5xl mb-6 md:mb-8 lg:mb-10 text-gray-800">
        Societal Impact
      </h1>
      <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 lg:mb-10 text-gray-700">
        Solar Intelli Solutions is designed to enhance the efficiency and
        management of solar energy systems, contributing to a cleaner and
        greener environment. Our platform allows users to monitor solar panel
        performance, track energy usage, and reduce energy wastage. By enabling
        precise control over individual solar plates, we promote sustainable
        energy practices that benefit both users and the environment.
      </p>
    </main>
  );
};

export default SocietalImpact;
