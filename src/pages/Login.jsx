import Entrada from "../components/entrada/Entrada";

const inputs = [
    {
        label: 'E-mail',
        type: 'text'
    },
    {
        label: 'Senha',
        type: 'password',
        esqueceuSenha: true
    }
]

function Login() {
    return ( 
        <>
            <Entrada 
                title='Login'
                inputs={inputs}
                submit='Entrar'
            />
        </>
     );
}

export default Login;