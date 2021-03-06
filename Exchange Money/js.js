//Exchange
const currency_one = document.getElementById('currency_one');
const currency_two = document.getElementById('currency_two');

//Input
const amount_one = document.getElementById('amount_one');
const amount_two = document.getElementById('amount_two');

//Swap & Rate
const swap = document.getElementById('btn')
const rateText = document.getElementById('rate');

//Event
currency_one.addEventListener('change', calculateMoney);
currency_two.addEventListener('change', calculateMoney);
amount_one.addEventListener('input', calculateMoney);
amount_two.addEventListener('input', calculateMoney);
swap.addEventListener('click', swapMoney);

function calculateMoney(){
    const one = currency_one.value;
    const two = currency_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${one}`)
    .then(res=>res.json())
    .then(data=>{
        const rate = data.rates[two]; //Exchange Rate

        rateText.innerText = ` 1 ${one} = ${rate} ${two}`

        amount_two.value = (amount_one.value*rate).toFixed(2)
    })
}

function swapMoney(){
    const first = currency_one.value; // Frist Exchange
    currency_one.value = currency_two.value;
    currency_two.value = first;
    calculateMoney();
}

calculateMoney();
