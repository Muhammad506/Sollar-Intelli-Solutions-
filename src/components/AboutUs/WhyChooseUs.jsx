import { useInView } from "react-intersection-observer";

const WhyChooseUs = () => {
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <main className="bg-gray-100">
      <div className="container mx-auto px-4 lg:px-16 py-8 flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
          <div
            ref={imageRef}
            className={`flex justify-center self-center mt-6 lg:w-2/3 ${
              imageInView ? "animate-slideInLeft" : "opacity-0"
            } transition-transform transform order-2 lg:order-1`}
          >
            <img
              className="w-full lg:w-3/4 h-auto rounded-lg shadow-xl border border-gray-300"
              src="WhyChooseUs.jpeg"
              alt="Why Choose Us"
            />
          </div>

          <div
            ref={contentRef}
            className={`flex flex-col items-center self-center lg:items-start lg:w-3/5 space-y-6 lg:space-y-8 lg:pl-10 ${
              contentInView ? "animate-slideInRight" : "opacity-0"
            } transition-transform transform order-1 lg:order-2`}
          >
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800 mb-4 text-center lg:text-left">
              Why Choose Solar Intelli Solutions?
            </h1>
            <div className="space-y-4">
              <div className="flex flex-col lg:flex-row items-start transition-transform transform hover:scale-105 space-y-4 lg:space-x-4 lg:space-y-0 bg-white p-4 rounded-lg shadow-md border border-gray-200">
                <h2 className="font-bold text-gray-800 text-lg">Expertise:</h2>
                <p className="text-gray-700">
                  Years of experience in solar technology and energy management.
                </p>
              </div>
              <div className="flex flex-col hover:scale-105 transition-transform transform lg:flex-row items-start space-y-4 lg:space-x-4 lg:space-y-0 bg-white p-4 rounded-lg shadow-md border border-gray-200">
                <h2 className="font-bold text-gray-800 text-lg">
                  Reliability:
                </h2>
                <p className="text-gray-700">
                  A robust platform designed to enhance your solar energy
                  system’s efficiency.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row hover:scale-105 transition-transform transform items-start space-y-4 lg:space-x-4 lg:space-y-0 bg-white p-4 rounded-lg shadow-md border border-gray-200">
                <h2 className="font-bold text-gray-800 text-lg">
                  Scalability:
                </h2>
                <p className="text-gray-700">
                  Suitable for both residential and commercial solar systems,
                  whether you have a few panels or a large-scale setup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhyChooseUs;
