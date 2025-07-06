import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Brain, Zap, BarChart3, Cpu, Workflow, Bot, Database, Sparkles, ArrowRight, X, Menu, Home, Briefcase, Users, Phone, Info } from 'lucide-react';

// Lazy load components
const AboutSection = lazy(() => import('./components/AboutSection.jsx'));
const ServicesSection = lazy(() => import('./components/ServicesSection.jsx'));
const PortfolioSection = lazy(() => import('./components/PortfolioSection.jsx'));
const ProcessSection = lazy(() => import('./components/ProcessSection.jsx'));
const ContactSection = lazy(() => import('./components/ContactSection.jsx'));

const FloatingCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className,
  delay = 0,
  onClick,
  index,
  isHovered
}: {
  icon: any;
  title: string;
  description: string;
  className: string;
  delay?: number;
  onClick: () => void;
  index: number;
  isHovered: boolean;
}) => (
  <div 
    className={`floating-card ${className} ${isHovered ? 'card-fanned' : 'card-stacked'}`}
    style={{ 
      animationDelay: `${delay}s`,
      '--card-index': index
    } as React.CSSProperties}
    onClick={onClick}
  >
    <div className="card-content">
      <div className="card-icon">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  </div>
);

const FullscreenModal = ({ 
  isOpen, 
  onClose, 
  service 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  service: any;
}) => {
  if (!isOpen || !service) return null;

  const Icon = service.icon;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X className="w-6 h-6" />
        </button>
        
        <div className="modal-header">
          <div className="modal-icon">
            <Icon className="w-12 h-12" />
          </div>
          <h2 className="modal-title">{service.title}</h2>
        </div>
        
        <div className="modal-body">
          <p className="modal-description">{service.description}</p>
          
          <div className="modal-details">
            <h3>Capabilities</h3>
            <ul className="feature-list">
              {service.features?.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              )) || [
                "Advanced algorithms",
                "Real-time processing", 
                "Scalable solutions",
                "24/7 monitoring"
              ]}
            </ul>
          </div>
          
          <div className="modal-actions">
            <button className="modal-cta-primary">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="modal-cta-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
  <div className="nav-item" onClick={onClick}>
    {children}
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCardStackHovered, setIsCardStackHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Close menu when clicking outside or on nav items
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.nav-toggle') && !target.closest('.nav-menu') && !target.closest('.nav-logo')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleCardClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to:', sectionId); // Debug log
    const element = document.getElementById(sectionId);
    console.log('Element found:', element); // Debug log
    
    if (element) {
      // Close menu first
      setIsMenuOpen(false);
      
      // Small delay to ensure menu closes before scrolling
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    } else {
      console.error('Element not found:', sectionId);
    }
  };

  const services = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Advanced ML algorithms",
      className: "card-1",
      delay: 0,
      features: [
        "Deep learning networks",
        "Supervised learning",
        "Real-time training",
        "Custom algorithms"
      ]
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Intelligent automation",
      className: "card-2",
      delay: 0,
      features: [
        "Workflow optimization",
        "Decision systems",
        "Process mining",
        "RPA integration"
      ]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Deep insights",
      className: "card-3",
      delay: 0,
      features: [
        "Big data processing",
        "Predictive analytics",
        "Real-time dashboards",
        "Statistical modeling"
      ]
    },
    {
      icon: Cpu,
      title: "Neural Networks",
      description: "Custom architectures",
      className: "card-4",
      delay: 0,
      features: [
        "CNNs and RNNs",
        "Transformer models",
        "Network optimization",
        "Custom design"
      ]
    },
    {
      icon: Workflow,
      title: "AI Integration",
      description: "Seamless implementation",
      className: "card-5",
      delay: 0,
      features: [
        "API development",
        "Cloud deployment",
        "System modernization",
        "Microservices"
      ]
    },
    {
      icon: Bot,
      title: "Intelligent Agents",
      description: "Autonomous assistants",
      className: "card-6",
      delay: 0,
      features: [
        "Conversational AI",
        "Multi-agent systems",
        "NLP processing",
        "Autonomous decisions"
      ]
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Scalable infrastructure",
      className: "card-7",
      delay: 0,
      features: [
        "Pipeline optimization",
        "ETL automation",
        "Data architecture",
        "Real-time streaming"
      ]
    },
    {
      icon: Sparkles,
      title: "Research",
      description: "Cutting-edge innovation",
      className: "card-8",
      delay: 0,
      features: [
        "Experimental models",
        "Academic collaboration",
        "Patent development",
        "Innovation labs"
      ]
    }
  ];

  return (
    <div className="aeos-container">
      {/* Background Effects */}
      <div className="background-effects">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Mouse Follower */}
      <div 
        className="mouse-follower"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      ></div>

      {/* Navigation */}
      <nav className="main-nav">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection('home')}>
            <img 
              src="/20250628_2207_Jin-AI Labs Logo_remix_01jyvp69nfewmam3rdkfjj88yk.png" 
              alt="Jin-AI Labs Logo" 
              className="logo-image"
            />
          </div>
          
          <button className="nav-toggle" onClick={toggleMenu}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
        <button className="menu-close-btn" onClick={closeMenu}>
          <X className="w-8 h-8" />
        </button>
        
        <div className="menu-content">
          <div className="menu-items">
            <NavItem onClick={() => scrollToSection('home')}>
              <Home className="w-6 h-6" />
              Home
            </NavItem>
            <NavItem onClick={() => scrollToSection('services')}>
              <Briefcase className="w-6 h-6" />
              What we do
            </NavItem>
            <NavItem onClick={() => scrollToSection('portfolio')}>
              <BarChart3 className="w-6 h-6" />
              How we do it
            </NavItem>
            <NavItem onClick={() => scrollToSection('about')}>
              <Users className="w-6 h-6" />
              Why choose us
            </NavItem>
            <NavItem onClick={() => scrollToSection('contact')}>
              <Phone className="w-6 h-6" />
              Talk to us
            </NavItem>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">AI Lab</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line">magic</span>
            <span className="title-line title-gradient">as a service</span>
          </h1>
          
          <p className="hero-description">
            We are Jin-AI Labs, an engineering team that designs and builds GenAI integration and AI automation solutions and experiences
          </p>
          
          <p className="hero-location">
            Based in Bangalore, India. Tinkering since 2025.
          </p>
          
          <div className="hero-actions">
            <button className="cta-primary" onClick={() => scrollToSection('contact')}>
              <span>Talk to us</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="cta-secondary" onClick={() => scrollToSection('portfolio')}>
              Projects
            </button>
          </div>
        </div>

        {/* Flirty Title Above Cards */}
        <div className="cards-flirty-title">
          <span className="flirty-text">Hover to see what we're</span>
          <span className="flirty-highlight">really good at</span>
          <div className="flirty-arrow">↗</div>
        </div>

        {/* Card Stack Container */}
        <div 
          className="card-stack-container"
          onMouseEnter={() => setIsCardStackHovered(true)}
          onMouseLeave={() => setIsCardStackHovered(false)}
        >
          {services.map((service, index) => (
            <FloatingCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              className={service.className}
              delay={service.delay}
              onClick={() => handleCardClick(service)}
              index={index}
              isHovered={isCardStackHovered}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Models</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100M+</div>
            <div className="stat-label">Data Points</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Accuracy</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Uptime</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Suspense fallback={<div>Loading Services...</div>}>
        <ServicesSection />
      </Suspense>

      {/* Portfolio Section */}
      <Suspense fallback={<div>Loading Portfolio...</div>}>
        <PortfolioSection />
      </Suspense>

      {/* About Section */}
      <Suspense fallback={<div>Loading About...</div>}>
        <AboutSection />
      </Suspense>

      {/* Contact Section */}
      <Suspense fallback={<div>Loading Contact...</div>}>
        <ContactSection />
      </Suspense>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img 
              src="/20250628_2207_Jin-AI Labs Logo_remix_01jyvp69nfewmam3rdkfjj88yk.png" 
              alt="Jin-AI Labs Logo" 
              className="footer-logo-image"
            />
          </div>
          <p className="footer-text">
            Building the future of AI.
          </p>
          <div className="footer-nav">
            <a onClick={() => scrollToSection('home')}>Home</a>
            <a onClick={() => scrollToSection('services')}>Services</a>
            <a onClick={() => scrollToSection('portfolio')}>Portfolio</a>
            <a onClick={() => scrollToSection('about')}>About</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
          <p className="copyright">&copy; 2025 Jin-AI Labs. All rights reserved.</p>
        </div>
      </footer>

      {/* Fullscreen Modal */}
      <FullscreenModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        service={selectedService}
      />
    </div>
  );
}

export default App;