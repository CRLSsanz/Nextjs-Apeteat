import Link from "next/link";

const ima1m =
  "https://s3.eu-central-1.amazonaws.com/apeteat.media/web/images/home_mobile_01.png";
const ima1 =
  "https://raw.githubusercontent.com/CRLSsanz/Nextjs-Apeteat/main/public/image/home_desktop_01.png";

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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-gray-600">
      <div className="px-6 md:px-12 mt-20">
        <section className="mb-20 md:w-[600px] md:mx-auto lg:hidden">
          <h1 className="text-2xl sm:text-4xl font-semibold my-5">
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
            <img src={ima1m} alt="" />
          </div>

          <div className="flex flex-col items-center text-center">
            <Link
              href="/carta/menu-completo"
              className="w-full p-3 text-teal-400 border-2 border-teal-400 font-semibold rounded-md mb-5"
            >
              Hacer pedido
            </Link>
            <Link
              href="/empresas"
              className="w-full p-3 rounded-md bg-teal-400 text-white"
            >
              ApetEat Empresas
            </Link>
          </div>
        </section>

        <section
          className="hidden -mx-12 lg:flex h-[300px] lg:h-[calc(85vh)] mb-32"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${ima1})`,
            backgroundPosition: "50% 0%",
            backgroundSize: "cover",
            backgroundAttachment: "scroll",
          }}
        >
          <div className=" w-[650px] pl-32 xl:pl-60 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-4xl font-semibold mb-10">
              Servicio de alimentación y bienestar para empresas en Barcelona y
              Madrid
            </h1>
            <p className="mb-5">
              Únete a nuestra comunidad y disfruta del mejor servicio de comida
              diaria en esta nueva realidad laboral híbrida.
            </p>
            <p className="font-semibold mb-16">
              Come sano y sostenible estés dónde estés.
            </p>

            <div className="flex flex-row items-center">
              <button className="w-full p-3 text-teal-400 border-2 border-teal-400 font-bold rounded-md mr-5">
                Hacer pedido
              </button>
              <button className="w-full p-3 text-white bg-teal-400 font-semibold rounded-md">
                ApetEat Empresas
              </button>
            </div>
          </div>
        </section>

        <section className="mb-32 w-full mx-auto md:w-[600px] lg:w-[960px] flex flex-col lg:flex-row-reverse items-center">
          <div className="basis-1/2 flex items-center mb-10 lg:mb-0">
            <img src={ima2} alt="" />
          </div>
          <div className="basis-1/2 lg:px-8 xl:px-12">
            <h1 className="uppercase font-semibold text-gray-600 mb-2">
              Nuestra comida
            </h1>
            <h1 className="text-3xl font-bold mb-5">100% Natural</h1>
            <p className="mb-10">
              Nuestro equipo de chefs y nutricionistas utilizan los mejores
              ingredientes locales y de temporada para crear, con mucho mimo,
              recetas naturales, únicas y sin aditivos añadidos.
            </p>
            <div className="font-semibold mb-10 grid md:grid-cols-2">
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
              <button className="w-5/6 p-3 text-white bg-teal-400 font-semibold rounded-md">
                Ir a Nuestra Comida
              </button>
            </div>
          </div>
        </section>

        <section className="mb-32 w-full mx-auto md:w-[600px] lg:w-[960px] flex flex-col lg:flex-row items-center">
          <div className="basis-1/2 mb-10 lg:mb-0">
            <img src={ima3} alt="" />
          </div>
          <div className="basis-1/2 lg:px-8 xl:px-16">
            <h1 className="uppercase font-semibold text-gray-600 mb-2">
              Nuestro Packaging
            </h1>
            <h1 className="text-3xl font-bold mb-5">100% Ecológico</h1>
            <p className="mb-10">
              Reciclar nunca fue tan sencillo. Introduce envases, tapas, restos
              de comida, cubiertos, servilletas... en la bolsa y tírala en el
              contenedor orgánico. Todo es sostenible, biodegradable,
              compostable y respetuoso con el medioambiente.
            </p>
            <div className="font-semibold mb-10 grid md:grid-cols-2">
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
              <button className="w-5/6 p-3 text-white bg-teal-400 font-semibold rounded-md">
                Ir a Nuestro Packaging
              </button>
            </div>
          </div>
        </section>

        <section className="mb-32 w-full mx-auto md:w-[600px] lg:w-[960px] flex flex-col lg:flex-row-reverse items-center">
          <div className="basis-1/2 flex items-center mb-10 lg:mb-0">
            <img src={ima4} alt="" />
          </div>
          <div className="basis-1/2 lg:px-8 xl:px-16">
            <h1 className="uppercase font-semibold text-gray-600 mb-2">
              Nuestro Valores
            </h1>
            <h1 className="text-3xl font-bold mb-5">100% Comprometidos</h1>
            <p className="mb-10">
              Donamos nuestras mermas, empleamos a personas con diversidad
              funcional, colaboramos con Bamba (un orfanato de Kenya), cuidamos
              el medioambiente y reforzamos nuestro compromiso con Auara, el
              agua 100% social y con valores.
            </p>

            <div className="flex flex-col items-start">
              <button className="w-5/6 p-3 text-white bg-teal-400 font-semibold rounded-md mb-5">
                Ir a Solidaridad
              </button>
            </div>
          </div>
        </section>

        <section
          className="-mx-6 md:-mx-12 flex justify-center h-60 md:h-[calc(50vh)] mb-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${ima5})`,
            backgroundPosition: "50%",
            backgroundSize: "cover",
            backgroundAttachment: "scroll",
          }}
        >
          <div className="p-6 w-full md:w-[650px] flex flex-col justify-center items-start">
            <h1 className="text-blue-800 text-2xl md:text-4xl font-bold mb-2">
              LUNCH AS A BENEFIT
            </h1>
            <h1 className="text-white w-52 text-2xl md:text-4xl font-bold">
              Cuida a tus empleadxs con el mejor beneficio
            </h1>
          </div>
        </section>

        <section className="mb-32 flex flex-col text-center items-center">
          <div className="mx-auto sm:w-[540px] md:w-[720px]">
            <h1 className="uppercase font-semibold text-gray-600 mb-5">
              Que es lunch as a benefi?
            </h1>
            <h1 className="text-2xl sm:text-4xl font-bold mb-10">
              El mejor beneficio para tus empleadxs
            </h1>
            <p className="mb-32 sm:px-32 md:px-52">
              Cuida la salud de tu equipo con una comida rica, saludable y
              respetuosa con el medioambiente. Además, al mismo tiempo,
              impulsarás la marca y reputación de la empresa.
            </p>
          </div>

          <div className="md:w-[500px] lg:w-full xl:w-[1200px] grid lg:grid-cols-3 gap-5">
            <div className="flex flex-col items-center mb-20">
              <div className="mb-10">
                <img src={ico1} alt="" />
              </div>
              <h1 className="text-2xl font-bold mb-5">
                Refuerza el compromiso
              </h1>
              <p>
                Ofrecer un ahorro de tiempo y dinero en el almuerzo diario,
                <strong> en la oficina o en casa</strong>, refuerza el
                compromiso y mejora el engagement con lxs empleadxs.
              </p>
            </div>

            <div className="flex flex-col items-center mb-20">
              <div className="mb-10">
                <img src={ico2} alt="" />
              </div>
              <h1 className="text-2xl font-bold mb-5">Aumenta la felicidad</h1>
              <p>
                Los beneficios de una comida saludable y en grupo se traducen en
                un aumento de la felicidad. Y la felicidad de tus empleadxs es
                una ventaja a todos los niveles.
              </p>
            </div>

            <div className="flex flex-col items-center mb-20">
              <div className="mb-10">
                <img src={ico3} alt="" />
              </div>
              <h1 className="text-2xl font-bold mb-5">
                Impulsa la productividad
              </h1>
              <p>
                Una dieta equilibrada ayuda a la memoria y a la concentración.
                Además, comer con los compañerxs promueve la colaboración y el
                team building.
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <button className="w-5/6 sm:w-60 p-3 text-white bg-teal-400 font-semibold rounded-md mb-5">
              Ver ApetEat Empresas
            </button>
          </div>
        </section>

        <section
          className="-mx-6 md:-mx-12 flex justify-center h-[300px] md:h-[calc(50vh)] mb-32"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${ima6m})`,
            backgroundPosition: "100%",
            backgroundSize: "cover",
            backgroundAttachment: "scroll",
          }}
        >
          <div className="h-full flex flex-col justify-center p-10">
            <h1 className="text-white text-2xl md:text-4xl font-bold mb-2">
              Aunque no tengamos acuerdo con tu <br /> empresa...
            </h1>
            <h1 className="text-teal-400 text-2xl md:text-4xl font-bold mb-10">
              ¡también puedes <br /> pedir!
            </h1>
            <div className="flex flex-col items-start">
              <button className="w-1/2 p-3 text-white bg-teal-400 font-semibold rounded-md">
                Hacer Pedido
              </button>
            </div>
          </div>
        </section>

        <section className="mb-32 flex flex-col items-center">
          <h1 className="uppercase text-center font-semibold text-gray-600 mb-20">
            ¿Como funciona?
          </h1>
          <div className="sm:w-[500px] lg:w-full xl:w-[1200px] grid lg:grid-cols-3 lg:gap-5 xl:gap-10">
            <div className="mb-20">
              <div className="flex justify-center mb-10">
                <img src={ico2} alt="" />
              </div>
              <h1 className="text-2xl font-bold mb-5">
                01/ Haz tu pedido para donde quieras
              </h1>
              <p className="mb-5">
                Escoge tu menú, selecciona tus platos y recíbelo el mismo día.
                Sin pedido mínimo.
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
                Pide hasta las 11h y escoge la franja horaria en la que te va
                mejor que te lo entreguemos.
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
                Aceptamos pagos con tarjeta, con todo tipo de tiquets
                restaurante o, si tenemos acuerdo con tu empresa, con factura
                mensual.
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <button className="w-4/6 md:w-52 p-3 text-white bg-teal-400 font-semibold rounded-md mb-5">
              Hacer pedido
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
