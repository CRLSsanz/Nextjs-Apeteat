import Image from "next/image";
const vineta =
  "https://s3.eu-central-1.amazonaws.com/apeteat.media/web/images/svg/icon_leaf.svg";

export default function Envases() {
  return (
    <div className="px-6 md:px-12 pt-20 text-gray-600">
      <section className="-mx-6 md:-mx-12 mb-20 lg:mb-40 relative w-fullNO">
        <div className="hidden md:block w-full">
          <Image
            src="/images/packaging_desktop_01.png"
            alt="home"
            width="3000"
            height="1000"
          />
        </div>
        <div className="block md:hidden w-full">
          <Image
            src="/images/packaging_mobile_01.png"
            alt="home"
            width="1000"
            height="1000"
          />
        </div>

        <div className="absolute top-0 h-full flex flex-col justify-center pl-5 md:pl-20 xl:pl-40 ">
          <h1 className="text-3xl lg:text-5xl font-extrabold w-[300px] md:w-[400px] lg:w-[600px] leading-normal ">
            <span className="text-teal-400">Packaging 100% ecológico.</span>
            <br />
            <span className="">Sostenible, biodegradable y compostable.</span>
          </h1>
        </div>
      </section>

      <section className="mb-20 lg:mb-40 w-full mx-auto md:w-[600px] lg:w-[900px] flex flex-col-reverse lg:flex-row-reverse items-center">
        <div className="basis-1/2">
          <img src="/images/packaging_02.png" alt="" />
        </div>
        <div className="basis-1/2 mb-10 lg:mb-0 lg:px-8 xl:px-16">
          <h1 className="uppercase font-semibold text-gray-600 mb-2">
            Materiales sostenibles
          </h1>
          <h1 className="text-3xl lg:text-5xl font-bold mb-5">
            100% Ecológico
          </h1>
          <p className="mb-10 pr-20">
            Somos una empresa comprometida con el medioambiente y, después de
            mucho esfuerzo, podemos decir que ya no usamos plástico. Nuestras
            bolsas, envases, tapas, envoltorios, etiquetas, cubiertos y
            servilletas son 100% biodegradables y compostables.
          </p>
          <div className="font-semibold mb-10 md:mb-0 grid md:grid-cols-2">
            <div className="flex flex-row mb-2">
              <img src={vineta} alt="vineta" />
              <h1 className="ml-2">Origen vegetal</h1>
            </div>
            <div className="flex flex-row mb-2">
              <img src={vineta} alt="vineta" />
              <h1 className="ml-2">Bosques responsables</h1>
            </div>
            <div className="flex flex-row mb-2">
              <img src={vineta} alt="vineta" />
              <h1 className="ml-2">Almidón de maíz</h1>
            </div>
            <div className="flex flex-row mb-2">
              <img src={vineta} alt="vineta" />
              <h1 className="ml-2">Ecológico</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 lg:mb-40 w-full mx-auto md:w-[600px] lg:w-[900px] flex flex-col-reverse lg:flex-row items-center">
        <div className="basis-1/2 lg:p-8">
          <img src="/images/packaging_03.png" alt="" />
        </div>
        <div className="basis-1/2 mb-10 lg:mb-0 lg:px-8 xl:px-16">
          <h1 className="uppercase font-semibold text-gray-600 mb-2">
            Reciclaje
          </h1>
          <h1 className="text-3xl lg:text-5xl font-bold mb-5">
            Reciclar: Todo al orgánico
          </h1>
          <p className="mb-10 pr-20">
            Reciclar nunca había sido tan sencillo. Introduce envases, tapas,
            envoltorios, etiquetas, cubiertos, servilletas y restos de comida en
            la bolsa y tírala al contenedor orgánico.
          </p>
          <div className="font-semibold mb-10 md:mb-0 grid md:grid-cols-2">
            <div className="flex flex-row mb-2">
              <img src={vineta} alt="vineta" />
              <h1 className="ml-2">Orgánico</h1>
            </div>
            <div className="flex flex-row mb-2">
              <img src={vineta} alt="vineta" />
              <h1 className="ml-2">Compostable</h1>
            </div>
            <div className="flex flex-row mb-2">
              <img src={vineta} alt="vineta" />
              <h1 className="ml-2">Biodegradable</h1>
            </div>
            <div className="flex flex-row mb-2">
              <img src={vineta} alt="vineta" />
              <h1 className="ml-2">Sostenible</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 lg:mb-40 w-full mx-auto md:w-[600px] lg:w-[900px]">
        <div className="">
          <h1 className="uppercase text-center text-3xl font-bold text-teal-500 mb-5">
            Importante
          </h1>
          <div className="w-full flex flex-col items-center ">
            <h1 className="md:w-80 text-xl text-center font-semibold text-gray-600 mb-10 lg:mb-20">
              Nuestras tapas son ecológicas y no son aptas para microondas
            </h1>
          </div>
          <div className="mb-10 flex flex-col lg:flex-row justify-center lg:justify-evenly">
            <div className="flex flex-col items-center mb-6">
              <img
                src="/images/uncover.png"
                alt="vineta"
                className="w-32 h-auto"
              />
              <h1>Quita la tapa antes de calentar</h1>
            </div>
            <div className="flex flex-col items-center mb-6">
              <img
                src="/images/microwave.png"
                alt="vineta"
                className="w-32 h-auto"
              />
              <h1>Calienta 2-3 minutos si es necesario</h1>
            </div>
            <div className="flex flex-col items-center mb-6">
              <img
                src="/images/enjoy.png"
                alt="vineta"
                className="w-32 h-auto"
              />
              <h1>Disfruta antes de 24h</h1>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button className="w-40 p-3 text-white bg-teal-400 font-semibold rounded-md">
              Hacer pedido
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
