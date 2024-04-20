import styled from "@emotion/styled";

export const FooterList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  gap: 20px;
`;
export const FooterItem = styled.li`
  max-width: 100%;
`;
export const FooterLink = styled.a`
  color: ;
`;

export const FooterCopyright = styled.p`
  font-size: 16px;
  font-family: var(--font-family);
  text-transform: uppercase;
  color: var(--color-text);
  text-shadow: 0 0 50px blue;

  @media screen and (max-width: 530px) {
    text-align: center;
    font-size: 10px;
  }
`;
