import Image from "next/image";


export default function FavoriteButton({ slug, artPiecesInfo, onToggle }) {

  return (
    <>
      <button onClick={() => onToggle(slug)} type="button">
        <Image
          src="/resources/assets/heart.svg"
          alt="bild"
          width={30}
          height={30}
        ></Image>
      </button>
      <button onClick={() => console.log(artPiecesInfo)}>console log</button>
