import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { SiReactos } from "react-icons/si";

export const MainLogo = styled.img`
  width: 180px;
  height: 40px;
  margin-left: 24px;
  color: red;
  @media screen and (max-width: 530px) {
    margin-left: 0;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 530px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 320px) {
    gap: 10px;
  }
`;

export const StyleNav = styled.nav`
  display: flex;
  gap: 20px;
  margin-left: auto;
  margin-right: 22px;
  font-size: 20px;
  font-weight: bold;
  font-family: var(--font-family);
  text-transform: uppercase;
  text-shadow: 0 0 50px blue;

  @media screen and (max-width: 530px) {
    margin-left: 0;
  }

  @media screen and (max-width: 320px) {
    font-size: 16px;
  }
`;

export const StyleNavLink = styled(NavLink)`
  color: var(--color-text);
  transition: color var(--transition);
  position: relative;

  &:hover {
    color: aqua;
  }

  &.active {
    color: aqua;
  }

  &.active::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -10px;
    width: 100%;
    height: 3px;
    background-color: aqua;
    border-radius: 5px;
  }
`;

export const StyledFaReact = styled(SiReactos)`
  display: block;
  margin-left: 20px;

  animation: rotate 3s infinite linear;
  -webkit-animation: rotate 3s infinite linear;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
