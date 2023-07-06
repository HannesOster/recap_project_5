import Image from "next/image";
import useSWR from "swr";



export default function ArtPieceDetails({pieces}){
  return (
    <>
    {pieces.map((piece) => (<article key={piece.slug}>
      <Image src={piece.imageSource} alt={name} dimensions={piece.dimensions} />
      <h3>{piece.name}</h3>
      <ul>
        <li>Artist: {piece.artist}</li>
        <li>Year: {piece.year}</li>
        <li>genre: {piece.genre} </li>
      </ul>
      <button type="button">Back</button>
      </article>
    ))}</>);
}
