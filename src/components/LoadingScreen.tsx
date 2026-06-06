'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';

interface LoadingScreenProps {
  isLoading: boolean;
}


const BOOT_LINES = [
  { text: '> initializing system...', delay: 0 },
  { text: '> loading kernel modules [OK]', delay: 1000 },
  { text: '> mounting filesystems [OK]', delay: 2200 },
  { text: '> starting network services...', delay: 2000 },
  { text: '> AUTHENTICATING USER...  WELCOME TO MY PORTFOLIO', delay: 3200 },
  { text: '> access granted ██████ 100%', delay: 5000 },
];


const LAST_LINE_DELAY = 6800;
const AB_REVEAL_DELAY = LAST_LINE_DELAY + 1000;
const HIDE_DELAY = AB_REVEAL_DELAY + 1500;

const CHARS = '01!@#$%^&*<>?/\\[]{}|=+~`;:';

function ScrambleText({ target, trigger }: { target: string; trigger: boolean }) {
  const [display, setDisplay] = useState(target);
  const frameRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!trigger) return;
    let iteration = 0;
    const totalFrames = 18;

    clearInterval(frameRef.current!);
    frameRef.current = setInterval(() => {
      setDisplay(
        target
          .split('')
          .map((char, idx) => {
            if (char === ' ') return ' ';
            if (idx < iteration / 2) return target[idx];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );
      iteration++;
      if (iteration >= totalFrames) {
        clearInterval(frameRef.current!);
        setDisplay(target);
      }
    }, 40);

    return () => clearInterval(frameRef.current!);
  }, [trigger, target]);

  return <span>{display}</span>;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Controls actual display and stays true until the animation is done.
  const [visible, setVisible] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [showAB, setShowAB] = useState(false);
  const [abTrigger, setAbTrigger] = useState(false);
  const [cursorLine, setCursorLine] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setVisible(true);
      setVisibleLines([]);
      setShowAB(false);
      setAbTrigger(false);
      setCursorLine(0);
    }
  }, [isLoading]);

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

    const t1 = setTimeout(() => {
      setShowAB(true);
      const t2 = setTimeout(() => setAbTrigger(true), 100);
      timers.push(t2);
    }, AB_REVEAL_DELAY);
    timers.push(t1);

    // Hide only after the full animation is done, regardless of isLoading.
    const t3 = setTimeout(() => {
      setVisible(false);
      setVisibleLines([]);
      setShowAB(false);
      setAbTrigger(false);
      setCursorLine(0);
    }, HIDE_DELAY);
    timers.push(t3);

    return () => timers.forEach(clearTimeout);
  }, [visible]);

  /* For dark and light theme */
  // const termBg = isDark ? '#0a0a0a' : '#f5f5f0';
  // const termBorder = isDark ? '#2a2a2a' : '#d0d0c8';
  // const termText = isDark ? '#c8c8c0' : '#2a2a2a';
  // const termGreen = isDark ? '#4ade80' : '#166634';
  // const termDim = isDark ? '#555550' : '#888880';
  // const headerBg = isDark ? '#141414' : '#e8e8e0';


  const termBg = '#0a0a0a';
  const termBorder = '#2a2a2a';
  const termText = '#c8c8c0';
  const termGreen = '#4ade80';
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
            {/* Terminal Header Bar */}
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
                minWidth: 0,
              }}
            >
              <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: dotRed, display: 'inline-block', flexShrink: 0 }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: dotYellow, display: 'inline-block', flexShrink: 0 }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: dotGreen, display: 'inline-block', flexShrink: 0 }} />
              <span
                style={{
                  flex: 1,
                  textAlign: 'center',
                  fontSize: '11px',
                  color: termDim,
                  letterSpacing: 1,
                  userSelect: 'none',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  minWidth: 0,
                }}
              >
                ab@portfolio ~ boot
              </span>
            </div>

            {/* Terminal Body */}
            <div style={{ padding: 'clamp(14px, 4vw, 18px) clamp(16px, 5vw, 20px) clamp(18px, 5vw, 22px)', minHeight: 200 }}>
              {BOOT_LINES.map((line, i) => (
                <AnimatePresence key={i}>
                  {visibleLines.includes(i) && (
                    <motion.div
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        fontSize: 'clamp(10px, 2.5vw, 12px)',
                        lineHeight: '1.9',
                        color: line.text.includes('[OK]')
                          ? termGreen
                          : line.text.includes('PORTFOLIO') || line.text.includes('100%')
                          ? termText
                          : termDim,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        overflow: 'hidden',
                        wordBreak: 'break-word',
                      }}
                    >
                      <span style={{ flexShrink: 0 }}>{line.text}</span>
                      {cursorLine === i && !visibleLines.includes(i + 1) && !showAB && (
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          style={{
                            display: 'inline-block',
                            width: 7,
                            height: 13,
                            backgroundColor: termText,
                            marginLeft: 2,
                            flexShrink: 0,
                          }}
                        />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}

              {/* AB Initials reveal */}
              <AnimatePresence>
                {showAB && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ marginTop: 18 }}
                  >
                    <div
                      style={{
                        borderTop: `1px solid ${termBorder}`,
                        paddingTop: 16,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'clamp(12px, 3vw, 16px)',
                        minWidth: 0,
                      }}
                    >
                      {/* AB Badge */}
                      <motion.div
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, ease: 'backOut' }}
                        style={{
                          width: 'clamp(40px, 10vw, 48px)',
                          height: 'clamp(40px, 10vw, 48px)',
                          border: `1.5px solid ${termGreen}`,
                          borderRadius: 6,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          flexShrink: 0,
                        }}
                      >
                        {[
                          { top: -1, left: -1, borderWidth: '2px 0 0 2px' },
                          { top: -1, right: -1, borderWidth: '2px 2px 0 0' },
                          { bottom: -1, left: -1, borderWidth: '0 0 2px 2px' },
                          { bottom: -1, right: -1, borderWidth: '0 2px 2px 0' },
                        ].map((style, idx) => (
                          <span
                            key={idx}
                            style={{
                              position: 'absolute',
                              width: 8,
                              height: 8,
                              borderColor: termGreen,
                              borderStyle: 'solid',
                              ...style,
                            }}
                          />
                        ))}
                        <span
                          style={{
                            fontFamily: 'monospace',
                            fontSize: 'clamp(12px, 3vw, 16px)',
                            fontWeight: 700,
                            color: termGreen,
                            letterSpacing: 1,
                          }}
                        >
                          AB
                        </span>
                        <motion.span
                          animate={{ top: ['0%', '100%', '0%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                          style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            height: 1,
                            backgroundColor: termGreen,
                            opacity: 0.4,
                          }}
                        />
                      </motion.div>

                      {/* Scramble text */}
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div
                          style={{
                            fontSize: 'clamp(11px, 2.8vw, 13px)',
                            fontWeight: 600,
                            color: termText,
                            letterSpacing: 2,
                            textTransform: 'uppercase',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <ScrambleText target="PORTFOLIO" trigger={abTrigger} />
                        </div>
                        <div
                          style={{
                            fontSize: 'clamp(9px, 2.2vw, 11px)',
                            color: termDim,
                            marginTop: 3,
                            letterSpacing: 1,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 3,
                            overflow: 'hidden',
                          }}
                        >
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            <ScrambleText target="session_started" trigger={abTrigger} />
                          </span>
                          <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            style={{
                              display: 'inline-block',
                              width: 6,
                              height: 11,
                              backgroundColor: termDim,
                              flexShrink: 0,
                              verticalAlign: -1,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
