import { Container } from './styles';

export function Input({ type = 'text', Icon, ...rest }) {
  return (
    <Container className="input">
      {Icon ? <span>{Icon}</span> : ''}
      <input type={type} {...rest} />
    </Container>
  );
}
