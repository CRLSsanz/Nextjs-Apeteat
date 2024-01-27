export default function Login() {
  return (
    <div className="bg-white text-gray-800">
      <div className="text-center p-6 border-b text-sm">
        <span className="mr-4">No tienes cuenta en ApetEat?</span>
        <span className="text-teal-400 font-semibold">Crear Cuenta</span>
      </div>

      <form className="my-10 p-5" action="">
        <h1 className="my-8 font-bold">Iniciar Sesion en ApetEat</h1>
        <h2 className="text-xs">Email</h2>
        <input
          className="w-full py-2 border-b mb-6"
          type="text"
          placeholder="Escriba aqui su email"
        />
        <h2 className="text-xs">Contrasena</h2>
        <input
          className="w-full py-2 border-b mb-12"
          type="password"
          placeholder="Escriba aqui una contrasena"
        />
        <div className="flex flex-col items-center">
          <button className="w-5/6 p-3 text-white bg-teal-400 font-semibold rounded-md mb-3">
            Iniciar sesion
          </button>
          <h1>Olvidaste tu contrasena?</h1>
        </div>
      </form>
    </div>
  );
}
