import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import { styled } from "styled-components";
import Comments from "../Comments/Comments";

const article = styled.article`
  display: flex;
`;

export default function ArtPieceDetails({
  onDeleteComment,
  onSubmitComment,
  slug,
  artPiecesInfo,
  onToggle,
  artPiece,
}) {
  const { colors } = artPiece;

  console.log("artPiecesInfo DetailPage: ", artPiecesInfo); //null
  console.log("artPiece DetailPage: ", artPiece); //funktioniert

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
          {colors?.map((color) => {
            return (
              <div
                key={artPiece.color}
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
        <CommentForm onSubmitComment={onSubmitComment} slug={slug} />
        <Comments
          slug={slug}
          artPiecesInfo={artPiecesInfo}
          onDeleteComment={onDeleteComment}
          artPiece={artPiece}
        />
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
