import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AdminLoginForm from './components/AdminLoginForm/AdminLoginForm'; // Assuming you have this component
import AppraisalForm from './components/AppraisalForm/AppraisalForm'; // Assuming you have this component
import CollaborationForm from './components/CollaborationForm/CollaborationForm'; // Assuming you have this component
import BookChapterForm from './components/BookChapterForm/BookChapterForm'; // Assuming you have this component
import NbaForm from './components/NbaForm/NbaForm'; // Assuming you have this component
import PublicationForm from './components/PublicationForm/PublicationForm'; // Assuming you have this component
import PatentForm from './components/PatentForm/PatentForm'; // Assuming you have this component
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import CampusInfo from './components/CampusInfo/CampusInfo';

const App = () => {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/contact" element={<CampusInfo />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin-login" element={<AdminLoginForm />} />
          <Route path="/appraisal" element={<AppraisalForm />} />
          <Route path="/collaboration" element={<CollaborationForm />} />
          <Route path="/book-chapter" element={<BookChapterForm />} />
          <Route path="/patent" element={<PatentForm />} />
          <Route path="/nba" element={<NbaForm />} />
          <Route path="/publication" element={<PublicationForm />} />
          <Route path="/patent" element={<PatentForm />} />
          {/* Add other routes here as needed */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
