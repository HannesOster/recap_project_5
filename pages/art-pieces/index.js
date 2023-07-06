import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
import { useState } from "react";

export default function PiecesList() {
  const URL = "https://example-apis.vercel.app/api/art";

  const [pieces, setPieces] = useState([]);

  const { data, isLoading, error } = useSWR(URL);

  console.log("data:", data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  console.log("Slug:", data[1].slug);
  return (
    <div>
      <ul>
        <ArtPieces pieces={data} />
      </ul>
    </div>
  );
}
