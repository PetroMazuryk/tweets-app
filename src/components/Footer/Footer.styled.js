import styled from "@emotion/styled";

export const FooterList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  gap: 20px;
  margin-top: 30px;
`;
export const FooterItem = styled.li`
  max-width: 100%;
`;

export const FooterLink = styled.a``;

export const FooterCopyright = styled.p`
  font-size: 10px;
  font-family: var(--font-family);
  text-transform: uppercase;
  color: var(--color-text);
  text-align: center;
  text-shadow:
    1px 1px 2px grey,
    1px 1px 1px blue;
  box-shadow:
    6px 6px 50px rgba(0, 0, 0, 0.2),
    0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);

  @media screen and (min-width: 480px) {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 26px;
  }
`;
