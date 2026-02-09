import React from "react";

const Screen0 = ({ onStartClick }) => {
  return (
    <div
      className="min-h-screen bg-[#461A00] flex flex-col justify-center items-cente relative overflow-hidden font-crimson bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="text-center z-10 animate-fade-in">
        <h1 className="text-7xl font-luxurious text-dark-brown mb-2 tracking-tight drop-shadow-md">
          Dearest &nbsp; Valentine
        </h1>
        <p className="text-3xl italic tracking-tight font-linden-hill text-medium-brown mb-16 font-light">
          A Bridgerton Affair
        </p>

        <a
          className="relative w-64 h-36 mx-auto bg-cover bg-center bg-no-repeat hover:scale-105 transition-transform duration-200 cursor-pointer flex items-center justify-center"
          style={{ backgroundImage: "url('/button-bg.png')" }}
          onClick={onStartClick}
        >
          <span className="font-metal text-[40px] text-black leading-normal">
            Get Started
          </span>
        </a>
      </div>
    </div>
  );
};

export default Screen0;
