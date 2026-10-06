export const createHomePage = function () {
  const content = document.getElementById("content");
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");
  const headline = document.createElement("h1");
  headline.textContent = "Welcome to our restaurant!";
  const text = document.createElement("p");
  text.textContent =
    "We serve the most wonderful food in town. Come experience a culinary masterpiece!";
  homeContainer.appendChild(headline);
  homeContainer.appendChild(text);
  content.appendChild(homeContainer);
};
