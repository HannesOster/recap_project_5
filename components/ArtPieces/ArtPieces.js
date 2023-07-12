import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import { styled } from "styled-components";

const artPieceContainer = styled.div`
  display: grid;
  place-items: center;
`;

export default function ArtPieces({ artPiecesInfo, onToggle, pieces }) {
  return (
    <artPieceContainer>
      <h2>Art Pieces</h2>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.id}>
            <ArtPiecePreview
              artPiecesInfo={artPiecesInfo}
              onToggle={onToggle}
              slug={piece.slug}
              imageSource={piece.imageSource}
              name={piece.name}
              artist={piece.artist}
            />
          </li>
        ))}
      </ul>
    </artPieceContainer>
  );
}
