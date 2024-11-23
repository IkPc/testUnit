import { fireEvent, screen, render } from "@testing-library/react";
import LoginForm from "./LoginForm"

test('renderiza campos de entrada e botão', () => {
    render(<LoginForm/>);
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { value: /entrar/i })).toBeInTheDocument();
});

test('mostra mensagem de erro para entradas vazias', () => {
    render(<LoginForm/>);
    fireEvent.click(screen.getByRole('button', { value: /Submit/i }));
    expect(screen.getByText(/Todos os campos são obrigatórios./i)).toBeInTheDocument();
});

test('mostra mensagem de erro para Email inválido', () => {
    render(<LoginForm/>);
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'email_invalido' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: '123456' } });
    fireEvent.change(screen.getByRole('button', { value: /Submit/i }));
    expect(screen.getByText(/Por favor insira um email valido/i)).toBeInTheDocument();
});

test('realiza login com entradas válidas', () => {
    render(<LoginForm/>);
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: '123456' } });
    fireEvent.click(screen.getByRole('button', { value: /Submit/i }));
    expect(screen.getByText(/Login realizado com sucesso/i)).toBeInTheDocument();
})