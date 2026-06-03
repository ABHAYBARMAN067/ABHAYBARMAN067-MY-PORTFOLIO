'use client';

import { Mail, Send } from 'lucide-react';

interface GetTouchButtonProps {
  onClick?: () => void;
  className?: string;
}

export default function GetTouchButton({
  onClick,
  className = '',
}: GetTouchButtonProps) {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={`
        group relative px-8 py-3 rounded-full
        border-2 border-black dark:border-white
        text-black dark:text-white
        font-semibold text-lg
        hover:bg-black dark:hover:bg-white
        hover:text-white dark:hover:text-black
        transition-all duration-300
        flex items-center gap-2
        ${className}
      `}
    >
      <Mail size={20} />
      <span>Get In Touch</span>
      <Send
        size={18}
        className="group-hover:translate-x-1 transition-transform"
      />
    </button>
  );
}
