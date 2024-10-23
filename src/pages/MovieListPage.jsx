import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

import { lineWobble } from 'ldrs'

export default function MovieListPage() {

    const [search, setSearch] = useState("")
    const [filmes, setFilmes] = useState([])
    const [filmesFiltrados, setFilmesFiltrados] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            fetch('https://api.themoviedb.org/3/discover/movie?api_key=be713c0f3820693d5b8eb83566bbe6cc&language=pt-br&sort_by=popularity.desc')
            .then(results => results.json())
            .then(data => setFilmes(data.results))
            .catch(error => console.log(error))
            .finally(() => console.log("Acabou"))
            setLoading(false)
        }, 1000)

    }, [])



    const handleSearch = (event) => {
        setSearch(event.target.value)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=be713c0f3820693d5b8eb83566bbe6cc&language=pt&query=${event.target.value}`)
        .then(results => results.json())
        .then(data => setFilmesFiltrados(data.results))
        .catch(error => console.log(error))
        .finally(() => console.log("Acabou"))
        // https://api.themoviedb.org/3/search/movie?api_key=be713c0f3820693d5b8eb83566bbe6cc&language=pt&query=te
    }

    lineWobble.register()

    if (loading){
        return(
            <div className="h-[100vh] flex justify-center items-center">
                <l-line-wobble
                    size="80"
                    stroke="5"
                    bg-opacity="0.1"
                    speed="1.75" 
                    color="white" 
                ></l-line-wobble>
            </div>
        )
    }else{
        return(
            <>
                <div className="w-1/3 flex flex-col justify-center mx-auto my-10 gap-10">
                    <h2 className="text-center font-bold text-3xl">Veja o catálogo completo de filmes</h2>
                    <input
                        className="text-black py-3 rounded-xl pl-3"
                        type="text"
                        id="search"
                        value={search}
                        onChange={handleSearch}
                        placeholder="Procure um filme"
                    />  
                </div>
                <section className="flex flex-wrap gap-10 justify-center w-[90vw] mx-auto">
                    {
                        filmesFiltrados.length > 0 ?

                            filmesFiltrados
                                .map(filme => (
                                    <MovieCard key={filme.id} {...filme} />
                                ))
                            :
                            filmes.length > 0 ?
                                filmes
                                .map(filme => (
                                    <MovieCard key={filme.id} {...filme} />
                                ))
                        :  <p>Não há filmes para exibir</p>


                    }
                </section>
            </>
        )
    }
}

