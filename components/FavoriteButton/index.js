import React from "react";
import styled from "styled-components";
import Image from "public/resources/assets/heart.svg";

const ButtonItem = styled.button`
  background-color: transparent;
  border: none;
`;

const HeartImage = styled(Image)`
  fill: ${(props) => (props.isFavorite ? "#ff99e2" : "#7d7d7d")};
`;

export default function FavoriteButton({ slug, artPiecesInfo, onToggle }) {
  return (
    <>
      <ButtonItem onClick={() => onToggle(slug)} type="button">
        <HeartImage
          isFavorite={false}
          alt="FavHeart"
          width={20}
          height={20}
        ></HeartImage>
      </ButtonItem>
    </>
  );
}
