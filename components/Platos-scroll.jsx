import React from "react";

const Platosscroll = () => {
  return (
    <section className="mb-20 -mx-6 lg:mx-0">
      <div className="w-full h-3/4 flex overflow-x-scroll lg:overflow-x-hidden ">
        <div className="relative mr-2">
          <img
            src="/images/lentejas-con-verduras.png"
            alt="home"
            className="max-w-none lg:w-full"
          />
          <h1 className="bg-gray-700/30 p-2 px-5 absolute bottom-10 left-10 lg:bottom-5 lg:left-5 text-lg text-white">
            Lentejas estofadas con verduras
          </h1>
        </div>
        <div className="relative mr-2">
          <img
            src="/images/pechuga-de-pollo-con-pimientos-verdes.png"
            alt="home"
            className="max-w-none lg:w-full"
          />
          <h1 className="bg-gray-700/30 p-2 px-5 absolute bottom-10 left-10 lg:bottom-5 lg:left-5 text-lg text-white">
            Pechuga de pollo con pimientos verdes
          </h1>
        </div>
        <div className="relative">
          <img
            src="/images/bowl-noruega.png"
            alt="home"
            className="max-w-none lg:w-full"
          />
          <h1 className="bg-gray-700/30 p-2 px-5 absolute bottom-10 left-10 lg:bottom-5 lg:left-5 text-lg text-white">
            Bowl Noruega
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Platosscroll;
