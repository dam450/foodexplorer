import { Container } from './styles';

import logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function SignUp() {
  function handleSignUp(event) {
    event.preventDefault();
    alert('Sign Up');
  }

  return (
    <Container>
      <span className="logo">
        <img src={logo} alt="logo" />
        <h1>food explorer</h1>
      </span>

      <div className="form-wrapper">
        <h2 className="formTitle">Crie sua conta</h2>
        <form>
          <label htmlFor="email">Seu nome</label>
          <Input id="name" type="name" placeholder="Exemplo: Maria da Silva" />

          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />

          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            type="password"
            placeholder="No mínimo 6 caracteres"
          />

          <Button type="submit" onClick={handleSignUp}>
            Criar conta
          </Button>
        </form>

        <p>
          <a href="/">Já tenho uma conta</a>
        </p>
      </div>
    </Container>
  );
}
