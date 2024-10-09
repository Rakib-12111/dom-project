document.getElementById('cash-out-button')
.addEventListener('click', function(event){
      event.preventDefault();
    const cashOut = document.getElementById('cash-out-money').value;
    const cashOutNumber = parseFloat(cashOut);
     const cashPin = document.getElementById('cash-out-pin').value;
     if(cashPin === '1234'){
      const balance = document.getElementById('account-balance').innerText;
      const balanceNumber = parseFloat(balance);
      const newBalance = balanceNumber - cashOutNumber;
      const updateBalance = document.getElementById('account-balance').innerText = newBalance;
      
      
     }
     else{
      alert('Fail to cash out! tyr again')
     }
      
      
})