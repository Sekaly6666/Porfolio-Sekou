"use client";
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, href = '#', variant = 'primary', className = '', onClick }: ButtonProps) {
  const baseClasses = 'relative inline-flex items-center justify-center overflow-hidden font-nunito font-medium text-sm uppercase tracking-widest transition-all duration-500 focus:outline-none px-8 py-4 cursor-none group';

  const variantClasses =
    variant === 'primary'
      ? 'bg-primary text-background hover:bg-white text-sm'
      : 'bg-transparent text-white border border-white/20 hover:border-primary';

  return (
    <motion.a
      href={href}
      onClick={onClick}
      target={href.startsWith('http') || href.endsWith('.mp4') ? "_blank" : undefined}
      rel={href.startsWith('http') || href.endsWith('.mp4') ? "noopener noreferrer" : undefined}
      className={`${baseClasses} ${variantClasses} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {variant === 'secondary' && (
        <span className="absolute inset-0 bg-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
      )}
      <span className="relative z-10 group-hover:text-background transition-colors duration-500">
        {children}
      </span>
    </motion.a>
  );
}
