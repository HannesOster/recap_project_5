import Spotlight from "@/components/Spotlight/Spotlight";

export default function HomePage({ onSubmitComment, artPiecesInfo, onToggle }) {
  return (
    <>
      <Spotlight
        onSubmitComment={onSubmitComment}
        artPiecesInfo={artPiecesInfo}
        onToggle={onToggle}
      />
    </>
  );
}
