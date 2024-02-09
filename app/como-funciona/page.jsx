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

      <section className="mb-20 px-10 lg:px-0 flex flex-col items-center">
        <h1 className="uppercase text-center font-semibold text-gray-500 mb-32">
          ¿Como se hace un pedido?
        </h1>
        <div className="md:w-[600px] ">
          <div className="mb-32 flex flex-col lg:flex-row-reverse">
            <div className="basis-1/2 flex justify-center mb-10">
              <img src="/images/icon_salad.svg" alt="" className="w-32" />
            </div>
            <div className="basis-1/2">
              <h1 className="text-2xl font-bold mb-5">
                01/ Haz tu pedido para donde quieras
              </h1>
              <p className="mb-5">
                Escoge tu menú antes de las 11h, selecciona tus platos y
                recíbelo el mismo día. Sin pedido mínimo.
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
          </div>

          <div className="mb-32 flex flex-col lg:flex-row">
            <div className="basis-1/2 flex justify-center mb-10">
              <img src="/images/icon_bag.svg" alt="" className="w-32" />
            </div>
            <div className="basis-1/2">
              <h1 className="text-2xl font-bold mb-5">
                02/ Escoge cuándo lo quieres recibir
              </h1>
              <p className="mb-5">
                Pide hasta las 11h y escoge la franja horaria en la que te va
                mejor que te lo enteguemos.
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
          </div>

          <div className="mb-20 flex flex-col lg:flex-row-reverse">
            <div className="basis-1/2 flex justify-center mb-10">
              <img src="/images/icon_pay.svg" alt="" className="w-32" />
            </div>
            <div className="basis-1/2">
              <h1 className="text-2xl font-bold mb-5">03/ Paga cómodamente</h1>
              <p className="mb-5">
                Aceptamos pagos con tarjeta, con todo tipo de tiquets
                restaurante o, si tenemos acuerdo con tu empresa, con factura
                mensual.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-10 flex justify-center">
          <img src="/images/how_menus.jpg" alt="" className="lg:w-[960px]" />
        </div>
      </section>

      <section className="w-full lg:flex lg:justify-center mb-20">
        <div className="lg:w-[960px]">
          <div className="text-3xl font-bold px-6 mb-5">MENÚS</div>
          <div className="w-full relative overflow-x-scroll lg:overflow-x-hidden flex lg:grid lg:grid-flow-row lg:grid-cols-3 lg:gap-4">
            <div className="mr-4 lg-mr-0 ml-6 lg:ml-0">
              <div className="w-80 h-44 lg:w-auto p-8 bg-gray-100 rounded">
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
              <div className="w-80 h-44 lg:w-auto p-8 bg-gray-100 rounded">
                <div className="flex justify-between text-xl font-bold mb-4">
                  <h1 className="">Medio Menú</h1>
                  <span className="text-teal-500">9,95€</span>
                </div>
                <p>
                  Tienes +30 platos y todos nuestros postres para escoger tu
                  menú. Pan incluido.
                </p>
              </div>
            </div>
            <div className="mr-4 lg-mr-0">
              <div className="w-80 h-44 lg:w-auto p-8 bg-gray-100 rounded">
                <div className="flex justify-between text-xl font-bold mb-4">
                  <h1 className="">Menú Bowl</h1>
                  <span className="text-teal-500">11,95€</span>
                </div>
                <p>
                  Escoge tu menú entre 4 bowls y todos nuestros postres. Pan
                  incluido.
                </p>
              </div>
            </div>
            <div className="mr-4 lg-mr-0">
              <div className="w-80 h-44 lg:w-auto p-8 bg-gray-100 rounded">
                <div className="flex justify-between text-xl font-bold mb-4">
                  <h1 className="">Nitriplato</h1>
                  <span className="text-teal-500">11,95€</span>
                </div>
                <p>
                  Personaliza tu menú escogiendo la verdura y el pack “proteína
                  + hidratos”. Pan y postre incluidos.
                </p>
              </div>
            </div>
            <div className="mr-4 lg-mr-0">
              <div className="w-80 h-44 lg:w-auto p-8 bg-gray-100 rounded">
                <div className="flex justify-between text-xl font-bold mb-4">
                  <h1 className="">Menú Poke</h1>
                  <span className="text-teal-500">14,95€</span>
                </div>
                <p>Escoge tu menú entre 3 pokes. Postre incluido.</p>
              </div>
            </div>
            <div className="mr-4 lg-mr-0">
              <div className="w-80 h-44 lg:w-auto p-8 bg-gray-100 rounded">
                <div className="flex justify-between text-xl font-bold mb-4">
                  <h1 className="">Menú Sushi</h1>
                  <span className="text-teal-500">14,95€</span>
                </div>
                <p>
                  Escoge tu menú entre 4 primeros y 4 segundos. Postre
                  incluidos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:flex lg:justify-center mb-20">
        <div className="lg:w-[960px]">
          <div className="text-3xl font-bold px-6 mb-5">PACKS</div>
          <div className="w-full relative overflow-x-scroll lg:overflow-x-hidden flex lg:grid lg:grid-flow-row lg:grid-cols-3 lg:gap-4">
            <div className="mr-4 lg-mr-0 ml-6 lg:ml-0">
              <div className="w-80 h-44 lg:w-auto p-8 bg-gray-100 rounded">
                <div className="flex justify-between text-xl font-bold mb-4">
                  <h1 className="">Pack 3 platos</h1>
                  <span className="text-teal-500">17,95€</span>
                </div>
                <p>Escoge 3 platos por menos de 6€ cada uno.</p>
              </div>
            </div>
            <div className="mr-4 lg-mr-0">
              <div className="w-80 h-44 lg:w-auto p-8 bg-gray-100 rounded">
                <div className="flex justify-between text-xl font-bold mb-4">
                  <h1 className="">Pack 6 platos</h1>
                  <span className="text-teal-500">32,95€</span>
                </div>
                <p>Escoge 6 platos por 5,50€ cada uno.</p>
              </div>
            </div>
            <div className="mr-4 lg-mr-0">
              <div className="w-80 h-44 lg:w-auto p-8 bg-gray-100 rounded">
                <div className="flex justify-between text-xl font-bold mb-4">
                  <h1 className="">Pack 9 platos</h1>
                  <span className="text-teal-500">44,95€</span>
                </div>
                <p>Escoge 9 platos por 5€ cada uno.</p>
              </div>
            </div>
            <div className="mr-4 lg-mr-0">
              <div className="w-80 h-44 lg:w-auto p-8 bg-gray-100 rounded">
                <div className="flex justify-between text-xl font-bold mb-4">
                  <h1 className="">Pack 12 platos</h1>
                  <span className="text-teal-500">54,95€</span>
                </div>
                <p>
                  Escoge 12 platos por menos de 5€ cada uno. ¡El pack con los
                  precios más baratos!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:flex lg:justify-center mb-20">
        <div className="lg:w-[960px]">
          <div className="text-3xl font-bold px-6 mb-5">CARTA</div>
          <div className="w-full relative overflow-x-scroll lg:overflow-x-hidden flex lg:grid lg:grid-flow-row lg:grid-cols-3 lg:gap-4">
            <div className="mr-4 lg-mr-0 ml-6 lg:ml-0">
              <div className="w-80 h-44 lg:w-auto p-8 bg-gray-100 rounded">
                <div className="flex justify-between text-xl font-bold mb-4">
                  <h1 className="">A la carta</h1>
                  <span className="text-teal-500">Desde 5,50€</span>
                </div>
                <p>Tienes +60 platos y muchos postres para escoger.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComoFunciona;
