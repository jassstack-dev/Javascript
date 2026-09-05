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

        let div = document.createElement('div')
        div.classList.add('todo')

        let h3 = document.createElement('h3')
        h3.innerText = value


        let btnDiv = document.createElement('div')
    btnDiv.classList.add('btns')

    
    let button1 = document.createElement('button') 
      button1.classList.add("add")
        button1.innerText = 'Edit'


    let button2 = document.createElement('button') 
    button2.classList.add("delete")
    button2.innerText = "Delete"

    btnDiv.append(button1, button2)

    div.append(h3, btnDiv)


    task.append(div)

    inp.value = "";
})

task.addEventListener('click', (e)=>{


    // delete
  if (e.target.classList.contains('delete')) {
        e.target.closest('.todo').remove();
    }

    // closest ka kaam jo parent hai and mene janha click kiya uske sabse pass wala todo dhunhdo and remove kari

    
})


