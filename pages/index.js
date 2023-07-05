import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/ArtPieces";
import Link from "next/link";

export default function HomePage() {
  const URL = "https://example-apis.vercel.app/api/art";

  const { data, isLoading, error } = useSWR(URL);

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
      <ArtPieces pieces={data} />
      <Link href="/spotlight">Random Artpiece</Link>
    </div>
  );
}
