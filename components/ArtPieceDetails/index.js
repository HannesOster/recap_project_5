import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

export default function ArtPieceDetails({ artPiece }) {
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
        <FavoriteButton />
        <Link href="/art-pieces">
          <button type="button">Back</button>
        </Link>
      </article>
    </>
  );
}
