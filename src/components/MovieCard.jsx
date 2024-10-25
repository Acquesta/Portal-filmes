import { Link } from "react-router-dom";

export default function MovieCard({ id, poster_path }) {

    return (
        <>
            <Link className="my-3 rounded-xl text-black font-bold" to={`/movies/${id}`}>
                <div className="cursor-pointer md:w-[20vw]">
                    <img className="md:min-w-[10vw] min-w-[35vw] hover:scale-105 transition-all rounded-xl" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="imagem não encontrada"/>
                </div>
            </Link>
        </>
    )

}