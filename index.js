const hamburger =document.querySelector('#men');
const navlinks=document.querySelector('ul');
hamburger.addEventListener('click', ()=>{
  navlinks.classList.toggle('show');
})