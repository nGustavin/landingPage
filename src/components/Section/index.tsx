import { Container, Content, Spacer } from './styles';

interface SectionProps {
  image: string;
  title: string;
  description: string;
  isTextDark?: boolean;
  isAlignOnLeft?: boolean
}

function Section({ image, title, description, isAlignOnLeft, isTextDark }: SectionProps) {
  return (
    <Container image={image} isAlignOnLeft={isAlignOnLeft}>
      <Spacer/>
      <Content isTextDark={isTextDark}>
        <h1>{title}</h1>
        <p>{description}</p>
        <button>SAIBA MAIS</button>
      </Content>
    </Container>
  );
};

export default Section;
