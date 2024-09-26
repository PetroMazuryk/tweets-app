import styled from "@emotion/styled";

export const SectionHomePage = styled.section`
  min-height: 100vh;
  background: var(--background-home);
  padding: 20px 0;
`;

export const HomePageTitle = styled.h1`
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  font-family: var(--font-family);
  text-transform: uppercase;
  color: var(--color-text);
  text-shadow: 0 0 50px blue;
  margin-top: 30px;
  margin-bottom: 30px;

  @media screen and (min-width: 480px) {
    font-size: 32px;
  }

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 40px;
  }
`;

export const TweetWrapper = styled.div`
  text-align: center;
  @media screen and (min-width: 480px) {
    height: 340px;
  }

  @media screen and (min-width: 768px) {
    height: 440px;
  }

  @media screen and (min-width: 1200px) {
    height: 540px;
  }
`;

export const HomeTweet = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;
