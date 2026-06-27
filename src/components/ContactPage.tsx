import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Instagram, Send } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { StickyNavigation } from './StickyNavigation';

export const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: searchParams.get('subject') || '',
    message: ''
  });

  useEffect(() => {
    const subjectFromUrl = searchParams.get('subject');
    if (subjectFromUrl) {
      setFormData(prev => ({ ...prev, subject: subjectFromUrl }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || 'Portfolio inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:studio@carterbenoitmyer.com?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_center,#1F2937,#0B0F19)] text-white font-['Inter',sans-serif] overflow-x-hidden">
      {/* Navigation */}
      <StickyNavigation variant="dark" showLogo={true} />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-6xl md:text-9xl font-normal leading-[0.9] tracking-tight mb-8 text-white">
            Let's Create <span className="italic font-serif">Together</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#D1D5DB] max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can bring your vision to life through thoughtful design and collaboration.
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="mb-4 text-3xl font-light">Send a Message</h2>
              <p className="text-[#D1D5DB]">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2 text-[#9CA3AF]">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-white/10 text-white placeholder-white/30 focus:border-white focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2 text-[#9CA3AF]">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-white/10 text-white placeholder-white/30 focus:border-white focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm uppercase tracking-widest mb-2 text-[#9CA3AF]">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-white/10 text-white placeholder-white/30 focus:border-white focus:outline-none transition-colors"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2 text-[#9CA3AF]">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-transparent border border-white/10 text-white placeholder-white/30 focus:border-white focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 min-h-[44px] bg-white text-black border border-white text-[16px] font-bold uppercase tracking-[2px] hover:bg-transparent hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Right Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-12"
          >
            <div>
              <h2 className="mb-8 text-3xl font-light">Get in Touch</h2>
              <div className="space-y-8">
                
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center rounded-sm flex-shrink-0 text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 uppercase tracking-widest text-sm text-[#9CA3AF]">Email</h3>
                    <a href="mailto:studio@carterbenoitmyer.com" className="text-lg hover:text-[#D1D5DB] transition-colors">
                      studio@carterbenoitmyer.com
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center rounded-sm flex-shrink-0 text-white">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 uppercase tracking-widest text-sm text-[#9CA3AF]">Instagram</h3>
                    <a href="https://www.instagram.com/blacktrailcollective" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-[#D1D5DB] transition-colors">
                      @blacktrailcollective
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center rounded-sm flex-shrink-0 text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 uppercase tracking-widest text-sm text-[#9CA3AF]">Studio</h3>
                    <address className="not-italic leading-relaxed text-[#D1D5DB]">
                      Black Trail Collective<br />
                      Boston, MA
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="border border-white/10 p-8 rounded-lg bg-white/5 backdrop-blur-sm">
              <h3 className="font-medium mb-4 uppercase tracking-widest text-sm text-white">Office Hours</h3>
              <div className="space-y-2 text-[#D1D5DB]">
                <p className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-white">9:00 - 18:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-white">By Appointment</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-white">Closed</span>
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-medium mb-4 uppercase tracking-widest text-sm text-white">Follow Us</h3>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://www.instagram.com/blacktrailcollective"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-12 h-12 border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all flex items-center justify-center text-xs uppercase tracking-widest text-white min-h-[44px] min-w-[44px]"
                >
                  IG
                </a>
                <a
                  href="https://www.linkedin.com/in/carterbenoitmyer"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all flex items-center justify-center text-xs uppercase tracking-widest text-white min-h-[44px] min-w-[44px]"
                >
                  LI
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-16 px-6 md:px-12 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-[16/9] md:aspect-[21/9] bg-[#111827] rounded-lg overflow-hidden border border-white/10"
          >
            <iframe
              title="Black Trail Collective — Boston, MA"
              src="https://maps.google.com/maps?q=Boston,+Massachusetts&output=embed"
              className="w-full h-full min-h-[300px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};