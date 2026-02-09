import React, { useState } from 'react';

const Screen4 = ({ shareLink, onBackClick }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareToWhatsApp = () => {
    const text = `I've created a special Valentine's dance card for you! Open this link to reveal it: ${shareLink}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShareToEmail = () => {
    const subject = 'A Valentine\'s Dance Card For You';
    const body = `Dearest,\n\nI've prepared a special surprise for you. Open this link to reveal your Valentine's dance card:\n\n${shareLink}\n\nWith affection,\nYour Secret Admirer`;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-5 bg-gradient-to-br from-tan via-floral-white to-tan font-crimson">
      <div className="w-full max-w-2xl bg-floral-white rounded-lg p-10 shadow-xl mb-10">
        <h1 className="text-5xl font-playfair text-dark-brown text-center mb-3 italic">
          Your Link is Ready
        </h1>
        <p className="text-lg font-crimson text-medium-brown text-center mb-8 italic">
          Share this link with your special someone
        </p>

        <div className="mb-8">
          <div className="bg-floral-white border-2 border-champagne rounded-lg p-5">
            <p className="text-sm text-dark-brown font-semibold mb-3">Shareable Link:</p>
            <div className="flex gap-2 flex-wrap">
              <input
                type="text"
                value={shareLink}
                readOnly
                className="flex-1 min-w-[200px] px-3 py-2 text-xs font-mono border border-champagne rounded bg-white text-dark-brown"
              />
              <button
                className={`px-5 py-2 text-sm font-crimson font-semibold border-2 border-saddle-brown rounded cursor-pointer transition-all ${copied ? 'bg-green-400 text-white' : 'bg-champagne text-dark-brown hover:bg-yellow-700'}`}
                onClick={handleCopyLink}
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>
          </div>
        </div>

        <div className="mb-8 pt-6 border-t border-champagne">
          <h3 className="text-lg font-playfair text-dark-brown font-semibold text-center mb-4">
            Or share directly:
          </h3>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              className="px-6 py-2 text-base font-crimson font-semibold text-white bg-green-500 rounded cursor-pointer transition-all hover:bg-green-600"
              onClick={handleShareToWhatsApp}
            >
              💬 WhatsApp
            </button>

            <button 
              className="px-6 py-2 text-base font-crimson font-semibold text-white bg-blue-600 rounded cursor-pointer transition-all hover:bg-blue-700"
              onClick={handleShareToEmail}
            >
              📧 Email
            </button>
          </div>
        </div>

        <button 
          className="btn-primary text-lg w-full"
          onClick={onBackClick}
        >
          Create Another Card
        </button>
      </div>
    </div>
  );
};

export default Screen4;
