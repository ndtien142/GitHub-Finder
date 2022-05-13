// Search Input
const input = document.getElementById("searchUser");

const ui = new UI();

const api = new GitHub();
// Search input event listener
input.addEventListener("keyup", (e) => {
  // get input text
  const userText = e.target.value;
  if (userText !== "") {
    api
      .getUser(userText)
      .then((data) => ui.showProfile(data.profile))
      .catch((err) => console.log(err));
  }
});
