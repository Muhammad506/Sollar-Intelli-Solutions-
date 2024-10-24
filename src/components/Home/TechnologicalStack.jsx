import Marquee from "react-fast-marquee";

const TechnologicalStack = () => {
  return (
    <main className="bg-gradient-to-r from-[#ffb800] via-[#ff9800] to-[#ffb800] md:min-h-screen h-full flex justify-center items-center py-16">
      <div className="flex flex-col gap-8 md:gap-12 justify-center items-center text-center w-full px-4">
        <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl text-white drop-shadow-lg">
          Technological Stack
        </h1>
        <p className="text-lg md:text-xl max-w-3xl text-black mb-4 drop-shadow-md">
          Our solution leverages the latest technologies to deliver a robust and
          scalable platform.
        </p>

        <div className="relative w-full flex flex-col items-center">
          {/* Top Marquee */}
          <Marquee
            direction="right"
            speed={20}
            autoFill={true}
            className="mb-4"
          >
            <img
              src="https://solar-intelli-solutions.odoo.com/web/image/787-cad08a8e/physics_753244.webp"
              className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
              alt="React"
            />
            <img
              src="Tailwind.png"
              className="w-20 h-20 p-1 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
              alt="Tailwind"
            />
            <img
              src="https://solar-intelli-solutions.odoo.com/web/image/781-f91a4d26/WhatsApp_Image_2024-08-16_at_7.41.41_PM-removebg-preview%20%281%29.webp"
              className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
              alt="Mongo"
            />
            <img
              src="https://solar-intelli-solutions.odoo.com/web/image/789-6cc7c2c7/WhatsApp_Image_2024-08-16_at_7.svg"
              className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
              alt="Express"
            />
            <img
              src="https://solar-intelli-solutions.odoo.com/web/image/800-ccb8542b/image-removebg-preview%20%281%29.webp"
              className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
              alt="Node"
            />
            <img
              src="https://solar-intelli-solutions.odoo.com/web/image/784-4b6ab123/WhatsApp_Image_2024-08-16_at_7.42.25_PM-removebg-preview.webp"
              className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
              alt="Git"
            />
          </Marquee>

          {/* Overlay Image in the Center */}
          <div className="absolute inset-0 flex justify-center items-center z-10">
            <div className="border border-solid rounded-full bg-[#021430] border-white shadow-lg">
              <img src="NavBar.png" className="w-28 h-28 p-4" alt="Overlay" />
            </div>
          </div>

          {/* Bottom Marquee */}
          <Marquee direction="left" speed={20} autoFill={true} className="mt-4">
            <img
              src="https://solar-intelli-solutions.odoo.com/web/image/784-4b6ab123/WhatsApp_Image_2024-08-16_at_7.42.25_PM-removebg-preview.webp"
              className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
              alt="Git"
            />
            <img
              src="Tailwind.png"
              className="w-20 h-20 p-1 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
              alt="Tailwind"
            />
            <img
              src="https://solar-intelli-solutions.odoo.com/web/image/781-f91a4d26/WhatsApp_Image_2024-08-16_at_7.41.41_PM-removebg-preview%20%281%29.webp"
              className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
              alt="Mongo"
            />
            <img
              src="https://solar-intelli-solutions.odoo.com/web/image/789-6cc7c2c7/WhatsApp_Image_2024-08-16_at_7.svg"
              className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
              alt="Express"
            />
            <img
              src="https://solar-intelli-solutions.odoo.com/web/image/800-ccb8542b/image-removebg-preview%20%281%29.webp"
              className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
              alt="Node"
            />
            <img
              src="https://solar-intelli-solutions.odoo.com/web/image/787-cad08a8e/physics_753244.webp"
              className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
              alt="React"
            />
          </Marquee>
        </div>
      </div>
    </main>
  );
};

export default TechnologicalStack;
