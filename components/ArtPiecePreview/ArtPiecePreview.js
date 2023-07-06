import Image from "next/image";
import Link from "next/link";
export default function ArtPiecePreview({
  imageSource,
  name,
  artist,
  dimensions,
  slug,
}) {
  return (
    <>
      <h3>{name}</h3>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={imageSource} alt={name} width={100} height={100} />
      </Link>
      <p>By {artist}</p>
    </>
  );
}
