export default function CommentForm({ onSubmitComment }) {
  return (
    <form onSubmit={onSubmitComment}>
      <label htmlFor="comment">
        Comment:
        <input id="comment" type="text" placeholder="Write a comment"></input>
      </label>
      <button type="submit">Send</button>
    </form>
  );
}
