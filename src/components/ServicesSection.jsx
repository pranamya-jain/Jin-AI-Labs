import React from 'react';
import { Brain, Zap, BarChart3, Cpu, Workflow, Bot, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const detailedServices = [
    {
      icon: Brain,
      title: "Custom AI Solutions",
      description: "Tailored artificial intelligence systems designed to solve your specific business challenges and automate complex processes.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "Recommendation Systems"
      ]
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Intelligent automation solutions that streamline workflows and eliminate repetitive tasks.",
      features: [
        "Process Automation",
        "Workflow Optimization",
        "Decision Systems",
        "RPA Integration",
        "Smart Scheduling"
      ]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and visualization.",
      features: [
        "Big Data Processing",
        "Real-time Analytics",
        "Business Intelligence",
        "Data Visualization",
        "Statistical Modeling"
      ]
    },
    {
      icon: Cpu,
      title: "Neural Networks",
      description: "Custom neural network architectures designed for your specific use cases.",
      features: [
        "Deep Learning",
        "Convolutional Networks",
        "Recurrent Networks",
        "Transformer Models",
        "Custom Architectures"
      ]
    },
    {
      icon: Workflow,
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
      features: [
        "API Development",
        "Cloud Deployment",
        "System Integration",
        "Microservices",
        "Legacy Modernization"
      ]
    },
    {
      icon: Bot,
      title: "Intelligent Agents",
      description: "Autonomous AI agents that can understand, reason, and act on your behalf.",
      features: [
        "Conversational AI",
        "Virtual Assistants",
        "Multi-agent Systems",
        "Autonomous Decision Making",
        "Context Understanding"
      ]
    }
  ];

  return (
    <section id="services" className="services-page">
      <div className="container">
        <div className="page-header">
          <h2 className="section-title">What we do</h2>
          <p className="section-subtitle">
            We bring GenAI integration & engineering expertise
          </p>
          <p className="section-description">
            Each problem is looked at from a fresh lens to provide you with a solution that solves your specific requirements and integrates with your existing infrastructure
          </p>
        </div>

        <div className="services-grid">
          {detailedServices.map((service, index) => (
            <div key={index} className="service-card-detailed">
              <div className="service-icon-large">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="service-title-large">{service.title}</h3>
              <p className="service-description-large">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="service-cta">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="feature-box">
          <h3 className="feature-title">Magical user experiences</h3>
          <p className="feature-description">We create personalized experiences that engage users and drive meaningful interactions through innovative design and advanced technology integration.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;