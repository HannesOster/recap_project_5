import useSWR from "swr";
import ArtPiecePreview from "@/components/ArtPiecePreview/ArtPiecePreview";

export default function Spotlight() {
  /* ursprünglich 
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }*/
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

  //ursprünglich const randomPiece = data[getRandomArbitrary(1, 10)];
  const randomPiece = getRandomArtPiece(data);
  return <ArtPiecePreview {...randomPiece} />;
}
