import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import ResumeDownloadButton from './ResumeDownloadButton';
// Remove unused import
// import { generateResumePDF } from './ResumePDF';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img src="/images/profile.jpg" alt="Francis Meso" />
          </div>
          
          <div className="about-text">
            <h3>Francis Meso</h3>
            <h4>Software Developer & Business Analyst</h4>
            
            <p>
            I am an economist and statistician specializing in data-driven economic analysis and statistical modeling. With expertise in both theoretical economics and practical data science, I build tools that transform complex economic data into actionable insights for policy and decision-making.
            </p>
            
            <p>
            My background combines formal education in Economics and Statistics, specialized training in machine learning and statistical computing, with hands-on experience in developing economic analysis tools, statistical models, and data visualization solutions. I am particularly interested in public finance, monetary policy, and economic forecasting - areas directly relevant to the Treasury's mandate.
            </p>
            
            <p>
              My experience includes freelance software development, business analysis, and a role as an intern at Kenya National Police DT Sacco. I am also passionate about leadership, having served as the Public Relations and Sponsorship Director for Hult Prize UoN.
            </p>
            
            <div className="about-details">
              <div className="detail-row">
                <strong>Full Name:</strong>
                <span>Francis Meso</span>
              </div>
              <div className="detail-row">
                <strong>Email:</strong>
                <span>francismeso@outlook.com</span>
              </div>
              <div className="detail-row">
                <strong>Phone:</strong>
                <span>011 354 0315</span>
              </div>
              <div className="detail-row">
                <strong>Location:</strong>
                <span>Nairobi, Kenya</span>
              </div>
              <div className="detail-row">
                <strong>Languages:</strong>
                <span>English, Swahili</span>
              </div>
            </div>
            
            <div className="about-buttons">
              <ResumeDownloadButton className="btn">
                <FontAwesomeIcon icon={faDownload} /> Download CV
              </ResumeDownloadButton>
              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;