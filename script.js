constructGrid(16);

let alphaLevel = 100;

const newGridBtn = document.querySelector(".newGrid");

newGridBtn.addEventListener("click", (e) => {
  let gridCount;

  do {
    gridCount = Number.parseInt(prompt("Type the number of grid"));
  } while (Number.isNaN(gridCount) || gridCount > 100);
  
  const previousGrid = document.querySelectorAll(".gridRow").forEach(element => element.remove());
  constructGrid(gridCount);
  alphaLevel = 100;
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
      gridCell.addEventListener("mouseenter", () => {
        const red = Math.floor((Math.random() * (255 - 1)) + 1);
        const green = Math.floor((Math.random() * (255 - 1)) + 1);
        const blue = Math.floor((Math.random() * (255 - 1)) + 1);
        console.log(`rgba(${red}, ${green}, ${blue}, ${alphaLevel/100})`)
        gridCell.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alphaLevel/100})`;

        if (alphaLevel > 0) {
          alphaLevel -= 10;
        }

      });

      gridRow.append(gridCell);
    }
    document.body.append(gridRow);
  }
}

