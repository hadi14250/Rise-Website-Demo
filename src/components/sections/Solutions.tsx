import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUserTie, FaLaptop, FaUsers, FaBullhorn, FaMicrophone, FaRobot, FaChartLine, FaSearch } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../ui/ServiceCard';

const services = [
  {
    icon: <FaGraduationCap />,
    title: 'Training Solutions',
    description: 'Tailored programs to build skills, confidence and performance across teams and leadership.',
    link: '/solutions#training',
    color: 'primary' as const,
    image: '/images/training-solutions.avif',
  },
  {
    icon: <FaUserTie />,
    title: 'Coaching Solutions',
    description: 'Personalized guidance that drives lasting behavioural change and unlocks high-performance potential.',
    link: '/solutions#coaching',
    color: 'gold' as const,
    image: '/images/coaching-solutions.avif',
  },
  {
    icon: <FaLaptop />,
    title: 'E-Learning',
    description: 'Flexible, high-quality digital training designed for busy professionals on the go.',
    link: '/solutions#elearning',
    color: 'teal' as const,
    image: '/images/e-learning.jpg',
  },
  {
    icon: <FaUsers />,
    title: 'HR Consultancy',
    description: 'Strategic HR consultancy that strengthens organizational structure and optimizes talent performance.',
    link: '/solutions#hr',
    color: 'blue' as const,
    image: '/images/hr-consultancy.png',
  },
  {
    icon: <FaBullhorn />,
    title: 'Offline & Digital Marketing',
    description: 'Data-driven marketing strategies that build brand visibility, drive engagement, and convert audiences across online and offline channels.',
    link: '/solutions#marketing',
    color: 'primary' as const,
    image: '/images/offline-and-digital-marketing.jpg',
  },
  {
    icon: <FaMicrophone />,
    title: 'Keynote Speaking & Events',
    description: 'Impactful keynotes and curated events that inspire leaders, spark innovation, and drive meaningful conversations.',
    link: '/solutions#events',
    color: 'gold' as const,
    image: '/images/keynote-speaking-events.jpg',
  },
  {
    icon: <FaRobot />,
    title: 'AI Enablement',
    description: 'Practical AI solutions that help organizations automate, optimize, and innovate with confidence.',
    link: '/solutions#ai',
    color: 'teal' as const,
    image: '/images/ai-enablement.png',
  },
  {
    icon: <FaChartLine />,
    title: 'Business Consulting',
    description: 'Strategic advisory services that help businesses scale, streamline operations, and achieve sustainable growth.',
    link: '/solutions#consulting',
    color: 'blue' as const,
    image: '/images/business-consulting.jpg',
  },
  {
    icon: <FaSearch />,
    title: 'Executive Search',
    description: 'Targeted executive search services connecting organizations with high-impact leadership talent.',
    link: '/solutions#executive-search',
    color: 'primary' as const,
    image: '/images/executive-search.jpg',
  },
];

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-gradient-to-b from-white to-dark-50">
      <div className="section-container">
        <SectionHeading
          badge="Our Solutions"
          title="Comprehensive Development Solutions"
          titleHighlight="Development"
          subtitle="Empowering organizations with tailored solutions that drive growth, enhance performance, and cultivate exceptional talent."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
