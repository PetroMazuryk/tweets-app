import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

import {
  MainLogo,
  NavContainer,
  StyleNav,
  StyleNavLink,
  StyledFaReact,
} from "./Navigation.styled";

function Navigation() {
  return (
    <NavContainer>
      <Link to="/home">
        <MainLogo src={Logo} alt="Logo" />
      </Link>
      <StyledFaReact size={30} color="aqua" />
      <StyleNav>
        <ThemeSwitcher />
        <StyleNavLink to="/home">Home</StyleNavLink>
        <StyleNavLink to="/user">User Tweets</StyleNavLink>
      </StyleNav>
    </NavContainer>
  );
}

export default Navigation;
