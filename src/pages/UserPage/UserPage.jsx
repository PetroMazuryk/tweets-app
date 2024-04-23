import Container from "../../components/Container/Container";
import Navigation from "../../components/Navigation/Navigation";

import {
  PageUserWrapper,
  PageUserTitle,
  PageUserDescription,
} from "./UserPage.styled";

const UserPage = () => {
  return (
    <PageUserWrapper>
      <Container>
        <Navigation />
        <PageUserTitle>Users Tweets</PageUserTitle>

        <PageUserDescription>Tweet Cards</PageUserDescription>
      </Container>
    </PageUserWrapper>
  );
};

export default UserPage;
