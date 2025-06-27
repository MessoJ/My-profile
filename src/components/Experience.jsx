import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer (Economic Tools)',
      company: 'Freelance',
      period: '2024 - Present',
      description: 'Developing economic analysis tools and statistical models for clients in finance and government sectors.',
      achievements: [
        'Created automated data pipelines for economic indicators tracking',
        'Developed statistical models for forecasting market trends',
        'Built interactive dashboards for economic data visualization'
      ]
    },
    {
      title: 'Business Analyst (Economic Research)',
      company: 'Freelance',
      period: '2023 - 2024',
      description: 'Conducted economic research and statistical analysis to support business decision-making.',
      achievements: [
        'Performed time series analysis on economic indicators',
        'Created statistical reports on market trends and consumer behavior',
        'Developed econometric models to identify causal relationships'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Freelance',
      period: '2024 - Present',
      description: 'Developing custom web applications and software solutions for clients. Specializing in React and Python development.',
      achievements: [
        'Successfully delivered projects on time and within budget',
        'Implemented responsive web designs and interactive user interfaces',
        'Collaborated with clients to understand requirements and provide technical solutions'
      ]
    },
    {
      title: 'Business Analyst',
      company: 'Freelance',
      period: '2023 - 2024',
      description: 'Analyzed business processes and systems to improve efficiency and effectiveness. Developed data-driven solutions to business problems.',
      achievements: [
        'Conducted comprehensive business process analyses',
        'Created detailed reports and recommendations for process improvements',
        'Implemented data analysis solutions using Python and BI tools'
      ]
    },
    {
      title: 'Intern',
      company: 'Kenya National Police DT Sacco',
      period: '2022 - 2023',
      description: 'Assisted in financial operations and account management. Gained hands-on experience in financial systems and procedures.',
      achievements: [
        'Processed financial transactions and maintained accounting records',
        'Assisted with account reconciliations and financial reporting',
        'Contributed to improving accounting processes through automation'
      ]
    }
  ];

  return (
    <section className="experience section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content card">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className="period">{exp.period}</p>
                <p>{exp.description}</p>
                <h5>Key Achievements:</h5>
                <ul>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;