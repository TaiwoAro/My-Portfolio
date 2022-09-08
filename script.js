const toggleButton = document.getElementsByClassName("toggle-button")[0]
const profileLink = document.getElementsByClassName("profile-link")[0]

toggleButton.addEventListener("click", () => {
      profileLink.classList.toggle("active")
})