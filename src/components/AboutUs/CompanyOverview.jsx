import { useInView } from "react-intersection-observer";

const CompanyOverview = () => {
  const { ref: leftContentRef, inView: leftContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: rightContentRef, inView: rightContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <main className="container mx-auto px-4 lg:px-16 mt-28 lg:mt-16 lg:py-16 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
        <div
          ref={leftContentRef}
          className={`lg:w-1/2 space-y-6 self-center lg:space-y-8 ${
            leftContentInView ? "animate-slideInLeft" : "opacity-0"
          }`}
        >
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800">
            Who We Are
          </h1>
          <p className="text-lg max-w-full lg:max-w-2xl text-gray-700">
            We are a team of passionate engineers, energy experts, and technology enthusiasts dedicated to creating innovative solutions for a greener tomorrow. Our platform offers advanced tools for monitoring, controlling, and optimizing solar panel performance, making renewable energy more accessible and manageable for everyone.
          </p>
        </div>
        <div
          ref={rightContentRef}
          className={`lg:w-1/2 flex justify-center self-center ${
            rightContentInView ? "animate-slideInRight" : "opacity-0"
          }`}
        >
          <img
            className="w-full lg:w-2/3 h-auto rounded-lg shadow-lg"
            src="CompanyOverview.jpeg"
            alt="Who We Are"
          />
        </div>
      </div>
    </main>
  );
};

export default CompanyOverview;
