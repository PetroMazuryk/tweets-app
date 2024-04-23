import styled from "@emotion/styled";

export const BtnBack = styled.button`
  width: 140px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family);
  font-size: 18px;
  font-weight: 900;
  margin-left: 24px;
  background: var(--background-body);
  color: var(--color-text);
  border-radius: 30px;

  transition: background-color 0.4s;
  -webkit-transition: background-color 0.4s;
  -moz-transition: background-color 0.4s;
  -ms-transition: background-color 0.4s;
  -o-transition: background-color 0.4s;
  cursor: pointer;

  &:hover {
    background: var(--button-hover);
    color: black;
  }

  @media screen and (max-width: 530px) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }
`;

export const TextArrow = styled.span`
  display: flex;
  align-items: center;
  margin-right: 12px;
`;
