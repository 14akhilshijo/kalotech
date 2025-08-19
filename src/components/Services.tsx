import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Bot, 
  Code, 
  Settings,
  Star,
  Clock,
  Users,
  ArrowRight
} from 'lucide-react';

const Services: React.FC = () => {
  const handleServiceClick = (serviceName: string) => {
    console.log(`Service clicked: ${serviceName}`);
    // Handle service click
  };

  const handleEnrollClass = (className: string) => {
    console.log(`Enrolling in: ${className}`);
    // Handle class enrollment
  };

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      features: ['Responsive Design', 'SEO Optimized', 'Performance Focused'],
      price: '₹25,000',
      duration: '2-4 weeks',
      level: 'All Levels'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Cross-Platform', 'Native Performance', 'App Store Ready'],
      price: '₹45,000',
      duration: '4-6 weeks',
      level: 'All Levels'
    },
    {
      icon: Cloud,
      title: 'Cloud Management',
      description: 'AWS, Azure, and Google Cloud infrastructure setup and management.',
      features: ['Scalable Architecture', 'Security First', 'Cost Optimization'],
      price: '₹35,000',
      duration: '1-2 weeks',
      level: 'Intermediate+'
    },
    {
      icon: Bot,
      title: 'AI & Automation',
      description: 'Intelligent automation solutions and AI-powered applications.',
      features: ['Machine Learning', 'Process Automation', 'Data Analytics'],
      price: '₹60,000',
      duration: '6-8 weeks',
      level: 'Advanced'
    },
    {
      icon: Code,
      title: 'Code Classes',
      description: 'Personalized programming lessons and mentorship programs.',
      features: ['1-on-1 Sessions', 'Project-Based Learning', 'Flexible Schedule'],
      price: '₹2,500',
      duration: 'per hour',
      level: 'All Levels'
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Tailored software solutions for your specific business needs.',
      features: ['Custom Development', 'Integration', 'Maintenance'],
      price: '₹50,000',
      duration: '6-12 weeks',
      level: 'All Levels'
    }
  ];

  const techClasses = [
    {
      name: 'Node.js Development',
      instructor: 'AKHIL SHIJO',
      description: 'Learn server-side JavaScript with Node.js, Express, and MongoDB.',
      topics: ['Express.js', 'MongoDB', 'REST APIs', 'Authentication'],
      price: '₹15,000',
      duration: '20 hours',
      level: 'Beginner to Intermediate',
      icon: '⚡'
    },
    {
      name: 'Python Programming',
      instructor: 'AKHIL SHIJO',
      description: 'Master Python programming from basics to advanced concepts.',
      topics: ['Data Structures', 'OOP', 'Web Scraping', 'Django/Flask'],
      price: '₹12,000',
      duration: '25 hours',
      level: 'Beginner to Advanced',
      icon: '🐍'
    },
    {
      name: 'Ruby on Rails',
      instructor: 'AKHIL SHIJO',
      description: 'Build web applications with Ruby on Rails framework.',
      topics: ['Ruby Basics', 'Rails MVC', 'Database Design', 'Deployment'],
      price: '₹18,000',
      duration: '30 hours',
      level: 'Intermediate',
      icon: '💎'
    },
    {
      name: 'React Development',
      instructor: 'AKHIL SHIJO',
      description: 'Create modern user interfaces with React and related technologies.',
      topics: ['React Hooks', 'State Management', 'Routing', 'Testing'],
      price: '₹16,000',
      duration: '22 hours',
      level: 'Beginner to Intermediate',
      icon: '⚛️'
    },
    {
      name: 'Full-Stack Development',
      instructor: 'AKHIL SHIJO',
      description: 'Comprehensive full-stack development course covering frontend and backend.',
      topics: ['Frontend', 'Backend', 'Database', 'DevOps'],
      price: '₹35,000',
      duration: '50 hours',
      level: 'Intermediate to Advanced',
      icon: '🚀'
    },
    {
      name: 'Mobile App Development',
      instructor: 'AKHIL SHIJO',
      description: 'Learn to build mobile applications for iOS and Android.',
      topics: ['React Native', 'Flutter', 'App Design', 'Publishing'],
      price: '₹25,000',
      duration: '35 hours',
      level: 'Intermediate',
      icon: '📱'
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge mb-4">Our Services</div>
          <h2 className="heading-xl mb-6">What We Offer</h2>
          <p className="text-body max-w-3xl mx-auto">
            From web development to AI automation, we provide comprehensive technology solutions 
            to help your business grow and succeed in the digital world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card-hover cursor-pointer group"
              onClick={() => handleServiceClick(service.title)}
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-teal-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-teal-600">{service.price}</div>
                  <div className="text-sm text-gray-500">{service.duration}</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Level: {service.level}</span>
                  <ArrowRight className="w-5 h-5 text-teal-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Classes Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge-accent mb-4">Learning Programs</div>
          <h2 className="heading-xl mb-6">Tech Classes by AKHIL SHIJO</h2>
          <p className="text-body max-w-3xl mx-auto">
            Master the latest technologies with personalized, project-based learning. 
            All classes are taught by industry expert AKHIL SHIJO with flexible scheduling.
          </p>
        </motion.div>

        {/* Tech Classes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techClasses.map((techClass, index) => (
            <motion.div
              key={techClass.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="tech-card cursor-pointer group"
              onClick={() => handleEnrollClass(techClass.name)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{techClass.icon}</div>
                  <div className="text-2xl font-bold text-orange-600">{techClass.price}</div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{techClass.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{techClass.description}</p>
                
                <div className="space-y-2 mb-4">
                  {techClass.topics.slice(0, 3).map((topic, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">{topic}</span>
                    </div>
                  ))}
                  {techClass.topics.length > 3 && (
                    <div className="text-xs text-teal-600 font-medium">+{techClass.topics.length - 3} more topics</div>
                  )}
                </div>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{techClass.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{techClass.level}</span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-2">Instructor</div>
                  <div className="text-sm font-semibold text-teal-600">{techClass.instructor}</div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  Enroll Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-shape w-32 h-32 bg-gradient-to-br from-teal-300/20 to-cyan-300/20 top-20 right-20 animate-float"></div>
        <div className="floating-shape w-24 h-24 bg-gradient-to-br from-orange-300/20 to-amber-300/20 bottom-40 left-20 animate-float-delayed"></div>
        <div className="morph-shape w-40 h-40 bg-gradient-to-br from-purple-300/20 to-pink-300/20 top-1/3 left-1/4"></div>
      </div>
    </section>
  );
};

export default Services;
