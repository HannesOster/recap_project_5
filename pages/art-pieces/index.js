import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
import { useState } from "react";

export default function PiecesList({ artPiecesInfo, onToggle }) {
  const URL = "https://example-apis.vercel.app/api/art";

  const { data, isLoading, error } = useSWR(URL);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  console.log("Slug:", data[1].slug);
  console.log(artPiecesInfo);
  return (
    <div>
      <ul>
        <ArtPieces
          artPiecesInfo={artPiecesInfo}
          onToggle={onToggle}
          pieces={data}
        />
      </ul>
    </div>
  );
}
