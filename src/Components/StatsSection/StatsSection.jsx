import React, { useEffect, useState, useRef } from 'react';
import { Users, Briefcase, Clock, Award } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 1,
      value: 300000,
      label: 'CUSTOMERS',
      icon: <Users className="w-8 h-8 text-[#e1bd53]" />,
      suffix: 'Happy Families'
    },
    {
      id: 2,
      value: 1500,
      label: 'EMPLOYEES',
      icon: <Briefcase className="w-8 h-8 text-[#e1bd53]" />,
      suffix: 'Dedicated Team'
    },
    {
      id: 3,
      value: 31,
      label: 'EXPERIENCE',
      icon: <Clock className="w-8 h-8 text-[#e1bd53]" />,
      suffix: 'Years of Excellence'
    },
    {
      id: 4,
      value: 30,
      label: 'AWARDS',
      icon: <Award className="w-8 h-8 text-[#e1bd53]" />,
      suffix: 'Industry Recognition'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-white text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <StatCard 
              key={stat.id}
              stat={stat}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          {/* <p className="text-gray-400 text-lg max-w-2xl mx-auto font-[Montserrat]">
            Three decades of trust, innovation, and excellence in real estate
          </p> */}
        </div>
      </div>
    </div>
  );
};

// Counter Hook
const useCounter = (end, isVisible, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return count;
};

const StatCard = ({ stat, isVisible }) => {
  const count = useCounter(stat.value, isVisible);
  const formattedCount = count.toLocaleString();

  return (
    <div className="group relative bg-[#000075] p-8 rounded-2xl border border-[#1e2255] hover:border-[#e1bd53] transition-all duration-500 hover:shadow-2xl hover:shadow-[#e1bd53]/10 hover:-translate-y-2">
      <div className="absolute inset-0 bg-[#e1bd53] opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>
      
      <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500">
        <div className="p-4 bg-[#0e113a] rounded-full border border-[#2a2f6e] group-hover:border-[#e1bd53] transition-colors duration-300">
          {stat.icon}
        </div>
      </div>

      <div className="text-center">
        <div className="text-4xl lg:text-5xl font-bold mb-2 font-[Montserrat] tracking-tight text-white">
          {isVisible ? `${formattedCount}+` : '0+'}
        </div>
        
        <div className="text-sm font-semibold text-[#e1bd53] tracking-wider mb-3 font-[Montserrat]">
          {stat.label}
        </div>
        
        <div className="text-gray-300 text-sm font-[Montserrat]">
          {stat.suffix}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-16 h-0.5 bg-[#e1bd53] transition-all duration-500"></div>
    </div>
  );
};

export default StatsSection;