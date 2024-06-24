import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import video from "../../loginassets/video123.mp4"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="relative h-screen">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold">Empowering Minds, Building Futures</h1>
            <p className="mt-4 text-lg">Admissions • Academics • Departments</p>
          </motion.div>
        </div>
      </header>

      <section className="py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Welcome to VNRVJIET</h2>
        </div>
        <div className="flex flex-wrap justify-center">
          <motion.div
            className="w-full md:w-1/2 lg:w-1/3 p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-700">The Philosophy of Vignana Jyothi unravels education as a process of "Presencing" that provides, both individually and collectively, to one's deepest capacity to sense and experience the knowledge and activities to shape the future...</p>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 lg:w-1/3 p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-700">Today, with this philosophy, Vignana Jyothi has created an edifice that is strong in its foundations, which can only rise higher and higher. Quality and integrity is the essence for achieving excellence at Vignana Jyothi Institutions...</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
