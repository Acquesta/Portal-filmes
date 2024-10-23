import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";


export default function MoviesByGenrePage(){
    
    const { id } = useParams()
    const [listaGen, setListaGen] = useState([])
    const [generos, setGeneros] = useState([])

    useEffect(() => {
      
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=be713c0f3820693d5b8eb83566bbe6cc&with_genres=${id}&language=pt-BR`)
        .then(results => results.json())
        .then(data => {
            console.log(data);
            setListaGen(data.results)
        })
        .catch(error => console.log(error))

        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=be713c0f3820693d5b8eb83566bbe6cc&language=pt')
        .then(results => results.json())
        .then(data => setGeneros(data.genres))
        .catch(error => console.log(error))
        .finally(() => console.log("Acabou"))
        
    }, [])
    
    
    const genero = generos.filter(genero => id == genero.id)
    console.log(genero);

    return ( 
        <>
            <h2 className='text-5xl text-center my-10'>{genero[0]?.name}</h2>
            <div className="flex flex-wrap justify-center mx-5 gap-2">
                {
                    listaGen.map(filme => (
                        <MovieCard key={filme.id} {...filme}/>
                    ))
                }
            </div   >
        </>
     );
}