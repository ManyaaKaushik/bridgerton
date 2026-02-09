import React from 'react';

const Screen3 = ({ formData, onGetLinkClick, onBackClick, isSharedMode }) => {
  return (
    <div className="min-h-screen flex flex-col items-center p-10 pb-16 bg-gradient-to-br from-tan via-floral-white to-tan font-crimson">
      {!isSharedMode && (
        <div className="w-full flex justify-between items-center mb-10 max-w-2xl">
          <button 
            className="btn-secondary"
            onClick={onBackClick}
          >
            ← Back
          </button>
          <h2 className="text-xl font-playfair text-dark-brown">
            Your Dance Card
          </h2>
          <div className="w-20"></div>
        </div>
      )}

      <div className="flex-1 flex justify-center items-center w-full">
        <div className="w-full max-w-xl bg-floral-white border-4 border-saddle-brown rounded-lg p-10 shadow-2xl animate-fade-in-scale relative">
          {/* Decorative Corners */}
          <div className="absolute top-4 left-4 text-2xl text-saddle-brown opacity-70">✦</div>
          <div className="absolute top-4 right-4 text-2xl text-saddle-brown opacity-70">✦</div>
          <div className="absolute bottom-4 left-4 text-2xl text-saddle-brown opacity-70">✦</div>
          <div className="absolute bottom-4 right-4 text-2xl text-saddle-brown opacity-70">✦</div>

          {/* Header */}
          <h1 className="text-2xl font-playfair text-dark-brown text-center mb-8 font-semibold tracking-wide">
            First Ball Of The Season
          </h1>

          {/* Card Content */}
          <div className="px-4">
            <p className="text-base text-dark-brown italic mb-5 leading-relaxed">
              Dearest <span className="font-playfair font-semibold text-medium-brown">{formData.recipientName}</span>,
            </p>

            <p className="text-sm text-medium-brown italic mb-6 leading-relaxed text-justify">
              It would be my greatest honour if you would reserve every dance upon this card for me alone. On this most romantic of evenings, let us waltz through the night as partners in this grand affair of the heart.
            </p>

            <p className="text-base text-dark-brown italic mb-2">
              Yours most affectionately,
            </p>

            <p className="text-lg font-playfair text-medium-brown italic mb-6 font-semibold">
              {formData.senderName}
            </p>

            <p className="text-xs text-medium-brown italic leading-relaxed text-justify mb-6">
              By accepting this card, you agree to bestow upon the bearer: sweet compliments, tender embraces, and your most charming company throughout the evening.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-champagne opacity-40 my-5"></div>
        </div>
      </div>

      {!isSharedMode && (
        <button 
          className="btn-primary text-lg mt-10"
          onClick={onGetLinkClick}
        >
          Get Private Link
        </button>
      )}

      {isSharedMode && (
        <p className="mt-10 text-base text-saddle-brown font-playfair italic text-center">
          This card was shared with you with love ✦
        </p>
      )}
    </div>
  );
};

export default Screen3;
