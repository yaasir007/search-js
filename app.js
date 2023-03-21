const searchbarElement = document.querySelector(".searchbar");
const teamsElement = document.querySelector(".teams");
const teamElement = document.querySelectorAll(".team");

searchbarElement.addEventListener("keyup", () => {
  let searchbarValue = document.querySelector(".searchbar").value;
  searchbarValue = searchbarValue.toLowerCase();

  for (let i = 0; i < teamElement.length; i++) {
    let team = teamElement[i].innerHTML.toLowerCase();

    if (!team.includes(searchbarValue)) {
      teamElement[i].style.display = "none";
    } else {
      teamElement[i].style.display = "list-item";
    }
  }
});
