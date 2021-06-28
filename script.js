let button = document.querySelector(".button");
let share = document.querySelector(".hidden");

button.addEventListener("click", () => {
  if (share.classList.contains("hidden")) {
    share.classList.remove("hidden");
    button.classList.add("active");
  } else {
    share.classList.add("hidden");
    button.classList.remove("active");
  }
});
