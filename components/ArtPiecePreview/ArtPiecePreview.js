import Image from "next/image";
export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <Image src={image} alt={title} />
      <h3>{title}</h3>
      <p>By {artist}</p>
    </>
  );
}
