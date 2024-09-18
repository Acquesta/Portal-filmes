function ImagemNoticia({ img, title, path}) {
    return ( 
        <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0.1)), url("${img}")`}} className="h-[80vh] px-8 bg-cover bg-center flex flex-col justify-center">
            <h2 className="text-6xl font-extrabold text-branco w-1/2">{title}</h2>
            <a href={path} className="w-[15%] mt-9 px-3 py-1 border-branco border-2 text-branco text-xl rounded-xl">Saiba mais sobre</a>
        </div>
     );
}

export default ImagemNoticia;