import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <h2>Art Pieces</h2>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.id}>
            <ArtPiecePreview
              image={piece.image}
              title={piece.title}
              artist={piece.artist}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
