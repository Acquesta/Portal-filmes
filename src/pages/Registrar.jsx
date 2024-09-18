import Entrada from "../components/entrada/Entrada";

const inputs = [
    {
        label: 'Nome de usuário',
        type: 'text'
    },
    {
        label: 'E-mail',
        type: 'email'
    },
    {
        label: 'Data de nascimento',
        type: 'date'
    },
    {
        label: 'Senha',
        type: 'password'
    },
    {
        label: 'Confirme a senha',
        type: 'password'
    },
] 

function Registrar() {
    return ( 
        <>
            <Entrada 
                title = 'Registrar'
                inputs = {inputs}
                submit = 'Registrar'
            />
        </>
     );
}

export default Registrar;