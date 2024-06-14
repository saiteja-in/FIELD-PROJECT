import React from 'react';
import './Dashboard.css'; // Import the CSS file for styling
import { motion } from 'framer-motion';

import adminLoginIcon from '../../assets/admin_login.png';
import appraisalIcon from '../../assets/appraisal.png';
import collaborationIcon from '../../assets/collaboration.png';
import bookChapterIcon from '../../assets/book_chapter.png';
import nbaIcon from '../../assets/nba.png';
import publicationIcon from '../../assets/publication.png';
import patentIcon from '../../assets/patent.png';

const Dashboard = () => {
  const forms = [
    { icon: adminLoginIcon, label: "admin login form" },
    { icon: appraisalIcon, label: "appraisal form" },
    { icon: collaborationIcon, label: "collaboration form" },
    { icon: bookChapterIcon, label: "book chapter form" },
    { icon: patentIcon, label: "patent form" },
    { icon: nbaIcon, label: "NBA form" },
    { icon: publicationIcon, label: "publication form" },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="forms-grid">
        {forms.map((form, index) => (
          <motion.div
            key={index}
            className="form-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <img src={form.icon} alt={form.label} className="form-icon" />
            <p className="form-label">{form.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
