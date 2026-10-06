export function createAboutPage() {
  const content = document.getElementById("content");

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  const heading = document.createElement("h1");
  heading.textContent = "About Us";
  aboutContainer.appendChild(heading);

  const storyHeading = document.createElement("h3");
  storyHeading.textContent = "Our Story";
  const storyText = document.createElement("p");
  storyText.textContent =
    "Founded in 2026, our restaurant was born out of a deep passion for bringing fresh, high-quality, and comforting food to our community. Every recipe is crafted with love and locally sourced ingredients.";

  aboutContainer.appendChild(storyHeading);
  aboutContainer.appendChild(storyText);

  const hoursHeading = document.createElement("h3");
  hoursHeading.textContent = "Hours";

  const hoursList = document.createElement("ul");
  const hours = [
    "Monday - Thursday: 11:00 AM - 10:00 PM",
    "Friday - Saturday: 11:00 AM - 11:30 PM",
    "Sunday: 12:00 PM - 9:00 PM",
  ];

  hours.forEach((day) => {
    const li = document.createElement("li");
    li.textContent = day;
    hoursList.appendChild(li);
  });

  aboutContainer.appendChild(hoursHeading);
  aboutContainer.appendChild(hoursList);

  const locationHeading = document.createElement("h3");
  locationHeading.textContent = "Location";
  const locationText = document.createElement("p");
  locationText.textContent = "123 Culinary Avenue, Foodie District, Cityville";

  aboutContainer.appendChild(locationHeading);
  aboutContainer.appendChild(locationText);

  content.appendChild(aboutContainer);
}
