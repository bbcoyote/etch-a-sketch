const container = document.querySelector(".container");
const btnContainer = document.querySelector(".btn-container");
const newButton = document.createElement("button");
newButton.setAttribute("class", "new-btn");
newButton.textContent = "New Page";
btnContainer.appendChild(newButton);

//how else can I get this functionality in both scopes without repeating myself?
const setCanvas = function (grid) {
    grid = prompt("Enter the value of grid. ex 64 would give you a grid of 64x64");
    const canvas = document.createElement('div')
    canvas.setAttribute("class", "canvas");
    for (i = 0; i < grid * grid; i++) {
        const canvas = document.createElement("div");
        canvas.setAttribute("class", "canvas");
        const num1 = (480 / grid)
        const percent = ((num1 / 480) * 100)
        canvas.style.setProperty("flex", `${percent}%`)
        canvas.style.setProperty("height", `${percent}%`)
        container.appendChild(canvas);
    }

}

newButton.addEventListener("click", () => {
    setCanvas()
})