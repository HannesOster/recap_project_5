import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function ArtPiecesPage({ artPiecesInfo, onToggle }) {
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

  const artPiece = data.find((piece) => {
    return piece.slug === slug;
  });

  console.log(data);
  const artPieceIndex = data.findIndex((piece) => piece.slug === slug);
  const artPiece2 = data[artPieceIndex];
  console.log(artPieceIndex);
  return (
    <ArtPieceDetails
      slug={slug}
      artPiecesInfo={artPiecesInfo}
      onToggle={onToggle}
      artPiece={artPiece2}
    />
  );
}
