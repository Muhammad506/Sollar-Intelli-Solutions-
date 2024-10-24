
import { useInView } from "react-intersection-observer";

const Cta = () => {
  // Set up Intersection Observer hooks for the left and right content
  const { ref: leftContentRef, inView: leftContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  const { ref: rightContentRef, inView: rightContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  return (
    <main className="bg-[#F7F7F7]">
      <div className="container mx-auto px-4 lg:px-16 mt-8 lg:mt-16 lg:py-16 flex flex-col-reverse lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0">
        {/* Left Content (Image) */}
        <div
          ref={leftContentRef}
          className={`lg:w-1/2 my-4 lg:my-0 ${
            leftContentInView ? "animate-slideInLeft" : "opacity-0"
          }`}
        >
          <img
            className="w-full h-auto "
            src="CTA.jpg"
            alt="CTA"
          />
        </div>

        {/* Right Content (Text & Button) */}
        <div
          ref={rightContentRef}
          className={`lg:w-1/2 space-y-6 lg:space-y-8 flex flex-col self-center lg:pl-8 ${
            rightContentInView ? "animate-slideInRight" : "opacity-0"
          }`}
        >
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-800">
            Power that Does not Cost the Earth
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-full lg:max-w-2xl text-gray-700">
            If you have any questions or need expert advice about our services,
            don’t hesitate to reach out. Give us a call at 07745593882 to speak
            directly with our team and receive personalized assistance.
            Alternatively, if you would prefer a callback at a convenient time,
            simply hit the button below and we’ll be in touch shortly!
          </p>
          <div className="flex justify-start">
            <button className="relative bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430] text-white transition duration-300 ease-in-out rounded-full text-base px-8 py-4 font-semibold shadow-md transform hover:scale-105 overflow-hidden">
              <span className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-30 transition duration-300"></span>
              <span className="relative">Contact Us Today</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cta;
