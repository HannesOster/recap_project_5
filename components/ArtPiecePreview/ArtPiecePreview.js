import Image from "next/image";
export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <Image src={image} alt={title} width={100} height={100} />
      <h3>{title}</h3>
      <p>By {artist}</p>
    </>
  );
}
