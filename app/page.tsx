"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const clients = [
    {
      name: "Queen of the Valley LLC",
      url: "https://www.queenofthevalleyllc.com",
      description: "Community Vending Services",
      niche: "Arizona-based family-owned vending machine service offering free candy machine placement for local businesses with charitable partnerships.",
      category: "client",
      icon: "👑"
    },
    {
      name: "PR1ME Sports",
      url: "https://pr1mesp.com",
      description: "Sports Coaching Facility",
      niche: "Professional sports facility platform offering 1-on-1 coaching and group training sessions for athletes looking to improve their game.",
      category: "client",
      icon: "⚡"
    },
    {
      name: "WanaWork",
      url: "https://wanawork.com",
      description: "Job Search Platform",
      niche: "Modern job search platform connecting job seekers with opportunities through streamlined application processes and career resources.",
      category: "client",
      icon: "🎯"
    },
    {
      name: "Junior's Custom Towing",
      url: "https://juniorscustomtowing.com",
      description: "Emergency Towing Services",
      niche: "24/7 emergency towing and roadside assistance with real-time dispatch and GPS tracking for the greater Phoenix area.",
      category: "client",
      icon: "🛻"
    },
    {
      name: "ProducedByTyler",
      url: "https://producedtyler.com/landing",
      description: "Music Production Studio",
      niche: "Professional music production platform featuring artist portfolios, booking systems, and project management tools.",
      category: "client",
      icon: "🎵"
    },
    {
      name: "Alta Personnel",
      url: "https://alta-personnel.com",
      description: "Staffing & Recruitment",
      niche: "Comprehensive staffing solutions with automated matching systems serving multiple industries with temp and permanent placements.",
      category: "client",
      icon: "💼"
    },
    {
      name: "AZ PVA",
      url: "https://azpva.vercel.app",
      description: "Veterans Support Demo",
      niche: "Demo platform showcasing accessibility-first design and community support features for veterans organizations and nonprofits.",
      category: "demo",
      icon: "🇺🇸"
    },
    {
      name: "Mindful Creations",
      url: "https://mindful-creations.org",
      description: "Grief & Mindfulness Support",
      niche: "Nonprofit platform offering grief counseling resources, mindfulness programs, and safe community support networks.",
      category: "client",
      icon: "🌸"
    },
    {
      name: "AZ Preferred Flooring",
      url: "https://azpreferredflooring.com",
      description: "Flooring Installation Services",
      niche: "Professional flooring contractor platform with project galleries and estimate calculators for residential and commercial projects.",
      category: "client",
      icon: "🏗️"
    },
    {
      name: "Specialty Netwerks",
      url: "https://specialtynetwerks.com",
      description: "Network Solutions Provider",
      niche: "Enterprise networking and IT infrastructure services with comprehensive network solutions for businesses of all sizes.",
      category: "client",
      icon: "🌐"
    }
  ];

  const demoApps = [
    {
      name: "Medical Booking App",
      url: "https://medical-booking-app-bay.vercel.app/login",
      description: "Healthcare Appointment System",
      niche: "Comprehensive medical practice management with patient portals, appointment scheduling, and telemedicine capabilities.",
      category: "demo",
      icon: "🏥"
    },
    {
      name: "Vellari Platform",
      url: "https://vellari.vercel.app",
      description: "Business Management Suite",
      niche: "Multi-tenant business management platform showcasing dashboard analytics and enterprise-level features.",
      category: "demo",
      icon: "📊"
    },
    {
      name: "SEO SaaS",
      url: "https://seo-sass.vercel.app",
      description: "SEO Analytics SaaS Platform",
      niche: "Complete SaaS solution for search engine optimization with keyword tracking, competitor analysis, and performance reporting.",
      category: "saas",
      icon: "📈"
    }
  ];

  const allProjects = [...clients, ...demoApps];
  
  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  const filterOptions = [
    { key: 'all', label: 'All Projects', count: allProjects.length },
    { key: 'saas', label: 'SaaS Platforms', count: [...clients, ...demoApps].filter(c => c.category === 'saas').length },
    { key: 'client', label: 'Client Sites', count: clients.filter(c => c.category === 'client').length },
    { key: 'demo', label: 'Demo Apps', count: demoApps.length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.15),transparent_70%)] animate-pulse"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.15),transparent_70%)] animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(236,72,153,0.1),transparent_60%)] animate-pulse" style={{animationDelay: '4s'}}></div>
      
      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
      <div className="fixed top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '3s'}}></div>
      <div className="fixed bottom-32 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '5s'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Header Section */}
        <header className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo Section */}
          <div className="mb-8 sm:mb-10 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition duration-500 animate-pulse"></div>
              
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Premium Digital Solutions
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90 font-bold">
              Powering Local Businesses
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-8 sm:mb-10 leading-relaxed max-w-4xl mx-auto font-medium">
            Discover our portfolio of cutting-edge websites, SaaS platforms, and digital solutions that drive growth and connect communities across Arizona.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
            <a href="https://calendly.com/fullstackservicesllc/15min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg border border-blue-400/20 backdrop-blur-sm hover:shadow-blue-500/25">
                📞 Free Consultation
              </button>
            </a>
            <a href="https://fullstackservicesllc.net" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg border border-purple-400/20 backdrop-blur-sm hover:shadow-purple-500/25">
                🚀 Visit Our Agency
              </button>
            </a>
          </div>
        </header>

        {/* Filter Navigation */}
        <nav className={`mb-12 sm:mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-2 border border-white/10 shadow-2xl">
            <div className="flex flex-wrap gap-2 justify-center">
              {filterOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => setActiveFilter(option.key)}
                  className={`px-4 sm:px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === option.key
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {option.label}
                  <span className="ml-2 text-xs opacity-75">({option.count})</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Projects Grid */}
        <section className={`mb-16 sm:mb-20 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Category Badge */}
                <div className="relative z-10">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4 ${
                    project.category === 'saas' ? 'bg-gradient-to-r from-blue-500 to-purple-500' :
                    project.category === 'demo' ? 'bg-gradient-to-r from-pink-500 to-red-500' :
                    'bg-gradient-to-r from-green-500 to-blue-500'
                  }`}>
                    <span className="text-lg">{project.icon}</span>
                    {project.category === 'saas' ? 'SaaS PLATFORM' :
                     project.category === 'demo' ? 'DEMO APP' : 'CLIENT PROJECT'}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                    {project.name}
                  </h3>
                  
                  <p className="text-base sm:text-lg text-blue-300 font-semibold mb-4">
                    {project.description}
                  </p>
                  
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed line-clamp-3">
                    {project.niche}
                  </p>

                  {/* View Project Button */}
                  <div className="mt-6 flex items-center text-blue-400 font-semibold text-sm group-hover:text-blue-300 transition-colors duration-300">
                    <span>View Project</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className={`transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Ready to Elevate Your Business?
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
                Join our network of successful businesses. From concept to launch, we build premium digital solutions that drive growth and connect communities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <a href="https://calendly.com/fullstackservicesllc/15min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 text-lg border border-green-400/20 backdrop-blur-sm hover:shadow-green-500/25">
                    📅 Book 15-Min Discovery Call
                  </button>
                </a>
                <a href="https://fullstackservicesllc.net" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 text-lg border border-purple-400/20 backdrop-blur-sm hover:shadow-purple-500/25">
                    🌟 Explore Our Services
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-16 sm:mt-20 lg:mt-24 border-t border-white/10 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-sm sm:text-base text-white/60 font-medium">
            &copy; {new Date().getFullYear()} Full Stack Services LLC. Crafting Premium Digital Experiences.
          </p>
        </div>
      </footer>
    </div>
  );
}