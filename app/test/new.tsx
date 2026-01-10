import React, { useState, useEffect } from 'react';
import { Heart, BookOpen, Star, Users, Calendar, Award, ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HindiClubHero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const taglines = [
    "भाषा की शक्ति से जुड़ें, संस्कृति का सम्मान करें",
    "Connecting hearts through the beauty of Hindi language",
    "जहाँ शब्द मिलते हैं संस्कारों से",
    "Where tradition meets innovation"
  ];

  const stats = [
    { number: "500+", label: "Active Members", icon: Users, color: "from-orange-500 to-red-500" },
    { number: "75+", label: "Events Hosted", icon: Calendar, color: "from-rose-500 to-pink-500" },
    { number: "5+", label: "Years of Excellence", icon: Award, color: "from-pink-500 to-purple-500" },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-rose-50/30 to-pink-50/50"></div>
        <div className="absolute inset-0 bg-[url('/indian-mandala-pattern.png')] opacity-[0.02] bg-repeat"></div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-rose-300 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-300 rounded-full animate-bounce opacity-30"></div>
        
        {/* New floating elements */}
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/6 w-2.5 h-2.5 bg-orange-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-rose-400 rounded-full animate-ping opacity-30"></div>

        {/* Interactive cursor follower */}
        <div 
          className="absolute w-32 h-32 bg-gradient-to-r from-orange-200/10 to-pink-200/10 rounded-full blur-2xl pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
          }}
        ></div>

        {/* Enhanced Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-orange-200/20 to-rose-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-yellow-200/10 to-orange-200/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Hero Heading with Enhanced Logo */}
          <div className="flex flex-col items-center mb-12 animate-fade-in-up">
            <br/>
            <br/>
            <br/>
            
            {/* Enhanced Logo with animation */}
            <div className="group inline-flex items-center justify-center w-70 h-25 bg-gradient-to-br from-orange-500 via-rose-500 to-pink-500 rounded-2xl shadow-2xl mb-6 hover:scale-105 hover:rotate-1 transition-all duration-500 cursor-pointer">
              <img
                src="/VIT-Bhopal-logo.png"
                alt="VIT Bhopal Logo"
                className="w-70 h-25 object-contain group-hover:scale-110 transition-transform duration-500"
                style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.10))" }}
              />
              
              {/* Sparkle effects on hover */}
              <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" />
              </div>
              <div className="absolute -bottom-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
              </div>
            </div>

            {/* Enhanced Headings */}
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 cursor-default">
              Hindi Club
            </h1>
            <h2
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-rose-600 to-pink-600 bg-clip-text text-transparent hindi-text hover:scale-105 transition-transform duration-500 cursor-default"
              style={{
                fontFamily: "'Samarkan', Arial, sans-serif",
                lineHeight: "1.5",
                paddingTop: "0.75rem",
                paddingBottom: "0.25rem",
              }}
            >
              हिंदी क्लब
            </h2>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400 animate-pulse"></div>
              <Star className="w-6 h-6 text-yellow-500 animate-spin slow-spin" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-rose-400 animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced Subtitle with Animated Taglines */}
          <div className="space-y-6 mb-12 animate-fade-in-up delay-500">
            <p className="text-2xl md:text-3xl font-semibold text-gray-800">
              VIT Bhopal University
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Preserving and promoting Hindi language and culture through innovative
              programs and cultural excellence
            </p>
            
            {/* Animated rotating taglines */}
            <div className="h-16 flex items-center justify-center">
              <p 
                key={currentTagline}
                className="text-base md:text-lg text-gray-500 hindi-text animate-fade-in-up max-w-2xl mx-auto leading-relaxed transition-all duration-500"
              >
                {taglines[currentTagline]}
              </p>
            </div>
          </div>

          {/* New Stats Section */}
          <div className="mb-16 animate-fade-in-up delay-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className={`bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-white/50 hover:border-white/80 transform hover:-translate-y-2 transition-all duration-500`}>
                    <div className="flex items-center justify-center mb-4">
                      <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-full group-hover:scale-110 transition-transform duration-300`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium text-sm">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up delay-900">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Join Our Community
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-gray-300 text-gray-700 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-white/70 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <BookOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Explore Events
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="mb-12 animate-fade-in-up delay-1000">
            <div className="max-w-md mx-auto">
              <p className="text-sm text-gray-600 mb-4">Stay updated with our latest events and activities</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email..."
                  className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                />
                <Button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in-up delay-1200">
            <div className="flex flex-col items-center text-gray-400">
              <p className="text-sm mb-2">Discover More</p>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for slow spin animation */}
      <style jsx>{`
        @keyframes slow-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .slow-spin {
          animation: slow-spin 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HindiClubHero;