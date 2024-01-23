import React from "react";
import Image from "next/image";

const ima1 =
  "https://s3.eu-central-1.amazonaws.com/apeteat.media/web/images/home_desktop_01(2).png";

export const Welcome = () => {
  return (
    <div className="p-6">
      <div>
        <h1 className="text-2xl font-semibold mb-5">
          Servicio de alimentación y bienestar para empresas en Barcelona y
          Madrid
        </h1>
        <p className="mb-5">
          Únete a nuestra comunidad y disfruta del mejor servicio de comida
          diaria en esta nueva realidad laboral híbrida.
        </p>
        <p className="font-semibold mb-10">
          Come sano y sostenible estés dónde estés.
        </p>

        <div className="basis-1/2 flex items-center mb-10">
          <img src={ima1} alt="" />
        </div>

        <div className="flex flex-col items-center">
          <button className="w-5/6 p-3 text-teal-400 border-2 border-teal-400 font-semibold rounded-md mb-5">
            Hacer pedido
          </button>
          <button className="w-5/6 p-3 text-white bg-teal-400 font-semibold rounded-md mb-5">
            ApetEat Empresas
          </button>
        </div>
      </div>
    </div>
  );
};
