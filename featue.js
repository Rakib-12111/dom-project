document.getElementById('cash-button')
.addEventListener('click', function(){
const cashOutFrom = document.getElementById('cash-out-form');
cashOutFrom.classList.remove('hidden') ;
const addMontForm = document.getElementById('add-moeny-form');
addMontForm.classList.add('hidden')

})



document.getElementById('add-button')
.addEventListener('click', function(){
      const cashOutFrom = document.getElementById('cash-out-form');
      cashOutFrom.classList.add('hidden') ;
      const addMontForm = document.getElementById('add-moeny-form');
      addMontForm.classList.remove('hidden')
       
      
})
