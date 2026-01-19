
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DESTINATIONS, EXPERIENCES, GUIDED_PATH, TRUST_POINTS } from '../constants';
// Added Heart to the imports from lucide-react
import { ArrowRight, Search, MapPin, Calendar, Users, Star, ArrowUpRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6]">
      {/* Immersive Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A34]/70 via-[#1E3A34]/40 to-transparent z-10" />
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80&w=2000" 
            alt="Kenya Highlands" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[#C5A059] font-bold tracking-[0.4em] mb-4 text-xs md:text-sm uppercase">
              Beyond Safaris • To Belonging
            </span>
            <h1 className="text-5xl md:text-8xl font-serif font-black text-white mb-8 leading-[0.9] tracking-tight">
              Discover Kenya.<br/><span className="italic font-normal">Experience Home.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Premium family travel experiences with a safe, guided pathway to land and home ownership.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/contact"
                className="w-full sm:w-auto bg-[#C5A059] hover:bg-white hover:text-[#1E3A34] text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-2xl flex items-center justify-center space-x-2 group"
              >
                <span>Plan Your Kenya Trip</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link 
                to="/ownership"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-[#1E3A34] px-10 py-5 rounded-full text-lg font-bold transition-all"
              >
                Explore Ownership
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Search Bar - Discovery Element */}
        <div className="absolute bottom-10 left-0 w-full z-30 px-6 hidden md:block">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-4 flex items-center space-x-4 border border-gray-100">
            <div className="flex-1 flex items-center space-x-3 px-4 border-r border-gray-100">
              <Search className="text-[#C5A059]" size={20} />
              <input type="text" placeholder="Where do you want to explore?" className="w-full bg-transparent outline-none text-sm font-medium py-3" />
            </div>
            <div className="flex-1 flex items-center space-x-3 px-4 border-r border-gray-100">
              <MapPin className="text-[#C5A059]" size={20} />
              <select className="w-full bg-transparent outline-none text-sm font-medium py-3 cursor-pointer">
                <option>All Destinations</option>
                <option>Maasai Mara</option>
                <option>Diani Coast</option>
                <option>Nairobi</option>
              </select>
            </div>
            <button className="bg-[#1E3A34] text-white px-10 py-3 rounded-xl font-bold hover:bg-black transition-colors">
              SEARCH
            </button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest block mb-4">Top Rated</span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#1E3A34] font-bold leading-tight">Explore Kenya</h2>
          </div>
          <Link to="/destinations" className="text-[#1E3A34] font-bold border-b-2 border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors">
            View All Destinations
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DESTINATIONS.map((dest, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-[400px] rounded-3xl overflow-hidden mb-6 shadow-xl">
                <img src={dest.image} alt={dest.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 right-4 flex space-x-2">
                  {dest.tags.map(tag => (
                    <span key={tag} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-serif mb-1">{dest.title}</h3>
                  <div className="flex items-center space-x-2">
                    <Star size={12} className="text-[#C5A059] fill-[#C5A059]" />
                    <span className="text-xs font-bold tracking-widest">4.9 RATING</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Travel Experiences */}
      <section className="py-24 bg-[#1E3A34] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest block mb-4">Curated Experiences</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold">Safaris & Tours</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {EXPERIENCES.map((exp, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden group transition-all"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-[#C5A059] text-white px-4 py-1 rounded-full text-xs font-bold">
                    {exp.price}
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center space-x-3 text-[#C5A059] mb-4">
                    {exp.icon}
                    <span className="text-xs font-bold tracking-widest uppercase">{exp.duration}</span>
                  </div>
                  <h3 className="text-2xl font-serif mb-6">{exp.title}</h3>
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                    Designed for diaspora families seeking a deep cultural connection along with premium comfort.
                  </p>
                  <button className="flex items-center space-x-2 font-bold text-sm group-hover:text-[#C5A059] transition-colors">
                    <span>VIEW DETAILS</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guided Path - The Soul of the App */}
      <section className="py-32 bg-[#F5F1E9] px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-serif text-[#1E3A34] mb-8">Your Journey with <br/><span className="italic">Ubuntu Asili</span></h2>
            <div className="w-24 h-1 bg-[#C5A059] mx-auto" />
          </div>

          <div className="space-y-40">
            {GUIDED_PATH.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-100px" }}
                className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <img src={step.image} alt={step.title} className="rounded-[3rem] shadow-2xl relative z-10 w-full h-[500px] object-cover" />
                    <div className="absolute -inset-4 bg-[#C5A059] rounded-[3.5rem] -z-0 group-hover:scale-105 transition-transform" />
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1E3A34] text-white mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif text-[#1E3A34] font-bold">{step.title}</h3>
                  <p className="text-xl text-gray-700 font-light leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                  <button className="text-[#C5A059] font-bold flex items-center space-x-2 group">
                    <span className="border-b-2 border-[#C5A059]">Learn how we guide you</span>
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Conversion */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-[4rem] p-12 md:p-24 shadow-2xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5F1E9] rounded-full -translate-y-1/2 translate-x-1/2 -z-0" />
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A34] mb-8">Safe. Legal. Transparent.</h2>
            <p className="text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
              We provide the framework that Bonfire Adventures doesn't: a transition from visitor to owner with zero legal risk.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {TRUST_POINTS.map((point, i) => (
                <div key={i} className="flex items-center space-x-4 bg-[#F9F8F6] p-6 rounded-2xl text-left border border-gray-50">
                  {point.icon}
                  <span className="font-bold text-[#1E3A34]">{point.label}</span>
                </div>
              ))}
            </div>

            <Link 
              to="/contact"
              className="inline-block bg-[#1E3A34] text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-[#C5A059] transition-all transform hover:scale-105 shadow-xl"
            >
              Start Your Journey Home
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-[#1E3A34] text-white pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <h3 className="text-4xl font-serif font-bold mb-8">Ubuntu Asili Africa</h3>
            <p className="text-gray-400 max-w-md text-lg font-light leading-relaxed mb-10">
              The premier gateway for African American families to explore, connect, and safely own land in Kenya. 
              We turn heritage travel into generational legacy.
            </p>
            <div className="flex space-x-6">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A059] transition-colors cursor-pointer">
                <Users size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A059] transition-colors cursor-pointer">
                <Heart size={18} />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-[#C5A059] font-bold text-xs uppercase tracking-widest mb-8">Experiences</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Maasai Mara Safaris</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Diani Beach Retreats</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Nairobi Tours</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Heritage Journeys</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#C5A059] font-bold text-xs uppercase tracking-widest mb-8">Ownership</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Land Vetting</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Legal Framework</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Build Packages</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Relocation Guide</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500 uppercase tracking-widest italic">Home is not a destination. It's a reconnection.</p>
          <p className="text-xs text-gray-500">© 2025 UBUNTU ASILI AFRICA. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
