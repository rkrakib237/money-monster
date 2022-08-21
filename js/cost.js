function getAmountValue(elementId){
    const income = document.getElementById(elementId);
    const incomeAmountString = income.value;
    const incomeAmount = parseInt(incomeAmountString);

    return incomeAmount;
   
}

function getElementAmount (expenseId) {
    const expense = document.getElementById(expenseId)
    const expenseAmountString = expense.innerText;
    const expenseAmount = parseInt(expenseAmountString);
    return expenseAmount;
}



document.getElementById('calculate-btn').addEventListener('click', function(){
   const income = getAmountValue('income');
  const food = getAmountValue('food');
  const rent = getAmountValue('rent');
  const cloths = getAmountValue('cloth')
// calculation
let totalCost = food + rent+ cloths;
let remainAmount = income - totalCost;
// innertext setup
const expense = document.getElementById('total-expense')
expense.innerText = totalCost;
const balance = document.getElementById('total-save')
balance.innerText = remainAmount;


})


// saving section


document.getElementById('save').addEventListener('click', function(){
// const savingPersentage = getElementAmount('saving-amount')
// const remainBalance = getElementAmount('Remaining-amount')
const savingPersentage = document.getElementById('saving-amount')
const remainBalance = document.getElementById('Remaining-amount')

let saveAmount = getElementAmount('total-save')
let persentage = getAmountValue('save-per')


let saveMoney = (saveAmount * persentage) / 100
let remainMoney = saveAmount-saveMoney;

savingPersentage.innerText = saveMoney;
remainBalance.innerText = remainMoney;

console.log(saveMoney)
// console.log(savingPersentage)
// console.log(remainBalance)

})