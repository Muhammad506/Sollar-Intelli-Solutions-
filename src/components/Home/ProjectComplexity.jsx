
import { useInView } from "react-intersection-observer";

const ProjectComplexity = () => {
  // Using Intersection Observer for both text and image
  const { ref: leftContentRef, inView: leftContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  const { ref: rightContentRef, inView: rightContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  return (
    <main className="container mx-auto px-4 lg:px-16 mt-8 lg:mt-16 lg:py-16 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0">
      {/* Left Content (Text) */}
      <div
        ref={leftContentRef}
        className={`lg:w-1/2 space-y-6 lg:space-y-8 lg:pr-10 ${
          leftContentInView ? "animate-slideInLeft" : "opacity-0"
        }`}
      >
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-800">
          Project Complexity
        </h1>
        <p className="text-base sm:text-lg lg:text-xl max-w-full lg:max-w-2xl text-gray-700">
          Solar Intelli Solutions is a web-based platform designed for
          monitoring and managing solar panels. It offers real-time data and
          insights that help users track energy production, usage, and wastage.
          The platform provides a seamless interface to view active panels and
          control their status remotely, making solar energy management more
          efficient and user-friendly.
        </p>
      </div>

      {/* Right Content (Image) */}
      <div
        ref={rightContentRef}
        className={`lg:w-1/2 ${
          rightContentInView ? "animate-slideInRight" : "opacity-0"
        }`}
      >
        <img
          className="w-full h-auto mb-4 lg:mb-0 rounded-lg shadow-lg"
          src="ProjectComplexity.jpeg"
          alt="Project Complexity"
        />
      </div>
    </main>
  );
};

export default ProjectComplexity;
