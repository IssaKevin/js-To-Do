// Definind Variables...

const list = document.querySelector('.list')
const input = document.querySelector('#toDo-input')
// const btn = document.querySelector('#delete')


// Adding an Event Listener...

input.addEventListener('keyup', (e) => {
    e.preventDefault()
    if (e.keyCode == 13){
        addToDo(input.value)
    }
})

// Adding Function...

const addToDo = (item) =>{
    // Creating a new list item...
    const newLi = document.createElement('li')

    // Creating a Delete Button...
    const delBtn = document.createElement('i')

    // Adding Fontawesome to the element...
    delBtn.className = 'fa fa-trash'

    // Creating a Text Node...
    const textContent = document.createTextNode(item)

    // Creating ClassNames...
    newLi.className = 'item'

    // Adding the Delete btn attribute "role = delete "...
    delBtn.id = 'delete'

    // Appending to the LI...
    newLi.appendChild(textContent)
    newLi.appendChild(delBtn)

    // Appending to the whole List...
    list.appendChild(newLi)

    // Clearing the input fields...
    input.value = ''
}

// List Event Listener for Deleting ...
list.addEventListener('click', (e) => {
    const tElement = e.target
    const role = tElement.id
    if(role == 'delete'){
        deleteTodo(tElement)
    }
})


// Removing ToDo...

const deleteTodo = (item) => {
    const listItem = item.parentElement
    const pList = listItem.parentElement
    item.style.marginLeft = '20px'
    // console.log(pList);
    pList.removeChild(listItem)
}
