import React,{ useRef } from 'react';
import { FaThLarge } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactSection = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_coptoqc ',     
      'template_tlz3jdp',    
      form.current,
      'hufjCnGN79n4ii1uc'      
    ).then(
      (result) => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Something went wrong. Try again.');
        console.error(error.text);
      }
    );
  };

  return (
    <div className="text-white py-16 px-4 sm:px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Contact <span className="text-yellow-500">Me</span>
            </h2>
            <p className="text-yellow-500 mt-4 text-sm md:text-base">
              A creative and detail-oriented developer with a passion for crafting seamless user experiences and impactful visual designs.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <FaThLarge className="text-yellow-500 text-3xl mt-1" />
            <div>
              <h4 className="text-lg font-semibold">Address</h4>
              <p className="text-yellow-500">Bamenda, Cameroon</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <form ref={form} onSubmit={sendEmail} className="md:w-1/2 space-y-6">
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            required
            className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded text-white placeholder-yellow-500"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded text-white placeholder-yellow-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            required
            className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded text-white placeholder-yellow-500"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded transition duration-300"
          >
            Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
