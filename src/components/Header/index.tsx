import { Container, Wrapper, Links } from './styles';
import Logo from '../../assets/logo-qexpert.svg'

function Header() {
  return (
    <Container>
      <Wrapper>
        <a href="https://qexpert.com.br/">
          <img src={Logo} alt="Qexpert Logo"/>
        </a>
        <Links>
          <a href="https://qexpert.com.br/">CONSULTORIA</a>
          <a href="https://qexpert.com.br/">INTELIGÊNCIA ARTIFICIAL</a>
          <a href="https://qexpert.com.br/">EDUCAÇÃO</a>
          <a href="https://qexpert.com.br/">CASES</a>
          <a href="https://qexpert.com.br/">NEWS</a>
          <a href="https://qexpert.com.br/">VAGAS</a>
          <a href="https://qexpert.com.br/">CONTATO</a>
        </Links>
      </Wrapper>
    </Container>
  );
};

export default Header;
