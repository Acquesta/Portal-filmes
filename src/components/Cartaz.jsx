import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

function Cartaz() {

    const [cartaz, setCartaz] = useState([])
    const [focoCartaz, setFocoCartaz] = useState('')

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=be713c0f3820693d5b8eb83566bbe6cc&language=pt-br')
        .then(results => results.json())
        .then(data => {
            setCartaz(data.results)
            setFocoCartaz(data.results[0])
        })
        .catch(error => console.log(error))
        .finally(() => console.log(cartaz))
    }, [])

    const trocaCartaz = (cartazFoco) => {
        setFocoCartaz(cartazFoco)
        setScroll(cartaz.indexOf(cartazFoco))
    }

    const scrollRef = useRef(null)
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        // trocaCartaz(cartaz[scroll])
        setTimeout(() => {
            if(scroll >= cartaz.length - 1){
                scrollRef.current.scrollBy({ left: -100000, behavior: 'smooth' });
                setScroll(0)
            }else{
                scrollRef.current.scrollBy({ left: 100, behavior: 'smooth' });
                setScroll(scroll + 1)
            }
        }, 5000)
        trocaCartaz(cartaz[scroll])
    }, [scroll])

    return ( 
        <div>
            <h2 className="text-3xl text-center my-5">Filmes em cartaz</h2>
            <div>
                <div className="flex flex-col justify-center pl-10 h-[50vw] w-full bg-cover bg-center" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w1280${cartaz[scroll]?.backdrop_path})`}} alt="" >
                    <h2 className="text-xl sm:text-5xl">{cartaz[scroll]?.title}</h2>
                    <Link to={`/movies/${cartaz[scroll]?.id}`} className="w-[25vw] my-5 px-3 py-1 border-2 border-white rounded-xl text-center text-sm">Ver mais</Link>
                </div>
                <div ref={scrollRef} className="flex gap-5 px-5 mt-[-10vw] overflow-scroll overflow-y-hidden">
                    {cartaz.map(filme => (
                        <div key={filme.id} className="w-[90vw] my-10 mx-auto gap-2 cursor-pointer">
                            <img onClick={() => trocaCartaz(filme)} className="min-w-[20vw] min-h-[10vw] rounded-xl" src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}

export default Cartaz;