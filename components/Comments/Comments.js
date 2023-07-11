export default function Comments({
  artPiece,
  onDeleteComment,
  slug,
  artPiecesInfo,
}) {
  //const artPiece2 = artPiecesInfo.find((piece) => piece.slug === slug);
  const { comments } = artPiece;

  console.log("artPiecesInfo: ", artPiecesInfo); //ist null
  console.log("artPiece: ", artPiece); //artPiece ist das Objekt, aber hat keine Kommentare
  console.log("comments: ", comments); //comments ist undefined
  console.log("Slug: ", slug); //Slug ist okay

  return (
    <ul style={{ marginBottom: 200 }} className="comments-list">
      {comments.map((comment) => {
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
