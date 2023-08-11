const APILINK = "https://api.adviceslip.com/advice";
const adviceId = document.querySelector(".advise-id");
const actualAdvice = document.querySelector(".the-advise");
const adviseButton = document.querySelector(".advise-button");

const fetchNewAdvice = async () => {
    const response = await fetch(APILINK);
    const advice = await response.json()
    return advice;
}

fetchNewAdvice();

const renderAdvice = (adviceObj) => {
    const {id, advice} = adviceObj;
    adviceId.textContent = `Advice ${id}`;
    actualAdvice.textContent = advice;
}

const generateNewAdvise = async () => {
   const data = await fetchNewAdvice();
   const advice = data.slip;

   renderAdvice(advice)
}

window.addEventListener('DOMContentLoaded', () => {
    adviseButton.addEventListener('click', generateNewAdvise)
})