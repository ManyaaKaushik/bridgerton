import React, { useState } from "react";

const imgImage28 =
  "https://www.figma.com/api/mcp/asset/240ba479-4f56-4c09-a688-c7c5cd57530e";
const imgImage17 = "/image 17 [Vectorized].svg";
const imgImage18 =
  "https://www.figma.com/api/mcp/asset/e9ac081c-6372-41d1-8f86-69c9cf7e65dd";
const imgImage16 =
  "https://www.figma.com/api/mcp/asset/207fcef9-8bbd-42f3-9d08-fd588eb5e56d";

const Screen1 = ({ onCardClick, onBackClick }) => {
  const [receiverName, setReceiverName] = useState("");
  const [senderName, setSenderName] = useState("");
  const isFormValid = receiverName.trim() !== "" && senderName.trim() !== "";
  return (
    <div className="bg-white min-h-screen relative overflow-hidden font-linden-hill">
      {/* Background decorative image */}
      <div className="absolute h-[834px] left-[-47px] opacity-[0.12] top-[-9px] w-[636px] pointer-events-none">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover size-full"
          src={imgImage28}
        />
      </div>

      {/* Main content container - centered with gap */}
      <div className="min-h-screen flex items-center justify-center px-8 py-10">
        <div className="flex gap-16 items-center justify-center w-full max-w-6xl">
          {/* Left side - Card */}
          <div
            className={`flex-shrink-0 transition-transform ${isFormValid ? "cursor-pointer hover:scale-105" : "cursor-default opacity-90"}`}
            onClick={() =>
              isFormValid &&
              onCardClick({
                recipientName: receiverName.trim(),
                senderName: senderName.trim(),
              })
            }
          >
            <div className="bg-[#fff7e3] w-[414px] h-[584px] border border-neutral-300 rounded-lg shadow-2xl overflow-hidden relative">
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
                <img
                  alt="Welcome to the"
                  src="/Welcome to the.png"
                  className="mb-6 max-w-full object-contain h-6 translate-y-6"
                />
                <p className="font-kapakana text-4xl text-black mb-12 mt-2">
                  First Ball Of The Season
                </p>

                <p className="font-linden-hill pl-8 w-full text-left italic text-sm text-black/94 leading-relaxed mb-4 px-4">
                  Dearest {receiverName || "_________________"} ,
                </p>

                <p className="font-linden-hill italic text-base text-black/94 leading-relaxed mb-6 px-4">
                  It would be my greatest honour if you would reserve every
                  dance upon this card for me alone. On this most romantic of
                  evenings, let us waltz through the night as partners in this
                  grand affair of the heart.
                </p>

                <p className="font-linden-hill italic text-base text-left pl-8 w-full text-black/94 leading-relaxed mb-1 px-4">
                  Yours most affectionately,
                </p>

                <p className="font-linden-hill text-left pl-8 w-full italic text-base text-black/94 leading-relaxed mb-6 px-4">
                  {senderName || "____________________________________"}
                </p>

                <div className="my-4">
                  <img
                    alt="decorative"
                    className="h-6 opacity-60"
                    src={imgImage18}
                  />
                </div>

                <p className="font-linden-hill italic text-xs text-black/94 leading-relaxed px-4">
                  By accepting this card, you agree to bestow upon the bearer:
                  sweet compliments, tender embraces, and your most charming
                  company throughout the evening.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Text and Button */}
          <div className="flex flex-col gap-10 flex-shrink-0">
            {/* Heading */}
            <div className="max-w-md">
              <h1 className="font-linden-hill text-2xl text-[#313131] leading-tight text-balance">
                Create your Bridgerton dance card and share it with your dearest
              </h1>
            </div>

            {/* Form inputs */}
            <div className="flex flex-col gap-4 max-w-sm">
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
                  className="w-full font-linden-hill px-4 py-3 border border-[#d4c4a8] rounded-lg bg-[#fffbf5] text-[#313131] placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-[#d4c4a8] focus:border-transparent"
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
                  className="w-full font-linden-hill px-4 py-3 border border-[#d4c4a8] rounded-lg bg-[#fffbf5] text-[#313131] placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-[#d4c4a8] focus:border-transparent"
                />
              </div>
            </div>

            {/* Next Button with decorative background */}
            <button
              onClick={() =>
                isFormValid &&
                onCardClick({
                  recipientName: receiverName.trim(),
                  senderName: senderName.trim(),
                })
              }
              disabled={!isFormValid}
              className={`relative w-fit inline-block group ${!isFormValid ? "opacity-60 cursor-not-allowed" : ""}`}
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
