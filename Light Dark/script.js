const switchToggle = document.querySelector("input[type='checkbox']")
const toggleIcon = document.getElementById('toggle-icon')
const nav = document.getElementById('nav')
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')

function switchMode(e){
    //checked
    if(e.target.checked){
        dark();
        imgSwitchMode('dark');
    }else{
        light();
        imgSwitchMode('light')
    }
}

//Dark Mode
function dark(){
    toggleIcon.children[0].textContent = 'Dark';
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon') 
    document.documentElement.setAttribute('data-theme','dark')
    nav.style.backgroundColor = 'rgb(0, 0, 0, 0.5)'
}
//Light Mode
function light(){
    toggleIcon.children[0].textContent = 'Light';
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun')
    document.documentElement.setAttribute('data-theme','light')
    nav.style.backgroundColor = 'rgb(255, 255, 255, 0.5)'
}

function imgSwitchMode(mode){
    img1.src = `img/code_${mode}.svg`
    img2.src = `img/coding_${mode}.svg`
}

switchToggle.addEventListener('change', switchMode);