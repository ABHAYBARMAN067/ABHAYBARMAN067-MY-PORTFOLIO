'use client';

import useTypingEffect from '@/hooks/useTypingEffect';

interface AnimatedTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
}

export default function AnimatedText({
  text,
  className,
  speed,
  delay,
  loop,
}: AnimatedTextProps) {
  const displayedText = useTypingEffect(text, { speed, delay, loop });

  return (
    <span aria-label={text} className={className}>
      {displayedText}
      <span aria-hidden="true" className="ml-1 animate-pulse">
        |
      </span>
    </span>
  );
}
