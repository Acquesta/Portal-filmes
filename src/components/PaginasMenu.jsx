import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";

function PaginasMenu({ pages, paginas, passaPagina }) {

    let todasPaginas = []

    for(let i = paginas.comeco; i <= paginas.final; i++){
        todasPaginas.push(i)
    }

    return ( 
        <div className="flex justify-between items-center w-2/3 mx-auto">
            <button>
                <ArrowLongLeftIcon className="h-5 w-5 text-white mx-auto" />
            </button>
            <ul className="w-full flex justify-between items-center mx-10 my-10">
                {
                    todasPaginas.map(page => (
                        page <= 10 + pages ? 
                        <li onClick={() => passaPagina(page)} key={page} className={`flex items-center justify-center w-10 h-10 ${page == pages && 'bg-gray-600'} rounded-full text-center cursor-pointer`}>
                            <p>
                                {page}
                            </p>
                        </li> : ''            
                    ))
                }
            </ul>
            <button onClick={() => passaPagina()}>
                <ArrowLongRightIcon className="h-5 w-5 text-white mx-auto" /> 
            </button>
        </div>
     );
}

export default PaginasMenu;