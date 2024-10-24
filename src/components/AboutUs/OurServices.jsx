import { useInView } from "react-intersection-observer";

const OurServices = () => {
  const { ref: cardRefs, inView: cardInViews } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardData = [
    {
      title: "Monitor Real-Time Performance",
      description:
        "Gain insights into energy production, panel status, and system health.",
      animation: "animate-slideInLeft  ",
    },
    {
      title: "Track Historical Data",
      description:
        "Access detailed reports to analyze energy trends and make informed decisions.",
      animation: "animate-slideInRight",
    },
    {
      title: "Optimize Energy Usage",
      description:
        "Control and adjust panel settings to reduce wastage and enhance efficiency.",
      animation: "animate-slideInLeft",
    },
    {
      title: "Receive Alerts",
      description:
        "Get instant notifications on performance issues and maintenance needs.",
      animation: "animate-slideInRight",
    },
  ];

  return (
    <main className="flex flex-col items-center pt-24 pb-12  bg-gray-100">
      <div className="text-center px-6 md:px-12 lg:px-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl animate-fadeIn font-bold text-gray-800 mb-8">
          What We Do
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              ref={(el) => cardRefs(el)}
              className={`bg-white p-6 rounded-lg shadow-lg border  hover:scale-105 border-gray-300 flex flex-col items-start text-left transition-transform transform ${
                cardInViews ? card.animation : "opacity-0"
              }`}
            >
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                {card.title}
              </h2>
              <p className="text-gray-600 ">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default OurServices;
