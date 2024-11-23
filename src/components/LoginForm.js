import { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const login = (e) => {
        e.preventDefault();
        if(!email || !password){
            setMessage('Todos os campos são obrigatórios.');
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setMessage('Por favor insira um email valido');
            return;
        }

        if(password.length < 6){
            setMessage('A senha deve conter no mínimo 6 caracteres');
            return;
        }

        setMessage('Login realizado com sucesso!');
        return;
    }

    return(
        <section>
            <form onSubmit={login}>
                <label
                    htmlFor="email">
                    Email
                    <input
                        id="email"
                        type="text"
                        value={email}
                        placeholder="Insert your e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label
                    htmlFor="password">
                    Password
                    <input
                        id="password"
                        type="password"
                        value={password}
                        placeholder="Insert your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <input
                    id="button"
                    type="submit"
                    value="Submit"
                />
            </form>
            <p id="message">{message}</p>
        </section>
    )
}

export default LoginForm;