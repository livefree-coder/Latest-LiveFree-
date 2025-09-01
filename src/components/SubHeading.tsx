import React from 'react';

interface SubHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function SubHeading({ children, className = '' }: SubHeadingProps) {
  // All sub-heading styles are defined here.
  // We use 'font-lato' for the Lato font.
  const baseClasses = "font-lato font-semibold text-text-heading";

  return (
    <h2 className={`${baseClasses} ${className}`}>
      {children}
    </h2>
  );
}