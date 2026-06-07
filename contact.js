const form=document.querySelector('form');
const toast=document.querySelector('.toaster');
const button=document.querySelector('#butto')
const hamburger =document.querySelector('#men');
const navlinks=document.querySelector('ul');
hamburger.addEventListener('click', ()=>{
  navlinks.classList.toggle('show');
})
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  button.textContent='Sending...';
  button.disabled =true;
  setTimeout(()=>{
    button.textContent='Message Sent';
    toast.classList.add('show');
    setTimeout(()=>{
      toast.classList.remove('show');
      button.textContent='Send Message';
      button.disabled=false;
      form.reset();
    },3000)
  },2900);
});