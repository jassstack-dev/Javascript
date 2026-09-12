const form = document.querySelector('form')
const inp1 = document.querySelector('input')
const taskList = document.querySelector('.task-list')
const totalTaskInp = document.querySelector('.total-task')
const completedTask = document.querySelector('#completed-task')
const incommpleted = document.querySelector('.incompleted-task')
const allTaskCompleted = document.querySelector('.completed-taks-popup')



let taskArr = []
let updateTas = null




// console.log(taskArr)

function ui(){

    taskList.innerHTML = ''
    taskArr.forEach(function(elem, index){
  taskList.innerHTML += `<li class="task-item ${elem.completed ? 'completed' : ''}" >
        <div class="task-content">
          <input type="checkbox" class="task-checkbox "  ${elem.completed ? 'checked' : ''}    data-task="${elem.task}"">
          <label for="task-1" class="task-text">${elem.task}</label>
        </div>
        <div class="task-actions">
          <button type="button" onClick= updateTask('${elem.task}')  class="btn btn-edit">Update</button>
          <button type="button" onClick = deleteTask(${index}) class="btn btn-delete">Delete</button>
        </div>
      </li>`
        
    })

}





// create task
   form.addEventListener('submit', function(e){
    e.preventDefault()

    
    let val = inp1.value
    

  

      let obj = {
        id: Date.now(),
        task:val,
        completed : false
      }

      if(updateTas != null){
        let index = taskArr.indexOf(updateTas)
        taskArr[index] = obj 
        updateTas = null
        
      }else{
        taskArr.push(obj)
      }
      console.log(taskArr)

   

ui()

    //   console.log(taskArr)

    //   find the total length of task
      let totalTask = taskArr.length
    
    //   total task 
      totalTaskInp.textContent = totalTask
      incommpleted.textContent = totalTask



      form.reset()
      
})

function checkAllCompleted(){
  let totalTask = taskArr.length

  // completed task
        let completedCount = taskArr.filter(function(e){
            return e.completed === true;
        })
        let completedTaskLength = completedCount.length

        if(totalTask > 0 && completedTaskLength === totalTask ){
    allTaskCompleted.style.display = 'flex'

          setTimeout(function(){
            allTaskCompleted.style.display = 'none'
          },4000)
        }


}


taskList.addEventListener('change', function(e){
    
    if(e.target.type === 'checkbox'){
        let taskName = e.target.dataset.task

        let task = taskArr.find((val) => val.task === taskName)

        console.log(task)


        task.completed  = e.target.checked

        // console.log(taskArr)

        let li = e.target.closest('.task-item')

        if(task.completed === true){
            li.classList.add('completed')

            // alert('task completed')
        }else {
            li.classList.remove('completed');
        }
        
        
       

        // completed task
        let completedCount = taskArr.filter(function(e){
            return e.completed === true;
        })
        let completedTaskLength = completedCount.length


        completedTask.textContent = completedTaskLength

        checkAllCompleted()
       

       
         // incommpleted task 
        let incommpletedTask = taskArr.filter(function(elem){
            return elem.completed === false;
        }).length


        console.log(incommpletedTask)
        incommpleted.textContent = incommpletedTask

      
       




        

  
    }
})

function deleteTask(index){
   taskArr.splice(index,1)
    let totalTask = taskArr.length
   totalTaskInp.textContent = totalTask
      incommpleted.textContent = totalTask
      
    ui()
    checkAllCompleted()
}

function updateTask(e){
    let tasks = taskArr.find((val) => val.task === e)

    updateTas = tasks
   form[0].value = tasks.task
   
}





