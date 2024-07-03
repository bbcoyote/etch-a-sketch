const container = document.querySelector(".container");
const btnContainer = document.querySelector(".btn-container");
const newButton = document.createElement("button");
newButton.setAttribute("class", "new-btn");
newButton.textContent = "New Page";
btnContainer.appendChild(newButton);

const setCanvas = function () {
    for (i = 0; i < 16; i++) {
        const canvas = document.createElement('div')
        canvas.setAttribute("class", "canvas");
        container.appendChild(canvas)
    }
}

setCanvas()