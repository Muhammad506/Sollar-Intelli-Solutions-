import { useInView } from "react-intersection-observer";

const OurTeam = () => {
  const { ref: sectionRefs, inView: sectionInViews } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const teamData = [
    {
      name: "M. Umer Saleem",
      role: "Founder and CEO ",
      description:
        "Umer leads solar innovation, ensuring top-tier service and advancing sustainable energy.",
      image:
        "https://solar-intelli-solutions.odoo.com/web/image/934-d39bd088/WhatsApp%20Image%202024-08-19%20at%205.12.08%20PM.webp",
      animation: "animate-slideInLeft",
    },
    {
      name: "Syed Ubaid",
      role: "Website Designer",
      description:
        "Ubaid Ensures the websitereflects the company's vision and delivers an exceptional user experience ",
      image: "Ubaid Pic",
      animation: "animate-slideInRight",
    },
    {
      name: "Anas Pakha",
      role: "Marketing Manager",
      description:
        "Anas leads our marketing efforts, ensuring that our innovative solar solutions reach the right audience.",
      image: "Anas Pic", // Replace with real image
      animation: "animate-slideInLeft",
    },
  ];

  return (
    <main className="pt-24 pb-12 ">
      <div className="text-center px-6 md:px-12 lg:px-24">
        <h1 className="text-3xl md:text-5xl font-bold  text-gray-800 mb-12">
          Meet Our Team
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {teamData.map((member, index) => (
            <div
              key={index}
              ref={(el) => sectionRefs(el)}
              className={`p-8 bg-[#F3F4F6] rounded-xl shadow-inner  hover:shadow-2xl transform hover:scale-105 transition duration-300 ${
                sectionInViews ? member.animation : "opacity-0"
              }`}
            >
              <div className="flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-28 h-28 object-cover mb-4 border-4 border-[#0f1c47] shadow-md"
                />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h2>
                <p className="text-blue-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-center">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default OurTeam;
