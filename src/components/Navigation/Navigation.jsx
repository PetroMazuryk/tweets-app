import Logo from "../../assets/Logo.png";
import {
  MainLogo,
  NavContainer,
  StyleNav,
  StyleNavLink,
} from "./Navigation.styled";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <NavContainer>
      <Link to="/home">
        <MainLogo src={Logo} alt="Logo" />
      </Link>
      <StyleNav>
        <StyleNavLink to="/home">Home</StyleNavLink>
        <StyleNavLink to="/user">User Tweets</StyleNavLink>
      </StyleNav>
    </NavContainer>
  );
}

export default Navigation;
