const addButton = document.querySelector(".addButton");
let inputValue = document.querySelector(".input");
const container = document.querySelector(".container");

class item {
  constructor(itemName) {
    this.createDiv(itemName);
  }

  createDiv(itemName) {
    let itemBox = document.createElement("div");
    itemBox.classList.add("item");

    let input = document.createElement("input");
    input.value = itemName;
    input.disabled = true;
    input.classList.add("item_input");
    input.type = "text";

    let editButton = document.createElement("button");
    editButton.classList.add("editButton");
    editButton.innerHTML = "EDIT";

    let removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.innerHTML = "REMOVE";

    container.appendChild(itemBox);
    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);

    editButton.addEventListener("click", () => this.edit(input));
    removeButton.addEventListener("click", () => this.remove(itemBox));
  }
  edit(input) {
    input.disabled = !input.disabled;
  }
  remove(itemBox) {
    container.removeChild(itemBox);
  }
}

const check = () => {
  if (inputValue.value) {
    new item(inputValue.value);
    inputValue.value = "";
  }
};

addButton.addEventListener("click", check);
window.addEventListener("keydown", (e) => {
  console.log(e.which);
  if (e.which == 13) {
    check();
  }
});
