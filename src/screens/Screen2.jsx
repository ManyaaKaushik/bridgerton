import React, { useState } from 'react';

const imgImage17 = "https://www.figma.com/api/mcp/asset/384fa78a-b27f-49f2-a21f-c4c405a5386d";
const imgVector = "https://www.figma.com/api/mcp/asset/637bdf99-7531-4c37-a589-16233e653f72";

const Screen2 = ({ onFormSubmit, onClose, initialData }) => {
  const [recipientName, setRecipientName] = useState(initialData.recipientName || '');
  const [senderName, setSenderName] = useState(initialData.senderName || '');

  const handleSubmit = () => {
    if (recipientName.trim() && senderName.trim()) {
      onFormSubmit({ recipientName: recipientName.trim(), senderName: senderName.trim() });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-gradient-to-br from-tan via-floral-white to-tan font-crimson animate-slide-up">
      {/* Main Card Container */}
      <div className="relative w-full max-w-sm">
        {/* Background Card Image */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-2xl" style={{ aspectRatio: '405/605' }}>
          <img 
            alt="card background" 
            className="absolute inset-0 w-full h-full object-cover" 
            src={imgImage17} 
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 overflow-y-auto">
            {/* Title */}
            <p className="text-center text-sm font-metal text-dark-brown mb-6 tracking-wider">
              First Ball Of The Season
            </p>

            {/* Main Content */}
            <div className="w-full text-center space-y-4">
              {/* Dearest Line */}
              <div className="flex items-baseline justify-center gap-1 text-sm italic text-dark-brown font-linden-hill">
                <span>Dearest</span>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="____________"
                  className="w-32 bg-transparent border-b-2 border-dark-brown border-t-0 border-l-0 border-r-0 px-1 py-0.5 outline-none focus:border-dark-brown text-dark-brown italic placeholder:text-dark-brown/40"
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                />
                <span>,</span>
              </div>

              {/* Paragraph */}
              <p className="text-xs leading-relaxed text-dark-brown italic font-linden-hill px-4 py-3 text-justify">
                It would be my greatest honour if you would reserve every dance upon this card for me alone. On this most romantic of evenings, let us waltz through the night as partners in this grand affair of the heart.
              </p>

              {/* Signature Line */}
              <div className="pt-4">
                <p className="text-xs italic text-dark-brown font-linden-hill mb-2">
                  Yours most affectionately,
                </p>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="____________________________________"
                  className="w-full max-w-xs bg-transparent border-b-2 border-dark-brown border-t-0 border-l-0 border-r-0 px-1 py-0.5 outline-none focus:border-dark-brown text-dark-brown italic text-center text-xs placeholder:text-dark-brown/30"
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                />
              </div>

              {/* Decorative Vector */}
              <div className="flex justify-center py-3">
                <img 
                  alt="decorative element" 
                  className="h-8 opacity-80" 
                  src={imgVector} 
                />
              </div>

              {/* Footer Text */}
              <p className="text-xs leading-relaxed text-dark-brown italic font-metal px-4 text-center">
                By accepting this card, you agree to bestow upon the bearer: sweet compliments, tender embraces, and your most charming company throughout the evening.
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-end mt-8">
          <button 
            className="px-5 py-2 text-sm font-crimson bg-orange-100 text-medium-brown border border-champagne rounded cursor-pointer hover:bg-orange-200 transition-all"
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className={`px-8 py-2 text-sm font-crimson font-semibold bg-champagne text-dark-brown border-2 border-saddle-brown rounded cursor-pointer transition-all ${recipientName.trim() && senderName.trim() ? 'opacity-100 hover:bg-yellow-700' : 'opacity-50 cursor-not-allowed'}`}
            onClick={handleSubmit}
            disabled={!recipientName.trim() || !senderName.trim()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Screen2;
