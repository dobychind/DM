import React from 'react';

const distBan: React.FC = () => {
  return (
    <div className="flex gap-4 w-full h-[500px] overflow-hidden">
      {/* Левая часть с эффектом размытия */}
      <div className="w-[10%] rounded-2xl bg-cover bg-left opacity-30" style={{ backgroundImage: "url('/bgLanding.png')" }}></div>
      <div className="w-[10%] hidden md:block rounded-2xl bg-cover bg-center opacity-40" style={{ backgroundImage: "url('/bgLanding.png')" }}></div>
      <div className="w-[10%] hidden md:block rounded-2xl bg-cover bg-right opacity-50" style={{ backgroundImage: "url('/bgLanding.png')" }}></div>

      {/* Правая часть с текстом */}
      <div className="relative w-full md:w-[70%] rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('/bgLanding.png')" }}>
        <div className="absolute rounded-2xl inset-0 flex flex-col justify-center items-center bg-white bg-opacity-10 text-white p-4">
          <h1 className="hidden md:block text-7xl absolute 2xl:right-16 font-title ">Свежий хлеб -</h1>
          <h2 className="hidden md:block text-6xl absolute right-12 bottom-[10rem] font-title">каждый день.</h2>
          <h2 className="block md:hidden text-4xl font-title"> Свежий хлеб - каждый день.</h2>
        </div>
      </div>
    </div>
  );
};

export default distBan;
