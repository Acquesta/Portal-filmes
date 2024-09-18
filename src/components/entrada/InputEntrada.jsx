import { NavLink } from "react-router-dom";

function InputEntrada({ label, type, esqueceuSenha = false}) {
    return ( 
        <>
            <div className="mt-[.5rem] flex flex-col">
                <label  className="text-xl mb-2" htmlFor="text">{label}</label>
                <input id="hs-toggle-password-with-checkbox" className="h-[2.5rem] rounded-2xl bg-[#EDEDED] border-2 border-[#A9B7CC] p-3" type={type} />
                {esqueceuSenha == true ? <NavLink className={'mt-3 text-[13px] text-azulMahindra'} to={'/esqueceuSenha'}>Esqueceu a senha?</NavLink> : ''}
            </div>
        </>
     );
}

export default InputEntrada;