const bulb = document.querySelector(".bulb");
const btn = document.querySelector("button");

// its using flag
// let flag = true;
// btn.addEventListener('click', function(){

//     if(flag){
//         bulb.style.backgroundColor = "yellow"
//         console.log("bulb on")
//         btn.textContent = "Off"
//         flag = false
//     }else{
//         bulb.style.backgroundColor = "#212121"
//         console.log('bulb off')
//         btn.textContent = "On"
//         flag =true
//     }

// })

// using classlist

btn.addEventListener("click", function () {
  let blb = bulb.classList.toggle("lightOn");
  if (blb) {
    btn.textContent = "off";
  } else {
    btn.textContent = "on";
  }
});
