const container = document.querySelector("#container");

// const div = document.createElement("div");
function createGrid(size = 4) {
  for (let i = 0; i < size * size; ++i) {
    const div = document.createElement("div");
    div.setAttribute("id", `${i + 1}`);

    container.appendChild(div);
  }
  const divs = document.querySelectorAll("#container > div");
  divs.forEach((div) =>
    div.addEventListener("mouseover", (e) => {
      e.target.style.cssText = "background-color: black;";
    })
  );
}

createGrid();

function changeGrid() {
  let newGridSize = window.prompt();
  while (newGridSize >= 100) {
    newGridSize = window.prompt("Grid Size must be smaller than 100");
  }
  console.log(newGridSize);
  console.log(container.hasChildNodes());
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  console.log(container.hasChildNodes());
  console.log(newGridSize);
  createGrid(newGridSize);
}

const button = document.querySelector("button");
button.addEventListener("click", () => changeGrid());
