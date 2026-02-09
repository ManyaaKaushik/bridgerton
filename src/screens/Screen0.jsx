import React from 'react';

const Screen0 = ({ onStartClick }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-tan via-floral-white to-tan relative overflow-hidden font-crimson">
      <div className="text-center z-10 animate-fade-in">
        <h1 className="text-7xl font-playfair text-dark-brown mb-2 italic font-light tracking-widest drop-shadow-md">
          Dearest Valentine
        </h1>
        <p className="text-3xl font-crimson text-medium-brown mb-16 font-light tracking-wide">
          A Bridgerton Affair
        </p>
        
        <button 
          className="btn-primary text-lg"
          onClick={onStartClick}
        >
          Get Started
        </button>
      </div>
      
      <svg className="absolute top-0 left-0 w-48 h-48 opacity-40" viewBox="0 0 100 100">
        <path d="M 0 100 Q 20 80 40 70 T 100 40 L 0 0 Z" fill="#8B4513" opacity="0.3" />
      </svg>
      
      <svg className="absolute bottom-0 right-0 w-48 h-48 opacity-40" viewBox="0 0 100 100">
        <path d="M 100 100 Q 80 80 60 70 T 0 40 L 100 0 Z" fill="#8B4513" opacity="0.3" />
      </svg>
    </div>
  );
};

export default Screen0;
