import Image from "next/image";

export default function FavoriteButton() {
  return (
    <>
      <button type="button">
        <Image
          src="/resources/assets/heart.svg"
          alt="bild"
          width={30}
          height={30}
        ></Image>
      </button>
    </>
  );
}
