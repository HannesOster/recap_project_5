import useSWR from "swr";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function Spotlight() {
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }

  const randomPiece = data[getRandomArbitrary(1, 10)];
  return <ArtPiecePreview {...randomPiece} />;
}
