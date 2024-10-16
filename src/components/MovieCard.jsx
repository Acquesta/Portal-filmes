import { Link } from "react-router-dom";

export default function MovieCard({ id, title, poster_path }) {

    
    const diminuiTitulo = (title, maxLetra) => {
        if (title.length > maxLetra) {
          return title.substring(0, maxLetra) + '...';
        }
        return title;
    };

    return (
        <div className="min-w-[15vw] cursor-pointer">
            <img className="h-[22vw] hover:scale-105 transition-all rounded-xl" src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
            <p className="text-xs md:text-lg w-[15vw]">{diminuiTitulo(title, 20)}</p>
            <Link className="underline" to={`/movies/${id}`}>Saber mais</Link>
        </div>
    )

}