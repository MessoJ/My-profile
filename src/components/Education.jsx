import React from 'react';
import '../styles/Education.css';

const Education = () => {
  const educations = [
    {
      degree: 'Bachelor of Economics and Statistics',
      institution: 'University of Nairobi',
      period: '2021 - 2025',
      description: 'Focusing on economic analysis and statistical methods with applications in data science and business intelligence.'
    },
    {
      degree: 'AWS Machine Learning - Nano Degree',
      institution: 'Udacity',
      period: '2025',
      description: 'Specialized training in machine learning concepts and implementation using AWS cloud services.'
    },
    {
      degree: 'MITx 6.86x: Machine Learning with Python from Linear Models to Deep Learning',
      institution: 'MITx',
      period: '2025',
      description: 'Comprehensive course covering the fundamentals of machine learning algorithms and their implementation in Python.'
    },
    {
      degree: 'AI Programming with Python - Nano Degree',
      institution: 'Udacity',
      period: '2024',
      description: 'Focused on programming fundamentals for AI applications, including Python, NumPy, pandas, and machine learning libraries.'
    },
    {
      degree: 'Business Analytics - Nano Degree',
      institution: 'Udacity',
      period: '2023',
      description: 'Covered data analysis, visualization, and business intelligence techniques for making data-driven business decisions.'
    }
  ];

  return (
    <section className="education section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {educations.map((edu, index) => (
            <div key={index} className="education-card card">
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p className="period">{edu.period}</p>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>

        <div className="leadership">
          <h2 className="section-title">Leadership Experience</h2>
          <div className="leadership-card card">
            <h3>Public Relations and Sponsorship Director</h3>
            <h4>Hult Prize</h4>
            <p className="period">2022/2023</p>
            <p>Responsible for managing public relations and securing sponsorships for the Hult Prize competition, a prestigious social entrepreneurship program.</p>
            <ul>
              <li>Developed and implemented PR strategies</li>
              <li>Secured sponsorships and partnerships</li>
              <li>Organized events and coordinated with stakeholders</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;