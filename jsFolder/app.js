// ==========================================================================================================================================
// ======================================================Varifying User  ====================================================================


const logingButton = document.getElementById('login-button');
logingButton.addEventListener('click', function(){
   const email = document.getElementById('email');
   const password = document.getElementById('pass');
   if(email.value==='admin@gmail.com' && password.value ==='user'){
      window.location.href = 'ToDo.html';
   }else{
      alert('Kindly provide right information')
   }
})


