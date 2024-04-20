import styled from "@emotion/styled";

export const SectionHomePage = styled.section`
  min-height: 100vh;
  background: var(--background-home);
  padding: 20px;
`;

export const HomePageTitle = styled.h1`
  text-align: center;
  font-size: 54px;
  font-weight: bold;
  font-family: var(--font-family);
  text-transform: uppercase;
  color: var(--color-text);
  text-shadow: 0 0 50px blue;
  margin-top: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 530px) {
    font-size: 40px;
  }
`;

export const TweetWrapper = styled.div`
  text-align: center;
`;
export const HomeTweet = styled.img`
  width: 100%;
  height: 540px;
  object-fit: cover;
  border-radius: 20px;
`;

export const FooterContainer = styled.div`
  margin-top: auto;

  @media screen and (max-width: 530px) {
    font-size: 40px;
  }
`;
