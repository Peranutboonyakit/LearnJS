const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

const history = [
  { id: 1, text: "ค่าขนม", amount: -1000 },
  { id: 2, text: "เงินเดือน", amount: +50000 },
  { id: 3, text: "ค่ารถ", amount: -1500 },
];


function init(){
    //Loop Data
    history.forEach(addData);
    calculateMoney();
}

function addData(history){
    const symbol = history.amount<0 ? '-':'+';
    const status = history.amount<0 ? 'minus':'plus';
    

    //Create tag li & innerHTML
    const item = document.createElement('li');
    item.innerHTML=`${history.text} <span>${symbol}${Math.abs(history.amount)}</span><button class="delete-btn">X</button>`
    list.appendChild(item)
    item.classList.add(status);
}

function calculateMoney(){
    const amounts = history.map(history => history.amount);
    
    //Calculate Balance
    const total = amounts.reduce((result, item)=> (result += item), 0).toFixed(2);
    
    //Calculate Income
    const income = amounts.filter(item => item>0).reduce((result, item)=> (result += item), 0).toFixed(2);
    //Calculate Expense
    const expense = (amounts.filter(item => item<0).reduce((result, item)=> (result += item), 0)*-1).toFixed(2);
    
    //Show IU
    balance.innerText = `฿`+ formatNumber(total);
    money_plus.innerText = `฿`+ formatNumber(income);
    money_minus.innerText = `฿`+ formatNumber(expense);
}

//Comma
function formatNumber(num) {return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') }

init();
