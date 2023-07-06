import Image from "next/image";
import useSWR from "swr";

export default function ArtPieceDetails({ artPiece }) {
  return (
    <>
      <article>
        <Image
          src={artPiece.imageSource}
          alt={artPiece.name}
          dimensions={artPiece.dimensions}
        />
        <h3>{artPiece.name}</h3>
        <ul>
          <li>Artist: {artPiece.artist}</li>
          <li>Year: {artPiece.year}</li>
          <li>genre: {artPiece.genre} </li>
        </ul>
        <button type="button">Back</button>
      </article>
    </>
  );
}
