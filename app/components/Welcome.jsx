import React from "react";
import Image from "next/image";

const ima1 =
  "https://s3.eu-central-1.amazonaws.com/apeteat.media/web/images/home_desktop_01(2).png";
const ima2 =
  "https://s3.eu-central-1.amazonaws.com/apeteat.media/web/images/home_02.png";
const vineta =
  "https://s3.eu-central-1.amazonaws.com/apeteat.media/web/images/svg/icon_leaf.svg";
const ima3 =
  "https://s3.eu-central-1.amazonaws.com/apeteat.media/web/images/home_03.png";
const ima4 =
  "https://s3.eu-central-1.amazonaws.com/apeteat.media/web/images/home_04.png";
const ima5m =
  "https://s3.eu-central-1.amazonaws.com/apeteat.media/web/images/home_mobile_05.png";
const ima5 =
  "https://s3.eu-central-1.amazonaws.com/apeteat.media/web/images/home_desktop_05.png";
const ico1 =
  "https://s3.eu-central-1.amazonaws.com/apeteat.media/web/images/svg/icon_lunch.svg";
const ico2 =
  "https://s3.eu-central-1.amazonaws.com/apeteat.media/web/images/svg/icon_salad.svg";
const ico3 =
  "https://s3.eu-central-1.amazonaws.com/apeteat.media/web/images/svg/icon_productivity.svg";
const ima6m =
  "https://s3.eu-central-1.amazonaws.com/apeteat.media/web/images/home_mobile_06.png";
const ima6 =
  "https://s3.eu-central-1.amazonaws.com/apeteat.media/web/images/home_desktop_06.png";
const ico4 =
  "https://s3.eu-central-1.amazonaws.com/apeteat.media/web/images/svg/icon_bag.svg";
const ico5 =
  "https://s3.eu-central-1.amazonaws.com/apeteat.media/web/images/svg/icon_pay.svg";

