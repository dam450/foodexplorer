import { Container } from './styles';

import logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function SignIn() {
  function handleSignIn(event) {
    event.preventDefault();
    console.log(event.target.innerText);
    alert('login efetuado');
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
          />

          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            type="password"
            placeholder="No mínimo 6 caracteres"
          />

          <Button type="submit" onClick={handleSignIn}>
            Entrar
          </Button>
        </form>

        <p>
          <a href="#">Criar uma conta</a>
        </p>
      </div>
    </Container>
  );
}
