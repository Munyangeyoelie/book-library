const content = document.getElementById("content");
const addFormButton = document.getElementById("addFormButton");

addFormButton.addEventListener("click", () => {
  // Check if content is currently a form
  if (content.getElementsByTagName("input").length === 0) {
    // Convert content to a form
    content.innerHTML = `
    <form id="add-new-book">
    <label for="title">Title</label>
    <input type="text" id="title" name="title" />
    <label for="author">Author</label>
    <input type="text" id="author" name="author" />
    <label for="pages">Number of Pages</label>
    <input type="text" id="pages" name="pages" />
    <label for="description">Description</label>
    <input type="text" id="description" name="description" />
    <button type="submit" id="submit">Submit</button>
  </form>
    `;
  } else {
    // Convert form back to content
    content.innerHTML =
      "<p>This is some initial content that will be converted to a form.</p>";
  }
});
