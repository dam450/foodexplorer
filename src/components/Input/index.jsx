import { Container } from './styles';

export function Input({ type = 'text', Icon, ...rest }) {
  return (
    <Container className="input">
      {Icon && <Icon size={20} />}
      <input type={type} {...rest} />
    </Container>
  );
}
