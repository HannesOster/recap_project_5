import useSWR from "swr";
import Artpieces from "../components/ArtPieces/ArtPieces";

export default function HomePage() {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  console.log("data:", data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <Artpieces pieces={data} />
    </div>
  );
}
