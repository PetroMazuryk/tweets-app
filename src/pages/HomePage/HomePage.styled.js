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
  margin-top: 50px;
  margin-bottom: 30px;

  @media screen and (max-width: 530px) {
    font-size: 40px;
  }
`;
