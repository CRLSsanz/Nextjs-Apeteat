import Image from "next/image";
import Platosscroll from "@/components/Platos-scroll";

const vineta =
  "https://s3.eu-central-1.amazonaws.com/apeteat.media/web/images/svg/icon_check.svg";

const Empresas = () => {
  return (
    <div className="mx-6 lg:mx-0 pt-20 text-gray-600">
      <section className="mb-20 lg:mb-40 md:-mx-6 relative w-fullNO">
        <div className="hidden md:block w-full">
          <Image
            src="/images/companie_desktop_01.png"
            alt="home"
            width="3000"
            height="1000"
          />
        </div>

        <div className="md:absolute top-0 h-full flex flex-col justify-center md:pl-20 xl:pl-40 ">
          <div className="md:w-[550px] mb-10 lg:mb-0 lg:px-8 xl:px-16">
            <h1 className="text-3xl lg:text-5xl font-bold mb-5">
              Lunch as a Benefit: <br />
              Eat better, work smarter.
            </h1>
            <p className="mb-10 md:pr-32 lg:pr-40">
              Nuestra tecnología te ofrece el mejor servicio, sea cuales sean
              tus necesidades, para esta nueva realidad híbrida. Dales a todxs
              tus trabajadorxs salud mientras que, juntos, cuidamos del planeta.
            </p>
            <div className="mb-10 block md:hidden w-full">
              <Image
                src="/images/companie_mobile_01.png"
                alt="home"
                width="1000"
                height="1000"
              />
            </div>
            <div className="flex flex-col items-start">
              <button className="w-5/6 md:w-60 p-3 text-white bg-teal-400 font-semibold rounded-md">
                Contactanos
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 lg:mb-40 w-full mx-auto md:w-[600px] lg:w-[960px] xl:w-[1200px] flex flex-col-reverse lg:flex-row-reverse items-center">
        <div className="basis-1/2 xl:basis-1/3">
          <img
            src="/images/companie_02.png"
            alt="companie"
            className="h-full object-cover rounded"
          />
        </div>
        <div className="basis-1/2 xl:basis-2/3 mb-10 lg:mb-0 lg:px-8 xl:px-16">
          <h1 className="uppercase font-semibold text-gray-600 mb-10">
            ¿SABÍAS QUÉ...?
          </h1>
          <h1 className="text-3xl lg:text-5xl font-bold mb-5">
            El 67% de lxs empleadxs
          </h1>
          <p className="pl-4 lg:pr-10 border-l border-teal-500 mb-10 xl:mb-20">
            Se sentirían más valoradxs y apreciadxs por su empresa si se les
            ofrecieran ventajas relacionadas con la alimentación.
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold mb-5">
            El 61% de lxs mánagers
          </h1>
          <p className="pl-4 lg:pr-10 border-l border-teal-500 mb-10 xl:mb-20">
            Afirman que sus empleadxs les han solicitado el almuerzo como
            beneficio (Lunch as a Benefit).
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold mb-5">
            Para un 54% de lxs empleadxs
          </h1>
          <p className="pl-4 lg:pr-10 border-l border-teal-500 mb-10 xl:mb-20">
            Dos de las principales razones para permanecer en una empresa son el
            salario y los beneficios sociales.
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold mb-5">
            El 80% de lxs empleadxs
          </h1>
          <p className="pl-4 lg:pr-10 border-l border-teal-500 mb-10 xl:mb-20">
            Prefieren que su empresa les ofrezca beneficios antes que un aumento
            de sueldo.
          </p>
        </div>
      </section>

      <section className="mb-20 px-2 w-full mx-auto md:w-[600px] lg:w-[960px] flex flex-col items-center">
        <div className="text-center mb-10 px-4 md:px-20">
          <h1 className="uppercase font-semibold text-gray-600 mb-2">
            ¿QUÉ OFRECEMOS?
          </h1>
          <h1 className="text-3xl font-bold mb-5">
            Un servicio para todas las empresas
          </h1>
          <p className="mb-10">
            Ofrecemos 2 opciones diferentes en función del volumen de pedidos
            y/o de si la empresa subvenciona una parte o la totalidad de los
            menús.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row mb-10">
          <div className="basis-1/2 flex flex-col justify-between bg-gray-100 px-6 py-10 rounded mb-10 md:mr-4">
            <div className="text-center">
              <h1 className="text-teal-400 text-3xl font-bold mb-10">
                Cantina Basic
              </h1>
              <p className="font-bold mb-10 px-2">
                Para empresas que no subvencionan o que hacen menos de 400
                pedidos al mes
              </p>
              <div className="mb-20 md:pl-20">
                <div className="flex flex-row mb-4">
                  <img src={vineta} alt="vineta" />
                  <h1 className="ml-2">100% compostable, sin plástico</h1>
                </div>
                <div className="flex flex-row mb-4">
                  <img src={vineta} alt="vineta" />
                  <h1 className="ml-2">100% solidario</h1>
                </div>
                <div className="flex flex-row mb-4">
                  <img src={vineta} alt="vineta" />
                  <h1 className="ml-2">Sin coste de entrega</h1>
                </div>
                <div className="flex flex-row mb-4">
                  <img src={vineta} alt="vineta" />
                  <h1 className="ml-2">Sin pedido mínimo</h1>
                </div>
                <div className="flex flex-row mb-4">
                  <img src={vineta} alt="vineta" />
                  <h1 className="ml-2">Entrega el mismo día</h1>
                </div>
                <div className="flex flex-row mb-4">
                  <img src={vineta} alt="vineta" />
                  <h1 className="ml-2">Horario de entrega ajustable</h1>
                </div>
                <div className="flex flex-row mb-4">
                  <img src={vineta} alt="vineta" />
                  <h1 className="ml-2">Promoción de bienvenida</h1>
                </div>
                <div className="flex flex-row mb-4">
                  <img src={vineta} alt="vineta" />
                  <h1 className="ml-2">Promociones especiales</h1>
                </div>
                <div className="flex flex-row mb-4">
                  <img src={vineta} alt="vineta" />
                  <h1 className="font-bold ml-2">
                    Servicio a domicilio (teletrabajo)
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <button className="px-8 py-3 text-white bg-teal-400 font-semibold rounded-md">
                Pide informaciòn
              </button>
            </div>
          </div>

          <div className="w-full basis-1/2 text-center bg-gray-100 px-6 py-10 rounded mb-20 lg:mb-10">
            <h1 className="text-teal-400 text-3xl font-bold mb-10">
              Cantina Premium
            </h1>
            <p className="font-bold mb-10 px-2">
              Para empresas que subvencionan o que hacen más de 400 pedidos al
              mes
            </p>
            <div className="mb-20 md:pl-20">
              <div className="flex flex-row mb-4">
                <img src={vineta} alt="vineta" />
                <h1 className="ml-2">100% compostable, sin plástico</h1>
              </div>
              <div className="flex flex-row mb-4">
                <img src={vineta} alt="vineta" />
                <h1 className="ml-2">100% solidario</h1>
              </div>
              <div className="flex flex-row mb-4">
                <img src={vineta} alt="vineta" />
                <h1 className="ml-2">Sin coste de entrega</h1>
              </div>
              <div className="flex flex-row mb-4">
                <img src={vineta} alt="vineta" />
                <h1 className="ml-2">Sin pedido mínimo</h1>
              </div>
              <div className="flex flex-row mb-4">
                <img src={vineta} alt="vineta" />
                <h1 className="ml-2">Entrega el mismo día</h1>
              </div>
              <div className="flex flex-row mb-4">
                <img src={vineta} alt="vineta" />
                <h1 className="ml-2">Horario de entrega ajustable</h1>
              </div>
              <div className="flex flex-row mb-4">
                <img src={vineta} alt="vineta" />
                <h1 className="ml-2">Promoción de bienvenida</h1>
              </div>
              <div className="flex flex-row mb-4">
                <img src={vineta} alt="vineta" />
                <h1 className="ml-2">Promociones especiales</h1>
              </div>
              <div className="flex flex-row mb-4">
                <img src={vineta} alt="vineta" />
                <h1 className="ml-2">Análisis de consumo</h1>
              </div>
              <div className="flex flex-row mb-4">
                <img src={vineta} alt="vineta" />
                <h1 className="ml-2">Encuestas de satisfacción</h1>
              </div>
              <div className="flex flex-row mb-4">
                <img src={vineta} alt="vineta" />
                <h1 className="ml-2">Plataforma personalizable</h1>
              </div>
              <div className="flex flex-row mb-4">
                <img src={vineta} alt="vineta" />
                <h1 className="ml-2">Ejecutivo de cuentas</h1>
              </div>
              <div className="flex flex-row mb-4">
                <img src={vineta} alt="vineta" />
                <h1 className="ml-2">Servicio a domicilio (teletrabajo)</h1>
              </div>
              <div className="flex flex-row mb-4">
                <img src={vineta} alt="vineta" />
                <h1 className="font-bold ml-2">Precios especiales</h1>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <button className="px-8 py-3 text-white bg-teal-400 font-semibold rounded-md">
                Pide informaciòn
              </button>
            </div>
          </div>
        </div>

        <div className="text-center font-bold px-4 lg:px-20">
          <h1 className="text-3xl text-teal-500 mb-10">IMPORTANTE </h1>
          <p className="">
            Cualquiera, tengamos o no un acuerdo con su empresa, puede disfrutar
            de nuestro servicio pero... ¿qué te parece si hablamos con RRHH para
            llegar a un acuerdo beneficioso para vosotrxs?
          </p>
        </div>
      </section>

      <Platosscroll />

      <h1 className="text-center mb-20"> Formulario aqui</h1>
    </div>
  );
};

export default Empresas;
