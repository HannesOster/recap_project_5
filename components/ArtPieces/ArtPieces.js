import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <h2>Art Pieces</h2>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.id}>
            <ArtPiecePreview
              slug={piece.slug}
              imageSource={piece.imageSource}
              name={piece.name}
              artist={piece.artist}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
