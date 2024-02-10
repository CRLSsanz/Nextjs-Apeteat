import Link from "next/link";

const page = () => {
  return (
    <div className="pt-20 text-gray-600">
      <section className="py-4 mb-6 sticky top-16 bg-white z-30">
        <div className="w-full flex overflow-x-scroll">
          <div className="pl-6">
            <div className="w-24 py-2 bg-teal-500 text-white text-center rounded mr-2">
              <Link href="#" className="w-auto h-auto">
                <span className="font-bold">Completo</span> <br /> 12.95€
              </Link>
            </div>
          </div>
          <div className="">
            <div className="w-24 py-2 bg-gray-200 text-center rounded mr-2">
              <Link href="#" className="w-auto h-auto">
                <span className="font-bold">Medio</span> <br /> 9.95€
              </Link>
            </div>
          </div>
          <div className="">
            <div className="w-24 py-2 bg-gray-200 text-center rounded mr-2">
              <Link href="#" className="w-auto h-auto">
                <span className="font-bold">Bowl</span> <br /> 11.95€
              </Link>
            </div>
          </div>
          <div className="">
            <div className="w-24 py-2 bg-gray-200 text-center rounded mr-6">
              <Link href="#" className="w-auto h-auto">
                <span className="font-bold">
                  A la <br /> Carta
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 bg-gray-100">
        <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-sm">
          <div className="relative flex flex-col bg-white">
            <img src="/images/menu-ensalada-griega.png" alt="" />
            <div className="p-2 h-20 w-full">
              <span> Ensalada griega</span>
            </div>
            <div className="absolute bottom-2 right-2">+</div>
          </div>

          <div className="relative flex flex-col bg-white">
            <img src="/images/menu-ensalada-cesar.png" alt="" />
            <div className="p-2 h-20 w-full">
              <span> Ensalada César</span>
            </div>
            <div className="absolute bottom-2 right-2">+</div>
          </div>

          <div className="relative flex flex-col bg-white">
            <img src="/images/menu-espaguettis-integral.png" alt="" />
            <div className="p-2 h-20 w-full">
              <span>
                Espaguettis integrales con salsa de tomate con calabacín
              </span>
            </div>
            <div className="absolute bottom-2 right-2">+</div>
          </div>

          <div className="relative flex flex-col bg-white">
            <img src="/images/menu-rigatoni-bolonesa.png" alt="" />
            <div className="p-2 h-20 w-full">
              <span>Rigatoni boloñesa</span>
            </div>
            <div className="absolute bottom-2 right-2">+</div>
          </div>

          <div className="relative flex flex-col bg-white">
            <img src="/images/menu-tortilla-calabacin.png" alt="" />
            <div className="p-2 h-20 w-full">
              <span>
                Tortilla de calabacín con ensalada de espinacas, tomate y pipas
                de girasol
              </span>
            </div>
            <div className="absolute bottom-2 right-2">+</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
