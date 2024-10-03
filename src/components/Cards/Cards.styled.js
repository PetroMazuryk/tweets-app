import styled from "@emotion/styled";
import { FaReact } from "react-icons/fa";

export const CardsLoader = styled(FaReact)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  animation: rotate 5s infinite linear;
  -webkit-animation: rotate 5s infinite linear;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export const WrapperSelect = styled.div`
  width: 140px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const CardList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
`;

export const CardsItem = styled.li`
  position: relative;
  width: 380px;
  background: var(--background-card);
  border-radius: 20px;
`;

export const MainLogo = styled.img`
  width: 100px;
  padding-top: 20px;
  padding-left: 20px;
  margin-bottom: 180px;
`;

export const PromoImgCards = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;
  width: 308px;
  height: 168px;
`;

export const AvatarWrapper = styled.div`
  position: relative;
`;

export const TransverseCards = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 62px;
`;

export const AvatarOvalContainer = styled.div`
  width: 130px;
  height: 130px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--background-body);
`;

export const AvatarCardsCircle = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 130px;
  height: 130px;
  transform: translate(-50%, -50%);
`;

export const ImgAvatar = styled.img`
  position: absolute;
  top: 45%;
  left: 50%;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;

export const TweetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
`;

export const TweetsText = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--color-text);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`;

export const CardUserName = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--color-text);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`;

export const CardUserFollowers = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--color-text);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`;

export const ButtonFollow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 194px;
  font-family: var(--font-family);
  font-weight: 600;
  line-height: 22px;
  color: var(--color-text-btn);
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 36px;

  background: ${({ isFollowed }) =>
    isFollowed ? "var(--button-color-active)" : "var(--background-body)"};

  border-radius: var(--border-radius);
  padding: 14px 28px;
  transition: color var(--transition);

  &.button-color-active {
    background: var(--button-color-active);
  }

  &:hover {
    background: var(--button-hover);
    color: var(--button-color-text);
  }
`;

export const ButtonLoadMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: var(--font-family);
  font-weight: 600;
  line-height: 22px;
  color: var(--color-text);
  text-transform: uppercase;
  background: var(--background-body);

  border-radius: var(--border-radius);
  padding: 14px 28px;
  transition: var(--transition);

  &:hover {
    background: var(--button-hover);
    color: var(--button-color-text);
  }
`;
