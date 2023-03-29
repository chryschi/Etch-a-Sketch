const container = document.querySelector("#container");

// const div = document.createElement("div");

for (let i = 0; i < 16; ++i) {
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
