const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

let history = [];


function init(){
    list.innerHTML = '';
    //Loop Data
    history.forEach(addData);
    calculateMoney();
}

function addData(history){
    const symbol = history.amount<0 ? '-':'+';
    const status = history.amount<0 ? 'minus':'plus';
    

    //Create tag li & innerHTML
    const item = document.createElement('li');
    item.innerHTML=`${history.text} <span>${symbol}${Math.abs(history.amount)}</span><button class="delete-btn" onclick='remove(${history.id})'>X</button>`
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

form.addEventListener('submit', submit);
function submit(e){
    e.preventDefault();
    //Check Empty
    if(text.value.trim()==='' || amount.value.trim()===''){
        alert('Enter list and amount...')
    }else{
        const data = {
            id: autoID(),
            text: text.value,
            amount: +amount.value
        }
        history.push(data)
        addData(data);
        calculateMoney();
        text.value='';
        amount.value='';
    }
}
function remove(id){
    history = history.filter(history=>history.id !==id)
    init();
}

//Comma
function formatNumber(num) {return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') }
//Randon ID
function autoID(){
    return Math.floor(Math.random()*1000000)
}

init();
