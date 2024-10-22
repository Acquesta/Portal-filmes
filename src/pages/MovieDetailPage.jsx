import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MostraFilme from "../components/MostraFilme"

export default function MovieDetailPage() {

    const { id } = useParams()

    const [filme, setFilme] = useState([])
    const [filmeImagens, setFilmeImagens] = useState([])
    const [filmeVideos, setFilmeVideos] = useState([])
    
    const [sectionMostraFilmes, setSectionMostraFilmes] = useState(0)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=be713c0f3820693d5b8eb83566bbe6cc&language=pt-br`)
            .then(results => results.json())
            .then(data => {
                setFilme(data)
            })
            .catch(error => console.log(error))
            .finally(() => console.log("Acabou"))

        fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=be713c0f3820693d5b8eb83566bbe6cc`)
            .then(results => results.json())
            .then(data => {
                setFilmeImagens(data.backdrops.filter(imagem => imagem.iso_639_1 == null))
                // setFilmeImagens(data.backdrops)
            })
            .catch(error => console.log(error))
            .finally(() => console.log("Acabou"))

        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=be713c0f3820693d5b8eb83566bbe6cc&language=pt-br`)
            .then(results => results.json())
            .then(data => {
                console.log(data.results);
                
                setFilmeVideos(data.results)
            })
            .catch(error => console.log(error))
            .finally(() => console.log("Acabou"))
    }, [])

    console.log(filmeImagens);


    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === filmeImagens.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? filmeImagens.length - 1 : prevIndex - 1
        );
    };

    const pegaLocalStore = () => {
        let verDepois = localStorage.getItem('verDepois');
        let assistidos = localStorage.getItem('assistidos');
        if (assistidos && verDepois) {
            assistidos = JSON.parse(localStore);
            verDepois = JSON.parse(verDepois);
            return [assistidos, verDepois];
        }
    }

    const verifica = (id, tag) => {
        let filmes = pegaLocalStore()
        if(filmes){
            filmes[tag].forEach((filme) => {
                if (filme.id == id) {
                    return true
                } 
                return false
            })
        }
    }

    const verDepois = (id) => {
        if(!verifica(id, 1)){
            localStorage.setItem('verDepois', JSON.stringify(filme))
        }
        else if(verifica(id, 0)){
            alert('Você já assistiu esse filme')
        }
        else{
            localStorage.setItem('verDepois', JSON.stringify([...filmeImagens.filter((filme) => filme)]))
        }
    }

    return (
        <>
            <div className="h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${filme.backdrop_path})` }}></div>
            <div className="flex px-10 py-5">
                <img className="h-[30vw] rounded-xl" src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt="" />
                <div className="flex flex-col justify-evenly mt-5 px-10">
                    <div>
                        <h2 className=" text-4xl">{filme.title}</h2>
                        <div className="flex gap-5 mt-4">
                            {
                                filme.genres?.map(genero => <h2 key={`${genero.name}`} className="border-2 border-purple-800 rounded-lg text-purple-300 px-3 py-[.2rem]">{genero.name}</h2>)
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
                            <h4 className="text-center text-xl ">Data</h4>
                            <h3 className="mt-3 py-4 text-xl">{filme.release_date}</h3>
                        </div>
                    </div>
                    <div className="flex gap-10 font-bold">
                        <button onClick={() => verDepois(filme.id)} className="border-2 border-yellow-500 px-5 py-3 rounded-2xl hover:bg-yellow-500 hover:text-black">Ver depois</button>
                        <button className="border-2 border-green-500 px-5 py-3 rounded-2xl hover:bg-green-500 hover:text-black">Ja assisti</button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-10">
                <h2 onClick={() => sectionMostraFilmes == 1 ? setSectionMostraFilmes(0) : ''} className={`text-2xl text-center my-5 cursor-pointer ${sectionMostraFilmes == 0 ? 'underline' : ""}`}>Imagens</h2>
                <h2 onClick={() => sectionMostraFilmes == 0 ? setSectionMostraFilmes(1) : ''} className={`text-2xl text-center my-5 cursor-pointer ${sectionMostraFilmes == 1 ? 'underline' : ""}`}>Vídeos</h2>
            </div>
            <MostraFilme
                key={filmeImagens}
                currentIndex={currentIndex}
                prevImage={prevImage}
                nextImage={nextImage}
                filmeImagens={filmeImagens}
                filmeVideos={filmeVideos}
                type={sectionMostraFilmes}
            />
        </>
    )
}