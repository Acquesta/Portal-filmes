import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

export default function MovieListPage() {

    const [search, setSearch] = useState("")
    const [filmes, setFilmes] = useState([])
    const [filmesFiltrados, setFilmesFiltrados] = useState([])

    useEffect(() => {
        
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=be713c0f3820693d5b8eb83566bbe6cc&language=pt-br&sort_by=popularity.desc')
        .then(results => results.json())
        .then(data => setFilmes(data.results))
        .catch(error => console.log(error))
        .finally(() => console.log("Acabou"))
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

    return (
        <>
            <h2>Veja o catálogo completo de filmes</h2>
            <input
                className="text-black"
                type="text"
                id="search"
                value={search}
                onChange={handleSearch}
            />  
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

