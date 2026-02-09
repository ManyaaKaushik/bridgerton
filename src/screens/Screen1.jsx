import React from 'react';

const Screen1 = ({ onCardClick, onBackClick }) => {
  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gradient-to-br from-tan via-floral-white to-tan font-crimson">
      <div className="w-full max-w-96 flex justify-between items-center mb-10">
        <button 
          className="btn-secondary"
          onClick={onBackClick}
        >
          ← Back
        </button>
        <h2 className="text-xl font-playfair text-dark-brown">
          Your Dance Card Awaits
        </h2>
        <div className="w-20"></div>
      </div>
      
      <div className="flex-1 flex justify-center items-center w-full">
        <div 
          className="w-80 h-96 bg-floral-white border-4 border-champagne rounded-lg p-8 cursor-pointer transition-all duration-300 relative overflow-hidden animate-glow-pulse hover:shadow-2xl flex flex-col justify-between"
          onClick={onCardClick}
        >
          <div className="flex flex-col items-center justify-center h-full relative">
            <div className="text-center mb-5">
              <p className="text-lg font-playfair text-dark-brown font-semibold tracking-widest">
                First Ball Of The Season
              </p>
            </div>
            
            <div className="absolute top-5 left-5 text-2xl text-saddle-brown opacity-60">✦</div>
            <div className="absolute top-5 right-5 text-2xl text-saddle-brown opacity-60">✦</div>
            <div className="absolute bottom-5 left-5 text-2xl text-saddle-brown opacity-60">✦</div>
            <div className="absolute bottom-5 right-5 text-2xl text-saddle-brown opacity-60">✦</div>
            
            <p className="text-base text-saddle-brown italic mt-8">
              Click to fill your card
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen1;
