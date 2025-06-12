import React from 'react';
import banner1 from '../../assets/banner-1.jpg'
import banner2 from '../../assets/banner-2.jpg'
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className='bg-[#f2f6fd]'>
            <div className="hero min-h-screen lg:ml-20 -mt-20 max-w-7xl mx-auto ">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <div className='flex-1'>
                    <motion.img
                        animate={{ y: [0, 50,0] }} 
                        transition={{
                            duration: 5,
                            repeat: Infinity,           
                            repeatType: "loop",        
                            ease: "linear" ,}}
                        src={ banner1 }
                        className="max-w-sm rounded-t-[50px] rounded-r-[50px] border-l-8 border-b-8 border-blue-800 shadow-2xl"
                            />

                            <motion.img 
                            animate={{x:[0,50,0]}}
                            transition={{
                                duration:5,
                                repeat:Infinity,
                                ease:"linear",
                                repeatType: "loop"
                            }}
                             className="lg:max-w-sm rounded-t-[50px] rounded-r-[50px] border-l-8 border-b-8 border-blue-800 shadow-2xl lg:ml-20"
                            src={banner2} alt="team image" />
                </div>
                <div className='flex-1 '>
                    <motion.h1

                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}

                        className="text-5xl font-bold">The <motion.span
                            // initial={{ y: -100, opacity: 0 }}
                            // animate={{ y: 100, opacity: 1 }}
                            animate={
                                {
                                    color:["#ff5733", "#33ff33","#8a33ff"],
                                    transition:{duration:4,repeat:Infinity}
                             }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
                            className='text-[#3c65f5]'>
                            Easiest Way </motion.span> to Get Your New Job!</motion.h1>
                    <p className="py-6">
                        Each month, more than 3 million job seekers turn to
                        website in their search for work, making over 140,000
                        applications every single day
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;