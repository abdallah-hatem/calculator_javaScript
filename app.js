const buttons = [...document.querySelectorAll(".buttons button")];

const equal = document.getElementById("equal")
const clear = document.getElementById("clear")

const displayField = document.querySelector(".display")


buttons.forEach(item => {
    if (item.textContent != '=') {
        item.addEventListener('click', () => {
            displayField.textContent += item.textContent
        })
    }
});


equal.addEventListener('click', () => {
    return eval(displayField.textContent = eval(displayField.textContent))
})

clear.addEventListener('click', () => {
    displayField.textContent = ''
})

