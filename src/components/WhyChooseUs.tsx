import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  DollarSign, 
  Cpu, 
  Clock,
  CheckCircle
} from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "We deliver projects on time, every time. Our streamlined processes ensure quick turnaround without compromising quality.",
      features: ["Agile Development", "Regular Updates", "Quick Iterations"]
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Competitive pricing that fits your budget. We offer flexible payment plans and transparent cost structures.",
      features: ["No Hidden Costs", "Flexible Plans", "Value for Money"]
    },
    {
      icon: Cpu,
      title: "Modern Tech",
      description: "Cutting-edge technologies and frameworks to build scalable, future-proof solutions for your business.",
      features: ["Latest Frameworks", "Cloud-Native", "Scalable Architecture"]
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your systems run smoothly and any issues are resolved promptly.",
      features: ["Instant Response", "Proactive Monitoring", "Emergency Support"]
    }
  ];

  const stats = [
    { number: "99%", label: "On-Time Delivery" },
    { number: "50%", label: "Cost Savings" },
    { number: "24/7", label: "Support Available" },
    { number: "5+", label: "Years Experience" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-deep-blue to-teal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-orange rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-teal rounded-full animate-float-more-delayed"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium text-sm mb-6"
          >
            Why Choose Us
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            The{' '}
            <span className="bg-gradient-to-r from-orange to-yellow-400 bg-clip-text text-transparent">
              KeloTech
            </span>{' '}
            Advantage
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            We combine technical expertise with business acumen to deliver solutions that drive real results.
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 h-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-gradient-to-br from-orange to-yellow-400 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
                >
                  <reason.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange transition-colors duration-300">
                    {reason.title}
                  </h3>
                  
                  <p className="text-white/80 leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {reason.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-white/90">
                        <CheckCircle className="w-4 h-4 text-orange" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-orange/30 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-orange mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-deep-blue font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
