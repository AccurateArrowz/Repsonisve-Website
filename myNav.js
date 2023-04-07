let button= document.getElementById('myB');
let hidden= document.querySelector('.hidden');

button.addEventListener('click',()=>{
    hidden.classList.toggle('toggler');
})