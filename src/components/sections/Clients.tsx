import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCar, FaOilCan, FaShoppingBag, FaShieldAlt, FaLandmark, 
  FaLaptopCode, FaHospital, FaBox, FaMobileAlt, FaUniversity, 
  FaPlane, FaBuilding
} from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';

const industries = [
  { name: 'Automotive', icon: FaCar },
  { name: 'Oil & Energy', icon: FaOilCan },
  { name: 'Retail', icon: FaShoppingBag },
  { name: 'Insurance', icon: FaShieldAlt },
  { name: 'Government', icon: FaLandmark },
  { name: 'IT', icon: FaLaptopCode },
  { name: 'Hospitals', icon: FaHospital },
  { name: 'FMCG', icon: FaBox },
  { name: 'Telecommunication', icon: FaMobileAlt },
  { name: 'Banking', icon: FaUniversity },
  { name: 'Aviation', icon: FaPlane },
  { name: 'Real Estate', icon: FaBuilding },
];

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-24 lg:py-32 bg-white">
      <div className="section-container">
        <SectionHeading
          badge="Industries Served"
          title="Trusted Across Industries"
          titleHighlight="Industries"
          subtitle="We've partnered with organizations across 40+ industries to deliver transformative professional development solutions."
        />

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="flex flex-col items-center p-6 rounded-2xl bg-dark-50 hover:bg-gradient-to-br hover:from-primary-50 hover:to-white border border-transparent hover:border-primary-200 transition-all duration-300 cursor-pointer">
                  <IconComponent className="text-3xl mb-3 text-primary-500 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-medium text-dark-600 text-center group-hover:text-primary-600 transition-colors">
                    {industry.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
