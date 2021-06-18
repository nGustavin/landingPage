import { Container, TitleContainer } from './styles';

import Logo1 from '../../assets/images/cases/logo1.webp'
import Logo2 from '../../assets/images/cases/logo2.webp'
import Logo3 from '../../assets/images/cases/logo3.webp'
import Logo4 from '../../assets/images/cases/logo4.webp'
import Logo5 from '../../assets/images/cases/logo5.webp'
import Logo6 from '../../assets/images/cases/logo6.webp'
import Logo7 from '../../assets/images/cases/logo7.webp'
import Logo8 from '../../assets/images/cases/logo8.webp'
import Logo9 from '../../assets/images/cases/logo9.webp'
import Logo10 from '../../assets/images/cases/logo10.webp'

function Cases() {
  return (
    <Container>
    <TitleContainer>
      <h1>Cases de sucesso</h1>
    </TitleContainer>
    <div>
      <img src={Logo1} alt="CaseImage"/>
      <img src={Logo2} alt="CaseImage"/>
      <img src={Logo3} alt="CaseImage"/>
      <img src={Logo4} alt="CaseImage"/>
      <img src={Logo5} alt="CaseImage"/>
    </div>
    <div>
      <img src={Logo6} alt="CaseImage"/>
      <img src={Logo7} alt="CaseImage"/>
      <img src={Logo8} alt="CaseImage"/>
      <img src={Logo9} alt="CaseImage"/>
      <img src={Logo10} alt="CaseImage"/>
    </div>
  </Container>
  );
};

export default Cases;
