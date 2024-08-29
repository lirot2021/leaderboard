const list = document.getElementById('list')
const nameInput = document.getElementById('name-input')
const countInput = document.getElementById('count-input')
const add = document.getElementById('add')
const placeOfEditing = document.getElementById('place of editing')

const leaderboard = [{
        name:'Александр',
        count:999
    },
    {
        name:'AAA',
        count: 100
    }]
    render()

add.onclick = () => {
    if(nameInput.value == '' || countInput.value == ''){
        alert('все поля должны быть заполнены')
        return
    }else if(isNaN(Number(countInput.value))){
        alert('некоректно заполнены данные')
        return
    }
    leaderboard.push({
        name: nameInput.value,
        count: Number(countInput.value)
    })
    nameInput.value = ''
    countInput.value = ''
    render()
}
list.onclick = (event) =>{
    console.log(event.target.dataset.id)
    edit(Number(event.target.dataset.id))
}

function render (){
    list.textContent = ''
    leaderboard.sort((a,b) => b.count-a.count)
    for(let i = 0; i < leaderboard.length;i++)
        addPlayer(i)
}
function addPlayer(i){
    list.insertAdjacentHTML("beforeend",`
        <li><span  data-id="${i}">${leaderboard[i].name} - ${leaderboard[i].count}</span></li>
        `)
}
function edit(i){

        placeOfEditing.textContent = ''
    placeOfEditing.insertAdjacentHTML('beforeend',`
       <span>Name: <input type="text" name="Имя" id="edited name"></span> 
       <span>Count: <input type="text" name="Имя" id="edited count"></span> 
        <button id="cancel button">cancel</button>
       <button id="save button">save</button>
       <button id="delete button">delete</button>
        `)
    const editedName = document.getElementById('edited name')
    const editedCount =document.getElementById('edited count')
    const canselButton = document.getElementById('cancel button')
    const saveButton = document.getElementById('save button')
    const deleteButton = document.getElementById('delete button')
    deleteButton.onclick = () => {
        leaderboard.splice(i,1)
        render()
        placeOfEditing.textContent = ''
    }
    canselButton.onclick = ()=>{
        placeOfEditing.textContent = ''
    }
    saveButton.onclick = ()=>{
        editedName.value == '' ? console.log('параметр name не изменён') :leaderboard[i].name = editedName.value
        isNaN(Number(editedCount.value)) || editedCount.value == '' ? console.log('параметр count не изменён') :leaderboard[i].count = Number(editedCount.value)
        render()
        placeOfEditing.textContent = ''
    }
}