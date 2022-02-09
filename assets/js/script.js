// wait for the DOM to finish loading before running the game
// get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            // this referes to the button that was just clicked
            if(this.getAttribute('data-type') === 'submit') {
                checkAnswer();
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        })
    }

    runGame('addition');
});

function runGame(gameType) {

    // create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
        } else {
            alert(`Unknown game: ${gameType}`) ;
            throw `Unknown game type: ${gameType}. Aborting!`;
        }
    }

/** CHecks the answer against the first element in
 * the returned calculateCOrrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert('Hey!, You got it right!');
    }   else {
        alert(`boo.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    }

    runGame(calculatedAnswer[1]);
}

/** Gets the operands (the  numbers) and the operator (plus, minus etc)
 * directly from the DOM, and returns the correct answer.
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === '+') {
        return [operand1 + operand2, 'addition'];
    } else {
        alert(`Unimplemeneted operatot ${operator}`);
        throw `Unimplemented operator ${operator}`;
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}