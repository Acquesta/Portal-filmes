import { useEffect, useState } from "react"
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";

export default function GenreListPage() {

  const [generos, setGeneros] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=be713c0f3820693d5b8eb83566bbe6cc&language=pt')
      .then(results => results.json())
      .then(data => setGeneros(data.genres))
      .catch(error => console.log(error))
      .finally(() => console.log("Acabou"))
  }, [])

  const [listaGen, setListaGen] = useState([])

  const pegaFilmes = async (idGenero, nomeGenero) => {
    await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=be713c0f3820693d5b8eb83566bbe6cc&with_genres=${idGenero}&language=pt-BR`)
      .then(results => results.json())
      .then(data => {
        // let res = data.results
        setListaGen(data.results)
      })
      .catch(error => console.log(error))

      return listaGen
  }

  console.log(pegaFilmes(28, 'ação'));



  return (
    <>
      <h1 className="text-center font-bold text-3xl my-10" >Página dos generos</h1>
      <button onClick={() => pegaFilmes(28, 'ação')}>Busca genero</button>

      <ul className="mx-10">
        {
          generos.map(genero => (
            <CardContainer key={genero.id}>
              
            </CardContainer>
          ))
        }
      </ul>

    </>
  )
}