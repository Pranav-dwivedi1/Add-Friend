 const isStatus = document.querySelector("h3");

 const btn = document.querySelector(".add");

 const msg = document.querySelector("p")

 var flag = 0;


 btn.addEventListener("click", function(){
   if(flag == 0){
    isStatus.innerHTML = "Friends"
    isStatus.style.color = "green"
    btn.innerHTML = "Remove"
    msg.innerHTML = "Pranav is your friend"
    flag = 1;
   }else{
      isStatus.innerHTML = "Stranger"
      isStatus.style.color = "red"
      btn.innerHTML = "Add Friend"
      msg.innerHTML = "Send a frined request"
      flag = 0;
   }
    
 })