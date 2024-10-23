import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import Cartaz from "../components/Cartaz";

import { lineWobble } from 'ldrs'

export default function Home() {

    const [populares, setPopulares] = useState([])
    const [topRated, setTopTopRated] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [recomendados, setRecomendados] = useState([])

    const [loading, setLoading] = useState(true)

    const assistidos = JSON.parse(localStorage.getItem("assistidos"))

    // console.log(assistidos);

    useEffect(() => {
        setTimeout(() => {
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
    
            // console.log(assistidos[0]);

            if (assistidos){
                console.log(assistidos);
                fetch(`https://api.themoviedb.org/3/movie/${assistidos[0].id}/recommendations?api_key=be713c0f3820693d5b8eb83566bbe6cc&language=pt-br`)
                    .then(results => results.json())
                    .then(data => setRecomendados(data.results))
                    .catch(error => console.log(error))
                    .finally(() => console.log("Fechou"))
            } 
            setLoading(false)
        }, 1000)

    }, [])

    // console.log(recomendados);

    lineWobble.register()

    if(loading){
        console.log(loading);
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
    } else {
        return (
            <>
                <Cartaz/>
    
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
    
                    {
                        assistidos && <CardContainer titulo="Recomendados">
                            {
        
                                recomendados.map(filme => (
                                    <MovieCard key={filme.id} {...filme} />
                                ))
                            }
                        </CardContainer>
                    }
    
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
       
    

    
}