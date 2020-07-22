// login button event handler
document.getElementById('login').addEventListener('click', function(){
    document.getElementById('login-area').style.display = "none";
    document.getElementById('transaction-area').style = "display : block !important"
})

// diposit button event handler
document.getElementById('addDeposit').addEventListener('click', function(){

   const depositNumber = getInputNumber('depositAmount');

   updateSpanText('currentDeposit', depositNumber);
   updateSpanText('currentBalance', depositNumber);
   
   document.getElementById('depositAmount').value = "";

})

// withdraw button event handler
document.getElementById('addWithdraw').addEventListener('click', function(){

    const depositNumber = getInputNumber('withdrawAmount');
 
    updateSpanText('currentWithdraw', depositNumber);
    updateSpanText('currentBalance', -1 * depositNumber);
 
    document.getElementById('depositAmount').value = "";
 
 })

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber
}

function updateSpanText(id, addNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalNumber = currentNumber + addNumber;
    document.getElementById(id).innerText = totalNumber;
}