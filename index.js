
window.onload = getData();

const adviceNumber = document.querySelector('.advice-id');
const adviceText = document.querySelector('.card-text');
const quoteGenerator = document.querySelector('.card-quote-generator');
quoteGenerator.addEventListener('click', generateAdvice)
quoteGenerator.style.cursor = 'pointer';

async function getData(){
    const response = await fetch('	https://api.adviceslip.com/advice');
    const data = await response.json();
    return data;
}

function generateAdvice () {
    
    getData().then(data => {
        const adviceId =  data.slip.id;
        const advice =  data.slip.advice;

        adviceNumber.textContent = adviceId;
        adviceText.textContent = advice;
    })
   
    
}

