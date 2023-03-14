const num1 = Math.floor(Math.random() * 10) + 1;
const num2 = Math.floor(Math.random() * 10) + 1;

const QuestionEl = document.getElementById('question');

const InputEl = document.getElementById('input');

const FormEl = document.getElementById('form');

const ScoreEl = document.getElementById('score');

const CorrectAns = num1 * num2;

let score = JSON.parse(localStorage.getItem('score'));

if (score === null) {
    score = 0;
}

ScoreEl.innerText = `Score: ${score}`

QuestionEl.innerText = `What is ${num1} Multiply by ${num2} ?`;

FormEl.addEventListener("submit", () => {
    const userAns =+ InputEl.value;
    if (userAns === CorrectAns) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}
