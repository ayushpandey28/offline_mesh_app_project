import React from 'react';

export const Card = ({ children, className = '', style }) => {
  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );
};

export const Button = ({ children, onClick, variant = 'primary', className = '', icon: Icon, style }) => {
  const btnClass = variant === 'outline' ? 'btn btn-outline' : 'btn';
  return (
    <button className={`${btnClass} ${className}`} onClick={onClick} style={style}>
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};
