import InputEntrada from './InputEntrada';
import InputSubmit from './InputSubmit';

function Entrada({ title, inputs, submit}) {
    return ( 
        <div className='bg-branco w-[70vw] h[auto] mx-auto my-[25px] p-[20px] flex justify-between items-center drop-shadow-2xl'>

            <div className='bg-imagemEntrada bg-cover bg-center rounded-xl w-2/3 h-[100vh]'>
                
            </div>
            <div className='w-full px-[4rem] py-[1rem] flex flex-col'>
                <h1 className='text-center text-5xl uppercase text-azulMahindra font-bold'>{title}</h1>
                {
                    inputs.map((input) => (
                        <InputEntrada 
                            label = {input.label}
                            type = {input.type}
                            esqueceuSenha = {input.esqueceuSenha}
                        />
                    ))
                }
                <InputSubmit
                    value = {submit}
                />
            </div>
        </div>
     );
}

export default Entrada;