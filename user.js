 let wrapper = document.querySelector('.wrapper'),
     RegisterLink = document.querySelector('.link .Register-link')
     loginLink = document.querySelector('.link .login-link');


   RegisterLink.addEventListener('click',(e)=>{
      e.preventDefault();
      wrapper.classList.add('active');
   });

   loginLink.addEventListener('click',(e)=>{
      e.preventDefault();
      wrapper.classList.remove('active');
   });