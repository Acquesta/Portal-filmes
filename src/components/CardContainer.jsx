import { useRef } from "react";
import { Link } from "react-router-dom";

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

export default function CardContainer({ titulo, children }) {

    const scrollContainerRef = useRef(null);

    const scrollDireita = (direcao) => {
        if (direcao == 'left') {
            scrollContainerRef.current.scrollBy({ left: 1000, behavior: 'smooth' });
        }else{
            scrollContainerRef.current.scrollBy({ left: -1000, behavior: 'smooth' });
        }
    }



    return (
        <div className="relative my-5">
            <h1 className="text-xl mx-10 md:text-3xl">{titulo}</h1>
             
            <div className={`${children.length <= 5 ? 'hidden' : ''} flex items-center z-10 h-full my-5 pr-4 bg-gradient-to-r from-transparent to-[#080808] absolute right-0`}>
                <button onClick={() => scrollDireita('left')} className="max-md:hidden z-10 w-12 h-12 bg-teal-500 rounded-full text-center">
                    <ChevronRightIcon className="h-5 w-5 text-black mx-auto" />
                </button>
            </div>

            <div className={`${children.length <= 5 ? 'hidden' : ''} flex items-center z-10 h-full my-5 pl-4 bg-gradient-to-l from-transparent to-[#080808  ] absolute left-0`}>
                <button onClick={() => scrollDireita('right')} className="max-md:hidden z-10 w-12 h-12 bg-teal-500 rounded-full text-center">
                    <ChevronLeftIcon className="h-5 w-5 text-black mx-auto" />
                </button>
            </div>

            <div ref={scrollContainerRef} className="flex mt-10 mx-auto px-10 gap-2 overflow-scroll overflow-y-hidden" style={{}}>
                {
                    children[0] ? children : <h4 className="text-xl">Você não tem nehum filme {titulo} 😥, adicione filmes a lista <Link className="underline" to='/movies'>Procurar filmes</Link></h4>
                }
            </div>
        </div>
    )
}