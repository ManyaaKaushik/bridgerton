import React, { useState, useEffect } from "react";
import "./App.css";
import Screen0 from "./screens/Screen0";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [formData, setFormData] = useState({
    recipientName: "",
    senderName: "",
  });
  const [shareLink, setShareLink] = useState("");
  const [isSharedMode, setIsSharedMode] = useState(false);

  // Check if this is a shared link on component mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const recipientName = params.get("recipient");
    const senderName = params.get("sender");

    if (recipientName && senderName) {
      // Load card data from URL parameters
      try {
        const decodedRecipient = decodeURIComponent(recipientName);
        const decodedSender = decodeURIComponent(senderName);

        setFormData({
          recipientName: decodedRecipient,
          senderName: decodedSender,
        });
        setIsSharedMode(true);
        setCurrentScreen(3); // Show filled card
      } catch (error) {
        console.error("Error loading shared card:", error);
        setCurrentScreen(0); // Fallback to home
      }
    }
  }, []);

  const handleStartClick = () => {
    setCurrentScreen(1);
  };

  const handleCardClick = (data) => {
    if (data) {
      setFormData({
        recipientName: data.recipientName,
        senderName: data.senderName,
      });
    }
    setCurrentScreen(2);
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
    setCurrentScreen(3);
  };

  const handleGenerateLink = () => {
    try {
      // Get base URL - ensure it ends without trailing slash for clean parameter
      let baseUrl = window.location.origin + window.location.pathname;
      baseUrl = baseUrl.replace(/\/$/, ""); // Remove trailing slash if present

      // Create share link with URL-encoded parameters
      const encodedRecipient = encodeURIComponent(formData.recipientName);
      const encodedSender = encodeURIComponent(formData.senderName);
      const link = `${baseUrl}?recipient=${encodedRecipient}&sender=${encodedSender}`;

      setShareLink(link);
      setCurrentScreen(4);
    } catch (error) {
      console.error("Error generating share link:", error);
      alert("Error generating link. Please try again.");
    }
  };

  const resetApp = () => {
    setCurrentScreen(0);
    setFormData({ recipientName: "", senderName: "" });
    setShareLink("");
    setIsSharedMode(false);
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  return (
    <div className="app">
      {/* Mobile-only message - shown below sm breakpoint */}
      <div className="sm:hidden fixed inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-tan to-floral-white z-50">
        <p className="font-playfair text-xl text-dark-brown">
          Open it on a desktop
        </p>
        <p className="mt-3 font-crimson text-base text-medium-brown">
          For the best experience, please view this on a larger screen.
        </p>
      </div>
      {/* Main app - hidden on mobile, visible from sm and up */}
      <div className="hidden sm:block">
        {/* Floating attribution banner */}
        <a
          href="https://www.linkedin.com/in/manyakaushikprofile/"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 left-4 z-40 px-4 py-2 bg-champagne/90 backdrop-blur-sm border border-saddle-brown/30 rounded-full text-neutral-950 text-sm font-crimson shadow-lg hover:scale-105 transition-all duration-200"
        >
          made by <span className="font-bold">manya kaushik</span>
        </a>
        {currentScreen === 0 && <Screen0 onStartClick={handleStartClick} />}
        {currentScreen === 1 && (
          <Screen1 onCardClick={handleCardClick} onBackClick={resetApp} />
        )}
        {currentScreen === 2 && (
          <Screen2
            onFormSubmit={handleFormSubmit}
            onClose={() => setCurrentScreen(1)}
            initialData={formData}
          />
        )}
        {currentScreen === 3 && (
          <Screen3
            formData={formData}
            onGetLinkClick={handleGenerateLink}
            onBackClick={resetApp}
            isSharedMode={isSharedMode}
          />
        )}
        {currentScreen === 4 && (
          <Screen4 shareLink={shareLink} onBackClick={resetApp} />
        )}
      </div>
    </div>
  );
}

export default App;
