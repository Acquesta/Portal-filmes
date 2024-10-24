import { UserCircleIcon } from "@heroicons/react/16/solid";

export default function Login({ isLogged, handleLogin }) {


    return (
        <div className="flex gap-4 items-center">
            {isLogged && <p>Olá, usuário</p>}
            <button
                onClick={handleLogin}
                className={`${isLogged ? "bg-black" : ""} border-black border-2 font-bold px-4 py-1 rounded hidden md:block`}>
                {isLogged ? "Logout" : "Login"}
            </button>
            <UserCircleIcon className="h-9 w-9 md:hidden"/>
        </div>
    )
}