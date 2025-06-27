import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'Python for Data Analysis', level: 90 },
    { name: 'R Statistical Computing', level: 85 },
    { name: 'Econometric Modeling', level: 80 },
    { name: 'Time Series Analysis', level: 85 },
    { name: 'Statistical Inference', level: 85 },
    { name: 'Data Visualization', level: 90 },
    { name: 'Machine Learning', level: 80 },
    { name: 'Economic Research', level: 75 },
    { name: 'Python', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'SQL', level: 80 },
    { name: 'AWS', level: 70 },
  ];

  const softSkills = [
    'Research Methodology',
    'Analytical Thinking',
    'Economic Writing',
    'Statistical Reporting',
    'Policy Analysis',
    'Team Collaboration',
    'Project Management',
    'Data-Driven Storytelling'
  ];

  return (
    <section className="skills section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-container">
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            <div className="skill-bars">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <p>{skill.name}</p>
                    <p>{skill.level}%</p>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="soft-skills">
            <h3>Soft Skills</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;