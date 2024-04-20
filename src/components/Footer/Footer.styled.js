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
export const FooterLink = styled.a`
  color: ;
`;

export const FooterCopyright = styled.p`
  font-size: 16px;
  font-family: var(--font-family);
  text-transform: uppercase;
  color: var(--color-text);

  text-shadow: 1px 1px 2px grey, 1px 1px 1px blue;
  box-shadow: 6px 6px 50px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);

  @media screen and (max-width: 530px) {
    text-align: center;
    font-size: 10px;
  }
`;
