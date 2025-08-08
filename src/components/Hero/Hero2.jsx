import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero2 = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    clients: 0,
    settlements: 0,
    satisfaction: 0
  });
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate counters
      const animateCounter = (target, key, suffix = '') => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, 20);
      };

      const timer = setTimeout(() => {
        animateCounter(100, 'clients');
        animateCounter(5, 'settlements');
        animateCounter(98, 'satisfaction');
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const values = [
    {
      icon: Award,
      title: "WORK INTEGRITY",
      description: "We uphold the highest ethical standards in all our legal proceedings and dealings to make sure you get the most safe solutions."
    },
    {
      icon: Users,
      title: "CLIENT-CENTRIC SERVICE",
      description: "Your success is our priority, and we work tirelessly to achieve your goals in minimizing the legal complexities you are currently facing."
    },
    {
      icon: Heart,
      title: "COMMUNITY INVOLVEMENT",
      description: "As a legal firm, we try our best to always give back to the communities we serve, supporting equal and accessible justice for equality."
    }
  ];

  const stats = [
    {
      number: `${counters.clients.toLocaleString()}+`,
      label: "Trusted Clients Served"
    },
    {
      number: `${counters.settlements} Millions`,
      label: "Recovered in Legal Dispute Settlements"
    },
    {
      number: `${counters.satisfaction}%`,
      label: "Client Satisfaction Rate"
    }
  ];

  return (
    <div ref={heroRef} className="bg-[#F0F4F8] min-h-screen">
      {/* Hero Section */}
      <div className="max-w-[80%] mx-auto px-2 py-12 lg:py-20 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-20">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} max-w-xl`}>
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-7xl font-judr text-blue-900 leading-tight mb-6">
                The Leading
                <br />
                <span className="font-judi">Legal Expertise</span>
              </h1>
              <p className="text-[#1E293B] text-lg leading-relaxed max-w-md">
                At our legal firm, these values transcend any words and form the cornerstone of every legal law case we take.
              </p>
            </div>
            
            <button 
              onClick={() => navigate("/about")}
              className="group px-8 py-4 border-2 border-blue-900 rounded-full text-blue-900 hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-all duration-300 transform font-popr"
            >
              See More About Us
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* Right Content - Lawyer Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md xl:max-w-lg xl:-ml-64">
              <img 
                src="src\assets\hero_lawyer.png"
                alt="Professional Lawyer"
                className="w-full rounded-2xl shadow-2xl mask-gradient"
              />
              </div>
              
              {/* Values Cards */}
              <div className="space-y-4 hidden lg:block ml-8">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div 
                      key={index}
                      className={`bg-[#fffcf9] p-4 rounded-xl max-w-md transform transition-all duration-700 ${
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                      }`}
                      style={{ transitionDelay: `${800 + index * 200}ms` }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent size={16} className="text-blue-900" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-blue-900 mb-1 tracking-wide">
                            {value.title}
                          </h3>
                          <p className="text-md text-[#1E293B] leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Values Section for Mobile */}
        <div className="lg:hidden mb-16">
          <div className="grid gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index}
                  className={`bg-white p-6 rounded-xl shadow-lg transform transition-all  ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${500 + index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent size={24} className="text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-blue-900 mb-2 tracking-wide">
                        {value.title}
                      </h3>
                      <p className="text-sm text-[#212529] leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Statistics Section */}
        <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-20 py-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center transform transition-all duration-700 hover:scale-110 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${1200 + index * 200}ms` }}
              >
                <div className="mb-3">
                  <span className="text-3xl lg:text-4xl xl:text-6xl font-judr text-blue-900 block">
                    {stat.number}
                  </span>
                </div>
                <p className="text-[#212529] text-sm lg:text-xl font-judr tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .mask-gradient {
          mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
        }
      `}</style>
    </div>
  );
};

export default Hero2;