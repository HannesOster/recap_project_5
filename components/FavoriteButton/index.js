import Image from "next/image";
import Heart from "../../public/resources/assets/heart.svg";

export default function FavoriteButton({ slug, artPiecesInfo, onToggle }) {
  const heart = Heart();
  return (
    <>
      <button onClick={() => onToggle(slug)} type="button">
        {heart}
      </button>
      <button onClick={() => console.log(artPiecesInfo)}>console log</button>
    </>
  );
}
