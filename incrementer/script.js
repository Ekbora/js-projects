//* Variables
const incrementer = document.querySelector("#incrementer")
let count = 0

incrementer.innerHTML = count

function increment () {
    count++

    incrementer.innerText = count
}