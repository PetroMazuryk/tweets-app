import Container from "../Container/Container";
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import {
  FooterList,
  FooterItem,
  FooterLink,
  FooterCopyright,
} from "./Footer.styled";

const Footer = () => {
  return (
    <Container>
      <FooterList>
        <FooterItem>
          <FooterLink href="https://github.com/PetroMazuryk" target="_blank">
            <BsGithub size={52} color="var(--color-text)" />
          </FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterCopyright>
            © 2024 Petro Mazuryk. All rights reserved. Developed for a test
            assignment at GoIT School.
          </FooterCopyright>
        </FooterItem>
        <FooterItem>
          <FooterLink
            href="https://www.linkedin.com/in/petro-mazuryk-8a6371265/"
            target="_blank"
          >
            <GrLinkedin size={52} color="var(--color-text)" />
          </FooterLink>
        </FooterItem>
      </FooterList>
    </Container>
  );
};

export default Footer;
