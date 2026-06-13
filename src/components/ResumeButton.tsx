// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowDownToLine } from 'lucide-react';
// import gsap from 'gsap';
// import { useTheme } from '@/hooks/useTheme';

// interface ResumeButtonProps {
//   resumeUrl?: string;
//   fileName?: string;
// }

// const ResumeButton: React.FC<ResumeButtonProps> = ({
//   resumeUrl = '/Resume.pdf',
//   fileName = 'Abhay_Barman_Resume.pdf',
// }) => {
//   const { theme } = useTheme();
//   const isDark = theme === 'dark';
//   const [status, setStatus] = useState<'idle' | 'hovered' | 'loading' | 'success'>('idle');
//   const frameRef = useRef<HTMLButtonElement>(null);

//   const handleDownload = async (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (status === 'loading' || status === 'success') return;

//     setStatus('loading');

//     try {
//       const response = await fetch(resumeUrl);
//       if (!response.ok) throw new Error('Resume not found');

//       const blob = await response.blob();
//       const objectUrl = URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.href = objectUrl;
//       link.download = fileName;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       URL.revokeObjectURL(objectUrl);

//       setTimeout(() => setStatus('success'), 1600);
//       setTimeout(() => setStatus('idle'), 3600);
//     } catch {
//       setStatus('idle');
//     }
//   };

//   useEffect(() => {
//     const frame = frameRef.current;
//     if (!frame) return;

//     const handleMouseMove = (e: MouseEvent) => {
//       const { clientX, clientY } = e;
//       const width = window.innerWidth;
//       const height = window.innerHeight;

//       const xNorm = clientX / width - 0.5;
//       const yNorm = clientY / height - 0.5;

//       const rotateX = -yNorm * 40;
//       const rotateY = xNorm * 40;

//       gsap.to(frame, {
//         duration: 0.5,
//         x: xNorm * 40, 
//         y: yNorm * 40,
//         rotateX: rotateX,
//         rotateY: rotateY,
//         ease: 'power2.out',
//         transformPerspective: 1200
//       });
//     };

//     const handleMouseLeave = () => {
//       gsap.to(frame, {
//         duration: 1,
//         x: 0,
//         y: 0,
//         rotateX: 0,
//         rotateY: 0,
//         ease: 'elastic.out(1, 0.6)'
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     frame.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       frame.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   const isSmallShape = status !== 'idle';

//   return (
//     <div className="h-[48px] w-[170px] flex items-center justify-center relative [perspective:1200px]">
//       <button
//         ref={frameRef}
//         onClick={handleDownload}
//         onMouseEnter={() => status === 'idle' && setStatus('hovered')}
//         onMouseLeave={() => status === 'hovered' && setStatus('idle')}
//         disabled={status === 'loading' || status === 'success'}
//         className={`absolute w-full h-full rounded-[100px] [transform-style:preserve-3d] flex justify-center items-center group transition-colors duration-500 ${
//           isDark
//             ? 'bg-white/[0.01] border border-white/15 shadow-[0_0_30px_rgba(255,255,255,0.02),_inset_0_0_15px_rgba(255,255,255,0.05)] hover:border-white/35'
//             : 'bg-black/[0.01] border border-black/15 shadow-[0_0_30px_rgba(0,0,0,0.02),_inset_0_0_15px_rgba(0,0,0,0.05)] hover:border-black/35'
//         }`}
//       >
//         <motion.div
//           className={`absolute bg-gradient-to-r border flex flex-row items-center justify-center transition-all duration-400 ${
//             isDark ? 'text-white shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]' : 'text-black shadow-[inset_0_0_10px_rgba(0,0,0,0.08)]'
//           } ${
//             status === 'idle'
//               ? isDark
//                 ? 'from-white/10 to-white/[0.02] border-white/25 group-hover:border-white/50'
//                 : 'from-black/10 to-black/[0.02] border-black/25 group-hover:border-black/50'
//               : ''
//           } ${
//             status === 'hovered'
//               ? isDark
//                 ? 'from-white/15 to-white/5 border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.1)]'
//                 : 'from-black/15 to-black/5 border-black/40 shadow-[0_0_15px_rgba(0,0,0,0.08)]'
//               : ''
//           } ${status === 'loading' ? 'from-cyan-500/10 to-transparent border-cyan-500/30 text-cyan-400' : ''}
//           ${status === 'success' ? 'from-green-500/10 to-transparent border-green-500/30 text-green-400' : ''}`}
//           style={{ transform: 'translateZ(25px)' }}
//           animate={{
//             width: isSmallShape ? '38px' : '90%',
//             height: isSmallShape ? '38px' : '80%',
//             borderRadius: isSmallShape ? '50%' : '100px',
//           }}
//           transition={{ type: 'spring', stiffness: 320, damping: 20 }}
//         >
//           <AnimatePresence mode="wait">
            
//             {/* 1. IDLE STATE */}
//             {status === 'idle' && (
//               <motion.div
//                 key="resume-idle"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className={`flex items-center justify-between w-full px-4 font-mono text-xs ${isDark ? 'text-white' : 'text-black'}`}
//               >
//                 <span className="font-black tracking-wider">CV</span>
//                 <div
//                   className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDark ? 'bg-white shadow-[0_0_8px_#fff]' : 'bg-black shadow-[0_0_8px_#000]'}`}
//                 />
//                 <span className="flex items-center gap-0.5 font-black tracking-wider">
//                   RESUME <ArrowDownToLine size={13} className="transition-transform group-hover:translate-y-0.5" />
//                 </span>
//               </motion.div>
//             )}

//             {/* 2. HOVERED STATE */}
//             {status === 'hovered' && (
//               <motion.div
//                 key="resume-hovered"
//                 initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
//                 animate={{ opacity: 1, scale: 1, rotate: 0 }}
//                 exit={{ opacity: 0, scale: 0.6 }}
//                 className={`flex items-center justify-center ${isDark ? 'text-white' : 'text-black'}`}
//               >
//                 <ArrowDownToLine size={15} />
//               </motion.div>
//             )}

//             {/* 3. LOADING STATE */}
//             {status === 'loading' && (
//               <motion.div
//                 key="resume-loading"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 className="flex items-center justify-center text-cyan-400"
//               >
//                 <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//                 </svg>
//               </motion.div>
//             )}

//             {/* 4. SUCCESS STATE */}
//             {status === 'success' && (
//               <motion.div
//                 key="resume-success"
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.5 }}
//                 className="flex items-center justify-center text-green-400"
//               >
//                 <svg
//                   className="w-4 h-4"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="3.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <polyline points="20 6 9 17 4 12"></polyline>
//                 </svg>
//               </motion.div>
//             )}

//           </AnimatePresence>
//         </motion.div>
//       </button>
//     </div>
//   );
// };

// export default ResumeButton;