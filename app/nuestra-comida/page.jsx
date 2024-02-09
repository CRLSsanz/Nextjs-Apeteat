import Platosscroll from "@/components/Platos-scroll";

export default function NuestraComida() {
  return (
    <div className="mx-6 lg:mx-0 pt-40 text-gray-600">
      <section className="mb-20 w-full mx-auto md:w-[600px] lg:w-[768px] flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center">
          <img
            src="/images/icon_calendar.png"
            alt="Calendar"
            className="w-32 mb-10"
          />
          <div className="text-center lg:text-left mb-10 lg:ml-20">
            <h1 className="text-3xl lg:text-4xl font-bold mb-5">
              Cambiamos la carta cada semana
            </h1>
            <p>
              Cada 5 días cambiamos todos los platos de nuestra carta. Así es
              como hacemos que ApetEat sea el complemento perfecto para una
              dieta variada y equilibrada.
            </p>
          </div>
        </div>

        <button className="px-10 py-3 text-white bg-teal-400 font-semibold rounded-md">
          Hacer pedido
        </button>
      </section>

      <Platosscroll />
    </div>
  );
}
