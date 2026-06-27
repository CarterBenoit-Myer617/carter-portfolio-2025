import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { StickyNavigation } from './StickyNavigation';
import { PROJECTS, sortProjects, Project } from '../data/cms';

// Helper to handle local project mapping and defaults
const applyProjectOverrides = (items: Project[]): Project[] => {
  return items.map(p => {
    const localProject = PROJECTS.find(local => local.slug === p.slug);
    // Use local asset if available (preserves Figma imports)
    const base = localProject ? { ...p, src: localProject.src, type: localProject.type } : p;
    return base;
  });
};

export const StudioPage = () => {
  const navigate = useNavigate();
  const [hideLogo, setHideLogo] = useState(false);
  const [projects, setProjects] = useState<Project[]>(() => applyProjectOverrides(PROJECTS));
  
  const sortedProjects = React.useMemo(() => sortProjects(projects), [projects]);
  
  useEffect(() => {
    const handleScroll = () => {
      setHideLogo(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderItems = () => {
    const items = [];
    let projectIndex = 0;
    
    const pattern = [
      { type: 'full', height: 'md:h-[70vh] h-[50vh]' },
      { type: 'left', height: 'md:h-[70vh] h-[50vh]', width: 'w-[90%]' },
      { type: 'right', height: 'md:h-[70vh] h-[50vh]', width: 'w-[91%]' },
      { type: 'split', height: 'md:h-[70vh] h-auto' },
      { type: 'full', height: 'md:h-[70vh] h-[50vh]' },
      { type: 'right', height: 'md:h-[70vh] h-[50vh]', width: 'w-[87%]' },
      { type: 'full', height: 'md:h-[70vh] h-[50vh]' },
      { type: 'split', height: 'md:h-[70vh] h-auto' },
      { type: 'left', height: 'md:h-[70vh] h-[50vh]', width: 'w-[88%]' },
      { type: 'full', height: 'md:h-[70vh] h-[50vh]' },
      { type: 'right', height: 'md:h-[70vh] h-[50vh]', width: 'w-[94%]' },
      { type: 'left', height: 'md:h-[70vh] h-[50vh]', width: 'w-[92%]' },
      { type: 'split', height: 'md:h-[70vh] h-auto' },
      { type: 'full', height: 'md:h-[70vh] h-[50vh]' },
      { type: 'right', height: 'md:h-[70vh] h-[50vh]', width: 'w-[92%]' },
      { type: 'full', height: 'md:h-[70vh] h-[50vh]' },
      { type: 'left', height: 'md:h-[70vh] h-[50vh]', width: 'w-[85%]' },
      { type: 'split', height: 'md:h-[70vh] h-auto' },
      { type: 'right', height: 'md:h-[70vh] h-[50vh]', width: 'w-[89%]' },
      { type: 'full', height: 'md:h-[70vh] h-[50vh]' },
      { type: 'left', height: 'md:h-[70vh] h-[50vh]', width: 'w-[93%]' },
      { type: 'split', height: 'md:h-[70vh] h-auto' },
      { type: 'full', height: 'md:h-[70vh] h-[50vh]' },
      { type: 'right', height: 'md:h-[70vh] h-[50vh]', width: 'w-[86%]' },
      { type: 'left', height: 'md:h-[70vh] h-[50vh]', width: 'w-[88%]' },
      { type: 'full', height: 'md:h-[70vh] h-[50vh]' },
      { type: 'split', height: 'md:h-[70vh] h-auto' },
      { type: 'right', height: 'md:h-[70vh] h-[50vh]', width: 'w-[91%]' },
      { type: 'full', height: 'md:h-[70vh] h-[50vh]' },
      { type: 'left', height: 'md:h-[70vh] h-[50vh]', width: 'w-[84%]' },
      { type: 'right', height: 'md:h-[70vh] h-[50vh]', width: 'w-[95%]' },
      { type: 'split', height: 'md:h-[70vh] h-auto' },
      { type: 'full', height: 'md:h-[70vh] h-[50vh]' },
      { type: 'left', height: 'md:h-[70vh] h-[50vh]', width: 'w-[90%]' },
      { type: 'right', height: 'md:h-[70vh] h-[50vh]', width: 'w-[87%]' },
      { type: 'full', height: 'md:h-[70vh] h-[50vh]' },
      { type: 'split', height: 'md:h-[70vh] h-auto' },
      { type: 'right', height: 'md:h-[70vh] h-[50vh]', width: 'w-[92%]' },
      { type: 'full', height: 'md:h-[70vh] h-[50vh]' },
      { type: 'left', height: 'md:h-[70vh] h-[50vh]', width: 'w-[89%]' },
      { type: 'split', height: 'md:h-[70vh] h-auto' },
      { type: 'full', height: 'md:h-[70vh] h-[50vh]' },
      { type: 'right', height: 'md:h-[70vh] h-[50vh]', width: 'w-[85%]' },
      { type: 'left', height: 'md:h-[70vh] h-[50vh]', width: 'w-[93%]' },
      { type: 'full', height: 'md:h-[70vh] h-[50vh]' },
      { type: 'split', height: 'md:h-[70vh] h-auto' },
      { type: 'right', height: 'md:h-[70vh] h-[50vh]', width: 'w-[88%]' },
      { type: 'full', height: 'md:h-[70vh] h-[50vh]' },
      { type: 'left', height: 'md:h-[70vh] h-[50vh]', width: 'w-[86%]' },
      { type: 'split', height: 'md:h-[70vh] h-auto' },
    ];

    let patternIndex = 0;
    
    while (projectIndex < sortedProjects.length) {
      const layoutType = pattern[patternIndex % pattern.length];
      const currentProject = sortedProjects[projectIndex];
      
      if (layoutType.type === 'full') {
        items.push(
          <div key={projectIndex} className={`w-full ${layoutType.height}`}>
            <GridItem 
              project={currentProject} 
              index={projectIndex} 
            />
          </div>
        );
        projectIndex++;
      } else if (layoutType.type === 'left') {
        items.push(
          <div key={projectIndex} className={`${layoutType.width} ${layoutType.height} self-start`}>
            <GridItem 
              project={currentProject} 
              index={projectIndex} 
            />
          </div>
        );
        projectIndex++;
      } else if (layoutType.type === 'right') {
        items.push(
          <div key={projectIndex} className={`${layoutType.width} ${layoutType.height} self-end`}>
            <GridItem 
              project={currentProject} 
              index={projectIndex} 
            />
          </div>
        );
        projectIndex++;
      } else if (layoutType.type === 'split') {
        if (projectIndex + 1 < sortedProjects.length) {
          const currentProject2 = sortedProjects[projectIndex + 1];
          items.push(
            <div key={`split-${projectIndex}`} className={`w-full ${layoutType.height} flex flex-row max-md:flex-col gap-0`}>
              <div className="w-1/2 max-md:w-full h-[50vh] md:h-full">
                <GridItem 
                  project={currentProject} 
                  index={projectIndex} 
                />
              </div>
              <div className="w-1/2 max-md:w-full h-[50vh] md:h-full">
                <GridItem 
                  project={currentProject2} 
                  index={projectIndex + 1} 
                />
              </div>
            </div>
          );
          projectIndex += 2;
        } else {
          items.push(
            <div key={projectIndex} className={`w-full ${layoutType.height}`}>
              <GridItem 
                project={currentProject} 
                index={projectIndex} 
              />
            </div>
          );
          projectIndex++;
        }
      }
      
      patternIndex++;
    }
    
    return items;
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_center,#1F2937,#0B0F19)] font-['Inter',sans-serif] text-white overflow-x-hidden">
      <StickyNavigation variant="dark" showLogo={true} />
      
      <main className="pt-24 pb-24 md:pb-48 px-4 md:px-8 max-w-[1920px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24 ml-2 md:ml-4 pt-8"
        >
          <h1 className="text-6xl md:text-9xl font-normal leading-[0.9] tracking-tight mb-8 text-white">Work</h1>
          <p className="text-xl md:text-[24px] leading-snug md:leading-[32px] text-[#D1D5DB] max-w-[609px]">
            A selection of commissioned projects ranging from brand identity to spatial activations and archival research.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 ml-2 md:ml-4 max-w-[760px] border-t border-white/10 pt-10"
        >
          <p className="font-['Arial',sans-serif] text-xs tracking-[2px] uppercase text-[#6a7282] mb-6">
            Philosophy
          </p>
          <h2 className="text-4xl md:text-6xl font-normal leading-[0.95] tracking-tight mb-8 text-white">
            Small Paints
          </h2>
          <div className="space-y-5 text-lg md:text-xl leading-relaxed text-[#D1D5DB]">
            <p>
              Small Paints is a philosophy of scale — the conviction that the most profound macro experiences are built by caring about the smallest, finite details: a single unpolished brushstroke, a typographic nuance on a poster, the macro texture of a woven fabric.
            </p>
            <p>
              It works as a sandbox for rapid, broad exploration, where quantity breeds quality and unconventional ideas are allowed to breathe — before they're refined, systematized, and scaled into digital and apparel applications.
            </p>
            <p>
              Forged by Vermont and the physical realities of the outdoors, the method doesn't hide its raw materials — it elevates them. Whether mixing physical paint, sketching an outerwear concept, or laying the foundation for a complex interface, the approach is identical: paint small to build big.
            </p>
          </div>
        </motion.div>

        <section className="w-full overflow-x-hidden">
          <div className="flex flex-col items-end gap-0 max-md:[&>div]:w-full max-md:[&>div.flex]:flex-col max-md:[&>div.flex>div]:w-full [&_.border-white\/20]:border-none">
            {renderItems()}
          </div>
        </section>
      </main>
    </div>
  );
};

const SafeVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        if (err.name === 'AbortError' || err.name === 'NotAllowedError') {
          return;
        }
        console.warn('Video playback failed:', err);
      });
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    >
      <source src={src} />
    </video>
  );
};

