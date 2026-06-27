import React from 'react';

interface NewsletterMarqueeProps {
  onClick: () => void;
}

export const NewsletterMarquee: React.FC<NewsletterMarqueeProps> = ({ onClick }) => {
  // Duplicate content for seamless scrolling
  const content = Array(6).fill("Sign up for our newsletter");

  return (
    <div className="w-full overflow-hidden bg-black text-white py-6 md:py-8 border-b border-zinc-800 cursor-pointer" onClick={onClick}>
       <div className="slide-track flex whitespace-nowrap items-center">
          {/* First set */}
          {content.map((text, i) => (
             <div className="slide px-6 md:px-12 flex-shrink-0" key={`1-${i}`}>
                <h2 className="text-4xl md:text-6xl lg:text-7xl uppercase tracking-widest font-light whitespace-nowrap hover:text-gray-400 transition-colors">
                  {text}
                </h2>
             </div>
          ))}
          {/* Second set for seamless loop */}
          {content.map((text, i) => (
             <div className="slide px-6 md:px-12 flex-shrink-0" key={`2-${i}`}>
                <h2 className="text-4xl md:text-6xl lg:text-7xl uppercase tracking-widest font-light whitespace-nowrap hover:text-gray-400 transition-colors">
                  {text}
                </h2>
             </div>
          ))}
       </div>
    </div>
  );
};
