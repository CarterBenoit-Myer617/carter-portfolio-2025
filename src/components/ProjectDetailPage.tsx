import React, { useEffect, useMemo, useState, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Play, ArrowRight } from 'lucide-react';
import { StickyNavigation } from './StickyNavigation';
import { PROJECTS, sortProjects, Project, CaseBlock } from '../data/cms';
import { useSEO } from './useSEO';
import { CASE_STUDY_SEO, DEFAULT_OG_IMAGE } from '../data/seo';
import { FlavienSoundGallery } from './FlavienSoundGallery';
import { CymaticGallery } from './CymaticGallery';
import { DrexelGallery } from './DrexelGallery';
import { AampGallery } from './AampGallery';
import { VesperGallery } from './VesperGallery';
import { RoamGallery } from './RoamGallery';
import { BasquiatGallery } from './BasquiatGallery';

// Helper to handle local project mapping and defaults
const applyProjectOverrides = (items: Project[]): Project[] => {
  return items.map(p => {
    const localProject = PROJECTS.find(local => local.slug === p.slug);
    // Use local asset if available (preserves Figma imports)
    const base = localProject ? { ...p, src: localProject.src, type: localProject.type } : p;
    return base;
  });
};

// Safe Video Component to handle autoplay errors gracefully
const SafeVideo = ({ src, className, autoPlay = true, muted = true, loop = true }: { src: string, className?: string, autoPlay?: boolean, muted?: boolean, loop?: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !autoPlay) return;
    
    video.muted = muted;
    
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        if (err.name === 'AbortError' || err.name === 'NotAllowedError') {
          return;
        }
        console.warn('Video playback failed:', err);
      });
    }
  }, [src, autoPlay, muted]);

  return (
    <video
      ref={videoRef}
      loop={loop}
      muted={muted}
      playsInline
      className={className}
      autoPlay={autoPlay}
      preload="auto"
      controlsList="nodownload"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

// Media Renderer
const MediaRenderer = ({ 
    type, 
    src, 
    alt, 
    className, 
    overlayContent 
}: { 
    type?: string, 
    src: string, 
    alt?: string, 
    className?: string, 
    overlayContent?: React.ReactNode 
}) => {
  const isYouTube = src && (src.includes('youtu.be') || src.includes('youtube.com'));
  
  const renderContent = () => {
      if (type === 'video' || isYouTube) {
        if (isYouTube) {
            const videoId = src.includes('youtu.be') ? src.split('youtu.be/')[1] : src.split('v=')[1];
            return (
              <div className={`relative ${className} overflow-hidden`}>
                <iframe 
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1&enablejsapi=1`}
                  className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title={alt}
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
        }
        return <SafeVideo src={src} className={className} />;
      }
      return <img src={src} alt={alt} className={className} />;
  };

  return (
      <div className="relative w-full h-full group overflow-hidden">
          {renderContent()}
          
          {overlayContent && (
              <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end p-8 md:p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
              >
                  <motion.div 
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                      {overlayContent}
                  </motion.div>
              </motion.div>
          )}
      </div>
  );
};

// --- Anders Interiors Style Components ---

const AndersHeader = ({ title, intro, details }: { title: string, intro: { italic: string, normal: string }, details: string[] }) => {
    return (
        <section className="w-full max-w-[1920px] mx-auto pt-[140px] pb-[100px] px-6 md:px-12 lg:px-[60px]">
            <div className="flex flex-col gap-[30px] w-full px-4 md:px-16">
                <div className="flex flex-col gap-5 w-full">
                     <Link to="/studio" className="text-white text-xl md:text-2xl underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity w-max min-h-11 min-w-11 inline-flex items-center">
                         Case Study
                     </Link>
                     <h1 className="text-white text-[64px] md:text-[100px] leading-[0.9] tracking-[-0.04em] font-normal">
                         {title}
                     </h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 w-full mt-8">
                     <div className="flex-1">
                         <p className="text-[20px] md:text-[28px] leading-[1.3] text-white">
                             <span className="italic font-serif text-white/90 mr-2 font-light">{intro.italic}</span>
                             <span className="font-light">{intro.normal}</span>
                         </p>
                     </div>
                     <div className="w-full lg:w-[300px] shrink-0 text-[#767676] text-lg leading-relaxed flex flex-col gap-1">
                         {details.map((detail, i) => (
                             <p key={i}>{detail}</p>
                         ))}
                     </div>
                </div>
            </div>
            
            <div className="w-full h-[1px] bg-white/20 mt-[100px]" />
        </section>
    );
};

const AndersGalleryItem = ({ 
    type, 
    src, 
    className, 
    title, 
    category, 
    description,
    bgColor 
}: { 
    type?: string, 
    src: string, 
    className?: string, 
    title?: string, 
    category?: string, 
    description?: string,
    bgColor?: string 
}) => {
    
    const overlayContent = (title || description || category) ? (
        <div className="flex flex-col gap-3 text-white">
            {category && (
                <p className="text-[#999999] text-sm uppercase tracking-widest font-medium">
                    {category}
                </p>
            )}
            {title && <h2 className="text-4xl md:text-5xl font-normal leading-tight">{title}</h2>}
            {description && (
                <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mt-2">
                    {description}
                </p>
            )}
        </div>
    ) : null;

    const bg = bgColor || '#121212';

    return (
        <div className={`relative ${className} overflow-hidden`} style={{ backgroundColor: bg }}>
            <MediaRenderer 
                type={type} 
                src={src} 
                className="w-full h-full object-cover object-[center_35%]" 
                overlayContent={overlayContent}
            />
        </div>
    );
};

// --- Universal Project Content Logic ---

const getProjectContent = (project: Project) => {
    // Kona now uses cms.ts blocks like all other projects
    if (false) {
        const IMG_VINEYARD = "https://images.unsplash.com/photo-1691967256440-0726d2d57a2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
        const IMG_WHISKY = "https://images.unsplash.com/photo-1616666738141-d009dab6419b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
        const IMG_VOLCANO = "https://images.unsplash.com/photo-1679582540400-2024843de217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
        const IMG_TOPOGRAPHY = "https://images.unsplash.com/photo-1768280511074-3b3effe7a139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
        const IMG_PACKAGING = "https://images.unsplash.com/photo-1714163342432-e362d5fab2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
        const IMG_FOIL = "https://images.unsplash.com/photo-1577369351003-e27ab808d2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
        const IMG_LAUHALA = "https://images.unsplash.com/photo-1662338728690-363d46459344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
        const IMG_POUROVER = "https://images.unsplash.com/photo-1560354291-c2b9d7e44181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
        const VIDEO_FALLBACK = "https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4";

        return {
            title: "Kona Coffee",
            intro: {
                italic: "Luxury isn't communicated through tropical clichés—it's communicated through proof of scarcity and origin.",
                normal: " The design challenge: move Kona out of the coffee aisle and into the luxury tier alongside fine wine and single malt."
            },
            details: ["Brand Strategy", "Identity Design", "Packaging Architecture", "Provenance System", "Conservation Partnership"],
            items: [
                { type: 'video', src: VIDEO_FALLBACK, layout: 'full', title: 'The Problem', category: 'Context', desc: 'Genuine Kona coffee suffers from asymmetric information—it\'s frequently counterfeited or diluted, eroding consumer trust and suppressing prices for legitimate producers. The market treats a rare, single-origin product like a grocery commodity.' },
                { type: 'split', items: [
                    { type: 'image', src: IMG_VINEYARD, title: 'Strategic Insight', category: 'Strategy', desc: 'Luxury isn\'t communicated through tropical clichés—it\'s communicated through proof of scarcity and origin.' },
                    { type: 'image', src: IMG_VOLCANO, title: 'Geological Fingerprint', category: 'Concept', desc: 'I shifted the visual narrative from "flavor notes" to "geological fingerprint," using the estate\'s specific position on Hualalai\'s volcanic slopes as the brand\'s core asset.' }
                ]},
                { type: 'video', src: VIDEO_FALLBACK, layout: 'full', title: 'The System', category: 'Identity', desc: 'Built a K-O-N-A lettermark arranged as a compass/diamond—evoking both navigation heritage and volcanic topography. This mark becomes the brand\'s authentication signature.' },
                { type: 'split', items: [
                    { type: 'image', src: IMG_PACKAGING, title: 'Tactile Price Justification', category: 'Design Decision', desc: 'Engineered an unboxing experience (rigid structure, foil stamping, texture-mapped embossing) that psychologically validates the $85/lb price point.' },
                    { type: 'image', src: IMG_FOIL, title: 'Terroir Over Flavor', category: 'Design Decision', desc: 'Replaced generic tasting notes with topographical data proving the coffee\'s 10-mile-radius provenance.' }
                ]},
                { type: 'video', src: VIDEO_FALLBACK, layout: 'full', title: 'Results', category: 'Impact', desc: 'Created a provenance system that functions as anti-counterfeiting design. Shifted brand perception from commodity to collectible origin product.' },
                { type: 'split', items: [
                    { type: 'image', src: IMG_LAUHALA, title: 'Cultural Bridge', category: 'Design Decision', desc: 'Adapted traditional lauhala weaving patterns into contemporary packaging structure—honoring Hawaiian craft without appropriating it.' },
                    { type: 'image', src: IMG_POUROVER, title: 'Reflection', category: 'Next Steps', desc: 'Next iteration would integrate blockchain provenance tracking into the packaging QR system and develop motion content for e-commerce unboxing storytelling.' }
                ]},
                { type: 'video', src: VIDEO_FALLBACK, layout: 'full', title: 'Partnership', category: 'Impact', desc: 'Established visual framework for Conservation International \'Mother Our Nature\' partnership. Designed packaging architecture that scales across SKUs while maintaining luxury positioning.' }
            ]
        };
    }

    const oneLiner = project.one_liner || "";
    const oneLinerPlain = oneLiner.replace(/\*\*/g, "");
    
    const items: any[] = [];
    const blocks = (project.blocks || []).sort((a, b) => a.order - b.order);
    const hasLayoutHints = blocks.some(b => b.layoutHint);
    
    if (hasLayoutHints) {
        // Layout-hint-aware rendering
        let i = 0;
        while (i < blocks.length) {
            const block = blocks[i];
            if (!block.mediaSrc) {
                items.push({ type: 'text', title: block.headline, desc: block.body });
                i++;
                continue;
            }
            const isVideo = block.type === 'video' || block.mediaSrc.includes('.mp4') || block.mediaSrc.includes('youtu');
            const hint = block.layoutHint || 'full';

            if (hint === 'full' || isVideo) {
                items.push({
                    type: isVideo ? 'video' : 'image',
                    src: block.mediaSrc,
                    title: block.headline,
                    category: project.category_primary,
                    desc: block.body,
                    layout: 'full',
                    bgColor: block.bgColor,
                });
                i++;
            } else if ((hint === 'narrow' || hint === 'wide') && i + 1 < blocks.length) {
                const next = blocks[i + 1];
                if (next.mediaSrc && (next.layoutHint === 'narrow' || next.layoutHint === 'wide')) {
                    const leftHint = hint;
                    const rightHint = next.layoutHint || 'wide';
                    items.push({
                        type: 'split',
                        splitMode: leftHint === 'narrow' ? '30/70' : '60/40',
                        items: [
                            { type: 'image', src: block.mediaSrc, title: block.headline, category: project.category_primary, desc: block.body, bgColor: block.bgColor },
                            { type: 'image', src: next.mediaSrc, title: next.headline, category: project.category_primary, desc: next.body, bgColor: next.bgColor },
                        ]
                    });
                    i += 2;
                } else {
                    items.push({ type: 'image', src: block.mediaSrc, title: block.headline, category: project.category_primary, desc: block.body, layout: 'full', bgColor: block.bgColor });
                    i++;
                }
            } else {
                items.push({ type: 'image', src: block.mediaSrc, title: block.headline, category: project.category_primary, desc: block.body, layout: 'full', bgColor: block.bgColor });
                i++;
            }
        }
    } else {
        // Legacy auto-pairing logic for projects without layout hints
        let splitBuffer: any[] = [];
        blocks.forEach((block) => {
            if (block.mediaSrc) {
                const isVideo = block.type === 'video' || block.mediaSrc.includes('.mp4') || block.mediaSrc.includes('youtu');
                const item = {
                    type: isVideo ? 'video' : 'image',
                    src: block.mediaSrc,
                    title: block.headline,
                    category: project.category_primary,
                    desc: block.body,
                    layout: 'full'
                };
                if (!isVideo && splitBuffer.length === 0) {
                    splitBuffer.push(item);
                } else if (!isVideo && splitBuffer.length === 1) {
                    items.push({ type: 'split', items: [splitBuffer[0], item] });
                    splitBuffer = [];
                } else {
                    if (splitBuffer.length > 0) { items.push(splitBuffer[0]); splitBuffer = []; }
                    items.push(item);
                }
            } else {
                if (splitBuffer.length > 0) { items.push(splitBuffer[0]); splitBuffer = []; }
                items.push({ type: 'text', title: block.headline, desc: block.body });
            }
        });
        if (splitBuffer.length > 0) { items.push(splitBuffer[0]); }
    }

    const italicPart = project.role ? project.role : project.category_primary;
    const normalPart = oneLinerPlain ? ` — ${oneLinerPlain}` : "";

    return {
        title: project.title,
        intro: {
            italic: italicPart || "",
            normal: normalPart
        },
        details: [
            ...(project.tags || []),
            ...(project.deliverables ? [project.deliverables] : [])
        ],
        items: items.length > 0 ? items : [{ type: 'text', title: 'About', desc: 'Content coming soon.' }]
    };
};

const ProjectDetailContent = ({ project }: { project: Project }) => {
    const content = useMemo(() => getProjectContent(project), [project]);
    const { items, title, intro, details } = content;
    const isFlavien = project.slug === 'flavien-sound';
    const isCymatic = project.slug === 'cymatic-studies';
    const isDrexel = project.slug === 'drexel-showcase-web';
    const isAamp = project.slug === 'aamp-rebrand';
    const isVesper = project.slug === 'vesper-global-rebrand';
    const isRoam = project.slug === 'roam-media-brand';
    const isBasquiat = project.slug === 'basquiat-catalogue';

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-purple-500/30">
            <StickyNavigation variant="dark" showLogo={true} />

            <main className="w-full">
                <AndersHeader 
                    title={title}
                    intro={intro}
                    details={details}
                />

                {isFlavien ? (
                    <FlavienSoundGallery />
                ) : isCymatic ? (
                    <CymaticGallery />
                ) : isDrexel ? (
                    <DrexelGallery />
                ) : isAamp ? (
                    <AampGallery />
                ) : isVesper ? (
                    <VesperGallery />
                ) : isRoam ? (
                    <RoamGallery />
                ) : isBasquiat ? (
                    <BasquiatGallery />
                ) : (
                <section className="w-full pb-[80px]">
                     <div className="flex flex-col gap-0 w-full">
                         {items.map((item: any, index: number) => {
                             if (item.type === 'text') {
                                 return (
                                     <div key={index} className="w-full max-w-[1920px] mx-auto px-6 md:px-[60px] py-20 flex justify-start">
                                         <div className="w-full md:w-2/3 max-w-4xl text-left pl-4 md:pl-16">
                                              {item.title && <h2 className="text-2xl text-white mb-6 font-normal">{item.title}</h2>}
                                              <p className="text-[#A1A1AA] text-xl md:text-2xl leading-[1.6] whitespace-pre-line font-light">{item.desc}</p>
                                         </div>
                                     </div>
                                 );
                             } else if (item.type === 'split' && item.items) {
                                 // Use splitMode from layout hints, or fallback to alternating pattern
                                 let rowHeight = "md:h-[110vh]"; 
                                 let leftWidth = "md:w-1/2";
                                 let rightWidth = "md:w-1/2";
                                 
                                 if (item.splitMode === '30/70') {
                                     leftWidth = "md:w-[30%]";
                                     rightWidth = "md:w-[70%]";
                                 } else if (item.splitMode === '60/40') {
                                     leftWidth = "md:w-[60%]";
                                     rightWidth = "md:w-[40%]";
                                 } else {
                                     // Legacy alternating pattern
                                     if (index % 4 === 1) {
                                         leftWidth = "md:w-[30%]";
                                         rightWidth = "md:w-[70%]";
                                     } else if (index % 4 === 3) {
                                         leftWidth = "md:w-[60%]";
                                         rightWidth = "md:w-[40%]";
                                     }
                                 }
        
                                 return (
                                     <div key={index} className={`flex flex-col md:flex-row gap-0 w-full ${rowHeight}`}>
                                         {item.items.map((subItem: any, subIndex: number) => (
                                             <AndersGalleryItem 
                                                 key={`${index}-${subIndex}`}
                                                 type={subItem.type}
                                                 src={subItem.src}
                                                 title={subItem.title}
                                                 category={subItem.category}
                                                 description={subItem.desc}
                                                 bgColor={subItem.bgColor}
                                                 className={`w-full aspect-square md:aspect-auto ${subIndex === 0 ? leftWidth : rightWidth}`}
                                             />
                                         ))}
                                     </div>
                                 );
                             } else if (item.layout === 'full' || item.type === 'video' || item.type === 'image') {
                                 const isVideo = item.type === 'video';
                                 const desktopClass = isVideo ? 'md:h-[90vh] md:aspect-auto' : 'md:h-[110vh] md:aspect-auto';
                                                   
                                 return (
                                     <AndersGalleryItem 
                                         key={index}
                                         type={item.type}
                                         src={item.src}
                                         title={item.title}
                                         category={item.category}
                                         description={item.desc}
                                         bgColor={item.bgColor}
                                         className={`w-full aspect-[4/5] ${desktopClass}`}
                                     />
                                 );
                             }
                             return null;
                         })}
                     </div>
                </section>
                )}

                <section className="w-full max-w-[1920px] mx-auto px-6 md:px-[15px] py-20">
                    <div className="w-full flex justify-between items-start md:px-12">
                        {(() => {
                            const sorted = sortProjects(PROJECTS);
                            const currentIdx = sorted.findIndex(p => p.id === project.id);
                            const prev = currentIdx > 0 ? sorted[currentIdx - 1] : sorted[sorted.length - 1];
                            const next = currentIdx < sorted.length - 1 ? sorted[currentIdx + 1] : sorted[0];
        
                            return (
                                <>
                                    <Link to={`/studio/${prev.slug}`} className="group flex flex-col gap-2 md:gap-4 items-start">
                                        <span className="font-['Arial',sans-serif] text-[#99a1af] text-[10px] md:text-xs tracking-[1.2px] uppercase">Previous Project</span>
                                        <span className="font-['Arial',sans-serif] text-3xl md:text-6xl text-white group-hover:opacity-70 transition-opacity">
                                            {prev.title}
                                        </span>
                                    </Link>
        
                                    <Link to={`/studio/${next.slug}`} className="group flex flex-col gap-2 md:gap-4 items-end">
                                        <span className="font-['Arial',sans-serif] text-[#99a1af] text-[10px] md:text-xs tracking-[1.2px] uppercase text-right">Next Project</span>
                                        <span className="font-['Arial',sans-serif] text-3xl md:text-6xl text-white text-right group-hover:opacity-70 transition-opacity">
                                            {next.title}
                                        </span>
                                    </Link>
                                </>
                            );
                        })()}
                    </div>
        
                    <div className="w-full flex justify-center mt-16">
                        <Link to="/studio" className="border border-[#333] px-12 md:px-16 py-6 hover:bg-white hover:text-black transition-all duration-300 group">
                            <span className="font-['Arial',sans-serif] text-white text-sm tracking-[2px] uppercase group-hover:text-black">
                                View Full Index
                            </span>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export function ProjectDetailPage() {
  const { slug } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const project = useMemo(() => {
    const p = PROJECTS.find(p => p.slug === slug);
    return p ? applyProjectOverrides([p])[0] : null;
  }, [slug]);

  const seo = slug ? CASE_STUDY_SEO[slug] : undefined;
  useSEO({
    title: seo?.title || project?.title || 'Project',
    description: seo?.description || project?.one_liner?.replace(/\*\*/g, '') || 'A project by Carter Benoît-Myer.',
    path: seo?.path || `/studio/${slug}`,
    image: seo?.image || DEFAULT_OG_IMAGE,
  });

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Project Not Found</h1>
          <Link to="/studio" className="underline">Back to Studio</Link>
        </div>
      </div>
    );
  }

  return <ProjectDetailContent project={project} />;
};