import Image from "next/image";

const ComoFunciona = () => {
  return (
    <div className="pt-20 text-gray-600">
      <section className="w-full relative mb-20">
        <div className="hidden md:block w-full">
          <Image
            src="/images/how_it_works_desktop_01.png"
            alt="home"
            width="3000"
            height="1000"
          />
        </div>
        <div className="block md:hidden w-full">
          <Image
            src="/images/how_it_works_mobile_01.png"
            alt="home"
            width="1000"
            height="1000"
          />
        </div>

        <div className="absolute top-0 h-full flex flex-col justify-center px-5 md:px-20 lg:px-40">
          <h1 className="md:w-96 lg:w-[500px] text-2xl md:text-3xl lg:text-5xl font-extrabold text-blue-800 leading-normal xl:leading-snug">
            ¿En la oficina? <br /> ¿Teletrabajando? <br /> No te preocupes de
            nada, nos encargamos de todo. <br /> ¡Hola comodidad, hola tiempo!
          </h1>
        </div>
      </section>

      <section className="w-full lg:flex lg:justify-center mb-20">
        <div className="lg:w-[960px]">
          <div className="text-3xl font-bold px-6 mb-5">MENÚS</div>
          <div className="w-full relative overflow-x-scroll lg:overflow-x-hidden flex lg:grid lg:grid-flow-row lg:grid-cols-3 lg:gap-4">
            <div className="mr-4 lg-mr-0 ml-6 lg:ml-0">
              <div className="w-80 lg:w-auto p-8 bg-gray-100 rounded">
                <div className="flex justify-between text-xl font-bold mb-4">
                  <h1 className="">Menú Completo</h1>
                  <span className="text-teal-500">12,95€</span>
                </div>
                <p>
                  Escoge tu menú entre +15 primeros, +15 segundos y todos
                  nuestros postres. Pan incluido.
                </p>
              </div>
            </div>
            <div className="mr-4 lg-mr-0">
              <div className="w-80 lg:w-auto p-8 bg-gray-100 rounded">
                <div className="flex justify-between text-xl font-bold mb-4">
                  <h1 className="">Menú Completo</h1>
                  <span className="text-teal-500">12,95€</span>
                </div>
                <p>
                  Escoge tu menú entre +15 primeros, +15 segundos y todos
                  nuestros postres. Pan incluido.
                </p>
              </div>
            </div>
            <div className="mr-4 lg-mr-0">
              <div className="w-80 lg:w-auto p-8 bg-gray-100 rounded">
                <div className="flex justify-between text-xl font-bold mb-4">
                  <h1 className="">Menú Completo</h1>
                  <span className="text-teal-500">12,95€</span>
                </div>
                <p>
                  Escoge tu menú entre +15 primeros, +15 segundos y todos
                  nuestros postres. Pan incluido.
                </p>
              </div>
            </div>
            <div className="mr-4 lg-mr-0">
              <div className="w-80 lg:w-auto p-8 bg-gray-100 rounded">
                <div className="flex justify-between text-xl font-bold mb-4">
                  <h1 className="">Menú Completo</h1>
                  <span className="text-teal-500">12,95€</span>
                </div>
                <p>
                  Escoge tu menú entre +15 primeros, +15 segundos y todos
                  nuestros postres. Pan incluido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComoFunciona;
