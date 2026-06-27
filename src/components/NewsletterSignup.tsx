import React from 'react';
import { RotatingLogo } from './RotatingLogo';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface NewsletterSignupProps {
  onClose: () => void;
}

export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] bg-[#0A0A0A] overflow-y-auto text-white flex flex-col min-h-screen">
      {/* Header with Logo */}
      <div className="w-full flex justify-center py-12 md:py-16 relative">
        <div onClick={onClose} className="cursor-pointer hover:opacity-70 transition-opacity">
          <RotatingLogo scale={0.35} />
        </div>
        <button
            onClick={onClose}
            className="absolute top-8 right-8 md:top-12 md:right-12 text-sm uppercase tracking-widest text-[#a1a1aa] hover:text-white transition-colors"
        >
            Close
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center px-6 max-w-2xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl font-normal mb-12 text-center text-white">Subscribe to our newsletter</h1>

        <form className="w-full space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <Input 
              type="email" 
              placeholder="EMAIL" 
              className="h-12 border-[#27272a] bg-transparent rounded-none text-base text-white placeholder:text-[#6a7282] uppercase tracking-wider focus-visible:ring-0 focus-visible:border-white"
              required 
            />
          </div>
          <div>
            <Input 
              type="text" 
              placeholder="FIRST NAME" 
              className="h-12 border-[#27272a] bg-transparent rounded-none text-base text-white placeholder:text-[#6a7282] uppercase tracking-wider focus-visible:ring-0 focus-visible:border-white"
            />
          </div>
          <div>
            <Input 
              type="text" 
              placeholder="LAST NAME" 
              className="h-12 border-[#27272a] bg-transparent rounded-none text-base text-white placeholder:text-[#6a7282] uppercase tracking-wider focus-visible:ring-0 focus-visible:border-white"
            />
          </div>
          <div>
            <Input 
              type="text" 
              placeholder="COMPANY (OPTIONAL)" 
              className="h-12 border-[#27272a] bg-transparent rounded-none text-base text-white placeholder:text-[#6a7282] uppercase tracking-wider focus-visible:ring-0 focus-visible:border-white"
            />
          </div>

          <div className="flex items-start space-x-3 pt-2">
            <Checkbox id="terms" className="mt-1 border-[#27272a] data-[state=checked]:bg-white data-[state=checked]:text-[#0A0A0A]" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none text-[#a1a1aa]"
            >
              I want to receive updates from Black Trail Collective by email. <span className="text-red-500">*</span>
            </label>
          </div>

          <div>
            <Button
                type="submit"
                className="w-full md:w-auto bg-white text-[#0A0A0A] hover:bg-[#a1a1aa] rounded-none h-12 px-8 uppercase tracking-[2px] text-sm"
            >
                Sign Up
            </Button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="w-full py-8 text-center text-sm text-[#6a7282]">
        © Carter Benoît-Myer {new Date().getFullYear()}
      </div>
    </div>
  );
};
