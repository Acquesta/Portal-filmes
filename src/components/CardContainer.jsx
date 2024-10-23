import { Link } from "react-router-dom";

export default function CardContainer({ titulo, children }) {
    return (
        <div className="mx-10 my-5">
            <h1 className="text-3xl">{titulo}</h1>
            <div className="flex w-[90vw] mt-10 mx-auto gap-2 overflow-scroll overflow-y-hidden scroll">
                {
                    children[0] ? children : <h4 className="text-xl">Você não tem nehum filme {titulo} 😥, adicione filmes a lista <Link className="underline" to='/movies'>Procurar filmes</Link></h4>
                }
            </div>
        </div>
    )
}