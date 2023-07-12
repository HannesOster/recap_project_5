import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function ArtPiecesPage({
  onDeleteComment,
  onSubmitComment,
  artPiecesInfo,
  onToggle,
}) {
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

  const artPiece = data?.find((piece) => {
    return piece.slug === slug;
  });

  console.log("artPiecesInfo slug.js: ", artPiecesInfo); //null
  console.log("artPiece slug.js: ", artPiece); //funktioniert

  return (
    <ArtPieceDetails
      onSubmitComment={onSubmitComment}
      slug={slug}
      artPiecesInfo={artPiecesInfo}
      onToggle={onToggle}
      artPiece={artPiece}
      onDeleteComment={onDeleteComment}
    />
  );
}
