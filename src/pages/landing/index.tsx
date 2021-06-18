import Header from '../../components/Header'
import Section from '../../components/Section'
import Cases from '../../components/Cases'
import News from '../../components/News'

import Banner1 from '../../assets/images/banners/banner1.png'
import Banner2 from '../../assets/images/banners/banner2.png'
import Banner3 from '../../assets/images/banners/banner3.png'
import Banner4 from '../../assets/images/banners/banner4.png'

import {Container, SectionContainer, Newsletter, Info, Form} from './styles'

const Landing: React.FC = () => {

  return (
      <Container>
        <Header/>
        <SectionContainer>
          
          <Section 
            image={Banner1} 
            title="Consultoria" 
            description="Revolucione sua empresa com inteligência de dados! A Qexpert é especialista em consultoria de dados em formato de cocriação e entregas ágeis."
            isTextDark
          />
           <Section 
            image={Banner2} 
            title="Inteligência Artificial" 
            description="Tenha o futuro ao seu alcance! Conheça as soluções da Gária, plataforma de soluções de IA para empresas e indústrias!"
            isAlignOnLeft
          />
          <Section 
            image={Banner3} 
            title="Headhunting" 
            description="Encontramos os melhores profissionais! Os especialistas em dados que você mais precisa para fazer sua empresa crescer."
            isTextDark
          />
          <Section 
            image={Banner4} 
            title="Educação" 
            description="Capacitação para o desenvolvimento profissional! Obtenha conhecimentos valiosos que te levarão ao sucesso."
            isAlignOnLeft
            isTextDark
          />

        <Newsletter>
          <Info>
            <h1>Quer saber mais?</h1>
            <p>Cadastre-se e receba primeiro as novidades do mercado.</p>
          </Info>
          <Form>
            <input type="text" placeholder="Nome"/>
            <input type="email" placeholder="E-mail"/>
            <button>CADASTRAR</button>
          </Form>
        </Newsletter>
        <Cases/>
        <News/>
        </SectionContainer>
      </Container>
  );
}

export default Landing;