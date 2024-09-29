import { Link, useLocation } from "react-router-dom";
import Container from "../../components/Container/Container";
import Navigation from "../../components/Navigation/Navigation";
import { BackButton } from "../../components/BackButton/BackButton";
import Cards from "../../components/Cards/Cards";

import {
  PageUserWrapper,
  PageUserTitle,
  PageUserDescription,
} from "./UserPage.styled";

const UserPage = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? "/";
  return (
    <PageUserWrapper>
      <Container>
        <Navigation />
        <PageUserTitle>Users Tweets</PageUserTitle>
        <Link to={backLink}>
          <BackButton />
        </Link>
        <PageUserDescription>Tweet Cards</PageUserDescription>
        <Cards />
      </Container>
    </PageUserWrapper>
  );
};

export default UserPage;
