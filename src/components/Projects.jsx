import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Macro Economic Engine',
      description: 'An automated platform for economic data analysis that detects anomalies in economic indicators and provides causal inference models for policy analysis.',
      technologies: ['Python', 'Machine Learning', 'Time Series Analysis', 'Cloud Computing','Economic Modeling'],
      image: 'macro-econ.jpg',
      github: 'https://github.com/MessoJ/macro_econ_engine',
    },
    {
      title: 'Inflation Trend Analysis',
      description: 'Statistical analysis of inflation trends across different economic sectors, with forecasting models and policy impact assessment.',
      technologies: ['R', 'Statistical Modeling', 'Economic Forecasting'],
      image: 'inflation.jpg',
      github: 'https://github.com/MessoJ/inflation-trend-analysis',
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Applied statistical modeling and machine learning techniques to predict customer churn. Demonstrates ability to translate statistical insights into actionable business strategies - skills transferable to economic analysis.',
      technologies: ['Python', 'Machine Learning', 'Statistical Analysis', 'Predictive Modeling'],
      image: 'churn-placeholder.jpg',
      github: 'https://github.com/MessoJ/Customer-Churn-Prediction',
      live: null
    },
    {
      title: 'Call Transcript Analyzer',
      description: 'NLP tool for analyzing call transcripts to extract economic insights and sentiment trends. Showcases ability to process unstructured data for quantitative analysis.',
      technologies: ['Python', 'NLP', 'Sentiment Analysis', 'Data Extraction'],
      image: 'nlp-placeholder.jpg',
      github: 'https://github.com/MessoJ/call-transcript-analyzer',
      live: null
    },
  ];

  return (
    <section className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card card">
              <div className="project-image">
                <img src={`/images/${project.image}`} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;