let checkbox = document.querySelector('#toggle');
let Monthly = document.querySelectorAll('.price-monthly');
let Yearly = document.querySelectorAll('.price-annually');

checkbox.addEventListener('change', () => {
    if(checkbox.checked) {
        Yearly.forEach(price => price.style.display = 'none')
        Monthly.forEach(price => price.style.display = 'flex')
    }
    else {
        Yearly.forEach(price => price.style.display = 'flex')
        Monthly.forEach(price => price.style.display = 'none')
    }
})
