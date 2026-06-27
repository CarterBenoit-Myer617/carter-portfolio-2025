import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer id="contact" className="w-full bg-[#0A0A0A] border-t border-[#27272a] text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24">
         
         {/* Contact & Social Column */}
         <div className="flex flex-col gap-12 flex-1">
            
            {/* Contact */}
            <div className="flex flex-col gap-4">
               <h3 className="font-['Arial',sans-serif] text-xs tracking-[2px] uppercase text-[#99a1af]">
                  Contact
               </h3>
               <div className="flex flex-col gap-1">
                  <p className="font-['Arial',sans-serif] text-lg md:text-xl text-white font-light">
                     Black Trail Collective
                  </p>
                  <p className="font-['Arial',sans-serif] text-lg md:text-xl text-white font-light opacity-60">
                     Boston, MA
                  </p>
                  <a 
                     href="mailto:studio@carterbenoitmyer.com" 
                     className="font-['Arial',sans-serif] text-lg md:text-xl text-white font-light hover:opacity-70 transition-opacity mt-2 block"
                  >
                     studio@carterbenoitmyer.com
                  </a>
               </div>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-4">
               <h3 className="font-['Arial',sans-serif] text-xs tracking-[2px] uppercase text-[#99a1af]">
                  Social
               </h3>
               <div className="flex flex-col gap-2">
                  <a 
                     href="https://www.instagram.com/blacktrailcollective" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="font-['Arial',sans-serif] text-lg md:text-xl text-white font-light hover:opacity-70 transition-opacity w-max"
                  >
                     Instagram
                  </a>
                  <a 
                     href="https://www.linkedin.com/in/carterbenoitmyer" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="font-['Arial',sans-serif] text-lg md:text-xl text-white font-light hover:opacity-70 transition-opacity w-max"
                  >
                     LinkedIn
                  </a>
               </div>
            </div>
         </div>

         {/* Studio Navigation */}
         <div className="flex flex-col gap-12 flex-1 md:items-end">
            <div className="flex flex-col gap-4 md:items-end">
               <h3 className="font-['Arial',sans-serif] text-xs tracking-[2px] uppercase text-[#99a1af] md:text-right">
                  Studio
               </h3>
               <div className="flex flex-col gap-2 md:items-end">
                  <button onClick={() => navigate('/about')} className="font-['Arial',sans-serif] text-lg md:text-xl text-white font-light hover:opacity-70 transition-opacity text-left md:text-right">About</button>
                  <button onClick={() => navigate('/studio')} className="font-['Arial',sans-serif] text-lg md:text-xl text-white font-light hover:opacity-70 transition-opacity text-left md:text-right">Services</button>
                  <button onClick={() => navigate('/studio-shop')} className="font-['Arial',sans-serif] text-lg md:text-xl text-white font-light hover:opacity-70 transition-opacity text-left md:text-right">Shop Archive</button>
               </div>
            </div>

            {/* Copyright */}
            <div className="mt-auto">
               <p className="font-['Arial',sans-serif] text-xs text-[#52525b] uppercase tracking-wider md:text-right">
                  © Carter Benoît-Myer {new Date().getFullYear()}
               </p>
            </div>
         </div>

      </div>
    </footer>
  );
};
