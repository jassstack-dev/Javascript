const inp = document.querySelector('input')
const btn = document.querySelector('#btn')
const task = document.querySelector('.todo-list')
const particularTask = document.querySelector('.todo')
const del= document.querySelector('.delete')
const edit = document.querySelector('.add')

btn.addEventListener('click', function(){
    let value = inp.value;

    if(value === "")return alert("enter the task")

        if(value.trim() === "") return ;

    task.innerHTML += ` <div class="todo">
    <h3>${value}</h3>
        <div class="btns">
            <button class="add">Edit</button>
            <button class="delete">Delete</button>
        </div>
    </div>`
    inp.value = "";
})

task.addEventListener('click', (e)=>{


    // delete
  if (e.target.classList.contains('delete')) {
        e.target.closest('.todo').remove();
    }

    // closest ka kaam jo parent hai and mene janha click kiya uske sabse pass wala todo dhunhdo and remove kari
})


