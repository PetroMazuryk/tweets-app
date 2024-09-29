import { useState, useEffect } from "react";
import DropDown from "../DropDown/DropDown";
import { selectOptions } from "../../constants/selectOptions";

import Logo from "../../assets/Logo.png";
import PromoImg from "../../assets/picture.png";
import Transverse from "../../assets/Rectangle.png";
import AvatarCards from "../../assets/Ellipse.png";
import apiUsers from "../../services/api";

import {
  WrapperSelect,
  CardList,
  CardsItem,
  MainLogo,
  PromoImgCards,
  TransverseCards,
  AvatarWrapper,
  AvatarOvalContainer,
  AvatarCardsCircle,
  TweetsContainer,
  TweetsText,
  ButtonFollow,
  CardUserName,
  CardUserFollowers,
  ImgAvatar,
  CardsLoader,
} from "./Cards.styled";

const Cards = () => {
  const [filter, setFilter] = useState("all");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  useEffect(() => {
    apiUsers
      .fetchUsers()
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <WrapperSelect>
        {" "}
        <DropDown
          options={selectOptions}
          filter={filter}
          onSelect={handleFilterChange}
        />
      </WrapperSelect>
      <CardList>
        {loading ? (
          <CardsLoader size={50} color="aqua" />
        ) : (
          users.map(({ id, avatar, followers, tweets, user }) => (
            <CardsItem key={id}>
              <MainLogo src={Logo} alt="Logo Image" />
              <PromoImgCards src={PromoImg} alt="Promo Image" />
              <AvatarWrapper>
                <TransverseCards src={Transverse} alt="Rectangle line" />
                <AvatarOvalContainer>
                  <AvatarCardsCircle src={AvatarCards} alt="Ellipse png" />
                  <ImgAvatar src={avatar} alt={user} />
                </AvatarOvalContainer>
              </AvatarWrapper>
              <TweetsContainer>
                <CardUserName>user: {user}</CardUserName>
                <TweetsText>tweets: {tweets}</TweetsText>
                <CardUserFollowers>followers: {followers}</CardUserFollowers>
                <ButtonFollow type="button">Following</ButtonFollow>
              </TweetsContainer>
            </CardsItem>
          ))
        )}
      </CardList>
    </>
  );
};

export default Cards;
