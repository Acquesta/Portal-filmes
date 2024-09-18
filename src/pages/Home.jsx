import CardHome from "../components/cardHome/CardHome";
import Noticias from "../components/noticias";
import SectionProjeto from "../components/sectionProjeto";

function Home() {
    return ( 
        <>
           <CardHome />
           <div className="bg-azulMahindra h-1 my-14"></div>
           <SectionProjeto />
           <div className="bg-azulMahindra h-1 my-14"></div>
           <Noticias />
        </>
     );
}

export default Home;