const GridItem = ({ project, index }: { project: Project, index: number }) => {
  const isYouTube = project.src && project.src.includes('youtu');
  const showVideo = project.type === 'video' && !isYouTube;
  
  let youtubeThumbnail = '';
  let youtubeID = '';
  
  if (isYouTube) {
     youtubeID = project.src.includes('youtu.be') 
        ? project.src.split('youtu.be/')[1]
        : project.src.split('v=')[1];
        
    youtubeThumbnail = `https://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`;
  }

  return (
    <Link to={`/studio/${project.slug}`} className="block w-full h-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="relative group overflow-hidden bg-[#111827] cursor-pointer w-full h-full border border-white/20"
      >
      <div className="absolute inset-0 w-full h-full bg-black">
        {showVideo ? (
          <SafeVideo src={project.src} />
        ) : isYouTube ? (
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <img
              src={youtubeThumbnail}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2">
               <iframe
                 width="100%"
                 height="100%"
                 src={`https://www.youtube.com/embed/${youtubeID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeID}&playsinline=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1&enablejsapi=1`}
                 title={project.title}
                 frameBorder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 style={{ pointerEvents: 'none' }}
               />
            </div>
            
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300" />
          </div>
        ) : (
          <img
            src={project.src}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        
        {!isYouTube && <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300" />}
      </div>

      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none md:pointer-events-auto">
        <div className="flex justify-between items-start translate-y-[-10px] group-hover:translate-y-0 transition-transform duration-300">
           <span className="text-sm font-mono">{project.year || 'N/A'}</span>
           <div className="flex gap-2 items-center">
             {project.type === 'video' && (
               <span className="text-xs uppercase tracking-widest border border-white/50 px-2 py-1 rounded-full bg-white/10">
                 🎬 VIDEO
               </span>
             )}
             <span className="text-xs uppercase tracking-widest border border-white/30 px-2 py-1 rounded-full">
               {project.category_primary || 'Uncategorized'}
             </span>
           </div>
        </div>

        <div className="translate-y-[10px] group-hover:translate-y-0 transition-transform duration-300 delay-75">
          <h3 className="text-3xl md:text-4xl font-medium leading-none mb-2">
            {project.title || 'Untitled'}
          </h3>
          {project.one_liner && (
            <p 
              className="text-sm md:text-base text-white/80 line-clamp-2 mb-4 max-w-[90%]"
              dangerouslySetInnerHTML={{ 
                __html: project.one_liner.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>') 
              }} 
            />
          )}
          
          <div className="flex flex-wrap gap-2">
            {project.tags && Array.isArray(project.tags) && project.tags.map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-wider text-white/60">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 group-hover:opacity-0 transition-opacity duration-300 hidden md:block">
         <h3 className="text-2xl text-white font-medium drop-shadow-md">{project.title || 'Untitled'}</h3>
      </div>

      </motion.div>
    </Link>
  );
};
