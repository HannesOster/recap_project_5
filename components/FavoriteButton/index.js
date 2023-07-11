import React, { useState } from "react";
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
  const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
  const [isFavorite, setIsFavorite] = useState(artPiece?.isFavorite || false);

  const handleToggle = () => {
    setIsFavorite((prevState) => !prevState); // Umschalten des Favoritenstatus
    onToggle(slug); // Aufruf der übergebenen Funktion zum Aktualisieren der Favoritenliste
  };

  return (
    <>
      <ButtonItem onClick={() => handleToggle()} type="button">
        <HeartImage
          isFavorite={isFavorite}
          alt="FavHeart"
          width={20}
          height={20}
        />
      </ButtonItem>
    </>
  );
}
