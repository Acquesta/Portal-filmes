import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import Cartaz from "../components/Cartaz";

export default function Home() {

    const [populares, setPopulares] = useState([])
    const [topRated, setTopTopRated] = useState([])
    const [upcoming, setUpcoming] = useState([])


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=be713c0f3820693d5b8eb83566bbe6cc&language=pt-br')
        .then(results => results.json())
        .then(data => setPopulares(data.results))
        .catch(error => console.log(error))
        .finally(() => console.log("Fechou"))
        
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=be713c0f3820693d5b8eb83566bbe6cc&language=pt-br')
        .then(results => results.json())
        .then(data => setTopTopRated(data.results))
        .catch(error => console.log(error))
        .finally(() => console.log("Fechou"))
        
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=be713c0f3820693d5b8eb83566bbe6cc&language=pt-br')
        .then(results => results.json())
        .then(data => setUpcoming(data.results))
        .catch(error => console.log(error))
        .finally(() => console.log("Fechou"))
    }, [])



    return (
        <>
            <Cartaz />

            <CardContainer titulo="Filmes populares">
                {
                    
                    populares.map(filme => (
                        <MovieCard key={filme.id} {...filme} />
                    ))
                }
            </CardContainer>

            <CardContainer titulo="Filmes bem classificados">
                {
                    
                    topRated.map(filme => (
                        <MovieCard key={filme.id} {...filme} />
                    ))
                }
            </CardContainer>

            <CardContainer titulo="Em breve">
                {
                    
                    upcoming.map(filme => (
                        <MovieCard key={filme.id} {...filme} />
                    ))
                }
            </CardContainer>
        </>
    )
}