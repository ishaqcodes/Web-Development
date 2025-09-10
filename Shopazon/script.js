// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const findButton = document.querySelector(".search-bar button");

  findButton.addEventListener("click", () => {
    const searchInput = document.querySelector(".search-bar input").value;
    alert(`You searched for: ${searchInput}`);
  });
});
