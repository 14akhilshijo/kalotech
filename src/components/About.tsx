import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, Award, Users, Clock, Code } from 'lucide-react';

const About: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "KeloTech transformed our business with their innovative web solutions. AKHIL SHIJO and his team are professional, responsive, and deliver exceptional results.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Founder, DigitalFlow",
      content: "Working with KeloTech was a game-changer. AKHIL understood our vision perfectly and delivered a mobile app that exceeded our expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content: "The cloud management solutions from KeloTech have streamlined our operations significantly. AKHIL's expertise is unmatched.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const achievements = [
    { icon: Award, number: "15+", label: "Industry Awards", color: "text-amber" },
    { icon: Users, number: "500+", label: "Students Taught", color: "text-cyan" },
    { icon: Clock, number: "8+", label: "Years Experience", color: "text-emerald" },
    { icon: Code, number: "200+", label: "Projects Delivered", color: "text-indigo" }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-white to-gray-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-shape w-96 h-96 bg-gradient-to-br from-teal/5 to-cyan/5 top-0 right-0 animate-float-slow"></div>
        <div className="morph-shape w-64 h-64 bg-gradient-to-br from-orange/5 to-amber/5 bottom-0 left-0"></div>
        <div className="floating-shape w-48 h-48 bg-gradient-to-br from-purple/5 to-indigo/5 top-1/3 left-10 animate-float-delayed"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="badge"
              >
                About KeloTech
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="heading-lg text-deep-blue leading-tight"
              >
                We're a team of{' '}
                <span className="text-gradient">
                  passionate innovators
                </span>{' '}
                led by{' '}
                <span className="text-gradient-warm">
                  AKHIL SHIJO
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-body text-gray-dark leading-relaxed"
            >
              Founded in 2016 by AKHIL SHIJO, KeloTech has been at the forefront of digital transformation, 
              helping businesses of all sizes navigate the complex world of technology. Our mission is to democratize 
              access to cutting-edge tech solutions while providing world-class education to aspiring developers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-deep-blue">Our Mission</h3>
              <p className="text-gray-dark leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital age, while nurturing the next 
                generation of tech professionals through comprehensive education and mentorship.
              </p>
            </motion.div>

            {/* Enhanced Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 pt-8"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className={`w-16 h-16 bg-gradient-to-br from-white/80 to-white/60 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-200 group-hover:border-teal/30`}
                  >
                    <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                  </motion.div>
                  <div className="text-3xl font-bold text-deep-blue mb-2 group-hover:text-gradient transition-colors duration-300">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-dark font-medium">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-deep-blue via-navy to-slate rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
              {/* Enhanced Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-20 translate-x-20 animate-float"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange rounded-full translate-y-16 -translate-x-16 animate-float-delayed"></div>
                <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-teal rounded-full -translate-x-12 -translate-y-12 animate-float-more-delayed"></div>
              </div>

              <div className="relative z-10">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center space-y-8"
                >
                  {/* Quote Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange to-amber rounded-2xl mx-auto"
                  >
                    <Quote className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Testimonial Content */}
                  <div className="space-y-6">
                    <p className="text-xl leading-relaxed text-white/90">
                      "{testimonials[currentTestimonial].content}"
                    </p>
                    
                    {/* Avatar and Info */}
                    <div className="flex items-center justify-center gap-4">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={testimonials[currentTestimonial].avatar}
                        alt={testimonials[currentTestimonial].name}
                        className="w-16 h-16 rounded-full border-2 border-white/20"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-lg text-white">
                          {testimonials[currentTestimonial].name}
                        </div>
                        <div className="text-white/70 text-sm">
                          {testimonials[currentTestimonial].role}
                        </div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center gap-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                          <Star className="w-6 h-6 fill-orange text-orange" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Enhanced Navigation Dots */}
                <div className="flex justify-center gap-3 mt-10">
                  {testimonials.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-orange scale-125 shadow-lg shadow-orange/50' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Enhanced Navigation Arrows */}
                <motion.button
                  onClick={prevTestimonial}
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous testimonial"
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                  onClick={nextTestimonial}
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next testimonial"
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            {/* Floating Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange to-amber text-white px-6 py-3 rounded-2xl shadow-xl border border-white/20"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">8+ Years</div>
                <div className="text-sm opacity-90">of Excellence</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

