import { useState, useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTweetsHasMore,
  selectTweetsIsLoading,
  selectTweetsError,
  selectTweetsItems,
  selectTweetsPage,
} from "../../redux/tweets/selectors";
import DropDown from "../DropDown/DropDown";
import { selectOptions } from "../../constants/selectOptions";

import Logo from "../../assets/Logo.png";
import PromoImg from "../../assets/picture.png";
import Transverse from "../../assets/Rectangle.png";
import AvatarCards from "../../assets/Ellipse.png";

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
  ButtonLoadMore,
  NoMore,
} from "./Cards.styled";
import { fetchTweets, updateFollowers } from "../../redux/tweets/operations";

const Cards = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectTweetsIsLoading);
  const error = useSelector(selectTweetsError);
  const page = useSelector(selectTweetsPage);
  const hasMore = useSelector(selectTweetsHasMore);
  const isInitialFetch = useRef(true);

  const [filter, setFilter] = useState("all");

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  useEffect(() => {
    if (isInitialFetch.current && !isLoading) {
      dispatch(fetchTweets({ page }));
      isInitialFetch.current = false;
    }
  }, [dispatch, items.length, page, isLoading]);

  const loadMoreHandler = () => {
    if (!isLoading && hasMore) {
      dispatch(fetchTweets({ page }));
    }
  };

  const handleFollowClick = (id, isFollowed) => {
    dispatch(updateFollowers({ tweetId: id, isFollowed }));
  };

  return (
    <>
      {error && <p>Error: {error}</p>}
      <WrapperSelect>
        <DropDown
          options={selectOptions}
          filter={filter}
          onSelect={handleFilterChange}
        />
      </WrapperSelect>
      <CardList>
        {isLoading && items.length === 0 ? (
          <CardsLoader size={50} color="aqua" />
        ) : (
          items.map(({ id, avatar, followers, tweets, user, isFollowed }) => (
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
                <ButtonFollow
                  type="button"
                  isFollowed={isFollowed}
                  onClick={() => handleFollowClick(id, isFollowed)}
                >
                  {isFollowed ? "Following" : "Follow"}
                </ButtonFollow>
              </TweetsContainer>
            </CardsItem>
          ))
        )}
      </CardList>

      {hasMore && (
        <ButtonLoadMore onClick={loadMoreHandler} disabled={isLoading}>
          {isLoading && items.length > 0 ? (
            <p>Loading more...</p>
          ) : (
            <p>Load more</p>
          )}
        </ButtonLoadMore>
      )}

      {!hasMore && <NoMore>No more tweets to load</NoMore>}
    </>
  );
};

export default Cards;
