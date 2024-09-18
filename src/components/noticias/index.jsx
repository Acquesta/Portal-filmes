
import Noticia1 from "../../assets/image/noticia1.png";
import CardsNoticias from "./CardsNoticias";
import ImagemNoticia from "./ImagemNoticia";

function Noticias() {
    return ( 
        <div className="my-10">
            <div className="flex justify-between text-azulMahindra p-8">
                <h2 className="text-4xl font-extrabold">Notícias</h2>
                <a href="https://www.fiaformulae.com/pt-br/news" target="blank" className="border-azulMahindra border-3 px-10">Site de notícias oficial Fórmula E</a>
            </div>
            <ImagemNoticia
                img={Noticia1}
                title='A criação de um circuito de Fórmula E'
                path='https://www.fiaformulae.com/pt-br/news/17969'
            />
            <CardsNoticias />
        </div>
     );
}

export default Noticias;