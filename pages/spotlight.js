import useSWR from "swr";

export default function Spotlight() {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  console.log(data);
}
