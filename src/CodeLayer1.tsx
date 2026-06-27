import { defineProperties } from "figma:react";
import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

function ImageWithFallback(props) {
  const [didError, setDidError] = useState(false);
  const { src, alt, style, className, ...rest } = props;

  return didError ? (
    <div
      className={`inline-block bg-gray-900 text-center align-middle ${className ?? ""}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=="
          alt="Error loading image"
          {...rest}
          data-original-url={src}
        />
      </div>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={() => setDidError(true)}
    />
  );
}

// Reusable gallery item with hover overlay
function GalleryItem({item, delay = 0}) {
  return (
    <motion.div
      className="relative w-full h-full overflow-hidden rounded-lg bg-gray-900"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <ImageWithFallback
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover"
      />
      {/* overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/60 to-black/0"
      >
        <p className="text-sm text-gray-100 leading-snug" style={{letterSpacing: '-0.015em'}}>{item.desc}</p>
      </motion.div>
    </motion.div>
  )
}

export default function AAMPRebrandCase({
  accentColor = "#A78BFA",
  secondaryAccentColor = "#F472B6",
  animationDuration = 0.5,
  fontFamily = "'Inter', 'Arial', sans-serif",
  backgroundColor = "#030303"
}) {
  // AAMP Project Images
  // Replace these URLs with your actual image URLs from Figma
  const aampImages = {
    hero: {
      src: "https://yourfigmaimage1.url",
      alt: "AAMP Rebrand hero image",
      desc: "Entrance signage capturing the tone of the new brand"
    },
    brandIdentity1: {
      src: "https://yourfigmaimage2.url",
      alt: "AAMP brand identity element",
      desc: "Primary motif derived from archival patterns"
    },
    brandIdentity2: {
      src: "https://yourfigmaimage3.url",
      alt: "AAMP typography system",
      desc: "Custom type system balancing heritage and modernism"
    },
    environmentalGraphics: {
      src: "https://yourfigmaimage4.url",
      alt: "AAMP environmental graphics",
      desc: "Way-finding graphics inside the museum context"
    },
    applicationExample1: {
      src: "https://yourfigmaimage5.url",
      alt: "AAMP brand application example",
      desc: "Merchandise prototypes for the gift shop"
    },
    applicationExample2: {
      src: "https://yourfigmaimage6.url",
      alt: "AAMP signage example",
      desc: "Exterior banner system on the building facade"
    },
    buildingFacade: {
      src: "https://yourfigmaimage7.url",
      alt: "AAMP building facade",
      desc: "Final facade mock-up scheduled for 2025 install"
    },
    otherProject1: {
      src: "https://yourfigmaimage8.url",
      alt: "Drexel Senior Showcase",
      desc: ""
    },
    otherProject2: {
      src: "https://yourfigmaimage9.url",
      alt: "Wellesley Fresh Ecosystem",
      desc: ""
    },
    otherProject3: {
      src: "https://yourfigmaimage10.url",
      alt: "Vesper Boat Club",
      desc: ""
    }
  };
  
  return (
    <div 
      className="min-h-full flex flex-col text-gray-100"
      style={{ 
        fontFamily,
        backgroundColor: backgroundColor
      }}
    >
      {/* Navigation - Back to Work */}
      <div className="container mx-auto px-4 md:px-6 pt-8">
        <a 
          href="#" 
          className="inline-flex items-center text-gray-500 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft size={16} className="mr-3" />
          <span className="uppercase tracking-wider">Back to Work</span>
        </a>
      </div>
      
      {/* Title Section */}
      <section className="py-12 md:py-16 container mx-auto px-4 md:px-6">
        <motion.div 
          className="flex flex-col gap-6 md:gap-10 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: animationDuration }}
        >
          <div className="flex flex-col gap-4">
            <a 
              href="#" 
              className="text-lg md:text-xl underline tracking-tight text-gray-300 hover:text-white transition-colors w-fit"
              style={{ letterSpacing: "-0.02em" }}
            >
              Case Study
            </a>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter text-white"
              style={{ letterSpacing: "-0.03em" }}
            >
              AAMP Rebrand
            </h1>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="md:w-1/2">
              <p 
                className="text-lg md:text-xl text-gray-300"
                style={{ letterSpacing: "-0.02em", lineHeight: "130%" }}
              >
                A visual identity bridging <span className="font-bold text-white">ancestral heritage</span> and <span className="font-bold text-white">modern architecture</span>.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="h-12 px-10 border border-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-xs uppercase tracking-wider text-white">2024</span>
                </div>
                <div className="h-12 px-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs uppercase tracking-wider text-gray-900">Identity</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-gray-500 block mb-2">Role</span>
                <p className="text-white text-sm">Brand Designer, Strategist</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-gray-500 block mb-2">Tools</span>
                <p className="text-white text-sm">Figma, Adobe CC</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-gray-500 block mb-2">Deliverables</span>
                <p className="text-white text-sm">Logo, Type System, Environmental Graphics</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-gray-500 block mb-2">Tags</span>
                <p className="text-gray-500 text-sm">#culture #branding #environmental</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Image Gallery Section */}
      <section className="container mx-auto px-4 md:px-6 pb-16 md:pb-20">
        <div className="flex flex-col gap-4 md:gap-6 max-w-6xl mx-auto">
          {/* Full Width Image */}
          <div className="aspect-[2.1/1]">
            <GalleryItem item={aampImages.hero} delay={0.1} />
          </div>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="aspect-square"><GalleryItem item={aampImages.brandIdentity1} delay={0.2} /></div>
            <div className="aspect-square"><GalleryItem item={aampImages.brandIdentity2} delay={0.3} /></div>
          </div>
          
          {/* Full Width Image */}
          <div className="aspect-[2.1/1]">
            <GalleryItem item={aampImages.environmentalGraphics} delay={0.4} />
          </div>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="aspect-square"><GalleryItem item={aampImages.applicationExample1} delay={0.5} /></div>
            <div className="aspect-square"><GalleryItem item={aampImages.applicationExample2} delay={0.6} /></div>
          </div>
          
          {/* Full Width Image */}
          <div className="aspect-[2.1/1]">
            <GalleryItem item={aampImages.buildingFacade} delay={0.7} />
          </div>
        </div>
      </section>
      
      {/* Case Study Content */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl text-white mb-4">Project Overview</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              As the African American Museum of Philadelphia prepared for a <span className="font-bold text-white">brand evolution</span>. The goal was to move beyond generic cultural tropes and create a <span className="font-bold text-white">distinct visual language</span> that balances the weight of history with the forward-thinking perspective of the institution.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl text-white mb-4">The Challenge</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Existing identity relied on <span className="font-bold text-white">generic cultural tropes</span> that didn't reflect the museum's scholarly depth or architectural significance.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl text-white mb-4">Design Constraints</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Must honor history while signaling <span className="font-bold text-white">architectural modernity</span>; strict accessibility requirements; identity must work across all touchpoints.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl text-white mb-4">Key Insight</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Ground the visual language in <span className="font-bold text-white">specific historical motifs</span> rather than generalized patterns. Authenticity beats abstraction.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl text-white mb-4">Design Process</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Deep archival research, motif extraction from the collection, <span className="font-bold text-white">building scale</span>, and environmental mockups.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl text-white mb-4">Final Solution</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              A typographic system that reads as <span className="font-bold text-white">institutional yet authentic</span>, scalable from facade to mobile. Research-driven graphical elements with historical significance.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl text-white mb-4">System Thinking</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Templates for social, signage, print—all derived from a <span className="font-bold text-white">core type hierarchy</span>. The system expands as the museum grows.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl text-white mb-4">Results & Impact</h2>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-4">
              <li>• Grounded the visuals in <span className="font-bold text-white">specific historical motifs</span> rather than generic patterns, creating a system that works on <span className="font-bold text-white">large-scale building facades</span> while remaining legible on mobile screens.</li>
              <li>• Approved for implementation on the new <span className="font-bold text-white">building facade</span> in 2025.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl text-white mb-4">Reflection</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Would prototype <span className="font-bold text-white">environmental wayfinding</span> earlier in the process and test signage in actual museum conditions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Other Projects Section */}
      <section className="py-12 md:py-24 container mx-auto px-4 md:px-6 border-t border-gray-800">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: animationDuration, delay: 0.2 }}
        >
          <div className="flex flex-col gap-6 mb-12">
            <div className="w-full h-px bg-gray-800"></div>
            <h2 
              className="text-3xl md:text-4xl lg:text-6xl font-normal tracking-tighter text-white"
              style={{ letterSpacing: "-0.03em", lineHeight: "110%" }}
            >
              Other Projects
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Drexel Senior Showcase",
                category: "Web",
                image: aampImages.otherProject1
              },
              {
                title: "Wellesley Fresh Ecosystem",
                category: "Identity",
                image: aampImages.otherProject2
              },
              {
                title: "Vesper Boat Club",
                category: "Identity",
                image: aampImages.otherProject3
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animationDuration, delay: 0.3 + index * 0.1 }}
              >
                <div className="aspect-[5/4.8] mb-3 overflow-hidden rounded-md bg-gray-900">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <a 
                  href="#" 
                  className="flex items-center text-gray-400 hover:text-gray-200 transition-colors text-sm"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  <span>See Project</span>
                  <span className="ml-1">→</span>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* Connect Section */}
      <section className="py-8 md:py-12 container mx-auto px-4 md:px-6 mb-8">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: animationDuration, delay: 0.2 }}
        >
          <div className="flex flex-col gap-8">
            <div className="w-full h-px bg-gray-500"></div>
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tighter text-white"
              style={{ letterSpacing: "-0.03em", lineHeight: "110%" }}
            >
              Connect with us to explore your project's potential.
            </h2>
            <div className="w-full h-px bg-gray-500"></div>
          </div>
        </motion.div>
      </section>
      
      {/* Footer */}
      <footer className="py-16 md:py-24 bg-[#121212]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-lg uppercase tracking-[4px] text-white mb-12">Contact</h3>
              <div className="space-y-2">
                <p className="text-[#A1A1AA]">Black Trail Collective</p>
                <p className="text-[#A1A1AA]">Boston, MA</p>
                <a href="mailto:studio@carterbenoitmyer.com" className="text-white">studio@carterbenoitmyer.com</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg uppercase tracking-[4px] text-white mb-12">Social Media</h3>
              <div className="space-y-4">
                <a href="#" className="block text-white">Instagram</a>
                <a href="#" className="block text-white">LinkedIn</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg uppercase tracking-[4px] text-white mb-12">Studio</h3>
              <div className="space-y-4">
                <a href="#" className="block text-white uppercase font-bold tracking-[2px]">About</a>
                <a href="#" className="block text-white uppercase font-bold tracking-[2px]">Services</a>
                <a href="#" className="block text-white uppercase font-bold tracking-[2px]">Shop Archive</a>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-[#6A7282]">© Carter Benoît-Myer 2025</p>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Gradient Background Element */}
      <div 
        className="fixed inset-0 -z-10 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${accentColor}22 0%, transparent 40%),
                      radial-gradient(circle at 100% 50%, ${secondaryAccentColor}22 0%, transparent 40%)`
        }}
      ></div>
    </div>
  );
}

defineProperties(AAMPRebrandCase, {
  accentColor: {
    label: "Accent Color",
    type: "string",
    defaultValue: "#A78BFA"
  },
  secondaryAccentColor: {
    label: "Secondary Accent Color",
    type: "string",
    defaultValue: "#F472B6"
  },
  animationDuration: {
    label: "Animation Duration",
    type: "number",
    defaultValue: 0.5
  },
  fontFamily: {
    label: "Font Family",
    type: "string",
    defaultValue: "'Inter', 'Arial', sans-serif"
  },
  backgroundColor: {
    label: "Background Color",
    type: "string",
    defaultValue: "#030303"
  }
});