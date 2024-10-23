import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

export default function GenreListPage() {

  const [generos, setGeneros] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=be713c0f3820693d5b8eb83566bbe6cc&language=pt')
      .then(results => results.json())
      .then(data => setGeneros(data.genres))
      .catch(error => console.log(error))
      .finally(() => console.log("Acabou"))
  }, [])

  

  return (
    <>
      <h1 className="text-center font-bold text-3xl my-10" >Todos os gêneros</h1>
      <div className="flex flex-wrap justify-between gap-2 mx-10">
        {
          generos.map(genero => (
            <NavLink to={`/genre/${genero.id}`} className="w-[30vw] bg-teal-700 my-1 px-5 py-7 rounded-2xl cursor-pointer hover:bg-teal-500 transition-colors">{genero.name}</NavLink>
          ))
        }
      </div>

    </>
  )
}