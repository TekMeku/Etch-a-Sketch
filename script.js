constructGrid(16);

const newGridBtn = document.querySelector(".newGrid");

newGridBtn.addEventListener("click", (e) => {
  let gridCount;

  do {
    gridCount = Number.parseInt(prompt("Type the number of grid"));
  } while (Number.isNaN(gridCount) || gridCount > 100);
  
  const previousGrid = document.querySelectorAll(".gridRow").forEach(element => element.remove());
  constructGrid(gridCount);
});

function constructGrid(gridDimension) {
  for (let i = 0; i < gridDimension; i++) {
    console.log(`Creating row ${i+1}`);
    let gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");

    for (let j = 0; j < gridDimension; j++) {
      console.log(`Creating row ${i+1} - Cell ${j+1}`);
      let gridCell = document.createElement("div");
      gridCell.classList.add("gridCell");
      gridCell.addEventListener("mouseenter", () => gridCell.style.backgroundColor = "black");

      gridRow.append(gridCell);
    }
    document.body.append(gridRow);
  }
}