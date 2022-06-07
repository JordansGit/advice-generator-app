let number = document.getElementById('number');
let quote = document.getElementById('quote');
let btn = document.querySelector('.circle');

window.onload = getQuote;
btn.addEventListener('click', getQuote); 

function getQuote() {
  btn.classList.remove('active');

  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      number.innerText = data['slip']['id'];
      quote.innerText = data['slip']['advice']
    });

  setTimeout(() => btn.classList.add('active'), 2000); 
}




