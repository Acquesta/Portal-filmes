import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function MovieDetailPage(){

    const { id } = useParams()

    const [filme, setFilme] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=be713c0f3820693d5b8eb83566bbe6cc&language=pt-br`)
        .then(results => results.json())
        .then(data => {
            setFilme(data)
        })
        .catch(error => console.log(error))
        .finally(() => console.log("Acabou"))
    }, [])

    

    return(
        <>
            <div className="h-[80vh] bg-cover bg-center" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w1280${filme.backdrop_path})`}}></div>
            <div className="flex px-10 py-5">
                <img className="h-[30vw] rounded-xl" src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt="" />
                <div className="flex flex-col justify-evenly mt-5 px-10">
                    <div>
                        <h2 className=" text-4xl">{filme.title}</h2>
                        <div className="flex gap-5 mt-4">
                            {
                                filme.genres?.map(genero => <h2 className="border-2 border-purple-800 rounded-lg text-purple-300 px-3 py-[.2rem]">{genero.name}</h2>)
                            }
                        </div>
                    </div>
                    <p className="my-3 text-justify text font">{filme.overview}</p>
                    <div className="w-1/2 flex gap-10">
                        <div>
                            <h4 className="text-center text-xl">Nota</h4>
                            <button className={`mt-3 p-4 border-2 rounded-full text-xl ${filme.vote_average < 5 ? 'text-red-600 border-red-600' : filme.vote_average > 6 ? 'text-green-600 border-green-600' : 'text-yellow-400 border-yellow-400'}`}>{filme.vote_average}</button>
                        </div>
                        <div>
                            <h4 className="text-center text-xl">Data</h4>
                            <h3 className="mt-3 py-4 text-xl">{filme.release_date}</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* Exibe detalhes de um filme específico. */}
        </>
    ) 
}