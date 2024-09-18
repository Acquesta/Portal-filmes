function CardHome() {
    return (
        <div className="flex flex-col justify-center items-center my-6">
            <div className="bg-azulGradient w-[90vw] h-[90vh] rounded-[119px]">
                <h1 className="w-[60%] text-8xl w-2/4 font-extrabold leading-[1.2] pl-4" style={{WebkitTextStroke: '3px #fff', color: 'transparent'}}>CONHEÇA OS QUIZZES DA <span className="text-branco">FÓRMULA E </span>E VIVA UMA JORNADA</h1>
                
            </div>
            <button className="bg-branco text-2xl font-extrabold text-azulMahindra mt-[-2%] px-20 py-4 shadow-xl rounded-2xl hover:text-branco hover:bg-azulMahindra transition">Jogar agora</button>
        </div> 
     );
}

export default CardHome;