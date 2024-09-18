import Card from "./card";
import imagemSolucao from '../../assets/image/solucaoImg.png'
import imagemNossaSolucao from '../../assets/image/nossaSolucaoImg.png'
import imagemPorqueSolucao from '../../assets/image/porqueSolucaoImg.png'
const cardSolucao = [
    {
        img: imagemSolucao,
        title: 'Afinal, o que vamos solucionar?',
        description: 'Todos têm conhecimento sobre corridas de carros tradicionais, movidos a combustão. Mas o principal ponto é: nem todos sabem o que é a Fórmula E. O desenvolvimento de carros elétricos está aumentando e, com isso, queremos que a popularização siga o mesmo caminho de ascensão.'
    },
    {
        img: imagemNossaSolucao,
        title: 'Nossa solução',
        description: 'Consiste em quizzes com perguntas relacionadas a Fórmula E, carros e os cenários gerais, com rankings de pontuações com outras pessoas e premiações.',
        color: true
    },
    {
        img: imagemPorqueSolucao,
        title: 'Por que faremos isso?',
        description: 'A gamificação é atrativa para todos os públicos por seu dinamismo. Pensando nisso, estimular as pessoas a se entreterem com quizzes, enquanto adquirem conhecimento sobre a Fórmula E, disputam rankings e ganham pontos e prêmios, pode despertar a curiosidade do público em geral.'
    },
]

function SectionProjeto() {
    return ( 
        <div className="mx-8 mb-[20vh]">
            <h2 className="text-azulMahindra font-extrabold text-5xl my-[5rem]">Entendendo o projeto</h2>
            <div className="flex justify-between items-center gap-5">
                {
                    cardSolucao.map((card) => (
                        <Card 
                            img={card.img}
                            title={card.title}
                            description={card.description}
                            color = {card.color}
                        />
                    ))
                }
            </div>
        </div>
     );
}

export default SectionProjeto;