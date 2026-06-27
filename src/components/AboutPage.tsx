import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { StickyNavigation } from './StickyNavigation';
import imgCarterPhoto from "figma:asset/37edd938acdafefaa64232f910b7d03b055718fc.png";

// Unsplash Images
const imgAthleteSnow = "https://images.unsplash.com/photo-1642690167184-eb64f4ef469f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwb3V0ZG9vciUyMHNub3clMjBtb3VudGFpbnxlbnwxfHx8fDE3NjU4NjI1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080";
const imgRowing = "https://images.unsplash.com/photo-1685527200496-a699e1622b8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGF0aGxldGUlMjByb3dpbmclMjB3YXRlcnxlbnwxfHx8fDE3NjU4NjI1OTV8MA&ixlib=rb-4.1.0&q=80&w=1080";
const imgDesigner = "https://images.unsplash.com/photo-1747633130999-dbf3527b0639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdvcmtzcGFjZSUyMHN0dWRpb3xlbnwxfHx8fDE3NjU4NjI1OTV8MA&ixlib=rb-4.1.0&q=80&w=1080";
const imgTrail = "https://images.unsplash.com/photo-1734645495327-0651f5e83d6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwdHJhaWwlMjBuYXR1cmUlMjBmb3Jlc3R8ZW58MXx8fHwxNzY1ODYyNTk2fDA&ixlib=rb-4.1.0&q=80&w=1080";
const imgSnowboard = "https://images.unsplash.com/photo-1735749328596-397fc996df6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm93Ym9hcmQlMjBtb3VudGFibiUyMGFjdGlvbnxlbnwxfHx8fDE3NjU4NjI1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080";

// Background Textures & Videos
const texForest = "https://images.unsplash.com/photo-1668312635464-bc1e9741f281?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZm9yZXN0JTIwdGV4dHVyZSUyMG1vc3MlMjBuYXR1cmV8ZW58MXx8fHwxNzY1ODY2NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const texWater = "https://images.unsplash.com/photo-1715102448662-d8e1bf60e2a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwd2F0ZXIlMjByaXBwbGVzJTIwbGFrZXxlbnwxfHx8fDE3NjU4NjY0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080";
const texSnow = "https://images.unsplash.com/photo-1612792763093-3972ae3c485e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm93JTIwaWNlJTIwdGV4dHVyZSUyMGRhcmslMjBtb29keXxlbnwxfHx8fDE3NjU4NjY0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080";
const texConcrete = "https://images.unsplash.com/photo-1586718103570-2034695c9123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMHRleHR1cmUlMjBkYXJrJTIwbWluaW1hbHxlbnwxfHx8fDE3NjU4NjY0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080";
const texVinyl = "https://images.unsplash.com/photo-1670529275215-d952f9633a4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMGNsb3NlJTIwdXAlMjBkYXJrJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjU4NjY0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080";

const vidWalking = "https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4";
const vidTurtle = "https://res.cloudinary.com/demo/video/upload/c_scale,w_500/sea_turtle.mp4";

// Interactive Components for "Ultra Think" Progressive Disclosure

