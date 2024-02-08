import Image from "next/image";

const Solidaridad = () => {
  return (
    <div>
      <div className="px-6 md:px-12 pt-20 text-gray-600">
        <section className="-mx-6 md:-mx-12 mb-20 lg:mb-40 relative w-fullNO">
          <div className="hidden md:block w-full">
            <Image
              src="/images/values_hero_desktop.jpg"
              alt="home"
              width="3000"
              height="1000"
            />
          </div>
          <div className="block md:hidden w-full">
            <Image
              src="/images/values_hero_mobile.jpg"
              alt="home"
              width="3000"
              height="1000"
            />
          </div>

          <div className="absolute top-1/4 md:top-1/3 pl-5 md:pl-20 xl:pl-40 ">
            <h1 className="text-3xl lg:text-5xl font-extrabold text-white md:w-[600px] xl:w-[900px] leading-normal ">
              Somos una empresa socialmente responsable y preocupada por el
              medio ambiente
            </h1>
          </div>
        </section>

        <section className="mb-20 lg:mb-40 w-full mx-auto md:w-[600px] lg:w-[960px] flex flex-col-reverse lg:flex-row-reverse items-center">
          <div className="basis-1/2 flex items-center">
            <img src="/images/child_pic.jpg" alt="" />
          </div>
          <div className="basis-1/2 lg:pr-4">
            <h1 className="uppercase font-bold text-gray-500 mb-2">
              Solidaridad
            </h1>
            <h1 className="text-3xl md:text-4xl font-bold mb-5">
              Colaboramos con Bamba. ¿Nos ayudas?
            </h1>
            <p className="mb-5 lg:pr-10">
              Alrededor de 800.000.000 de personas pasan hambre en el mundo y
              57.000.000 de niñxs no pueden ir a la escuela. Estos son algunos
              de los datos contra los que la ONG Bamba lucha en una de las zonas
              más desfavorecidas de Kenia.
            </p>
            <p className="mb-5 lg:pr-10 font-bold">
              Al hacer tu pedido tienes la opción de hacer una pequeña donación
              que haremos llegar, de manera íntegra, a Bamba. Disponemos de
              todos los comprobantes de transferencia a vuestra disposición.
            </p>
            <h1 className="mb-10 lg:mb-0 text-sm font-semibold">
              Más información {" > "}
            </h1>
          </div>
        </section>

        <section className="mb-20 lg:mb-40 w-full mx-auto md:w-[600px] lg:w-[960px] flex flex-col-reverse lg:flex-row items-center">
          <div className="basis-1/2 flex items-center ">
            <img src="/images/auara.jpg" alt="" />
          </div>
          <div className="basis-1/2 mb-10 lg:mb-0">
            <h1 className="uppercase font-bold text-gray-500 mb-2">
              Solidaridad
            </h1>
            <h1 className="text-3xl lg:text-4xl font-bold mb-5">
              Reforzamos nuestro compromiso con nuestra agua: Auara.
            </h1>
            <p className="mb-6">
              Auara es una marca de agua mineral que invierte el 100% de sus
              dividendos en llevar agua potable a personas que no la tienen.
              Además, trabajan para reducir el impacto ambiental de las botellas
              que consumimos.
            </p>
            <h1 className="font-bold text-gray-600 mb-6">
              Lo conseguido a día de hoy:
            </h1>
            <div className="grid md:grid-cols-3 md:gap-8">
              <div className="flex flex-col mb-6">
                <h1 className="text-2xl font-bold">21.000.000 +</h1>
                <div className="w-16 border-b-2 border-gray-400 my-3"></div>
                <p className="">
                  Más de 21.000.000 de litros aportados en países en vías de
                  desarrollo
                </p>
              </div>
              <div className="flex flex-col mb-6">
                <h1 className="text-2xl font-bold">8.000.000 +</h1>
                <div className="w-16 border-b-2 border-gray-400 my-3"></div>
                <p className="">Más de 8.000.000 de botellas recicladas</p>
              </div>
              <div className="flex flex-col mb-6">
                <h1 className="text-2xl font-bold">300.000 +</h1>

                <div className="w-16 border-b-2 border-gray-400 my-3"></div>
                <p className="">Más de 300.000 litros de petróleo ahorrados</p>
              </div>
            </div>
          </div>
        </section>

        <section className="-mx-6 md:-mx-12 mb-20 lg:mb-40 relative w-fullNO">
          <div className="hidden md:block w-full">
            <Image
              src="/images/values_child_hero_desktop.jpg"
              alt="home"
              width="3000"
              height="700"
              sizes="cover"
            />
          </div>
          <div className="block md:hidden w-full">
            <Image
              src="/images/values_child_hero_mobile.jpg"
              alt="home"
              width="3000"
              height="700"
              sizes="cover"
            />
          </div>

          <div className="absolute top-1/3 md:top-1/4 w-full flex justify-center">
            <div className="w-[600px] text-center text-3xl lg:text-5xl font-extrabold text-white leading-normal ">
              En ApetEat queremos poner nuestro granito de arena para hacer un
              mundo mejor.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Solidaridad;
