'use client';

import { Download, FileText } from 'lucide-react';

interface ResumeButtonProps {
  resumeUrl?: string;
  fileName?: string;
  className?: string;
}

export default function ResumeButton({
  resumeUrl = '/resume.pdf',
  fileName = 'resume.pdf',
  className = '',
}: ResumeButtonProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
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
      <FileText size={20} />
      <span>Download Resume</span>
      <Download
        size={18}
        className="group-hover:translate-y-1 transition-transform"
      />
    </button>
  );
}
