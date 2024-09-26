import Container from "../../components/Container/Container";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import ImgTweet from "../../assets/tweet.jpg";
import {
  HomePageTitle,
  SectionHomePage,
  TweetWrapper,
  HomeTweet,
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
        <TweetWrapper>
          <HomeTweet src={ImgTweet} alt="image tweet" />
        </TweetWrapper>

        <Footer />
      </Container>
    </SectionHomePage>
  );
};
export default HomePage;