export const Welcome = () => {
  return (
    <div className="p-6">
      <section className="mb-20">
        <h1 className="text-2xl font-semibold mb-5">
          Servicio de alimentación y bienestar para empresas en Barcelona y
          Madrid
        </h1>
        <p className="mb-2">
          Únete a nuestra comunidad y disfruta del mejor servicio de comida
          diaria en esta nueva realidad laboral híbrida.
        </p>
        <p className="font-semibold mb-10">
          Come sano y sostenible estés dónde estés.
        </p>

        <div className="flex items-center mb-10">
          <img src={ima1} alt="" />
        </div>

        <div className="flex flex-col items-center">
          <button className="w-full p-3 text-teal-400 border-2 border-teal-400 font-semibold rounded-md mb-5">
            Hacer pedido
          </button>
          <button className="w-full p-3 text-white bg-teal-400 font-semibold rounded-md mb-5">
            ApetEat Empresas
          </button>
        </div>
      </section>

      <section className="mb-32">
        <div className="basis-1/2 flex items-center mb-10">
          <img src={ima2} alt="" />
        </div>
        <h1 className="uppercase font-semibold text-gray-600 mb-2">
          Nuestra comida
        </h1>
        <h1 className="text-3xl font-bold mb-5">100% Natural</h1>
        <p className="mb-10">
          Nuestro equipo de chefs y nutricionistas utilizan los mejores
          ingredientes locales y de temporada para crear, con mucho mimo,
          recetas naturales, únicas y sin aditivos añadidos.
        </p>
        <div className="font-semibold mb-10">
          <div className="flex flex-row mb-2">
            <img src={vineta} alt="vineta" />
            <h1 className="ml-2">Tradicional</h1>
          </div>
          <div className="flex flex-row mb-2">
            <img src={vineta} alt="vineta" />
            <h1 className="ml-2">Equilibrada</h1>
          </div>
          <div className="flex flex-row mb-2">
            <img src={vineta} alt="vineta" />
            <h1 className="ml-2">Sin aditivos añadidos</h1>
          </div>
          <div className="flex flex-row mb-2">
            <img src={vineta} alt="vineta" />
            <h1 className="ml-2">Natural</h1>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <button className="w-5/6 p-3 text-white bg-teal-400 font-semibold rounded-md mb-5">
            Ir a Nuestra Comida
          </button>
        </div>
        <div></div>
      </section>

      <section className="mb-32">
        <div className="mb-10">
          <img src={ima3} alt="" />
        </div>
        <h1 className="uppercase font-semibold text-gray-600 mb-2">
          Nuestro Packaging
        </h1>
        <h1 className="text-3xl font-bold mb-5">100% Ecológico</h1>
        <p className="mb-10">
          Reciclar nunca fue tan sencillo. Introduce envases, tapas, restos de
          comida, cubiertos, servilletas... en la bolsa y tírala en el
          contenedor orgánico. Todo es sostenible, biodegradable, compostable y
          respetuoso con el medioambiente.
        </p>
        <div className="font-semibold mb-10">
          <div className="flex flex-row mb-2">
            <img src={vineta} alt="vineta" />
            <h1 className="ml-2">Origen vegetal</h1>
          </div>
          <div className="flex flex-row mb-2">
            <img src={vineta} alt="vineta" />
            <h1 className="ml-2">Biodegradable</h1>
          </div>
          <div className="flex flex-row mb-2">
            <img src={vineta} alt="vineta" />
            <h1 className="ml-2">Compostable</h1>
          </div>
          <div className="flex flex-row mb-2">
            <img src={vineta} alt="vineta" />
            <h1 className="ml-2">Ecológico</h1>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <button className="w-5/6 p-3 text-white bg-teal-400 font-semibold rounded-md mb-5">
            Ir a Nuestro Packaging
          </button>
        </div>
        <div></div>
      </section>

      <section className="mb-32">
        <div className="flex items-center mb-10">
          <img src={ima4} alt="" />
        </div>
        <h1 className="uppercase font-semibold text-gray-600 mb-2">
          Nuestro Valores
        </h1>
        <h1 className="text-3xl font-bold mb-5">100% Comprometidos</h1>
        <p className="mb-10">
          Donamos nuestras mermas, empleamos a personas con diversidad
          funcional, colaboramos con Bamba (un orfanato de Kenya), cuidamos el
          medioambiente y reforzamos nuestro compromiso con Auara, el agua 100%
          social y con valores.
        </p>

        <div className="flex flex-col items-start">
          <button className="w-5/6 p-3 text-white bg-teal-400 font-semibold rounded-md mb-5">
            Ir a Solidaridad
          </button>
        </div>
        <div></div>
      </section>

      <section
        className="-mx-6 flex justify-center h-60 lgG:h-[calc(50vh)] mb-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${ima5m})`,
          backgroundPosition: "100%",
          backgroundSize: "cover",
          backgroundAttachment: "scroll",
        }}
      >
        <div className="p-6 w-full flex flex-col justify-center items-start">
          <h1 className="text-blue-800 text-2xl font-bold mb-2">
            LUNCH AS A BENEFIT
          </h1>
          <h1 className="text-white w-52 text-2xl font-bold">
            Cuida a tus empleadxs con el mejor beneficio
          </h1>
        </div>
      </section>

      <section className="mb-32 text-center">
        <h1 className="uppercase font-semibold text-gray-600 mb-2">
          Que es lunch as a benefi?
        </h1>
        <h1 className="text-2xl font-bold mb-5">
          El mejor beneficio para tus empleadxs
        </h1>
        <p className="mb-32">
          Cuida la salud de tu equipo con una comida rica, saludable y
          respetuosa con el medioambiente. Además, al mismo tiempo, impulsarás
          la marca y reputación de la empresa.
        </p>

        <div className="flex flex-col items-center mb-20">
          <div className="mb-10">
            <img src={ico1} alt="" />
          </div>
          <h1 className="text-2xl font-bold mb-5">Refuerza el compromiso</h1>
          <p>
            Ofrecer un ahorro de tiempo y dinero en el almuerzo diario,
            <strong> en la oficina o en casa</strong>, refuerza el compromiso y
            mejora el engagement con lxs empleadxs.
          </p>
        </div>

        <div className="flex flex-col items-center mb-20">
          <div className="mb-10">
            <img src={ico2} alt="" />
          </div>
          <h1 className="text-2xl font-bold mb-5">Aumenta la felicidad</h1>
          <p>
            Los beneficios de una comida saludable y en grupo se traducen en un
            aumento de la felicidad. Y la felicidad de tus empleadxs es una
            ventaja a todos los niveles.
          </p>
        </div>

        <div className="flex flex-col items-center mb-20">
          <div className="mb-10">
            <img src={ico3} alt="" />
          </div>
          <h1 className="text-2xl font-bold mb-5">Impulsa la productividad</h1>
          <p>
            Una dieta equilibrada ayuda a la memoria y a la concentración.
            Además, comer con los compañerxs promueve la colaboración y el team
            building.
          </p>
        </div>

        <div className="w-full flex justify-center">
          <button className="w-5/6 p-3 text-white bg-teal-400 font-semibold rounded-md mb-5">
            Ver ApetEat Empresas
          </button>
        </div>
      </section>

      <section
        className="-mx-6 flex justify-center h-[300px] lgG:h-[calc(50vh)] mb-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${ima6m})`,
          backgroundPosition: "100%",
          backgroundSize: "coverRR",
          backgroundAttachment: "scroll",
        }}
      >
        <div className="h-full flex flex-col justify-center p-10">
          <h1 className="text-white text-2xl font-bold mb-2">
            Aunque no tengamos acuerdo con tu <br /> empresa...
          </h1>
          <h1 className="text-teal-400 text-2xl font-bold mb-10">
            ¡también puedes <br /> pedir!
          </h1>
          <div className="flex flex-col items-start">
            <button className="w-1/2 p-3 text-white bg-teal-400 font-semibold rounded-md">
              Hacer Pedido
            </button>
          </div>
        </div>
      </section>

      <section className="mb-32">
        <h1 className="uppercase text-center font-semibold text-gray-600 mb-20">
          ¿Como funciona?
        </h1>

        <div className="mb-20">
          <div className="flex justify-center mb-10">
            <img src={ico2} alt="" />
          </div>
          <h1 className="text-2xl font-bold mb-5">
            01/ Haz tu pedido para donde quieras
          </h1>
          <p className="mb-5">
            Escoge tu menú, selecciona tus platos y recíbelo el mismo día. Sin
            pedido mínimo.
          </p>
          <ul className=" list-disc list-inside grid gap-2 mb-2">
            <li>
              <strong> Entrega en oficina: </strong> 0€
            </li>
            <li>
              <strong>Entrega en casa: </strong> 2€
            </li>
          </ul>
          <h1 className="text-teal-400 font-semibold ">¿Por qué?</h1>
        </div>

        <div className="mb-20">
          <div className="flex justify-center mb-10">
            <img src={ico4} alt="" />
          </div>
          <h1 className="text-2xl font-bold mb-5">
            02/ Escoge cuándo lo quieres recibir
          </h1>
          <p className="mb-5">
            Pide hasta las 11h y escoge la franja horaria en la que te va mejor
            que te lo entreguemos.
          </p>
          <ul className=" list-disc list-inside grid gap-2 mb-2">
            <li>
              <strong>Entrega de 11h a 14h: </strong> 0€
            </li>
            <li>
              <strong>Entrega antes 13h: </strong> 1,00€
            </li>
          </ul>
          <h1 className="text-teal-400 font-semibold ">¿Por qué?</h1>
        </div>

        <div className="mb-20">
          <div className="flex justify-center mb-10">
            <img src={ico5} alt="" />
          </div>
          <h1 className="text-2xl font-bold mb-5">03/ Paga cómodamente</h1>
          <p className="mb-5">
            Aceptamos pagos con tarjeta, con todo tipo de tiquets restaurante o,
            si tenemos acuerdo con tu empresa, con factura mensual.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <button className="w-4/6 p-3 text-white bg-teal-400 font-semibold rounded-md mb-5">
            Hacer pedido
          </button>
        </div>
      </section>
    </div>
  );
};
