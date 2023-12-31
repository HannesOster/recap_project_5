import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function Favorites({ artPiecesInfo, onToggle }) {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  //Use data from the artPiecesInfo state to filter for all favorite art piecesc

  console.log("Favorites index.js artPiecesInfo", artPiecesInfo);
  const filteredArtPieceInfo = artPiecesInfo.filter(
    (piece) => piece.isFavorite === true
  );
  const filteredPieces = data.filter((piece) =>
    filteredArtPieceInfo.find((favPiece) => piece.slug === favPiece.slug)
  );

  console.log("favorites index.js data:", data);
  console.log("favorites index.js artPiecesInfo:", artPiecesInfo);
  console.log("favorites index.js filteredPieces:", filteredPieces);

  return (
    <ArtPieces
      onToggle={onToggle}
      artPiecesInfo={artPiecesInfo}
      pieces={filteredPieces}
    />
  );
}

//Array mit Slugs, die favorisiert sind
//Favorisierte Slugs sollen an ArtPieces übergeben werden
