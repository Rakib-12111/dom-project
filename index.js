document.getElementById('login-button')
.addEventListener('click', function(event){
      event.preventDefault();
 const inputNumber =  document.getElementById('input-number').value;
   console.log(inputNumber);
      
   const inputPin = document.getElementById('input-pin').value;
   if(inputNumber === '5' && inputPin === '1234'){
      window.location.href = 'home.html'
   }
   else{
      alert('Faind to login please try again')
   }
      
})
