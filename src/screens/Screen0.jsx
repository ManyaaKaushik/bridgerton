import React from "react";

const Screen0 = ({ onStartClick }) => {
  return (
    <div
      className="min-h-screen bg-[#ffffff] flex flex-col justify-center items-cente relative overflow-hidden font-crimson bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg1.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="text-center z-10 animate-fade-in">
        <h1 className="text-8xl font-luxurious text-dark-brown mb-1 tracking-tight drop-shadow-md">
          Dearest &nbsp; Valentine
        </h1>
        <p className="text-4xl italic tracking-tight font-linden-hill text-medium-brown mb-8 font-light">
          A Bridgerton Affair
        </p>

        <a
          className="relative scale-75 w-64 h-36 mx-auto bg-cover bg-center bg-no-repeat hover:opacity-60 hover:scale-[0.8] transition-all duration-200 cursor-pointer flex items-center justify-center"
          style={{ backgroundImage: "url('/button-bg.png')" }}
          onClick={onStartClick}
        >
          <span className="font-linden-hill text-[36px] text-dark-brown leading-normal">
            Get Started
          </span>
        </a>
      </div>
    </div>
  );
};

export default Screen0;
