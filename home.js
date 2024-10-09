document.getElementById('add-money-button')
.addEventListener('click', function(event){
      event.preventDefault();
      const addMony = document.getElementById('input-add-mondy').value;
     const addMonyNumber = parseFloat(addMony);
      const inputPin = document.getElementById('input-pin').value;
   
      if(inputPin === '1234'){
         const balance =document.getElementById('account-balance').innerText;
         const balanceNumber = parseFloat(balance);
         const newBalance = addMonyNumber + balanceNumber;
         const updateBalance = document.getElementById('account-balance').innerText = newBalance;
           
            
      }
      else{
            alert('Faild to add money! Please try again')
      }
      
})
