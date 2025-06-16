let intervalId;
let isred = true;
const div = document.querySelector("#main-div");
setInterval(()=>{
    if(isred){
        div.style.background = "green"
        isred = false;
    }else{
        div.style.background = "red"
        isred = true
    }
},5000)



