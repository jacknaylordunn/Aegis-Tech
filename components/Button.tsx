import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "border-transparent text-white bg-aegis-blue hover:bg-blue-900 focus:ring-aegis-blue shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    secondary: "border-transparent text-aegis-text bg-white hover:bg-gray-50 focus:ring-gray-200 shadow-md hover:shadow-lg hover:-translate-y-0.5",
    outline: "border border-current text-aegis-blue bg-transparent hover:bg-blue-50/50 focus:ring-aegis-blue"
  };

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="ml-2 -mr-1 h-5 w-5" />}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseStyles} ${variants[variant]} ${className}`}
        target={href.startsWith('http') ? "_blank" : undefined}
        rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};