'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import { useTheme } from '../hooks/useTheme';

interface LoadingScreenProps {
  isLoading: boolean;
}

const BOOT_LINES = [
  { text: '> WELCOME TO MY PORTFOLIO', delay: 0 },
];

const HIDE_DELAY = 2500;

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [visible, setVisible] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [cursorLine, setCursorLine] = useState(0);

  const resetLoadingState = useCallback(() => {
    setVisible(true);
    setVisibleLines([]);
    setCursorLine(0);
  }, []);

  useEffect(() => {
    if (isLoading) {
      resetLoadingState();
    }
  }, [isLoading, resetLoadingState]);

  useEffect(() => {
    if (!visible) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    BOOT_LINES.forEach((line, i) => {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
        setCursorLine(i);
      }, line.delay);
      timers.push(t);
    });

    const t = setTimeout(() => {
      setVisible(false);
      setVisibleLines([]);
      setCursorLine(0);
    }, HIDE_DELAY);

    timers.push(t);

    return () => timers.forEach(clearTimeout);
  }, [visible]);

  const termBg = '#0a0a0a';
  const termBorder = '#2a2a2a';
  const termText = '#c8c8c0';
  const termDim = '#555550';
  const headerBg = '#141414';

  const dotRed = '#ef4444';
  const dotYellow = '#f59e0b';
  const dotGreen = '#22c55e';

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isDark ? '#000000' : '#f0f0ea',
            padding: '16px',
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              width: '100%',
              maxWidth: 440,
              backgroundColor: termBg,
              border: `1px solid ${termBorder}`,
              borderRadius: 10,
              overflow: 'hidden',
              fontFamily: '"Fira Code", "Cascadia Code", "Courier New", monospace',
            }}
          >
            {/* Header */}
            <div
              style={{
                height: 36,
                backgroundColor: headerBg,
                borderBottom: `1px solid ${termBorder}`,
                display: 'flex',
                alignItems: 'center',
                paddingLeft: 14,
                paddingRight: 14,
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: dotRed,
                }}
              />
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: dotYellow,
                }}
              />
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: dotGreen,
                }}
              />
              <span
                style={{
                  flex: 1,
                  textAlign: 'center',
                  fontSize: '11px',
                  color: termDim,
                  letterSpacing: 1,
                }}
              >
                ab@portfolio ~ boot
              </span>
            </div>

            {/* Body */}
            <div
              style={{
                padding: '20px',
                minHeight: 120,
              }}
            >
              {BOOT_LINES.map((line, i) => (
                <AnimatePresence key={i}>
                  {visibleLines.includes(i) && (
                    <motion.div
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        fontSize: '14px',
                        lineHeight: '1.9',
                        color: termText,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                      }}
                    >
                      <span>{line.text}</span>

                      {cursorLine === i && (
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          style={{
                            display: 'inline-block',
                            width: 7,
                            height: 13,
                            backgroundColor: termText,
                            marginLeft: 2,
                          }}
                        />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}