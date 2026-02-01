import React from 'react';
import { motion } from 'framer-motion';
import { HiLightBulb, HiHeart, HiSparkles, HiUserGroup } from 'react-icons/hi';
import SectionHeading from '../ui/SectionHeading';

const values = [
  {
    icon: <HiLightBulb className="w-8 h-8" />,
    title: 'Innovation',
    description: 'We constantly evolve our methodologies to deliver cutting-edge solutions that drive real results.',
  },
  {
    icon: <HiHeart className="w-8 h-8" />,
    title: 'Passion',
    description: 'Our dedication to excellence fuels everything we do, from program design to delivery.',
  },
  {
    icon: <HiSparkles className="w-8 h-8" />,
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards, ensuring exceptional outcomes for every client.',
  },
  {
    icon: <HiUserGroup className="w-8 h-8" />,
    title: 'Partnership',
    description: 'We work alongside our clients, becoming an extension of their team to achieve shared goals.',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-800 mb-6">
              We Rise by{' '}
              <span className="gradient-text">Lifting Others</span>
            </h2>
            <p className="text-dark-500 leading-relaxed mb-6">
              RISE Holding is a Dubai-based professional development firm dedicated to elevating organizations and leaders across the MENA region. Backed by over 20 years of international experience, we deliver integrated services under one roof, including world-class training, executive coaching, e-learning solutions, business consulting, executive search, marketing, public speaking, and AI and future-skills enablement.
            </p>
            <p className="text-dark-500 leading-relaxed">
              Every solution we deliver is fully customized, practical, and impact-driven, designed to support sustainable growth and measurable performance. Quality defines our work, and client success is our benchmark. At RISE, we believe true elevation comes from empowering others to grow, because we only rise by lifting those we serve.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary-100 via-primary-50 to-accent-100 p-6 relative shadow-2xl">
              {/* Animated background blobs */}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1], 
                  x: [0, 20, 0],
                  y: [0, -15, 0],
                  opacity: [0.4, 0.6, 0.4] 
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-8 left-8 w-36 h-36 bg-gradient-to-br from-primary-400/40 to-accent-400/30 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ 
                  scale: [1.2, 1, 1.2], 
                  x: [0, -15, 0],
                  y: [0, 20, 0],
                  opacity: [0.3, 0.5, 0.3] 
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-16 right-8 w-44 h-44 bg-gradient-to-br from-accent-500/30 to-primary-500/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.4, 1], 
                  rotate: [0, 180, 360],
                  opacity: [0.2, 0.4, 0.2] 
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-tr from-primary-300/30 via-transparent to-accent-300/30 rounded-full blur-3xl"
              />
              
              <div className="h-full w-full rounded-2xl bg-gradient-to-br from-primary-600 via-primary-700 to-dark-900 flex items-center justify-center relative overflow-hidden shadow-inner">
                {/* Shimmer effect */}
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                />
                
                {/* Decorative pattern overlay */}
                <div className="absolute inset-0 opacity-[0.07]">
                  <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>
                
                {/* Animated corner accents */}
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-accent-400/50 rounded-tl-xl"
                />
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-accent-400/50 rounded-br-xl"
                />
                
                {/* Glowing rings */}
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                  transition={{ rotate: { duration: 20, repeat: Infinity, ease: 'linear' }, scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
                  className="absolute w-52 h-52 border-2 border-white/15 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-64 h-64 border border-white/10 rounded-full border-dashed"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-72 h-72 border border-accent-400/20 rounded-full"
                />
                
                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -30, 0],
                      x: [0, i % 2 === 0 ? 10 : -10, 0],
                      opacity: [0.2, 0.6, 0.2]
                    }}
                    transition={{ 
                      duration: 3 + i * 0.5, 
                      repeat: Infinity, 
                      ease: 'easeInOut',
                      delay: i * 0.3
                    }}
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    style={{
                      top: `${20 + i * 12}%`,
                      left: `${15 + i * 13}%`,
                    }}
                  />
                ))}
                
                <div className="text-center text-white p-8 relative z-10">
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative"
                  >
                    <span className="text-7xl md:text-8xl font-heading font-bold drop-shadow-2xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                      15+
                    </span>
                    {/* Glow behind number */}
                    <div className="absolute inset-0 text-7xl md:text-8xl font-heading font-bold text-accent-400/30 blur-lg -z-10">
                      15+
                    </div>
                  </motion.div>
                  <motion.div
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-xl md:text-2xl font-medium mt-2 text-white/90 tracking-wide"
                  >
                    Years of Excellence
                  </motion.div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '60%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-0.5 bg-gradient-to-r from-transparent via-accent-400 to-transparent mx-auto mt-4"
                  />
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center text-white font-heading font-bold shadow-glow-gold"
            >
              <div className="text-center">
                <div className="text-2xl">40+</div>
                <div className="text-xs">Industries</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values */}
        <SectionHeading
          badge="Our Values"
          title="What Drives Us"
          titleHighlight="Drives"
          subtitle="Our core values shape everything we do, from how we design our programs to how we engage with our clients."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="h-full bg-dark-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white mb-6 shadow-glow"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-heading font-bold text-dark-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-dark-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
