'use client';

import { useEffect, useState } from 'react';

interface UseTypingEffectOptions {
  speed?: number;
  delay?: number;
  loop?: boolean;
}

export default function useTypingEffect(
  text: string,
  { speed = 80, delay = 1200, loop = false }: UseTypingEffectOptions = {},
) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const typeNext = () => {
      if (cancelled) {
        return;
      }

      setDisplayedText(text.slice(0, index));
      index += 1;

      if (index <= text.length) {
        timeoutId = setTimeout(typeNext, speed);
        return;
      }

      if (loop) {
        timeoutId = setTimeout(() => {
          index = 0;
          setDisplayedText('');
          typeNext();
        }, delay);
      }
    };

    timeoutId = setTimeout(typeNext, delay);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [delay, loop, speed, text]);

  return displayedText;
}
