import React, { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { translations } from '../data/translations';

// ═══════════════════════════════════════════
// LANGUAGE CONFIGURATION — 8 Languages
// ═══════════════════════════════════════════

export interface LangConfig {
  label: string;
  abbr: string;
  heading: string;
  body: string;
  dir: 'ltr' | 'rtl';
  fontImport: string | null;
}

export const LANG_CONFIG: Record<string, LangConfig> = {
  en: {
    label: 'English',
    abbr: 'EN',
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
    dir: 'ltr',
    fontImport: null,
  },
  fr: {
    label: 'Français',
    abbr: 'FR',
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
    dir: 'ltr',
    fontImport: null,
  },
  es: {
    label: 'Español',
    abbr: 'ES',
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
    dir: 'ltr',
    fontImport: null,
  },
  de: {
    label: 'Deutsch',
    abbr: 'DE',
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
    dir: 'ltr',
    fontImport: null,
  },
  da: {
    label: 'Dansk',
    abbr: 'DA',
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
    dir: 'ltr',
    fontImport: null,
  },
  nl: {
    label: 'Nederlands',
    abbr: 'NL',
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
    dir: 'ltr',
    fontImport: null,
  },
  ja: {
    label: '日本語',
    abbr: 'JA',
    heading: '"Noto Sans JP", "Hiragino Sans", sans-serif',
    body: '"Noto Sans JP", "Hiragino Sans", sans-serif',
    dir: 'ltr',
    fontImport:
      'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap',
  },
  ar: {
    label: 'العربية',
    abbr: 'AR',
    heading: '"Noto Sans Arabic", "Cairo", sans-serif',
    body: '"Noto Sans Arabic", "Cairo", sans-serif',
    dir: 'rtl',
    fontImport:
      'https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;700&family=Cairo:wght@400;500;700&display=swap',
  },
};

// ═══════════════════════════════════════════
// CONTEXT
// ═══════════════════════════════════════════

interface LanguageContextValue {
  currentLang: string;
  config: LangConfig;
  setLanguage: (langCode: string) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  currentLang: 'en',
  config: LANG_CONFIG.en,
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

// ═══════════════════════════════════════════
// TRANSLATION HOOK
// ═══════════════════════════════════════════

/**
 * Returns a `t(key)` function that resolves a translation key
 * for the current language. Falls back to English if key is missing.
 */
export const useTranslation = () => {
  const { currentLang } = useLanguage();
  const t = useCallback(
    (key: string): string => {
      const langStrings = translations[currentLang];
      if (langStrings && langStrings[key]) return langStrings[key];
      // Fallback to English
      const enStrings = translations.en;
      if (enStrings && enStrings[key]) return enStrings[key];
      return key; // Return the key itself as last resort
    },
    [currentLang]
  );
  return { t, currentLang };
};

// ═══════════════════════════════════════════
// PROVIDER
// ═══════════════════════════════════════════

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLang, setCurrentLang] = useState<string>(() => {
    try {
      return localStorage.getItem('preferred-lang') || 'en';
    } catch {
      return 'en';
    }
  });

  const applyLanguage = useCallback((langCode: string) => {
    const config = LANG_CONFIG[langCode];
    if (!config) return;

    // 1. Load font if needed (non-Latin scripts)
    if (config.fontImport) {
      const existingLink = document.querySelector(`link[href="${config.fontImport}"]`);
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = config.fontImport;
        document.head.appendChild(link);
      }
    }

    // 2. Set document language and direction
    document.documentElement.setAttribute('lang', langCode);
    document.documentElement.setAttribute('dir', config.dir);

    // 3. Swap font CSS variables
    document.documentElement.style.setProperty('--font-heading-active', config.heading);
    document.documentElement.style.setProperty('--font-body-active', config.body);

    // 4. Save preference
    try {
      localStorage.setItem('preferred-lang', langCode);
    } catch {
      // localStorage may be unavailable
    }
  }, []);

  const setLanguage = useCallback(
    (langCode: string) => {
      if (!LANG_CONFIG[langCode]) return;
      setCurrentLang(langCode);
      applyLanguage(langCode);
    },
    [applyLanguage]
  );

  // Apply saved preference on mount
  useEffect(() => {
    applyLanguage(currentLang);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const config = LANG_CONFIG[currentLang] || LANG_CONFIG.en;

  return (
    <LanguageContext.Provider value={{ currentLang, config, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};