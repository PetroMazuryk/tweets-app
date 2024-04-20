import Container from "../../components/Container/Container";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import {
  HomePageTitle,
  SectionHomePage,
  FooterContainer,
} from "./HomePage.styled";

const HomePage = () => {
  return (
    <SectionHomePage>
      <Container>
        <Navigation />

        <HomePageTitle>
          welcome to the tweets app I created at goit school as a test
          assignment
        </HomePageTitle>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Container>
    </SectionHomePage>
  );
};
export default HomePage;
