import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-teal/20 to-orange/20 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-orange/20 to-teal/20 rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-br from-teal/20 to-orange/20 rounded-full animate-float-more-delayed"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main CTA Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-deep-blue via-deep-blue to-teal rounded-3xl p-12 lg:p-16 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange rounded-full translate-y-12 -translate-x-12"></div>
            </div>

            <div className="relative z-10">
              {/* Sparkle Icon */}
              <motion.div
                initial={{ opacity: 0, rotate: -180 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange to-yellow-400 rounded-full mb-8"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>

              {/* Main Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Let's Build Something{' '}
                <span className="bg-gradient-to-r from-orange to-yellow-400 bg-clip-text text-transparent">
                  Amazing
                </span>{' '}
                Together
              </motion.h2>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed"
              >
                Ready to transform your business with cutting-edge technology? 
                Let's discuss your project and bring your vision to life.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange to-yellow-400 text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:shadow-2xl transform transition-all duration-300 flex items-center gap-3 group"
                >
                  Hire Us Now
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white font-semibold py-4 px-10 rounded-full text-lg hover:bg-white hover:text-deep-blue transition-all duration-300"
                >
                  Get Free Quote
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-12 pt-8 border-t border-white/20"
              >
                <p className="text-white/70 text-sm mb-4">Trusted by leading companies worldwide</p>
                <div className="flex flex-wrap justify-center gap-8 opacity-60">
                  {['TechCorp', 'InnovateLab', 'DigitalFlow', 'GrowthCo', 'FutureTech'].map((company, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-white/80 font-medium"
                    >
                      {company}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Free Consultation",
                description: "Get expert advice on your project requirements and technology stack.",
                icon: "💬"
              },
              {
                title: "Quick Response",
                description: "We'll get back to you within 24 hours with a detailed proposal.",
                icon: "⚡"
              },
              {
                title: "Flexible Engagement",
                description: "Choose from project-based, retainer, or hourly engagement models.",
                icon: "🔄"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-deep-blue mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
