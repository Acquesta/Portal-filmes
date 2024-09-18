function Card({ img, title, description, color = false }) {

    let bg = 'bg-' + `${img}`

    let corFundo =  'branco'
    let corTitulo = 'azulMahindra'
    let corTexto =  'black'

    if(color){
        corFundo = 'azulMahindra' 
        corTitulo = 'branco' 
        corTexto = 'branco' 
    }

    return ( 
        <div className={`h-[80vh] w-1/3 mb-5 bg-${corFundo} border-2 border-azulMahindra rounded-2xl p-3`}>
            <div style={{backgroundImage: `url("${img}")`}} className={`bg-top bg-cover w-[100%] h-[30vh] rounded-xl`}></div>
            <h4 className={`text-2xl font-bold text-center text-${corTitulo} my-5`}>{title}</h4>
            <p className={`mx-5 text-center text-${corTexto}`}>{description}</p>
        </div>
     );
}

export default Card; 