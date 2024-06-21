import React from 'react';
import './Dashboard.css'; // Import the CSS file for styling
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import adminLoginIcon from '../../assets/admin_login.png';
import appraisalIcon from '../../assets/appraisal.png';
import collaborationIcon from '../../assets/collaboration.png';
import bookChapterIcon from '../../assets/book_chapter.png';
import nbaIcon from '../../assets/nba.png';
import publicationIcon from '../../assets/publication.png';
import patentIcon from '../../assets/patent.png';

const Dashboard = () => {
  const navigate = useNavigate();

  const forms = [
    { icon: adminLoginIcon, label: "admin login form", path: "/admin-login" },
    { icon: appraisalIcon, label: "appraisal form", path: "/appraisal" },
    { icon: collaborationIcon, label: "collaboration form", path: "/collaboration" },
    { icon: bookChapterIcon, label: "book chapter form", path: "/book-chapter" },
    { icon: patentIcon, label: "patent form", path: "/patent" },
    { icon: nbaIcon, label: "NBA form", path: "/nba" },
    { icon: publicationIcon, label: "publication form", path: "/publication" },
  ];

  const firstRowForms = forms.slice(0, 4);
  const secondRowForms = forms.slice(4);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="forms-border">
        <div className="forms-grid">
          <div className="forms-row">
            {firstRowForms.map((form, index) => (
              <motion.div
                key={index}
                className="form-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate(form.path)}
              >
                <img src={form.icon} alt={form.label} className="form-icon" />
                <p className="form-label">{form.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="forms-row">
            {secondRowForms.map((form, index) => (
              <motion.div
                key={index}
                className="form-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate(form.path)}
              >
                <img src={form.icon} alt={form.label} className="form-icon" />
                <p className="form-label">{form.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
