import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useInView } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Plus, ChevronDown } from 'lucide-react';
import { StickyNavigation } from './StickyNavigation';

// --- Assets ---
const imgStudioInterior = "https://images.unsplash.com/photo-1760108232787-40ec40f9a706?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWduJTIwc3R1ZGlvJTIwaW50ZXJpb3IlMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjU5NTQzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080";
const imgMoodboard = "https://images.unsplash.com/photo-1716114543498-092396aee71e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Nlc3MlMjBtb29kYm9hcmQlMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjU5NTQzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080";
const imgPixels = "https://images.unsplash.com/photo-1758043322988-8d7c23adf20d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGVzaWduJTIwc2NyZWVuJTIwcGl4ZWxzJTIwbWFjcm98ZW58MXx8fHwxNzY1OTU0MzUxfDA&ixlib=rb-4.1.0&q=80&w=1080";
const imgConcrete = "https://images.unsplash.com/photo-1559965317-a430324b6780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZGV0YWlsJTIwY29uY3JldGUlMjBsaWdodHxlbnwxfHx8fDE3NjU5NTQzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080";

// Reusing brand textures/videos for consistency
const texConcrete = "https://images.unsplash.com/photo-1586718103570-2034695c9123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMHRleHR1cmUlMjBkYXJrJTIwbWluaW1hbHxlbnwxfHx8fDE3NjU4NjY0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080";
const vidWalking = "https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4";

// --- Components ---

// Interactive Components for "Ultra Think" Progressive Disclosure

// 1. Accordion Item for Lists
const ExpandableListItem = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Default to open on desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(true);
      else setIsOpen(false);
    };
    
    // Set initial state
    if (window.innerWidth >= 768) setIsOpen(true);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={() => {
          if (window.innerWidth < 768) setIsOpen(!isOpen);
        }} 
        className="flex items-center justify-between w-full py-4 text-left group md:cursor-default"
      >
        <h3 className="text-lg md:text-xl font-bold text-white md:text-white group-hover:text-[#D1D5DB] md:group-hover:text-white transition-colors pr-4">
          {title}
        </h3>
        <div className={`flex-shrink-0 text-white/70 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''} md:hidden`}>
          <Plus size={20} />
        </div>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="pb-6 text-[#9CA3AF] text-sm md:text-base leading-relaxed">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

// 2. Expandable Text for Paragraphs
const ExpandableText = ({ summary, details }: { summary: React.ReactNode, details: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Default to expanded on desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsExpanded(true);
      else setIsExpanded(false);
    };
    
    // Set initial state
    if (window.innerWidth >= 768) setIsExpanded(true);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="text-xl font-light text-white leading-snug">
        {summary}
      </div>
      
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden w-full"
      >
        <div className="pt-2 text-[#9CA3AF] text-base leading-relaxed">
          {details}
        </div>
      </motion.div>

      <button 
        onClick={() => setIsExpanded(!isExpanded)} 
        className="mt-2 inline-flex items-center gap-1 text-xs uppercase tracking-[2px] text-white/50 hover:text-white transition-colors md:hidden"
      >
        <span>{isExpanded ? 'Less' : 'Read More'}</span>
        <ChevronDown size={14} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
};