const ExpandableListItem = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center justify-between w-full py-4 text-left group"
      >
        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#D1D5DB] transition-colors pr-4">
          {title}
        </h3>
        <div className={`flex-shrink-0 text-white/70 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <Plus size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-[#9CA3AF] text-sm md:text-base leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ExpandableText = ({ summary, details }: { summary: React.ReactNode, details: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="text-xl font-light text-white leading-snug">
        {summary}
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden w-full"
          >
            <div className="pt-2 text-[#9CA3AF] text-base leading-relaxed">
              {details}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsExpanded(!isExpanded)} 
        className="mt-2 inline-flex items-center gap-1 text-xs uppercase tracking-[2px] text-white/50 hover:text-white transition-colors"
      >
        <span>{isExpanded ? 'Less' : 'Read More'}</span>
        <ChevronDown size={14} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
};

export const AboutPage = () => {
  const navigate = useNavigate();
  const [hideLogo, setHideLogo] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleBackToHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideLogo(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[radial-gradient(circle_at_center,#1F2937,#0B0F19)] overflow-x-hidden font-['Inter',sans-serif]">
      <StickyNavigation variant="dark" showLogo={!hideLogo} />
      
      <section className="relative min-h-screen w-full pt-32 pb-16 px-6 md:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-24"
          >
            <h1 className="text-6xl md:text-9xl font-normal leading-[0.9] tracking-tight mb-8 text-white">About</h1>
            <p className="text-xl md:text-[24px] leading-snug md:leading-[32px] text-[#D1D5DB] max-w-[609px]">
              Multidisciplinary designer. Blending athletics and cultural storytelling. Strategy, culture, and equity.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6 md:relative md:h-[700px]">
            <AnimatedBox
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative w-full h-[280px] md:absolute md:top-0 md:left-0 md:w-[60%] md:h-[400px] shadow-lg overflow-hidden"
              type="video"
              src={vidWalking}
            />

            <AnimatedBox
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative w-full h-[240px] md:absolute md:top-[200px] md:right-0 md:w-[45%] md:h-[320px] shadow-lg"
              type="image"
              src={texForest}
            />

            <AnimatedBox
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative w-full h-[200px] md:absolute md:bottom-0 md:left-[15%] md:w-[25%] md:h-[200px] shadow-lg"
              type="video"
              src={vidTurtle}
            />

            <motion.button
              ref={buttonRef}
              onClick={handleBackToHome}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="relative md:absolute md:bottom-8 md:right-8 inline-flex items-center gap-4 border border-white/10 px-6 py-3 min-h-[44px] text-[#D1D5DB] hover:bg-white hover:text-black transition-all duration-300 group bg-[#0B0F19]/90 backdrop-blur-sm z-10 self-start md:self-auto"
            >
              <span>VIEW WORK</span>
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </div>
        </div>
      </section>

      <ScrollSection
        title="My Approach"
        subtitle="Three Pillars"
        content={
          <div className="flex flex-col">
            <ExpandableListItem title="→ Virtual Freedom Fighter">
              Leveraging digital ecosystems to dismantle barriers. Building accessible tools for global competition.
            </ExpandableListItem>
            <ExpandableListItem title="→ Cultural Preservationist">
              Harmonizing authenticity with innovation. Adapting vital narratives to modern mediums.
            </ExpandableListItem>
            <ExpandableListItem title="→ Advocate for Sovereignty">
              Designing infrastructure for economic self-determination. Supporting ownership and generational wealth.
            </ExpandableListItem>
          </div>
        }
        boxes={[
          { width: "45%", height: "300px", type: "image", src: texSnow, top: "-50px", left: "0", delay: 0 },
          { width: "55%", height: "250px", type: "video", src: vidWalking, top: "150px", right: "0", delay: 0.2 },
          { width: "30%", height: "200px", type: "image", src: texConcrete, bottom: "-80px", left: "10%", delay: 0.4 }
        ]}
        imageSrc={imgAthleteSnow}
        imagePosition="right"
      />

      <ScrollSection
        title="Process"
        content={
          <ExpandableText 
            summary="Understanding the system—not just the surface."
            details="Researching context. Identifying constraints. Designing evolving frameworks. Prepare. Execute. Refine. Repeat."
          />
        }
        boxes={[
          { width: "50%", height: "280px", type: "video", src: vidWalking, top: "0", right: "5%", delay: 0 },
          { width: "35%", height: "220px", type: "image", src: texForest, top: "200px", left: "0", delay: 0.2 },
          { width: "40%", height: "180px", type: "video", src: vidTurtle, bottom: "-60px", right: "15%", delay: 0.4 }
        ]}
        imageSrc={imgTrail}
        imagePosition="left"
      />

      <ScrollSection
        title="Forged by Fire"
        content={
          <ExpandableText
            summary="Discipline meets cultural reclamation."
            details={
              <>
                Shaped by Drexel and NCAA Division I Rowing. Endurance and execution.
              </>
            }
          />
        }
        boxes={[
          { width: "60%", height: "350px", type: "image", src: texWater, top: "-40px", left: "0", delay: 0 },
          { width: "40%", height: "280px", type: "video", src: vidWalking, top: "180px", right: "5%", delay: 0.2 },
          { width: "25%", height: "150px", type: "image", src: texConcrete, bottom: "-50px", left: "20%", delay: 0.4 }
        ]}
        imageSrc={imgRowing}
        imagePosition="right"
      />

      <ScrollSection
        title="Music"
        content={
          <ExpandableText
            summary="Music drives creation. Matching genres to design intent."
            details={
              <>
                <div className="mb-2">Projects built on sonic foundations.</div>
                <div>Favorite: Big Thief. Check out Super Bass and my Spotify Wrapped.</div>
              </>
            }
          />
        }
        boxes={[
          { width: "55%", height: "300px", type: "video", src: vidTurtle, top: "0", right: "0", delay: 0 },
          { width: "45%", height: "250px", type: "image", src: texVinyl, top: "180px", left: "5%", delay: 0.2 },
          { width: "30%", height: "180px", type: "video", src: vidWalking, bottom: "-70px", right: "20%", delay: 0.4 }
        ]}
        imageSrc={imgDesigner}
        imagePosition="left"
      />

      <ScrollSection
        title="The Work"
        content={
          <div className="flex flex-col">
            <div className="text-xl font-light text-white mb-4">Design is connection.</div>
            <ExpandableListItem title="Black Trail Collective">
              Bridging urban culture and outdoors. Trails start in the city.
            </ExpandableListItem>
            <ExpandableListItem title="Mothering Our Nature">
              Stewardship. Nurturing land and stories.
            </ExpandableListItem>
          </div>
        }
        boxes={[
          { width: "50%", height: "320px", type: "image", src: texConcrete, top: "-30px", left: "0", delay: 0 },
          { width: "45%", height: "280px", type: "video", src: vidWalking, top: "160px", right: "0", delay: 0.2 },
          { width: "35%", height: "200px", type: "image", src: texForest, bottom: "-80px", left: "15%", delay: 0.4 }
        ]}
        imageSrc={imgSnowboard}
        imagePosition="right"
      />

      <ScrollSection
        title="Skills"
        content={
          <>
            <p className="text-[#D1D5DB]">
              Expert: Adobe, Figma, Capture One. Experienced: Squarespace, Wix.
            </p>
          </>
        }
        boxes={[
          { width: "40%", height: "280px", type: "video", src: vidWalking, top: "0", right: "10%", delay: 0 },
          { width: "50%", height: "240px", type: "image", src: texWater, top: "150px", left: "0", delay: 0.2 },
          { width: "35%", height: "180px", type: "video", src: vidTurtle, bottom: "-60px", right: "5%", delay: 0.4 }
        ]}
        imageSrc={imgCarterPhoto}
        imagePosition="left"
      />

      <section className="relative py-32 px-6 md:px-12 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 md:relative md:min-h-[520px]">
            <AnimatedBox
              className="relative w-full h-[220px] md:absolute md:-top-20 md:-left-10 md:w-[40%] md:h-[300px] shadow-lg"
              type="image"
              src={texVinyl}
              delay={0}
            />
            <AnimatedBox
              className="relative w-full h-[200px] md:absolute md:top-40 md:-right-10 md:w-[35%] md:h-[250px] shadow-lg"
              type="video"
              src={vidTurtle}
              delay={0.2}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative z-10 bg-[#111827] p-8 md:p-12 shadow-2xl border border-white/10"
            >
              <h2 className="mb-8 text-white text-3xl font-bold">
                Right now I am...
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start border-t border-white/10 pt-4">
                  <span className="text-sm text-gray-400 sm:min-w-[120px] shrink-0">Listening to:</span>
                  <span className="text-sm text-white break-words">A Love Supreme by John Coltrane</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start border-t border-white/10 pt-4">
                  <span className="text-sm text-gray-400 sm:min-w-[120px] shrink-0">Dreaming of:</span>
                  <span className="text-sm text-white break-words">Black Land Sovereignty</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start border-t border-white/10 pt-4">
                  <span className="text-sm text-gray-400 sm:min-w-[120px] shrink-0">Eating:</span>
                  <span className="text-sm text-white break-words">Like Bourdain</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start border-t border-white/10 pt-4">
                  <span className="text-sm text-gray-400 sm:min-w-[120px] shrink-0">Training for:</span>
                  <span className="text-sm text-white break-words">The Long Game</span>
                </div>
              </div>
            </motion.div>

            <AnimatedBox
              className="relative w-full h-[180px] md:absolute md:-bottom-20 md:left-[10%] md:w-[30%] md:h-[200px] shadow-lg"
              type="video"
              src={vidWalking}
              delay={0.6}
            />
          </div>
        </div>
      </section>

      <ScrollSection
        title="Building Now"
        content={
          <div className="flex flex-col">
            <div className="text-xl font-light text-white mb-4">Wearing many hats:</div>
            <ExpandableListItem title="Leading">
              Leading brand systems.
            </ExpandableListItem>
            <ExpandableListItem title="Coaching">
              Coaching rowers.
            </ExpandableListItem>
            <ExpandableListItem title="Designing">
              Designing snowboard graphics.
            </ExpandableListItem>
          </div>
        }
        boxes={[
          { width: "45%", height: "300px", type: "video", src: vidWalking, top: "-40px", left: "5%", delay: 0 },
          { width: "50%", height: "260px", type: "image", src: texSnow, top: "150px", right: "0", delay: 0.2 },
          { width: "30%", height: "180px", type: "video", src: vidTurtle, bottom: "-70px", left: "20%", delay: 0.4 }
        ]}
        imageSrc={imgAthleteSnow}
        imagePosition="right"
      />

      <section className="relative py-40 px-6 md:px-12 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto relative flex flex-col gap-8 md:block md:min-h-[600px]">
          <AnimatedBox
            className="relative w-full h-[240px] md:absolute md:-top-32 md:left-0 md:w-[50%] md:h-[400px] shadow-lg"
            type="image"
            src={texConcrete}
            delay={0}
          />
          <AnimatedBox
            className="relative w-full h-[220px] md:absolute md:top-10 md:right-[5%] md:w-[45%] md:h-[350px] shadow-lg"
            type="video"
            src={vidWalking}
            delay={0.2}
          />
          <AnimatedBox
            className="relative w-full h-[200px] md:absolute md:-bottom-20 md:left-[15%] md:w-[35%] md:h-[250px] shadow-lg"
            type="image"
            src={texForest}
            delay={0.4}
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative z-10 bg-[#111827] p-8 md:p-12 shadow-2xl max-w-3xl mx-auto border border-white/10"
          >
            <h2 className="mb-4 text-white text-4xl font-bold">
              Where I'm Going
            </h2>
            <p className="text-[#D1D5DB] mb-3 text-lg">
              Positioned for Creative Direction in outdoor sports.
            </p>
            <p className="text-[#D1D5DB] mb-8 text-lg">
              Understanding culture. Honoring heritage. Dismantling outdated perceptions.
            </p>

            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-4 border border-white/10 px-10 py-5 min-h-[44px] text-[#D1D5DB] hover:bg-white hover:text-black transition-all duration-300 group"
            >
              <span className="text-lg">Let's Build Together</span>
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

interface ScrollSectionProps {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  boxes: Array<{
    width: string;
    height: string;
    type: 'color' | 'image' | 'video';
    src?: string;
    color?: string;
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
      className="relative py-6 md:py-48 px-6 md:px-12 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative md:min-h-[70vh] flex flex-col md:block justify-center">
          {boxes.map((box, index) => (
            <AnimatedBox
              key={index}
              className={`hidden md:block absolute shadow-lg overflow-hidden`}
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

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`relative z-10 bg-[#111827]/90 backdrop-blur-md p-8 md:p-12 shadow-2xl max-w-2xl border border-white/10 mb-6 md:mb-0 md:mt-[100px] ${
              imagePosition === 'left' ? 'md:ml-auto' : 'md:mr-auto'
            }`}
          >
            {subtitle && (
              <p className="text-sm uppercase tracking-[4px] text-[#9CA3AF] mb-4 font-medium">
                {subtitle}
              </p>
            )}
            <h2 className="text-[clamp(2rem,8vw,3.5rem)] md:text-[56px] leading-[1.1] tracking-[-1.2px] text-white font-bold mb-8 break-words">
              {title}
            </h2>
            <div className="max-w-xl text-[#D1D5DB]">
              {content}
            </div>
          </motion.div>

          {imageSrc && (
            <AnimatedBox
              className={`w-full h-[300px] md:absolute md:top-[50%] md:-translate-y-1/2 ${imagePosition === 'right' ? 'md:right-0' : 'md:left-0'} md:w-[45%] md:h-[500px] overflow-hidden shadow-2xl mt-0 md:mt-0`}
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

  const directions = [
    { x: -100, y: 0 },
    { x: 100, y: 0 },
    { x: 0, y: -100 },
    { x: 0, y: 100 }
  ];
  const defaultDirection = directions[Math.floor(Math.random() * directions.length)];

  const defaultInitial = initial || { 
    opacity: 0, 
    x: defaultDirection.x, 
    y: defaultDirection.y,
    scale: 0.9,
    rotate: Math.random() > 0.5 ? -2 : 2
  };

  const defaultAnimate = animate || (isInView ? { 
    opacity: 1, 
    x: 0, 
    y: 0,
    scale: 1,
    rotate: 0
  } : {
    opacity: 0,
    x: defaultDirection.x,
    y: defaultDirection.y,
    scale: 0.9,
    rotate: Math.random() > 0.5 ? -2 : 2
  });

  const defaultTransition = transition || { 
    duration: 1, 
    delay,
    ease: [0.22, 1, 0.36, 1]
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={defaultInitial}
      animate={defaultAnimate}
      transition={defaultTransition}
    >
      {type === 'video' && src ? (
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={src} type="video/mp4" />
        </video>
      ) : type === 'image' && src ? (
        <img src={src} alt="Box" className="w-full h-full object-cover" />
      ) : (
        children
      )}
    </motion.div>
  );
};
