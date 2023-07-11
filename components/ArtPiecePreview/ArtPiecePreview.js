import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

export default function ArtPiecePreview({
  onSubmitComment,
  artPiecesInfo,
  onToggle,
  imageSource,
  name,
  artist,
  dimensions,
  slug,
}) {
  return (
    <>
      <h3>{name}</h3>
      <Link href={`/${slug}`}>
        <Image src={imageSource} alt={name} width={100} height={100} />
      </Link>
      <p>By {artist}</p>
      <FavoriteButton
        slug={slug}
        artPiecesInfo={artPiecesInfo}
        onToggle={onToggle}
      />
    </>
  );
}
