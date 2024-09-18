import { useEffect, useRef, useState } from "react";
import Card from "./Card";

function CardsNoticias() {

    const cards = [
        {
            id: 0,
            data: '24 março 2023',
            titulo: 'A criação de um circuito de Fórmula E'
        },
        {
            id: 1,
            data: '24 março 2023',
            titulo: 'A criação de um circuito de Fórmula E'
        },
        {
            id: 2,
            data: '24 março 2023',
            titulo: 'A criação de um circuito de Fórmula E'
        },
        {
            id: 3,
            data: '24 março 2023',
            titulo: 'A criação de um circuito de Fórmula E'
        },
    ]

    let x = 0
    const [targetCard, setTargetCard] = useState(x)

    const [widthBar, setWidthBar] = useState(0)

    function animationBar(){
        setWidthBar(100)
        setTimeout(trocaCard, 2000)
    }
    
    function trocaCard(){
        x += 1
        setTargetCard(x)
        console.log(targetCard);
        animationBar()
    }

    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            console.log('Elemento visível!');
            }
        },
        {
            root: null, // Use o viewport como root
            rootMargin: '0px',
            threshold: 1.0, // 100% do elemento deve estar visível
        }
        );

        if (elementRef.current) {
        observer.observe(elementRef.current);
        }

        return () => {
        if (elementRef.current) {
            observer.unobserve(elementRef.current);
        }
        };
    }, []);

    return ( 
        <>
            <div ref={elementRef} className="mx-8 mt-[-70px] flex gap-4">
                {
                    cards.map((card) => (
                        <Card 
                            data={card.data}
                            descricao={card.titulo}
                            target={card.id == targetCard ? 'true' : ''}
                            progressBar={widthBar}
                        />
                    ))
                }
                
               

            </div>

            <button onClick={animationBar}>TESTE</button>
        </>
     );
}

export default CardsNoticias;