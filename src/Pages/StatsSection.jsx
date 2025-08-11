import React from "react";
import { FaThumbsUp, FaTrophy, FaUserAlt, FaMedal } from "react-icons/fa";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const StatCard = ({ icon, number, suffix, label }) => (
  <motion.div
    className="p-6 rounded-xl shadow-lg bg-white flex flex-col items-center gap-3 cursor-pointer"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    whileHover={{ scale: 1.1 }}
  >
    <div className="text-[#f55a36] text-5xl">{icon}</div>
    <div className="text-4xl font-extrabold text-[#2b2c58] flex items-baseline gap-1">
      <CountUp start={0} end={number} duration={2.5} separator="," />
      {suffix && <span className="text-2xl">{suffix}</span>}
    </div>
    <div className="text-gray-400">{label}</div>
  </motion.div>
);

const StatsSection = () => {
  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-4xl font-medium mb-6">
        Our Athletics Arena In Just Numbers
      </h2>
      <p className="text-gray-600 mb-10 max-w-5xl mx-auto">
        Athletics Hub is a sports community platform where I display trainer
        contact numbers and the total count of members along with relevant
        information. Through this project, users can easily view details of
        active trainers and members.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <StatCard
          icon={<FaThumbsUp />}
          number={5000}
          suffix="K+"
          label="Members Active"
        />
        <StatCard icon={<FaMedal />} number={20} suffix="+" label="Games Cover" />
        <StatCard
          icon={<FaUserAlt />}
          number={120}
          suffix="+"
          label="Professional Coach"
        />
        <StatCard
          icon={<FaTrophy />}
          number={13}
          suffix="+"
          label="Years of Experience"
        />
      </div>
    </section>
  );
};

export default StatsSection;
