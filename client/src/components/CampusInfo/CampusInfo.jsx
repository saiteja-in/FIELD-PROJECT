// src/components/CampusInfo.js
import React from 'react';
import { motion } from 'framer-motion';

const CampusInfo = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row justify-between items-start p-6 bg-gray-100 rounded-lg shadow-lg m-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="md:mr-8 mb-4 md:mb-0 mt-4">
        <h2 className="text-2xl font-bold text-red-800">Campus</h2>
        <address className="not-italic mt-2">
          Vignana Jyothi Nagar, Pragathi Nagar,<br />
          Nizampet (S.O), Hyderabad,<br />
          Telangana, India - 500 090
        </address>
        <p className="mt-2">
          <span role="img" aria-label="phone">📞</span> 91-040-23042758 /59/60<br />
          <span role="img" aria-label="fax">📠</span> 91-040-23042761<br />
          <span role="img" aria-label="email">📧</span> <a href="mailto:postbox@vnrvjiet.ac.in" className="text-red-800 underline">postbox@vnrvjiet.ac.in</a>
        </p>
      </div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <iframe
          title="campus-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.678688187215!2d78.35428307430647!3d17.498470403263687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e6b5e6b82b%3A0x8a09abdb43df8fdb!2sVallurupalli%20Nageswara%20Rao%20Vignana%20Jyothi%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1596890709460!5m2!1sen!2sin"
          className="w-full h-64 md:h-96 rounded-lg"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </motion.div>
    </motion.div>
  );
};

export default CampusInfo;
