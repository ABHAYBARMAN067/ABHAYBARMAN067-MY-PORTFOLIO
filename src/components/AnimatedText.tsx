'use client';

import useTypingEffect from '@/hooks/useTypingEffect';

interface AnimatedTextProps {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
}

export default function AnimatedText({
  text,
  speed,
  delay,
  loop,
}: AnimatedTextProps) {
  const displayedText = useTypingEffect(text, { speed, delay, loop });

  return (
    <span aria-label={text}>
      {displayedText}
      <span aria-hidden="true" className="ml-1 animate-pulse">
        |
      </span>
    </span>
  );
}
