import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router';
import { X } from 'lucide-react';
import { ApiService } from '../services/apiService';

// ═══════════════════════════════════════════
//  HOMEPAGE NEWSLETTER DROPDOWN
//  Overlay component with inline states
//  Zero-BaaS, decoupled API service layer
// ═══════════════════════════════════════════

interface HomepageNewsletterDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

type UIState = 'idle' | 'loading' | 'success' | 'error';

export const HomepageNewsletterDropdown: React.FC<HomepageNewsletterDropdownProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [uiState, setUiState] = useState<UIState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || uiState === 'loading') return;

    setUiState('loading');
    setErrorMessage('');

    try {
      // Map user input to the exact nested JSON payload schema
      const payload = {
        identity: { email },
        context: { source: 'homepage_dropdown' },
        consent: {
          newsletterOptIn: true as const,
          optInTimestamp: new Date().toISOString(),
        },
      };

      const result = await ApiService.submitNewsletter(payload);

      if (result.ok) {
        setUiState('success');
        setEmail(''); // Clear form
      } else {
        setUiState('error');
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch (err) {
      setUiState('error');
      setErrorMessage('Network error. Please check your connection.');
      console.error('[Newsletter] Submission failed:', err);
    }
  };

  // Anti-zombie routing: close dropdown before navigating
  const handleContactClick = () => {
    onClose(); // Close dropdown state FIRST
    setTimeout(() => navigate('/contact'), 50); // Then navigate
  };

  const handleReset = () => {
    setUiState('idle');
    setErrorMessage('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop — close on click */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
            onClick={onClose}
          />

          {/* Dropdown Panel — absolute positioned, high z-index */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[80px] left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-32px)] max-w-[520px]"
          >
            <div
              className="relative bg-[#111827] rounded-lg overflow-hidden"
              style={{
                border: '0.542px solid rgba(255,255,255,0.1)',
                boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.5)',
              }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 text-white/60 hover:text-white transition-colors"
                aria-label="Close newsletter"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>

              <div className="px-8 py-10 md:px-12 md:py-12">
                {/* IDLE & LOADING STATE */}
                {(uiState === 'idle' || uiState === 'loading') && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="flex flex-col gap-2">
                      <p className="font-['Inter',sans-serif] text-[11px] tracking-[2px] uppercase text-[#6A7282]">
                        Newsletter
                      </p>
                      <h2 className="font-['Inter',sans-serif] text-[28px] leading-[1.1] tracking-[-0.5px] text-white">
                        Stay in the loop
                      </h2>
                      <p className="font-['Inter',sans-serif] text-[14px] leading-[1.5] text-[#A1A1AA]">
                        Receive updates on new projects and studio news.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        disabled={uiState === 'loading'}
                        className="w-full h-[48px] bg-transparent border-b border-[#27272A] text-white font-['Inter',sans-serif] text-[16px] placeholder:text-[#3F3F46] focus:outline-none focus:border-white/50 transition-colors px-0 disabled:opacity-50"
                      />

                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button
                          type="submit"
                          disabled={!email || uiState === 'loading'}
                          className="flex-1 h-[44px] px-6 bg-white text-[#0A0A0A] hover:bg-white/90 transition-all disabled:bg-white/20 disabled:text-white/40 disabled:cursor-not-allowed flex items-center justify-center"
                          style={{ border: '0.542px solid white' }}
                        >
                          <span className="font-['Inter',sans-serif] font-medium text-[11px] tracking-[2px] uppercase">
                            {uiState === 'loading' ? 'Subscribing...' : 'Subscribe'}
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={handleContactClick}
                          className="flex-1 h-[44px] px-6 bg-black/10 text-white hover:bg-white/10 transition-all flex items-center justify-center"
                          style={{ border: '0.542px solid white' }}
                        >
                          <span className="font-['Inter',sans-serif] font-medium text-[11px] tracking-[2px] uppercase">
                            Contact
                          </span>
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* SUCCESS STATE */}
                {uiState === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center gap-5 py-6"
                  >
                    <div className="w-[48px] h-[48px] border border-white/20 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12L10 17L20 7" />
                      </svg>
                    </div>
                    <h2 className="font-['Inter',sans-serif] text-[24px] leading-[1.1] tracking-[-0.5px] text-white">
                      You're subscribed
                    </h2>
                    <p className="font-['Inter',sans-serif] text-[14px] leading-[1.5] text-[#A1A1AA] max-w-[320px]">
                      Thank you for joining. We'll keep you updated with our latest work.
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-2 h-[44px] px-8 bg-white text-[#0A0A0A] hover:bg-white/90 transition-all flex items-center justify-center"
                      style={{ border: '0.542px solid white' }}
                    >
                      <span className="font-['Inter',sans-serif] font-medium text-[11px] tracking-[2px] uppercase">
                        Close
                      </span>
                    </button>
                  </motion.div>
                )}

                {/* ERROR STATE */}
                {uiState === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center gap-5 py-6"
                  >
                    <div className="w-[48px] h-[48px] border border-red-500/40 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                    </div>
                    <h2 className="font-['Inter',sans-serif] text-[24px] leading-[1.1] tracking-[-0.5px] text-white">
                      Something went wrong
                    </h2>
                    <p className="font-['Inter',sans-serif] text-[14px] leading-[1.5] text-[#A1A1AA] max-w-[320px]">
                      {errorMessage || 'Please try again.'}
                    </p>
                    <button
                      onClick={handleReset}
                      className="mt-2 h-[44px] px-8 bg-white text-[#0A0A0A] hover:bg-white/90 transition-all flex items-center justify-center"
                      style={{ border: '0.542px solid white' }}
                    >
                      <span className="font-['Inter',sans-serif] font-medium text-[11px] tracking-[2px] uppercase">
                        Try Again
                      </span>
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
