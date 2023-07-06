import Image from "next/image";
import Heart from "../../public/resources/assets/heart.svg";

export default function FavoriteButton() {
  const heart = Heart();
  return (
    <>
      <button type="button">{heart}</button>
    </>
  );
}
