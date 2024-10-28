function MostraFilme({ nextImage, prevImage, filmeImagens, filmeVideos, currentIndex, type }) {

    console.log(filmeVideos);

    return (

        <>

            <div className="flex justify-center items-center my-7 md:px-20 md:gap-10">
                {
                    !filmeVideos
                }
                <button className="border-2 border-white md:p-3 rounded-full hover:bg-slate-600 transition-all " onClick={() => {type == 0 ? prevImage(filmeImagens) : prevImage(filmeVideos)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <div className="flex justify-center">
                    {
                        type == 0 ? (

                            <div className="w-[80vw] md:h-[70vh] md:w-[80vw]">
                                <img className=" h-full mx-auto rounded-xl" src={`https://image.tmdb.org/t/p/w1280/${filmeImagens[currentIndex]?.file_path}`} alt="" />
                            </div>
                        )
                            :
                            (
                                
                                filmeVideos[currentIndex] ?  
                                    <iframe
                                        className="w-[80vw] md:h-[70vh] md:w-[80vw]"
                                        src={`https://www.youtube.com/embed/${filmeVideos[currentIndex]?.key}`}
                                        title="YouTube Video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe> : <h2 className="text-2xl">Esse trailer não está disponível</h2>
                            )
                    }
                </div>
                <button className="border-2 border-white md:p-3 rounded-full hover:bg-slate-600 transition-all " onClick={() => {type == 0 ? nextImage(filmeImagens) : nextImage(filmeVideos)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </>
    );
}

export default MostraFilme;