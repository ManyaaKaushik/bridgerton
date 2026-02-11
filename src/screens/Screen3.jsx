import React, { useState } from "react";
import DanceCard from "../components/DanceCard";

const CARD_WIDTH = 414;
const CARD_HEIGHT = 584;

const Screen3 = ({ formData, onGetLinkClick, onBackClick, isSharedMode }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleAccept = () => {
    setIsRevealed(true);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center p-10 pb-16 font-crimson ${
        isSharedMode
          ? "bg-repeat bg-cover bg-center"
          : "bg-gradient-to-br from-tan via-floral-white to-tan"
      }`}
      style={isSharedMode ? { backgroundImage: "url(/bg-r.png)" } : undefined}
    >
      {!isSharedMode && (
        <div className="w-full flex justify-between items-center mb-10 max-w-2xl">
          <button className="btn-secondary" onClick={onBackClick}>
            ← Back
          </button>
          <h2 className="text-xl font-playfair text-dark-brown">
            Your Dance Card
          </h2>
          <div className="w-20"></div>
        </div>
      )}

      <div className="flex-1 flex justify-center items-center w-full">
        {isSharedMode ? (
          /* Receiver view: filled card with flip-to-reveal on Accept */
          <div
            className="relative w-full max-w-4xl flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 px-6"
            style={{ perspective: "1200px" }}
          >
            {/* Flip card container */}
            <div
              className="relative shrink-0"
              style={{
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                transformStyle: "preserve-3d",
                transform: isRevealed ? "rotateY(180deg)" : "rotateY(0deg)",
                transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Front face - Filled card cover (decorative) */}
              <div
                className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-10 rounded-lg shadow-2xl border border-saddle-brown/30"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  background:
                    "linear-gradient(135deg, #fffbf5 0%, #f5f0e6 50%, #faf5ed 100%)",
                  boxShadow:
                    "0 25px 50px -12px rgba(74, 55, 40, 0.25), inset 0 1px 0 rgba(255,255,255,0.8)",
                }}
              >
                <span className="text-6xl text-saddle-brown/30">✦</span>
              </div>

              {/* Back face - Revealed card content */}
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <DanceCard
                  recipientName={formData.recipientName}
                  senderName={formData.senderName}
                  size="full"
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>

            {/* Invitation panel when not yet revealed */}
            {!isRevealed && (
              <div className="flex flex-col items-start gap-4 max-w-xs">
                <h1 className="font-luxurious text-nowrap text-5xl md:text-6xl text-dark-brown">
                  Dance Card Invitation
                </h1>
                <p className="font-linden-hill text-2xl text-medium-brown italic">
                  Received from{" "}
                  <span className="font-semibold text-dark-brown">
                    {formData.senderName}
                  </span>
                </p>
                <button
                  onClick={handleAccept}
                  className="px-6 pt-2 pb-1.5 text-lg font-linden-hill font-semibold rounded-full cursor-pointer transition-all duration-300 bg-green-200 text-dark-brown border-2 border-saddle-brown hover:bg-yellow-700 hover:shadow-lg active:scale-[0.98]"
                >
                  Open Card
                </button>
              </div>
            )}

            {/* Create your own card button after reveal */}
            {isRevealed && (
              <div className="flex flex-col items-start max-w-xs">
                <button
                  onClick={onBackClick}
                  className="px-6 py-2 text-sm font-linden-hill font-semibold rounded-full cursor-pointer transition-all duration-300 bg-champagne text-dark-brown border-2 border-saddle-brown hover:bg-yellow-700 hover:shadow-lg active:scale-[0.98]"
                >
                  Create your own card
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Creator view - original layout */
          <div className="w-full max-w-xl bg-floral-white border-4 border-saddle-brown rounded-lg p-10 shadow-2xl animate-fade-in-scale relative">
            <div className="absolute top-4 left-4 text-2xl text-saddle-brown opacity-70">
              ✦
            </div>
            <div className="absolute top-4 right-4 text-2xl text-saddle-brown opacity-70">
              ✦
            </div>
            <div className="absolute bottom-4 left-4 text-2xl text-saddle-brown opacity-70">
              ✦
            </div>
            <div className="absolute bottom-4 right-4 text-2xl text-saddle-brown opacity-70">
              ✦
            </div>

            <h1 className="text-2xl font-playfair text-dark-brown text-center mb-8 font-semibold tracking-wide">
              First Ball Of The Season
            </h1>

            <div className="px-4">
              <p className="text-base text-dark-brown italic mb-5 leading-relaxed">
                Dearest{" "}
                <span className="font-playfair font-semibold text-medium-brown">
                  {formData.recipientName}
                </span>
                ,
              </p>

              <p className="text-sm text-medium-brown italic mb-6 leading-relaxed text-justify">
                It would be my greatest honour if you would reserve every dance
                upon this card for me alone. On this most romantic of evenings,
                let us waltz through the night as partners in this grand affair
                of the heart.
              </p>

              <p className="text-base text-dark-brown italic mb-2">
                Yours most affectionately,
              </p>

              <p className="text-lg font-playfair text-medium-brown italic mb-6 font-semibold">
                {formData.senderName}
              </p>

              <p className="text-xs text-medium-brown italic leading-relaxed text-justify mb-6">
                By accepting this card, you agree to bestow upon the bearer:
                sweet compliments, tender embraces, and your most charming
                company throughout the evening.
              </p>
            </div>

            <div className="h-px bg-champagne opacity-40 my-5"></div>
          </div>
        )}
      </div>

      {!isSharedMode && (
        <button className="btn-primary text-lg mt-10" onClick={onGetLinkClick}>
          Get Private Link
        </button>
      )}
    </div>
  );
};

export default Screen3;
