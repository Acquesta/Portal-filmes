import { Link } from "react-router-dom";

export default function MovieCard({ id, title = 'Teste', poster_path }) {

    
    const diminuiTitulo = (title, maxLetra) => {
        if (title.length > maxLetra) {
          return title.substring(0, maxLetra) + '...';
        }
        return title;
    };

    return (
        <>
            <Link className="my-3 rounded-xl text-black font-bold" to={`/movies/${id}`}>
                <div className="min-w-[15vw] cursor-pointer">
                    <img className="h-[22vw] hover:scale-105 transition-all rounded-xl" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="imagem não encontrada"/>
                    {/* <p className="text-xs md:text-lg w-[15vw]">{diminuiTitulo(title, 20)}</p> */}
                    {/* <div className="flex items-center justify-center">
                        <Link className="bg-teal-500 my-3 py-1 px-3 rounded-xl text-black font-bold" to={`/movies/${id}`}>Saber mais</Link>
                    </div> */}
                </div>
            </Link>
        </>
    )

}