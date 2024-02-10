"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const logo =
  "https://s3.eu-central-1.amazonaws.com/apeteat.media/web/images/svg/apeteat_logo.svg";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <div className="w-full h-20 px-3 lg:px-20 xl:px-32 fixed flex justify-between items-center bg-white text-gray-600 z-50">
      <Link href="/" className="w-28 md:w-32">
        <img src={logo} alt="" />
      </Link>
      {navbar ? (
        <div className="w-80 h-full fixed flex flex-col justify-between top-20 right-0 bg-white px-14 pt-4 pb-24 shadow-xl shadow-gray-700 ">
          <div className="grid gap-5 text-base">
            <div className="flex items-center mb-4">
              <Link
                href="/login"
                onClick={() => setNavbar(false)}
                className="font-bold mr-4"
              >
                Iniciar Sesion
              </Link>
              <svg
                width="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1992 12C14.9606 12 17.1992 9.76142 17.1992 7C17.1992 4.23858 14.9606 2 12.1992 2C9.43779 2 7.19922 4.23858 7.19922 7C7.19922 9.76142 9.43779 12 12.1992 12Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 22C3.57038 20.0332 4.74795 18.2971 6.36438 17.0399C7.98081 15.7827 9.95335 15.0687 12 15"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 18H23"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 15L23 18L20 21"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <Link href="/como-funciona" onClick={() => setNavbar(false)}>
              Como funciona
            </Link>
            <Link href="/nuestra-comida" onClick={() => setNavbar(false)}>
              Nuestra comida
            </Link>
            <Link href="/empresas" onClick={() => setNavbar(false)}>
              Apeteat Empresas
            </Link>
            <Link href="/solidaridad" onClick={() => setNavbar(false)}>
              Solidaridad
            </Link>
            <Link href="/envases-ecologicos" onClick={() => setNavbar(false)}>
              ECO Pachaging
            </Link>
            <Link
              href="/"
              onClick={() => setNavbar(false)}
              className="text-teal-400 font-bold"
            >
              Come gratis!
            </Link>
          </div>
          <div>
            <Link
              onClick={() => setNavbar(false)}
              href="/carta/menu-completo"
              className="p-3 px-8 rounded-md bg-teal-400 text-white"
            >
              Ver Carta
            </Link>
          </div>
          {/* IDIOMA Y REDES SOCIALES */}
          <div className="">
            <div className="mb-4 ml-1">CAT - ENG - ESP</div>
            <div className="">
              <div className="flex flex-wrap justify-start text-gray-500">
                <div className="bg-transparent border border-gray-300 rounded-full w-8 h-8 flex mr-3">
                  <svg
                    className="m-auto"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        //fill-rule="nonzero"
                        d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="bg-transparent border border-gray-300 rounded-full w-8 h-8 flex mr-3">
                  <svg
                    className="m-auto"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.2em"
                    width="1.2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path>
                    </g>
                  </svg>
                </div>
                <div className="bg-transparent border border-gray-300 rounded-full w-8 h-8 flex mr-3">
                  <svg
                    className="m-auto"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="M28,6.937c-0.957,0.425 -1.985,0.711 -3.064,0.84c1.102,-0.66 1.947,-1.705 2.345,-2.951c-1.03,0.611 -2.172,1.055 -3.388,1.295c-0.973,-1.037 -2.359,-1.685 -3.893,-1.685c-2.946,0 -5.334,2.389 -5.334,5.334c0,0.418 0.048,0.826 0.138,1.215c-4.433,-0.222 -8.363,-2.346 -10.995,-5.574c-0.458,0.788 -0.721,1.704 -0.721,2.683c0,1.85 0.941,3.483 2.372,4.439c-0.874,-0.028 -1.697,-0.268 -2.416,-0.667c0,0.023 0,0.044 0,0.067c0,2.585 1.838,4.741 4.279,5.23c-0.447,0.122 -0.919,0.187 -1.406,0.187c-0.343,0 -0.678,-0.034 -1.003,-0.095c0.679,2.119 2.649,3.662 4.983,3.705c-1.825,1.431 -4.125,2.284 -6.625,2.284c-0.43,0 -0.855,-0.025 -1.273,-0.075c2.361,1.513 5.164,2.396 8.177,2.396c9.812,0 15.176,-8.128 15.176,-15.177c0,-0.231 -0.005,-0.461 -0.015,-0.69c1.043,-0.753 1.948,-1.692 2.663,-2.761z"></path>
                    </g>
                  </svg>
                </div>
                {/** prueba */}
                <div className="bg-transparent border border-gray-300 rounded-full w-8 h-8 flex mr-0">
                  <svg
                    className="m-auto"
                    fill="currentColor"
                    viewBox="-337 273 123.5 256"
                    height="1rem"
                    width="1rem"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M-260.9,327.8c0-10.3,9.2-14,19.5-14c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3 c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H-337V396h26.5v133h49.6V396h39.3l2.9-38.3h-42.2V327.8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {/* BOTON MENU */}
      <div className="lg:hidden flex justify-center">
        <button
          className="active:bg-none active:bg-transparent active:animate-ping focus:outline-none"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <svg
              className="mr-1"
              fill="currentColor"
              width="20px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m14.41 3.27-.82-.94L8 7.17 2.41 2.33l-.82.94L7.05 8l-5.46 4.73.82.94L8 8.83l5.59 4.84.82-.94L8.95 8l5.46-4.73z" />
            </svg>
          ) : (
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M5 15H19M5 9H19"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      <div className="w-full hidden lg:flex justify-between">
        <div className="w-full flex flex-row items-center">
          <div className="flex flex-row items-center relative ml-10">
            <div
              className="inline-flex cursor-pointer"
              onPointerOver={() => setShow1(true)}
              onPointerLeave={() => setShow1(false)}
            >
              <h1 className="mr-4 py-4">Descubrenos</h1>
              <svg
                width="16px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                  fill="#0F0F0F"
                />
              </svg>
            </div>
            {show1 ? (
              <div
                className="absolute w-56 bg-white shadow-lg mt-48"
                onPointerOver={() => setShow1(true)}
                onPointerLeave={() => setShow1(false)}
              >
                <h1 className="p-3 cursor-pointer border-b hover:bg-teal-100">
                  Como funciona
                </h1>
                <h1 className="p-3 cursor-pointer border-b hover:bg-teal-100">
                  Nuestra comida
                </h1>
                <h1 className="p-3 cursor-pointer hover:bg-teal-100">
                  Apeteat Empresas
                </h1>
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <div className="flex flex-row items-center relative ml-10">
            <div
              className="inline-flex cursor-pointer"
              onPointerOver={() => setShow2(true)}
              onPointerLeave={() => setShow2(false)}
            >
              <h1 className="mr-4 py-4">Valores</h1>
              <svg
                width="16px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                  fill="#0F0F0F"
                />
              </svg>
            </div>
            {show2 ? (
              <div
                className="absolute w-56 bg-white shadow-md mt-36"
                onPointerOver={() => setShow2(true)}
                onPointerLeave={() => setShow2(false)}
              >
                <h1 className="p-3 cursor-pointer border-b hover:bg-teal-100">
                  Solidaridad
                </h1>
                <h1 className="p-3 cursor-pointer hover:bg-teal-100">
                  ECO Pachaging
                </h1>
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <h1 className="text-teal-400 font-bold ml-10">Come gratis!</h1>
        </div>

        <div className="w-full flex flex-row items-center justify-end">
          <div className="mr-10">idioma</div>
          <div className="mr-10">Iniciar sesion</div>
          <div className="">
            <button className="w-32 py-2 rounded-md bg-teal-400 text-white font-semibold">
              Ver Carta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
