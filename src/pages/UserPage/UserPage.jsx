import { Link, useLocation } from "react-router-dom";
import Container from "../../components/Container/Container";
import Navigation from "../../components/Navigation/Navigation";
import { BackButton } from "../../components/BackButton/BackButton";

import {
  PageUserWrapper,
  PageUserTitle,
  PageUserDescription,
} from "./UserPage.styled";

const UserPage = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? "/home";
  return (
    <PageUserWrapper>
      <Container>
        <Navigation />
        <PageUserTitle>Users Tweets</PageUserTitle>
        <Link to={backLink}>
          <BackButton />
        </Link>
        <PageUserDescription>Tweet Cards</PageUserDescription>
      </Container>
    </PageUserWrapper>
  );
};

export default UserPage;
