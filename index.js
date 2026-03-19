let toggle = document.getElementById('toggle');
const sumbit = document.getElementById('submit');
let bank = document.getElementById('bank');




function submitForm(){
   

toggle.addEventListener('change',()=>{
    sumbit.style.visibility ="visible";
    if(!toggle.checked){

        submit.disabled = true;
        submit.style.cursor = "not-allowed"
        submit.style.visibility = "hidden"

    }else{

        submit.disabled = false;
        submit.style.visibility = "visible";
        submit.style.cursor = "pointer";
       
    }


    });}