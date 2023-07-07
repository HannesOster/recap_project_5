import Spotlight from "@/components/Spotlight/Spotlight";

export default function HomePage({ artPiecesInfo, onToggle }) {
  return (
    <>
      <Spotlight artPiecesInfo={artPiecesInfo} onToggle={onToggle} />
    </>
  );
}
