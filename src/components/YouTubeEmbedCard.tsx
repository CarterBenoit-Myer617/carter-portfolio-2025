import React from 'react';
import { motion } from 'motion/react';

interface YouTubeEmbedCardProps {
  className?: string;
  videoId?: string;
  title?: string;
  thumbnailSrc?: string;
}

export function YouTubeEmbedCard({ className, videoId = 'oLRDqjx3zJY', title = 'Senior Showcase Website', thumbnailSrc: customThumbnail }: YouTubeEmbedCardProps) {
  const thumbnailSrc = customThumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className={`flex flex-col items-start p-0 relative w-[496px] h-[395px] ${className || ''}`}>
      {/* embed container */}
      <div className="box-border flex flex-col justify-start items-start p-[8px] gap-[4px] w-full h-full bg-white border border-black/10 shadow-[0px_0px_2px_rgba(0,0,0,0.08),0px_2px_6px_rgba(0,0,0,0.05)] rounded-[12px] flex-none order-0 grow-0">
        
        {/* thumbnail-container */}
        <div className="box-border w-full h-[270px] relative border border-black/10 rounded-[6px] overflow-hidden flex-none order-0 grow-0 bg-black group cursor-pointer">
          
          {/* Thumbnail Image */}
          <img 
            src={thumbnailSrc} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          />

          {/* thumbnail-overlay (Gradient) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none"></div>

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[68px] h-[48px] bg-[#212121]/80 rounded-[12px] flex items-center justify-center backdrop-blur-sm group-hover:bg-[#ff0000] transition-colors duration-300">
               <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>

        {/* footer-container */}
        <div className="flex flex-row justify-between items-center px-[8px] w-full h-[105px] flex-none order-1 self-stretch grow-0">
          
          {/* provider-container (Left side) */}
          <div className="flex flex-col justify-center items-start gap-[4px] flex-none order-0 grow-0">
            
            {/* Title */}
            <div className="font-['Inter',sans-serif] font-medium text-[16px] leading-[24px] tracking-[-0.01em] text-[#0f0f0f]">
              {title}
            </div>

            {/* Provider Row */}
            <div className="flex flex-row items-center gap-[6px]">
              {/* YouTube Icon */}
              <div className="w-[16px] h-[16px] flex items-center justify-center">
                 <svg viewBox="0 0 24 24" className="w-full h-full fill-[#FF0000]">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                 </svg>
              </div>
              
              {/* Provider Name */}
              <div className="font-['Inter',sans-serif] font-normal text-[12px] text-[#606060]">
                YouTube
              </div>
            </div>
          </div>

          {/* Info Icon */}
          <div className="flex items-center justify-center w-[24px] h-[24px]">
             <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-[#606060]">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
             </svg>
          </div>

        </div>
      </div>
    </div>
  );
}