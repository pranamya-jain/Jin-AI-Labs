import React from 'react';

const PortfolioSection = () => {
  const projects = [
    {
      number: "01",
      title: "HireAI",
      year: "2024",
      description: "A recruitment automation platform that streamlines the hiring process using AI-powered candidate screening and matching algorithms. Built with React, Node.js, and TensorFlow, resulting in 70% faster hiring cycles.",
      technologies: ["React", "Node.js", "TensorFlow", "MongoDB"],
      impact: "70% faster hiring cycles"
    },
    {
      number: "02",
      title: "RAG Report Generator",
      year: "2024",
      description: "An intelligent document analysis system using Retrieval-Augmented Generation to automatically generate comprehensive reports from complex data sources. Reduced report generation time by 85%.",
      technologies: ["Python", "LangChain", "OpenAI", "Vector DB"],
      impact: "85% time reduction"
    },
    {
      number: "03",
      title: "Smart Analytics Dashboard",
      year: "2024",
      description: "Real-time business intelligence platform with predictive analytics capabilities. Features interactive visualizations and automated insights generation, improving decision-making speed by 60%.",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      impact: "60% faster decisions"
    },
    {
      number: "04",
      title: "Voice Assistant Integration",
      year: "2024",
      description: "Custom voice-enabled interface for enterprise applications using natural language processing. Integrated with existing workflows to provide hands-free operation and accessibility improvements.",
      technologies: ["Speech API", "NLP", "WebRTC", "AWS"],
      impact: "100% accessibility improvement"
    },
    {
      number: "05",
      title: "Automated Content Pipeline",
      year: "2024",
      description: "AI-powered content generation and distribution system that creates, optimizes, and schedules content across multiple platforms. Increased content output by 300% while maintaining quality.",
      technologies: ["GPT-4", "Automation", "CMS", "Analytics"],
      impact: "300% content increase"
    },
    {
      number: "06",
      title: "Predictive Maintenance System",
      year: "2024",
      description: "IoT-enabled predictive maintenance platform using machine learning to forecast equipment failures. Reduced downtime by 45% and maintenance costs by 30% for manufacturing clients.",
      technologies: ["IoT", "ML", "Time Series", "Edge Computing"],
      impact: "45% downtime reduction"
    }
  ];

  return (
    <section id="portfolio" className="portfolio-page">
      <div className="container">
        <div className="page-header">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">
            Showcasing innovative AI solutions that drive real business impact
          </p>
        </div>

        <div className="portfolio-grid-detailed">
          {projects.map((project, index) => (
            <div key={index} className="project-card-detailed">
              <div className="project-number-large">{project.number}</div>
              <div className="project-content">
                <h3 className="project-title-large">{project.title}</h3>
                <p className="project-year">Built in {project.year}</p>
                <p className="project-description-large">{project.description}</p>
                
                <div className="project-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-impact">
                  <strong>Impact: {project.impact}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;