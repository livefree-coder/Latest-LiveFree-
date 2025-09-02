import React from 'react';

interface SubHeadingProps {
  children: React.ReactNode;
  className?: string;
}

// 1. Wrap the component in React.forwardRef to allow it to receive a ref
export const SubHeading = React.forwardRef<HTMLHeadingElement, SubHeadingProps>(
  ({ children, className = '' }, ref) => {
    // All sub-heading styles are defined here.
    // We use 'font-lato' for the Lato font.
    const baseClasses = "font-lato font-semibold text-blue-900";

    return (
      // 2. Attach the forwarded ref to the actual h2 element
      <h2 ref={ref} className={`${baseClasses} ${className}`}>
        {children}
      </h2>
    );
  }
);