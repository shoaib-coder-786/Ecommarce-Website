document.getElementById("menu").addEventListener("click",()=>{
   
document.getElementById("navbar").style.right="0";
})
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
if(close){
close.addEventListener('click' , ()=>{
    document.getElementById("navbar").style.right = "-300px";
})
}


