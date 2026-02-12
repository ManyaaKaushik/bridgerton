import React, { useState } from "react";
import DanceCard from "../components/DanceCard";

const imgImage28 =
  "https://www.figma.com/api/mcp/asset/240ba479-4f56-4c09-a688-c7c5cd57530e";
const imgImage16 =
  "https://www.figma.com/api/mcp/asset/207fcef9-8bbd-42f3-9d08-fd588eb5e56d";

const Screen1 = ({ onCardClick, onBackClick }) => {
  const [receiverName, setReceiverName] = useState("");
  const [senderName, setSenderName] = useState("");
  const [phase, setPhase] = useState("form"); // 'form' | 'share'
  const [copied, setCopied] = useState(false);

  const isFormValid = receiverName.trim() !== "" && senderName.trim() !== "";

  const shareLink =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname.replace(/\/$/, "")}?recipient=${encodeURIComponent(receiverName.trim())}&sender=${encodeURIComponent(senderName.trim())}`
      : "";

  const handleNext = () => {
    if (!isFormValid || phase !== "form") return;
    setPhase("share");
  };

  const handleBack = () => {
    setPhase("form");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCreateAnother = () => {
    onBackClick();
  };

  const isShare = phase === "share";

  return (
    <div className="bg-white min-h-screen relative overflow-hidden font-linden-hill">
      {/* Background decorative image */}
      <div className="absolute h-[834px] left-[-47px] opacity-[0.12] top-[-9px] w-[636px] pointer-events-none">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover size-full contrast-110"
          src={imgImage28}
        />
      </div>

      {/* Main content container */}
      <div
        className={`min-h-screen ${isShare ? "flex" : "flex items-center justify-center px-4 sm:px-8 py-8 sm:py-10"}`}
      >
        <div
          className={
            isShare
              ? "flex flex-col lg:flex-row w-full"
              : "flex flex-col xl:flex-row gap-8 xl:gap-16 items-center justify-center w-full max-w-6xl"
          }
        >
          {/* Left side - Card / Share preview (hand image when sharing) */}
          <div
            className={
              isShare
                ? "w-full lg:w-1/2 min-h-[42vh] lg:min-h-screen relative shrink-0"
                : "shrink-0 w-full max-w-[414px]"
            }
          >
            {/* Share screen: full-left hand image with card overlay */}
            {isShare && (
              <div className="absolute inset-0 w-full h-full">
                <div className="relative w-full h-full">
                  {/* Hand image - full width, top to bottom */}
                  <img
                    alt="Elegant hands holding dance card"
                    src="/hand.png"
                    className="absolute inset-0 w-full h-full object-cover contrast-110"
                  />
                  {/* Card overlay - flies out above */}
                  <div
                    className="absolute z-10"
                    style={{
                      width: "min(414px, calc(100vw - 2.5rem))",
                      height: "min(584px, calc((100vw - 2.5rem) * 584 / 414))",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%) rotate(-4deg)",
                      animation: "cardFlyOut 0.5s ease-out forwards",
                    }}
                  >
                    <DanceCard
                      recipientName={receiverName}
                      senderName={senderName}
                      size="full"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Form phase: card */}
            {!isShare && (
              <div
                className="relative flex items-center justify-center"
                style={{
                  width: "min(414px, calc(100vw - 2.5rem))",
                  height: "min(584px, calc((100vw - 2.5rem) * 584 / 414))",
                }}
              >
                <div className="w-full h-full">
                  <DanceCard
                    recipientName={receiverName}
                    senderName={senderName}
                    size="full"
                    showPlaceholders
                    onClick={() =>
                      phase === "form" && isFormValid && handleNext()
                    }
                    className="w-full h-full"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right side - Form or Share UI */}
          <div
            className={`flex flex-col shrink-0 w-full ${isShare ? "lg:w-1/2 items-center justify-center px-4 sm:px-8 lg:px-16 py-8 lg:py-0" : "gap-8 sm:gap-10 max-w-md"}`}
          >
            {!isShare ? (
              <>
                <div className="max-w-md">
                  <h1 className="font-linden-hill text-2xl text-[#313131] leading-tight text-balance">
                    Create your Bridgerton dance card and share it with your
                    dearest
                  </h1>
                </div>

                <div className="flex flex-col gap-4 max-w-sm w-full">
                  <div>
                    <label
                      htmlFor="receiver-name"
                      className="block font-linden-hill text-sm text-[#313131] mb-1.5"
                    >
                      Receiver name
                    </label>
                    <input
                      id="receiver-name"
                      type="text"
                      value={receiverName}
                      onChange={(e) => setReceiverName(e.target.value)}
                      placeholder="Enter receiver's name"
                      className="w-full font-linden-hill px-4 py-3 border border-[#d4c4a8] rounded-lg bg-[#fffbf5] text-[#313131] placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-[#d4c4a8] focus:border-transparent disabled:opacity-70"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sender-name"
                      className="block font-linden-hill text-sm text-[#313131] mb-1.5"
                    >
                      Your name
                    </label>
                    <input
                      id="sender-name"
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full font-linden-hill px-4 py-3 border border-[#d4c4a8] rounded-lg bg-[#fffbf5] text-[#313131] placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-[#d4c4a8] focus:border-transparent disabled:opacity-70"
                    />
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  disabled={!isFormValid}
                  className={`relative w-fit inline-block group transition-all duration-200 bg-transparent! overflow-hidden ${!isFormValid ? "opacity-60 cursor-not-allowed" : "hover:opacity-60 hover:scale-[1.02]"}`}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      alt=""
                      className="w-full h-full object-cover contrast-110"
                      src={imgImage16}
                    />
                  </div>
                  <span className="relative block font-metal text-2xl text-black text-center py-4 px-12">
                    Next
                  </span>
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-6 sm:gap-8 w-full max-w-md animate-fade-in">
                {/* Back button */}
                <button
                  onClick={handleBack}
                  className="self-start bg-neutral-100 rounded-2xl flex items-center gap-2 px-4 py-2 text-sm font-linden-hill text-dark-brown hover:text-saddle-brown hover:opacity-60 transition-all duration-200"
                >
                  <span>Back</span>
                </button>
                {/* Share header */}
                <div className="space-y-2">
                  <h1 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark-brown italic leading-tight">
                    Share your dance card
                  </h1>
                  <p className="font-linden-hill text-medium-brown text-base sm:text-lg italic">
                    Send this link to your dearest — they will see the full
                    letter
                  </p>
                </div>

                {/* Share controls card */}
                <div className="rounded-xl">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      value={shareLink}
                      readOnly
                      className="flex-1 min-w-0 px-4 py-2 text-xs font-mono border-2 border-champagne/60 rounded-none bg-white/80 text-dark-brown focus:ring-2 focus:ring-champagne focus:border-transparent"
                    />
                    <button
                      onClick={handleCopyLink}
                      className={`relative w-full sm:w-fit border-none active:border-none active:outline-none inline-block shrink-0 group bg-transparent! overflow-hidden transition-all duration-200 ${copied ? "opacity-90" : "hover:opacity-60 hover:scale-[1.02]"}`}
                    >
                      <div className="absolute inset-0 overflow-hidden">
                        <img
                          alt=""
                          className="w-full h-full object-cover contrast-110"
                          src={imgImage16}
                        />
                      </div>
                      <span className="relative block font-metal text-2xl text-black text-center py-4 px-8">
                        {copied ? "✓ Copied!" : "Copy URL"}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Create another */}
                <button
                  onClick={handleCreateAnother}
                  className="relative w-full md:w-fit inline-block group bg-transparent! overflow-hidden hover:opacity-60 hover:scale-[1.02] transition-all duration-200"
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      alt=""
                      className="w-full h-full object-cover contrast-110"
                      src={imgImage16}
                    />
                  </div>
                  <span className="relative block font-metal text-2xl text-black text-center py-4 px-12">
                    Create Another Card
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen1;
