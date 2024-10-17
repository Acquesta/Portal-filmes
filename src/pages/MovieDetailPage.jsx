import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function MovieDetailPage(){

    const { movieId } = useParams()

    const [filme, setFilme] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/933260?api_key=be713c0f3820693d5b8eb83566bbe6cc&language=pt-br`)
        .then(results => results.json())
        .then(data => {
            setFilme(data)
        })
        .catch(error => console.log(error))
        .finally(() => console.log("Acabou"))
    }, [])


    return(
        <>
        <h1>Movie Detail Page</h1>
        <h2>{filme.title}</h2>
        {/* Exibe detalhes de um filme específico. */}
        </>
    )
}