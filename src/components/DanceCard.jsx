import React from "react";

const IMG_BACKGROUND = "/image 17 [Vectorized].svg";
const IMG_WELCOME = "/Welcome to the.png";
const IMG_DECORATIVE =
  "https://www.figma.com/api/mcp/asset/e9ac081c-6372-41d1-8f86-69c9cf7e65dd";

/**
 * Reusable Bridgerton dance card component.
 * @param {string} recipientName - Name of the card recipient
 * @param {string} senderName - Name of the card sender
 * @param {"full"|"compact"} size - Card size: "full" for large display, "compact" for overlay/small view
 * @param {boolean} showPlaceholders - When true, show underscores for empty names (form preview)
 * @param {string} className - Additional CSS classes for the wrapper
 * @param {function} onClick - Optional click handler for the card
 */
const DanceCard = ({
  recipientName = "",
  senderName = "",
  size = "full",
  showPlaceholders = false,
  className = "",
  onClick,
}) => {
  const displayRecipient =
    showPlaceholders && !recipientName.trim()
      ? "_________________"
      : recipientName.trim();
  const displaySender =
    showPlaceholders && !senderName.trim()
      ? "____________________________________"
      : senderName.trim();

  const isCompact = size === "compact";

  const cardContent = (
    <>
      <div className="absolute inset-0 bg-[#fff7e3]" aria-hidden />
      <img
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        src={IMG_BACKGROUND}
        style={{ opacity: isCompact ? 0.85 : 1 }}
      />
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center overflow-hidden ${
          isCompact ? "p-3" : "p-8"
        }`}
      >
        <img
          alt="Welcome to the"
          src={IMG_WELCOME}
          className={`max-w-full object-contain ${isCompact ? "mb-1 h-3" : "mb-6 h-6 translate-y-6"}`}
        />
        <p
          className={`font-kapakana text-black mb-2 ${
            isCompact ? "text-sm" : "text-4xl mb-12 mt-2"
          }`}
        >
          First Ball Of The Season
        </p>

        <p
          className={`font-linden-hill text-left w-full italic text-black/94 leading-relaxed ${
            isCompact
              ? "pl-4 text-[10px] mb-1"
              : "pl-8 text-sm mb-4 px-4 leading-relaxed"
          }`}
        >
          Dearest {displayRecipient} ,
        </p>

        <p
          className={`font-linden-hill pl-8 text-left italic text-black/94 ${
            isCompact
              ? "text-[9px] leading-tight mb-2 px-2"
              : "text-base leading-relaxed mb-6 px-4"
          }`}
        >
          It would be my greatest honour if you would reserve every dance upon
          this card for me alone. On this most romantic of evenings, let us
          waltz through the night as partners in this grand affair of the heart.
        </p>

        <p
          className={`font-linden-hill italic text-left w-full text-black/94 ${
            isCompact
              ? "text-[9px] pl-4 mb-0.5"
              : "text-base pl-8 mb-1 px-4 leading-relaxed"
          }`}
        >
          Yours most affectionately,
        </p>

        <p
          className={`font-linden-hill text-left w-full italic text-black/94 ${
            isCompact
              ? "text-[10px] pl-4"
              : "text-base pl-8 mb-6 px-4 leading-relaxed"
          }`}
        >
          {displaySender}
        </p>

        <div className={isCompact ? "my-1" : "my-4"}>
          <img
            alt="decorative"
            className={`opacity-60 ${isCompact ? "h-2" : "h-6"}`}
            src={IMG_DECORATIVE}
          />
        </div>

        <p
          className={`font-linden-hill italic text-black/94 leading-relaxed ${
            isCompact ? "text-[7px] leading-tight px-2 mt-0.5" : "text-xs px-4"
          }`}
        >
          By accepting this card, you agree to bestow upon the bearer: sweet
          compliments, tender embraces, and your most charming company
          throughout the evening.
        </p>
      </div>
    </>
  );

  const wrapperClasses = `
    relative bg-[#fff7e3] overflow-hidden border border-neutral-300
    ${isCompact ? "shadow-2xl border-neutral-300/80" : "shadow-2xl"}
    ${onClick ? "cursor-pointer hover:opacity-95" : ""}
    ${className}
  `.trim();

  const wrapperStyle = isCompact
    ? { boxShadow: "0 8px 32px rgba(74,55,40,0.25)" }
    : undefined;

  return (
    <div
      className={wrapperClasses}
      style={wrapperStyle}
      onClick={onClick}
      role={onClick ? "button" : undefined}
    >
      {cardContent}
    </div>
  );
};

export default DanceCard;
