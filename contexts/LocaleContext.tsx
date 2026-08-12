'use client';

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import enMessages from '@/messages/en.json';
import { LOCALE_COOKIE, defaultLocale, type Locale } from '@/lib/i18n/config';
import { detectClientLocale } from '@/lib/i18n/client';

export type { Locale };

type Messages = Record<string, unknown>;

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string>) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

function getNested(obj: Record<string, unknown>, path: string): string | undefined {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === 'string' ? current : undefined;
}

function readInitialLocale(pathname: string): Locale {
  if (typeof window === 'undefined') return defaultLocale;
  return detectClientLocale(pathname);
}

function applyVars(text: string, vars?: Record<string, string>): string {
  if (!vars) return text;
  return Object.entries(vars).reduce(
    (acc, [key, value]) => acc.replaceAll(`{${key}}`, value),
    text
  );
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<Locale>(() => readInitialLocale(pathname));
  const [messages, setMessages] = useState<Messages>(enMessages as Messages);

  useEffect(() => {
    const detected = detectClientLocale(pathname);
    setLocaleState(detected);
    try {
      localStorage.setItem(LOCALE_COOKIE, detected);
    } catch {}
  }, [pathname]);

  useEffect(() => {
    if (locale === 'en') {
      setMessages(enMessages as Messages);
      return;
    }

    let cancelled = false;
    import(`@/messages/${locale}.json`)
      .then((mod) => {
        if (!cancelled) setMessages(mod.default as Messages);
      })
      .catch(() => {
        if (!cancelled) setMessages(enMessages as Messages);
      });
    return () => {
      cancelled = true;
    };
  }, [locale]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(LOCALE_COOKIE, newLocale);
    } catch {}
  }, []);

  const t = useCallback(
    (key: string, vars?: Record<string, string>): string => {
      const value = getNested(messages as unknown as Record<string, unknown>, key);
      if (value) return applyVars(value, vars);
      if (locale !== 'en') {
        const enValue = getNested(enMessages as unknown as Record<string, unknown>, key);
        if (enValue) return applyVars(enValue, vars);
      }
      return key;
    },
    [locale, messages]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return context;
}
