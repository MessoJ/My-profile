import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';
import ResumeDownloadButton from './ResumeDownloadButton';
// Remove unused import
// import { generateResumePDF } from './ResumePDF';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Francis Meso</h1>
        <h2>Software Developer & Business Analyst</h2>
        <p>Building innovative solutions with Python, React, and data analytics</p>
        <div className="home-btns">
          <Link to="/projects" className="btn">
            View My Work <FontAwesomeIcon icon={faArrowRight} />
          </Link>
          <ResumeDownloadButton className="btn btn-outline">
            <FontAwesomeIcon icon={faDownload} /> Download Resume
          </ResumeDownloadButton>
        </div>
      </div>
    </div>
  );
};

export default Home;