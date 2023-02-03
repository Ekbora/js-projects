const todos = []
const field = document.getElementById("todo")
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    const list = document.querySelector("#list")
    todos.push(field.value)
    field.value = ''
    field.focus()
    list.innerHTML = `<ul><li>${todos.join('</li><li>')}</li></ul>`
})