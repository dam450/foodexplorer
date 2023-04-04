import { Container } from './styles';

import logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { useState } from 'react';

export function SignIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn(event) {
    event.preventDefault();
    signIn({ email, password });
  }

  return (
    <Container>
      <span className="logo">
        <img src={logo} alt="logo" />
        <h1>food explorer</h1>
      </span>

      <div className="form-wrapper">
        <h2 className="formTitle">Faça login</h2>
        <form>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            type="password"
            placeholder="No mínimo 6 caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" onClick={handleSignIn}>
            Entrar
          </Button>
        </form>

        <p>
          <a href="/signup">Criar uma conta</a>
        </p>
      </div>
    </Container>
  );
}
