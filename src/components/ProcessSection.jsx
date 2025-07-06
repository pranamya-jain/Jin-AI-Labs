import React from 'react';

const ProcessSection = () => {
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
  );
};

export default ProcessSection;