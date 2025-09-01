import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  className?: string; // This allows you to add extra styles if needed
}

export function Heading({ children, className = '' }: HeadingProps) {
  // All your main heading styles are defined here in one place.
  // We use the 'font-serif' for Merriweather.
  const baseClasses = "font-serif font-bold text-text-heading";

  return (
    <h1 className={`${baseClasses} ${className}`}>
      {children}
    </h1>
  );
}