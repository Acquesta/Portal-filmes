import { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";

export default function Header() {

    const [isLogged, setIsLogged] = useState(false)

    const handleLogin = () => {
        setIsLogged(!isLogged)
    }

    return (
        <>
            <header className="bg-teal-700 flex text-white justify-evenly md:justify-between px-1 md:px-10 h-14 items-center">
                <div>
                    <h1 className="font-bold text-sm md:text-xl hidden md:block">Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex flex-wrap gap-2">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/movies">Filmes</NavLink></li>
                        <li><NavLink to="/genre">Gêneros</NavLink></li>
                        {isLogged && <li><NavLink to="/minhaLista">Minha lista</NavLink></li>}
                    </ul>
                </nav>
                <Login isLogged={isLogged} handleLogin={handleLogin} />
            </header>
        </>
    )
}