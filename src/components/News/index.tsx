import { Container, CardsContainer, Card, ImageContainer, ContentContainer,  Footer, NewsNavigationContainer, MoreButtonContainer} from './styles';

import NewsBanner1 from '../../assets/images/news/new1.webp'
import NewsBanner2 from '../../assets/images/news/new2.webp'

function News() {
  return (
    <Container>
      <div id="newsTitle">
        <h1>News</h1>
      </div>
      <CardsContainer>
        <Card>
          <ImageContainer>
            <img src={NewsBanner1} alt="Machine Learning: conheça essa IA personalizada" />
          </ImageContainer>
          <ContentContainer>
            <h4>Inteligência Artificial</h4>
            <h2>Machine Learning: conheça essa IA personalizada</h2>
          </ContentContainer>
          <Footer>
            <h2>Continue lendo...</h2>
          </Footer>
        </Card>

        <Card>
          <ImageContainer>
            <img src={NewsBanner2} alt="Machine Learning: conheça essa IA personalizada" />
          </ImageContainer>
          <ContentContainer>
            <h4>Divulgações</h4>
            <h2>Qexpert - Ecossistema de Inovação</h2>
          </ContentContainer>
          <Footer>
            <h2>Continue lendo...</h2>
          </Footer>
        </Card>

        <Card>
          <ImageContainer>
            <img src={NewsBanner2} alt="Machine Learning: conheça essa IA personalizada" />
          </ImageContainer>
          <ContentContainer>
            <h4>Desafios</h4>
            <h2>Qexpert no Hub de inteligência do SENAI-PR</h2>
          </ContentContainer>
          <Footer>
            <h2>Continue lendo...</h2>
          </Footer>
        </Card>
      </CardsContainer>
    <NewsNavigationContainer>
      <a href="https://qexpert.com.br/">1</a>
      <a href="https://qexpert.com.br/">2</a>
      <a href="https://qexpert.com.br/">3</a>
    </NewsNavigationContainer>
    <MoreButtonContainer>
      <button>VER MAIS</button>
    </MoreButtonContainer>
    </Container>
  );
};

export default News;
