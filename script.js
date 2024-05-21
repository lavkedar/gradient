const board = document.getElementById('board')
let stop1 = document.getElementById('stop1')
let stop2 = document.getElementById('stop2')
let stop3 = document.getElementById('stop3')
let range1 = document.getElementById('range1')
let range2 = document.getElementById('range2')
let range3 = document.getElementById('range3')
let angle = document.getElementById('vranger')




document.addEventListener('DOMContentLoaded', ()=>{
    board.style.background = generateGradientString()
    
});


 function snackbar(){

     // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

}





function generateGradientString() {

    return `linear-gradient(${angle.value}deg,${stop1.value} ${range1.value}%,${stop2.value} ${range2.value}%,${stop3.value} ${range3.value}%)`

}

stop1.addEventListener('input', (data) => {



    board.style.background = generateGradientString()




})
stop2.addEventListener('input', (data) => {



    board.style.background = generateGradientString()




})
stop3.addEventListener('input', (data) => {



    board.style.background = generateGradientString()




})
range1.addEventListener('input', (data) => {

    board.style.background = generateGradientString()








})
range2.addEventListener('input', (data) => {

    board.style.background = generateGradientString()









})
range3.addEventListener('input', (data) => {

    board.style.background = generateGradientString()

})
angle.addEventListener('input', (data) => {

    board.style.background = generateGradientString()

})