// Animated Box Component with Scroll Trigger
interface AnimatedBoxProps {
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  inView?: boolean;
  children?: React.ReactNode;
  type?: 'color' | 'image' | 'video';
  src?: string;
  initial?: any;
  animate?: any;
  transition?: any;
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({
  className = '',
  style,
  delay = 0,
  inView: propInView,
  children,
  type = 'color',
  src,
  initial,
  animate,
  transition
}) => {
  const ref = useRef(null);
  const defaultInView = useInView(ref, { once: true, margin: "-100px" });
  const isInView = propInView !== undefined ? propInView : defaultInView;

  // Random animation direction if not provided
  const directions = [
    { x: -100, y: 0 },
    { x: 100, y: 0 },
    { x: 0, y: -100 },
    { x: 0, y: 100 },
    { x: -50, y: -50 },
    { x: 50, y: 50 }
  ];
  // Simple deterministic "random" based on delay to avoid re-render jitters
  const dirIndex = Math.floor((delay * 10) % directions.length);
  const defaultDirection = directions[dirIndex];

  // Default variants
  const defaultInitial = initial || { 
    opacity: 0, 
    x: defaultDirection.x, 
    y: defaultDirection.y,
    scale: 0.9,
  };

  const defaultAnimate = animate || (isInView ? { 
    opacity: 1, 
    x: 0, 
    y: 0,
    scale: 1,
  } : {
    opacity: 0,
    x: defaultDirection.x,
    y: defaultDirection.y,
    scale: 0.9,
  });

  const defaultTransition = transition || { 
    duration: 1, 
    delay,
    ease: [0.22, 1, 0.36, 1]
  };

  return (
    <motion.div
      ref={ref}
      initial={defaultInitial}
      animate={defaultAnimate}
      transition={defaultTransition}
      className={`${className} bg-[#111827] border border-white/10`}
      style={style}
    >
      {type === 'image' && src && (
        <img 
          src={src} 
          alt="Texture" 
          className="w-full h-full object-cover"
        />
      )}
      
      {type === 'video' && src && (
        <div className="w-full h-full relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={src} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      )}

      {children}
    </motion.div>
  );
};

// Reusable ScrollSection Component
interface ScrollSectionProps {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  boxes: Array<{
    width: string;
    height: string;
    type: 'color' | 'image' | 'video';
    src?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    delay: number;
  }>;
  imageSrc?: string;
  imagePosition?: 'left' | 'right';
}

const ScrollSection: React.FC<ScrollSectionProps> = ({
  title,
  subtitle,
  content,
  boxes,
  imageSrc,
  imagePosition = 'right'
}) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-8 md:py-48 px-6 md:px-12 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative md:min-h-[600px] flex flex-col">
          {/* Animated Layered Boxes */}
          {boxes.map((box, index) => (
            <AnimatedBox
              key={index}
              className={`hidden md:block absolute shadow-2xl overflow-hidden border border-white/10`}
              style={{
                width: box.width,
                height: box.height,
                top: box.top,
                bottom: box.bottom,
                left: box.left,
                right: box.right
              }}
              delay={box.delay}
              inView={isInView}
              type={box.type}
              src={box.src}
            />
          ))}

          {/* Content Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative z-10 bg-[#111827]/90 backdrop-blur-md p-8 md:p-12 shadow-2xl max-w-2xl border border-white/10 md:mt-[100px]"
            style={{
              marginLeft: imagePosition === 'right' ? '0' : 'auto',
              marginRight: imagePosition === 'left' ? '0' : 'auto',
            }}
          >
            {subtitle && (
              <p className="text-sm font-mono uppercase tracking-widest text-[#9CA3AF] mb-4">
                {subtitle}
              </p>
            )}
            <h2 className="text-[clamp(1.75rem,6vw,2.25rem)] md:text-4xl font-normal mb-8 leading-tight text-white break-words">
              {title}
            </h2>
            <div className="text-lg md:text-xl text-[#D1D5DB] leading-relaxed font-light space-y-6">
              {content}
            </div>
          </motion.div>

          {/* Mobile-only Image Break (uses first box asset) */}
          {boxes[0] && (
            <div className="md:hidden relative w-full h-[300px] mt-12 z-10 shadow-2xl border border-white/10">
              <AnimatedBox 
                className="w-full h-full"
                type={boxes[0].type}
                src={boxes[0].src}
                delay={0.2}
              />
            </div>
          )}

          {/* Optional Main Image */}
          {imageSrc && (
            <AnimatedBox
              className={`hidden md:block absolute top-[200px] ${imagePosition === 'right' ? 'right-0' : 'left-0'} w-[45%] h-[400px] overflow-hidden shadow-2xl`}
              delay={0.8}
              inView={isInView}
              type="image"
              src={imageSrc}
            />
          )}
        </div>
      </div>
    </section>
  );
};

// --- Main Page Component ---

export const StudioProcessPage = () => {
  const navigate = useNavigate();
  const [hideLogo, setHideLogo] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Logo hiding logic
  useEffect(() => {
    const handleScroll = () => {
      // Logic could be more complex, but sticking to simple threshold for now
      // Or we can rely on IntersectionObserver like AboutPage if we had a specific target
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[radial-gradient(circle_at_center,#1F2937,#0B0F19)] font-['Inter',sans-serif] text-white overflow-x-hidden">
      <StickyNavigation variant="dark" showLogo={true} />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full pt-32 pb-16 px-6 md:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto">
          {/* Header Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-24"
          >
            <div className="flex items-center gap-2 mb-8 text-[#9CA3AF] text-sm uppercase tracking-widest">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Studio</span>
            </div>
            
            <h1 className="text-[clamp(2.75rem,12vw,6rem)] md:text-9xl font-normal leading-[0.9] tracking-tight mb-8 text-white break-words">
              Studio
            </h1>
            <p className="text-xl md:text-3xl max-w-3xl font-light text-[#D1D5DB] leading-tight">
              A multidisciplinary practice rooted in visual storytelling, systems thinking, and cultural strategy.
            </p>
          </motion.div>

          {/* Layered Hero Visuals */}
          <div className="flex flex-col gap-6 md:relative md:h-[700px]">
             {/* 1. Large Main Visual */}
             <AnimatedBox
               initial={{ x: -200, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 1, delay: 0.4 }}
               className="relative w-full h-[320px] md:absolute md:top-0 md:left-0 md:w-[65%] md:h-[500px] shadow-lg overflow-hidden"
               type="image"
               src={imgStudioInterior}
             />

             {/* 2. Secondary Texture */}
             <AnimatedBox
               initial={{ x: 200, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 1, delay: 0.6 }}
               className="relative w-full h-[260px] md:absolute md:top-[150px] md:right-0 md:w-[35%] md:h-[300px] shadow-lg"
               type="image"
               src={imgConcrete}
             />

             {/* 3. Accent Video */}
             <AnimatedBox
               initial={{ scale: 0, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.6, delay: 0.8 }}
               className="relative w-full h-[200px] md:absolute md:bottom-0 md:left-[20%] md:w-[25%] md:h-[200px] shadow-lg"
               type="video"
               src={vidWalking}
             />
          </div>
        </div>
      </section>

      {/* Section 1: About / Philosophy */}
      <ScrollSection
        title="Clarity from Chaos"
        subtitle="Philosophy"
        content={
          <ExpandableText
            summary="I am a designer who believes that clarity comes from chaos."
            details={
              <>
                <p className="mb-4">My work bridges the gap between raw expression and rigorous system design. By understanding the constraints of a problem, I find the freedom to explore solutions that are both functional and emotionally resonant.</p>
                <p>I don't just build interfaces; I build narratives that scale.</p>
              </>
            }
          />
        }
        boxes={[
          { width: "45%", height: "300px", type: "image", src: texConcrete, top: "-50px", left: "0", delay: 0 },
          { width: "55%", height: "250px", type: "image", src: imgMoodboard, top: "150px", right: "0", delay: 0.2 },
          { width: "30%", height: "200px", type: "image", src: imgPixels, bottom: "-80px", left: "10%", delay: 0.4 }
        ]}
        imagePosition="right"
      />

      {/* Section 2: Process Steps 1 & 2 */}
      <ScrollSection
        title="Discovery & Definition"
        subtitle="Process 01 — 02"
        content={
          <div className="flex flex-col">
            <ExpandableListItem title="01. Discovery & Immersion">
              Every project begins with deep listening. I immerse myself in the context, history, and goals of the work to ensure the foundation is solid before any visual decisions are made.
            </ExpandableListItem>
            <ExpandableListItem title="02. Definition & Strategy">
              Translating insights into actionable strategy. We define the 'why' and the 'how', establishing the constraints that will guide the creative exploration.
            </ExpandableListItem>
          </div>
        }
        boxes={[
          { width: "50%", height: "280px", type: "image", src: imgStudioInterior, top: "0", right: "5%", delay: 0 },
          { width: "35%", height: "220px", type: "image", src: texConcrete, top: "200px", left: "0", delay: 0.2 },
          { width: "40%", height: "180px", type: "video", src: vidWalking, bottom: "-60px", right: "15%", delay: 0.4 }
        ]}
        imagePosition="left"
      />

      {/* Section 3: Process Steps 3 & 4 */}
      <ScrollSection
        title="Exploration & Refinement"
        subtitle="Process 03 — 04"
        content={
          <div className="flex flex-col">
            <ExpandableListItem title="03. Exploration & Iteration">
              This is where "Small Paints" happens. Rapid, broad exploration of visual languages and interaction patterns. We value quantity in the early stages to find the highest quality direction.
            </ExpandableListItem>
            <ExpandableListItem title="04. Refinement & Systematization">
              Polishing the chosen direction and building the system around it. Documentation, component libraries, and guidelines ensure longevity and consistency.
            </ExpandableListItem>
          </div>
        }
        boxes={[
          { width: "60%", height: "350px", type: "image", src: imgPixels, top: "-40px", left: "0", delay: 0 },
          { width: "40%", height: "280px", type: "image", src: imgMoodboard, top: "180px", right: "5%", delay: 0.2 },
          { width: "25%", height: "150px", type: "image", src: texConcrete, bottom: "-50px", left: "20%", delay: 0.4 }
        ]}
        imagePosition="right"
      />

      {/* Section 4: Small Paints Philosophy */}
      <ScrollSection
        title="Small Paints Studio"
        subtitle="The Name"
        content={
          <ExpandableText
            summary="Small Paints is more than a name; it's a philosophy of scale."
            details={
              <>
                <p className="mb-4">It represents the belief that the smallest details—a single brushstroke, a micro-interaction, a typographic nuance—carry the weight of the entire system.</p>
                <p>We paint small to build big. By caring deeply about the atomic units of design, we create macro experiences that feel cohesive and intentional.</p>
              </>
            }
          />
        }
        boxes={[
          { width: "55%", height: "300px", type: "video", src: vidWalking, top: "0", right: "0", delay: 0 },
          { width: "45%", height: "250px", type: "image", src: imgConcrete, top: "180px", left: "5%", delay: 0.2 },
          { width: "30%", height: "180px", type: "image", src: imgPixels, bottom: "-70px", right: "20%", delay: 0.4 }
        ]}
        imagePosition="left"
      />

      {/* Section 5: Studio Profile */}
      <ScrollSection
        title="Studio Profile"
        subtitle="Context & Credentials"
        content={
           <div className="space-y-4">
             <div className="mb-8">
               <ExpandableText
                 summary="I work with cultural institutions, outdoor brands, and community organizations that prioritize authentic storytelling and systemic change over surface-level aesthetics."
                 details={<p className="pt-2 text-[#9CA3AF]">My background bridges marketing, athletics, and design, allowing me to speak the language of diverse stakeholders.</p>}
               />
             </div>
             
             <div className="flex flex-col">
               <ExpandableListItem title="Current Roles">
                 <ul className="space-y-3 text-[#D1D5DB]">
                   <li className="flex items-start gap-2">
                      <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-white shrink-0" />
                      Former Marketing Specialist at Wellesley College (AVI Foodsystems)
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-white shrink-0" />
                      Rowing Coach at Community Rowing Inc.
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-white shrink-0" />
                      Founder, Black Trail Collective
                   </li>
                 </ul>
               </ExpandableListItem>

               <ExpandableListItem title="Education">
                 <ul className="space-y-3 text-[#D1D5DB]">
                   <li>Drexel University, Westphal College of Media Arts & Design</li>
                   <li>NCAA Division I Men's Rowing Team</li>
                 </ul>
               </ExpandableListItem>

               <ExpandableListItem title="Recognition">
                 <ul className="space-y-3 text-[#D1D5DB]">
                   <li>Dad Vail Regatta Gold Medal (2021)</li>
                   <li>Drexel University Graphic Design Senior Showcase</li>
                 </ul>
               </ExpandableListItem>
               
               <ExpandableListItem title="Expertise">
                 <ul className="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 text-[#D1D5DB]">
                   <li>Brand Identity Systems</li>
                   <li>Publication Design</li>
                   <li>Web/Digital Platforms</li>
                   <li>Cultural Storytelling</li>
                   <li>Accessibility Design</li>
                   <li>Athletic Performance Strategy</li>
                 </ul>
               </ExpandableListItem>

               <ExpandableListItem title="Selected Clients & Projects">
                 <ul className="space-y-3 text-[#D1D5DB]">
                   <li>African American Museum of Philadelphia <span className="text-[#9CA3AF] text-xs ml-1">(Brand System)</span></li>
                   <li>ROAM International Skateboard Publication <span className="text-[#9CA3AF] text-xs ml-1">(Editorial)</span></li>
                   <li>Wellesley Fresh Dining <span className="text-[#9CA3AF] text-xs ml-1">(Seasonal Identity)</span></li>
                   <li>Drexel Senior Showcase <span className="text-[#9CA3AF] text-xs ml-1">(Web Dev)</span></li>
                 </ul>
               </ExpandableListItem>
             </div>
           </div>
        }
        boxes={[
          { width: "50%", height: "320px", type: "image", src: imgStudioInterior, top: "-30px", left: "0", delay: 0 },
          { width: "45%", height: "280px", type: "image", src: imgMoodboard, top: "160px", right: "0", delay: 0.2 },
          { width: "35%", height: "200px", type: "image", src: texConcrete, bottom: "-80px", left: "15%", delay: 0.4 }
        ]}
        imagePosition="right"
      />

      {/* Footer / Contact CTA */}
      <section className="relative py-40 px-6 md:px-12 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          {/* Background Layers */}
          <AnimatedBox
            className="absolute -top-32 left-0 w-[50%] h-[400px] shadow-lg border border-white/10"
            type="image"
            src={imgConcrete}
            delay={0}
          />
          <AnimatedBox
            className="absolute top-10 right-[5%] w-[45%] h-[350px] shadow-lg border border-white/10"
            type="video"
            src={vidWalking}
            delay={0.2}
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative z-10 bg-[#111827]/90 backdrop-blur-md p-12 md:p-16 shadow-2xl max-w-3xl mx-auto text-center border border-white/10"
          >
            <h2 className="text-4xl md:text-5xl font-normal mb-8 text-white">
              Ready to explore?
            </h2>
            <p className="text-xl text-[#D1D5DB] mb-12 max-w-lg mx-auto">
              View the selected works collection or get in touch to start a conversation.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 min-h-[44px] border-2 border-white/20 hover:border-white uppercase tracking-[2px] text-sm transition-colors text-white"
              >
                Get in Touch
              </button>
              <button
                onClick={() => navigate('/studio')}
                className="group px-8 py-4 min-h-[44px] bg-white text-black border-2 border-white hover:bg-transparent hover:text-white transition-all uppercase tracking-[2px] text-sm flex items-center justify-center gap-2"
              >
                View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
