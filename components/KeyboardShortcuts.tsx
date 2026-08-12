'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Keyboard, X } from 'lucide-react';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { useLocale } from '@/contexts/LocaleContext';

export default function KeyboardShortcuts() {
  const { showHelp, closeHelp } = useKeyboardShortcuts();
  const closeRef = useRef<HTMLButtonElement>(null);
  const { t } = useLocale();

  const shortcuts = [
    { keys: ['Ctrl', 'K'], descriptionKey: 'shortcuts.focusSearch' as const },
    { keys: ['G'], descriptionKey: 'shortcuts.openGithub' as const },
    { keys: ['H'], descriptionKey: 'shortcuts.scrollHome' as const },
    { keys: ['P'], descriptionKey: 'shortcuts.scrollProjects' as const },
    { keys: ['A'], descriptionKey: 'shortcuts.scrollAutomation' as const },
    { keys: ['C'], descriptionKey: 'shortcuts.scrollContact' as const },
    { keys: ['B'], descriptionKey: 'shortcuts.openBlog' as const },
    { keys: ['?'], descriptionKey: 'shortcuts.showHelp' as const },
    { keys: ['Esc'], descriptionKey: 'shortcuts.closeDialogs' as const },
  ];

  useEffect(() => {
    if (!showHelp) return;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showHelp]);

  return (
    <AnimatePresence>
      {showHelp && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={closeHelp}
          role="presentation"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="shortcuts-title"
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.18 }}
            className="w-full max-w-md rounded-2xl border border-gray-800 bg-[var(--surface-solid)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <Keyboard className="w-5 h-5 text-red-400" aria-hidden />
                <h2 id="shortcuts-title" className="text-lg font-semibold text-white">
                  {t('shortcuts.title')}
                </h2>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={closeHelp}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                aria-label={t('shortcuts.close')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <ul className="px-5 py-4 space-y-3">
              {shortcuts.map((item) => (
                <li key={item.descriptionKey} className="flex items-center justify-between gap-4">
                  <span className="text-sm text-gray-300">{t(item.descriptionKey)}</span>
                  <span className="flex items-center gap-1 shrink-0">
                    {item.keys.map((key) => (
                      <kbd
                        key={key}
                        className="px-2 py-1 text-xs font-mono rounded-md bg-gray-800 border border-gray-700 text-gray-300"
                      >
                        {key}
                      </kbd>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
