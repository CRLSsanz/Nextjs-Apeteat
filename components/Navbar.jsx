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
    <div className="w-full h-20 px-3 lg:px-20 xl:px-32 fixed flex justify-between items-center bg-white text-gray-600 z-10">
      <div className="w-28 md:w-32">
        <img src={logo} alt="" />
      </div>
      {navbar ? (
        <div className="w-80 h-full fixed flex flex-col justify-between top-20 right-0 bg-white px-14 pt-4 pb-24 shadow-xl shadow-gray-700 ">
          <div className="grid gap-5 text-sm">
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
            <button className="p-2 px-6 rounded-md bg-teal-400 text-white">
              Ver Carta
            </button>{" "}
          </div>
          <div className="">idioma y redes sociales</div>
        </div>
      ) : (
        <div></div>
      )}
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
              fill="currentColor"
              width="30px"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.86,18.73H9.18a2,2,0,0,1,0-4H21.86a2,2,0,0,1,0,4Z" />
              <path d="M54.82,18.73H34.88a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z" />
              <path d="M54.82,34H9.18a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z" />
              <path d="M54.82,49.27H30.07a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z" />
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
