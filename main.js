const container = document.querySelector(".container");
const btnContainer = document.querySelector(".btn-container");
const startButton = document.createElement("button");
const newButton = document.createElement("button");
newButton.textContent = "restart"
startButton.setAttribute("class", "new-btn");
newButton.setAttribute("class", "new-btn");
startButton.textContent = "Start";
btnContainer.append(startButton, newButton);

//how else can I get this functionality in both scopes without repeating myself?
// apparently if I set the grid value to say 1000 it creates 2000 divs which makes my cp's fans turn up high!
//
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
        console.log("2")
    }

}

const reset = () => {
    const canvas = document.createElement('div')
    canvas.remove()

}

const mouseOverHandler = function () {
    const canvas = document.querySelectorAll(".canvas");
    canvas.forEach(element => element.addEventListener("mouseenter", event => {
        event.target.style.backgroundColor = "red"
    }))

}

container.addEventListener("click", () => {
    mouseOverHandler()
})

startButton.addEventListener("click", () => {
    setCanvas()
})

newButton.addEventListener("click", () => {
    const canvas = document.querySelectorAll(".canvas");
    canvas.forEach(square => {
        square.remove()
    })
})