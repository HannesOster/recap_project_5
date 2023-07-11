import useSWR from "swr";
import ArtPiecePreview from "@/components/ArtPiecePreview/ArtPiecePreview";

export default function Spotlight({
  onSubmitComment,
  artPiecesInfo,
  onToggle,
}) {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }

  function getRandomArtPiece(data) {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  }

  const randomPiece = getRandomArtPiece(data);
  return (
    <ArtPiecePreview
      artPiecesInfo={artPiecesInfo}
      onToggle={onToggle}
      {...randomPiece}
      onSubmitComment={onSubmitComment}
    />
  );
}
