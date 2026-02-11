import React from 'react';

const imgImage28 = "https://www.figma.com/api/mcp/asset/240ba479-4f56-4c09-a688-c7c5cd57530e";
const imgImage17 = "https://www.figma.com/api/mcp/asset/b4f63e2c-1bd3-432a-ab7d-ac95f0ea51b3";
const imgImage18 = "https://www.figma.com/api/mcp/asset/e9ac081c-6372-41d1-8f86-69c9cf7e65dd";
const imgImage16 = "https://www.figma.com/api/mcp/asset/207fcef9-8bbd-42f3-9d08-fd588eb5e56d";

const Screen1 = ({ onCardClick, onBackClick }) => {
  return (
    <div className="bg-white min-h-screen relative overflow-hidden font-linden-hill">
      {/* Background decorative image */}
      <div className="absolute h-[834px] left-[-47px] opacity-[0.12] top-[-9px] w-[636px] pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgImage28} />
      </div>

      {/* Main content container - centered with gap */}
      <div className="min-h-screen flex items-center justify-center px-8 py-10">
        <div className="flex gap-20 items-center justify-center w-full max-w-6xl">
          
          {/* Left side - Card */}
          <div 
            className="flex-shrink-0 cursor-pointer transition-transform hover:scale-105"
            onClick={onCardClick}
          >
            <div className="bg-[#fff7e3] w-[380px] h-[535px] rounded-lg shadow-2xl overflow-hidden relative">
              {/* Card background image */}
              <div className="absolute inset-0">
                <img 
                  alt="card background" 
                  className="absolute inset-0 max-w-none object-cover size-full" 
                  src={imgImage17} 
                />
              </div>
              
              {/* Card content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <p className="font-kapakana text-2xl text-black mb-12">
                  First Ball Of The Season
                </p>
                
                <p className="font-linden-hill italic text-sm text-black/94 leading-relaxed mb-6">
                  Welcome to the
                </p>
                
                <p className="font-linden-hill italic text-sm text-black/94 leading-relaxed mb-12 px-4">
                  It would be my greatest honour if you would reserve every dance upon this card for me alone. On this most romantic of evenings, let us waltz through the night as partners in this grand affair of the heart.
                </p>
                
                <div className="my-4">
                  <img alt="decorative" className="h-6 opacity-60" src={imgImage18} />
                </div>
                
                <p className="font-linden-hill italic text-xs text-black/94 leading-relaxed px-4">
                  By accepting this card, you agree to bestow upon the bearer: sweet compliments, tender embraces, and your most charming company throughout the evening.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Text and Button */}
          <div className="flex flex-col gap-10 flex-shrink-0">
            {/* Heading */}
            <div className="max-w-md">
              <h1 className="font-linden-hill text-2xl text-[#313131] leading-tight text-balance">
                <p>Create your Bridgerton dance card and share it with your dearest</p>
              </h1>
            </div>

            {/* Next Button with decorative background */}
            <button
              onClick={onCardClick}
              className="relative w-fit inline-block group"
            >
              {/* Decorative button background */}
              <div className="absolute inset-0">
                <img 
                  alt="" 
                  className="w-full h-full object-cover" 
                  src={imgImage16} 
                />
              </div>
              
              {/* Button text */}
              <span className="relative block font-metal text-2xl text-black text-center py-4 px-12">
                Next
              </span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Screen1;
