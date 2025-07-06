import React from 'react';

const AboutSection = () => {
  const processSteps = [
    {
      icon: "🔍",
      title: "(Step 1) Discovery",
      description: "Together, we dive into your world. A brainstorming session where your challenges meet our creative thinking",
      points: [
        "We learn from you",
        "Identify painpoints",
        "Uncover opportunities",
        "Flag inefficiencies"
      ]
    },
    {
      icon: "📊",
      title: "(Step 2) Analysis",
      description: "We craft a tailored action plan that aligns with your budget and requirements – no guesswork, just solutions",
      points: [
        "We build for you",
        "Compatible with your stack",
        "Designed for the end user",
        "Future ready & modular"
      ]
    },
    {
      icon: "🚀",
      title: "(Step 3) Execution",
      description: "It's go time. Our team gets to work, setting plans into motion, turning ideas into real-world impact",
      points: [
        "We keep you looped",
        "Regular status calls",
        "Open line of communication",
        "Documentation & support"
      ]
    }
  ];

  return (
    <section id="about" className="about-page">
      <div className="container">
        <div className="page-header">
          <h2 className="section-title">How we work</h2>
          <p className="section-subtitle">
            Our proven process for delivering exceptional AI solutions
          </p>
        </div>

        <div className="about-content">
          <div className="process-section">
            <div className="process-grid">
              {processSteps.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="step-icon">{step.icon}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  <ul className="step-points">
                    {step.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="about-section">
            <h3 className="feature-title">Why Choose Us</h3>
            <div className="why-choose-grid">
              <div className="why-choose-item">
                <h4>Expertise</h4>
                <p>Deep knowledge in AI, machine learning, and automation technologies</p>
              </div>
              <div className="why-choose-item">
                <h4>Custom Solutions</h4>
                <p>Tailored approaches that fit your specific business needs and constraints</p>
              </div>
              <div className="why-choose-item">
                <h4>Proven Results</h4>
                <p>Track record of delivering measurable business impact and ROI</p>
              </div>
              <div className="why-choose-item">
                <h4>Future-Ready</h4>
                <p>Solutions designed to scale and evolve with your business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;