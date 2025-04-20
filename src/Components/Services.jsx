import React from "react";
import { FaAddressCard } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <div className="py-12 px-4 lg:mr-8 sm:px-6 md:px-16 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left">
            My <span className="text-yellow-500">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mb-8 text-center md:text-left">
            Here are some of the key services I offer to help you build powerful, user-friendly, and visually appealing digital experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-700 p-6 rounded-lg flex items-start space-x-4 hover:border-yellow-500 transition-all"
              >
                <div className="text-yellow-500 text-3xl">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="w-10/12 mx-auto opacity-10" />
    </>
  );
};

const services = [
  {
    icon: <FaAddressCard />,
    title: "Graphics Designing",
    description:
      "Crafting visually appealing designs for branding, marketing, and social media that align with your brand identity.",
  },
  {
    icon: <FaAddressCard />,
    title: "UI/UX Designing",
    description:
      "Designing intuitive and engaging user interfaces that enhance user satisfaction and usability across devices.",
  },
  {
    icon: <FaAddressCard />,
    title: "Web Development",
    description:
      "Building responsive, modern websites and web apps using the latest technologies for seamless user experience.",
  },
  {
    icon: <FaAddressCard />,
    title: "System Designs",
    description:
      "Planning scalable and maintainable architecture for software systems tailored to your project's needs.",
  },
];

export default Services;
