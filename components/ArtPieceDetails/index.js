import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import { styled } from "styled-components";

export default function ArtPieceDetails({
  slug,
  artPiecesInfo,
  onToggle,
  artPiece,
}) {
  const { colors } = artPiece;

  return (
    <>
      <article>
        <Image
          src={artPiece.imageSource}
          alt={artPiece.name}
          height={850}
          width={650}
          //height={artPiece.dimensions.height}
          //width={artPiece.dimensions.width}
        />
        <h3>{artPiece.name}</h3>
        <ul>
          <li>Artist: {artPiece.artist}</li>
          <li>Year: {artPiece.year}</li>
          <li>genre: {artPiece.genre} </li>
        </ul>
        <p>Used Colors:</p>
        <ul>
          {colors.map((color) => {
            return (
              <div
                key={color}
                style={{
                  backgroundColor: color,
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                }}
              ></div>
            );
          })}
        </ul>
        <CommentForm />
        <FavoriteButton
          slug={slug}
          artPiecesInfo={artPiecesInfo}
          onToggle={onToggle}
        />
        <Link href="/art-pieces">
          <button type="button">Back</button>
        </Link>
      </article>
    </>
  );
}
