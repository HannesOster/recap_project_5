import Image from "next/image";
export default function ArtPiecePreview({
  imageSource,
  name,
  artist,
  dimensions,
}) {
  return (
    <>
      <h3>{name}</h3>
      <Image src={imageSource} alt={name} width={100} height={100} />
      <p>By {artist}</p>
    </>
  );
}
