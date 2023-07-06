import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function ArtPiecesPage() {
  const router = useRouter();
  const { slug } = router.query;
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }

  const artPieceIndex = data.findIndex((piece) => piece.slug === slug);
  const artPiece = data[artPieceIndex];

  if (!artPiece) {
    <h1>!!!! Art Piece undefined !!!!</h1>;
  }
  return <ArtPieceDetails artPiece={artPiece} />;
}
