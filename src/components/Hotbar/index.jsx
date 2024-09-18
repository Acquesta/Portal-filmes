import logo from "../../assets/image/logo.png";
import usuario from "../../assets/icons/usuario2.svg";
import busca from "../../assets/icons/busca.svg";
import { useState } from "react";
import Polygon from "../../assets/icons/Polygon-1";
import { NavLink } from "react-router-dom";

export default function Hotbar() {
  const [card, setCard] = useState("hidden");

  return (
    <>
      <div className="flex justify-between items-center my-5 mx-8 text-azulMahindra">
        <img src={logo} alt="logo tech mahindra com formula e" />
        <ul className="flex justify-between items-center w-[25%]">
          <li>
            <NavLink
              to={"/"}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                };
              }}
            >
              HOME
            </NavLink>
          </li>
          <li>QUIZZES</li>
          <li>COMUNIDADE</li>
        </ul>
        <div className="flex items-center justify-center">
          <div className="relative rounded-full shadow-sm mr-5">
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm">
                <img src={busca} alt="" />
              </span>
            </div>
            <input
              id="price"
              name="price"
              type="text"
              placeholder="Pesquisar"
              className="block w-full rounded-full border-0 pr-9 py-1.5 px-4 text-gray-900 border-azulMahindra placeholder:text-gray-400 ring-azulMahindra ring-2"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <label htmlFor="currency" className="sr-only">
                Currency
              </label>
            </div>
          </div>
          <div>
            <div className="relative">
              <img
                className="w-12 h-12 cursor-pointer"
                src={usuario}
                alt=""
                onMouseEnter={() => {
                  setCard("absolute");
                }}
              />
              <div
                className={`z-40 ${card} w-[330px] h-14 right-[-20px] bg-branco m-2 mt-[1rem] rounded-full flex items-center justify-around drop-shadow-2xl`}
                onMouseLeave={() => {
                  setCard("hidden");
                }}
              >
                <Polygon className="absolute top-[-10px] right-[26px] w-[20px]" />
                
                <NavLink className="text-branco bg-azulMahindra px-7 py-2 rounded-full text-lg" to={"/registrar"}>Registrar</NavLink>
                <NavLink className="text-azulMahindra text-lg" to={"/login"}>Login</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
