export default function Comments({
  artPiece,
  onDeleteComment,
  slug,
  artPiecesInfo,
}) {
  //const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
  //const { comments } = artPieces;

  const comments =
    (artPiecesInfo.find((piece) => piece.slug === slug) || {}).comments || [];

  console.log("Comments.js artPiecesInfo: ", artPiecesInfo); //ist null
  console.log("Comments.js artPiece: ", artPiece); //artPiece ist das Objekt, aber hat keine Kommentare
  console.log("Comments.js comments: ", comments); //comments ist undefined
  console.log("Comments.js Slug: ", slug); //Slug ist okay

  return (
    <ul style={{ marginBottom: 200 }} className="comments-list">
      {comments &&
        comments.map((comment) => {
          return (
            <li key={comment.timestamp} className="comment">
              <p>{comment.text}</p>
              <p>{comment.timestamp}</p>
              <button
                className="delete-btn"
                onClick={() => onDeleteComment(slug, comment.timestamp)}
              >
                ❌
              </button>
            </li>
          );
        })}
    </ul>
  );
}
