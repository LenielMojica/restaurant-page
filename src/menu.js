export function createMenuPage() {
  const content = document.getElementById("content");

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";
  menuContainer.appendChild(heading);

  const menuItems = [
    {
      name: "Classic Cheeseburger",
      price: "$12.99",
      description:
        "Juicy beef patty with melted cheddar, lettuce, tomato, and our secret sauce on a toasted brioche bun.",
    },
    {
      name: "Truffle Fries",
      price: "$6.99",
      description:
        "Crispy golden french fries tossed in truffle oil, parmesan cheese, and fresh parsley.",
    },
    {
      name: "Wood-Fired Margherita Pizza",
      price: "$14.99",
      description:
        "Traditional thin crust pizza topped with San Marzano tomatoes, fresh mozzarella, and basil.",
    },
    {
      name: "Chocolate Lava Cake",
      price: "$8.99",
      description:
        "Warm chocolate cake with a gooey molten center, served with a scoop of vanilla bean ice cream.",
    },
  ];

  menuItems.forEach((item) => {
    const itemCard = document.createElement("div");
    itemCard.classList.add("menu-item");

    const itemName = document.createElement("h3");
    itemName.textContent = item.name;

    const itemPrice = document.createElement("span");
    itemPrice.classList.add("price");
    itemPrice.textContent = item.price;

    const itemDesc = document.createElement("p");
    itemDesc.textContent = item.description;

    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);
    itemCard.appendChild(itemDesc);
    menuContainer.appendChild(itemCard);
  });

  content.appendChild(menuContainer);
}
