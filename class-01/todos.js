'use strict'

const btnSave = document.querySelector('#button-save')
const container = document.querySelector('#todo-list')
let todos = []

function render (data) {
  const html = todos.reduce((acc, item, index) => {
    return acc + `<li>${item} <button onClick="onDelete(${index})">Delete</button></li>`
  }, '')

  container.innerHTML = html
}

function onAdd () {
  let todo = document.querySelector('#input-todo').value
  document.querySelector('#input-todo').value = ''
  todos.push(todo)
  render(todos)
}

function onDelete (index) {
  todos.splice(index, 1)
  render(todos)
}

document.addEventListener('DOMContentLoaded', () => {
  btnSave.addEventListener('click', onAdd)
})