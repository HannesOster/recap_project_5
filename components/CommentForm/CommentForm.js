export default function CommentForm({ onSubmitComment, slug }) {
  return (
    <form
      onSubmit={(event) =>
        onSubmitComment(event, event.target.comment.value, slug)
      }
    >
      <label htmlFor="comment">
        Comment:
        <input
          id="comment"
          name="comment"
          type="text"
          placeholder="Write a comment"
        ></input>
      </label>
      <button type="submit">Send</button>
    </form>
  );
}
