import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Award, Users, Briefcase, Heart } from 'lucide-react';

const MeetLegalExperts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMember, setCurrentMember] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Jonathan Deffrex",
      position: "MANAGING PARTNER",
      description: "With over 15 years of experience in corporate law and business litigation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Jane Smithson", 
      position: "SENIOR PARTNER",
      description: "Specializing in family law with compassionate legal representation.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c39ad407?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Robert Johnson",
      position: "PARTNER",
      description: "Expert in criminal defense with an outstanding track record.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const awards = [
    {
      year: "2024",
      title: "Legal Innovation",
      subtitle: "Award",
      icon: Award
    },
    {
      year: "2023", 
      title: "Best Legal",
      subtitle: "Client Satisfaction",
      icon: Users
    },
    {
      year: "2023",
      title: "Top Law",
      subtitle: "Firm in Work Diversity", 
      icon: Briefcase
    },
    {
      year: "2022",
      title: "Community",
      subtitle: "Impactful Awards",
      icon: Heart
    }
  ];

  const nextMember = () => {
    setCurrentMember((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <div ref={sectionRef} className="bg-white py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Team Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Side - Hero Image */}
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Legal professionals in meeting"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
          </div>

          {/* Right Side - Team Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            
            {/* Header */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-4 leading-tight">
                Meet Our
                <br />
                Legal Experts
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Meet our team of legal advocates and professionals dedicated to ensuring your legal needs are met with excellence.
              </p>
            </div>

            {/* Team Member Card */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-medium text-gray-800">
                      {teamMembers[currentMember].name}
                    </h3>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {teamMembers[currentMember].position}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {teamMembers[currentMember].description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={teamMembers[currentMember].image}
                    alt={teamMembers[currentMember].name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div className="text-sm text-gray-500">
                    {teamMembers[currentMember].position.split(' ')[0]}
                    <br />
                    {teamMembers[currentMember].position.split(' ').slice(1).join(' ')}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={prevMember}
                    className="w-8 h-8 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center"
                  >
                    <ChevronLeft size={16} className="text-gray-600" />
                  </button>
                  
                  {/* Dots */}
                  <div className="flex space-x-1 mx-3">
                    {teamMembers.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentMember(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          currentMember === index ? 'bg-gray-800' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextMember}
                    className="w-8 h-8 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center"
                  >
                    <ChevronRight size={16} className="text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Awards Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-4 lg:mb-0 leading-tight">
              Our Recognized
              <br />
              Excellence
            </h2>
            <button className="self-start lg:self-auto px-6 py-2 border border-gray-300 rounded-full text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              See More Achievement
            </button>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {awards.map((award, index) => {
              const IconComponent = award.icon;
              return (
                <div
                  key={index}
                  className={`bg-gray-50 rounded-2xl p-6 text-center hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  {/* Year */}
                  <div className="text-xs font-medium text-gray-500 mb-3 tracking-wider">
                    {award.year}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <IconComponent size={20} className="text-gray-600" />
                  </div>
                  
                  {/* Title */}
                  <div className="space-y-1">
                    <div className="text-sm font-medium text-gray-800 leading-tight">
                      {award.title}
                    </div>
                    <div className="text-sm font-medium text-gray-800 leading-tight">
                      {award.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetLegalExperts;