'use client';

import { Mail, ArrowRight } from 'lucide-react';

interface GetTouchButtonProps {
  email?: string;
  onClick?: () => void;
  className?: string;
}

export default function GetTouchButton({
  email = 'your-email@example.com',
  onClick,
  className = '',
}: GetTouchButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    const subject = 'Let\'s Connect';
    const body = 'Hi! I\'d like to get in touch with you.';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <button
      onClick={handleClick}
      className={`
        group relative px-8 py-3 rounded-full
        bg-black dark:bg-white text-white dark:text-black
        font-semibold text-lg
        hover:shadow-lg transition-all duration-300
        flex items-center gap-2
        ${className}
      `}
    >
      <Mail size={20} />
      <span>Get in Touch</span>
      <ArrowRight
        size={18}
        className="group-hover:translate-x-1 transition-transform"
      />
    </button>
  );
}
