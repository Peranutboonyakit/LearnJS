
const currency_one = document.getElementById('currency_one');
const currency_two = document.getElementById('currency_two');

const amount_one = document.getElementById('amount_one');
const amount_two = document.getElementById('amount_two');

const swap = document.getElementById('btn')
const rateText = document.getElementById('rate');

currency_one.addEventListener('change', calculateMoney)
currency_two.addEventListener('change', calculateMoney)

function calculateMoney(){
    const one = currency_one.value;
    const two = currency_two.value;
    let url = `https://api.exchangerate-api.com/v4/latest/${one}`
}
calculateMoney();
