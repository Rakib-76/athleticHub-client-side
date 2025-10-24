import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from 'lottie-react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import contactAnimation from '../../assets/Contact Us.json';

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_wd97pr7',   
      'template_2cboo3d',  
      form.current,
      'Psn6q2BKvm8M_0pAh' 
    ).then(
      (result) => {
        alert('Message sent successfully!');
        form.current.reset(); // form reset
      },
      (error) => {
        alert('Failed to send message. Try again.');
        console.log(error.text);
      }
    );
  };

  return (
    <section className="bg-[#faf8fc] text-white py-36 px-4" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 mt-10 items-center">

        {/* lottie Section */}
        <div className="flex-1 flex justify-center items-center p-4">
          <Lottie
            animationData={contactAnimation}
            loop={true}
            className="w-full max-w-sm lg:max-w-md h-auto" // Animation size control
          />
        </div>

        {/* Form section */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-8 text-black">Send Me a Message</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name" // Must match EmailJS template variable
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="user_email" // Must match EmailJS template variable
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message" // Must match EmailJS template variable
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="btn btn-primary hover:bg-blue-600 transition-colors duration-300 px-6 py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;