var startQuizButtonEl = document.getElementById('start');
var timeLeft = 60; // Global time left assignment counter
var htmlTimeLeft = document.getElementById('time');
var questionDisplayEl = document.getElementById('questions');
var checkTimes = 1;
var score = 0; // Max value by decreasing each wrong answer
var highScore = 50; // Score add fix for ticking timer.
var finalAnswerCheck = 0;
var startQuizSection = document.getElementById('start-screen');
var questionTitle = document.getElementById('question-title');
var choice = document.getElementById('choices')
var questionNumber = 0; // Track the question answered.
var answerNumber = 0;
var answer1BtnEl = document.getElementById('answer1'); // Start Quiz button Btn El
var answer2BtnEl = document.getElementById('answer2'); // Start Quiz button Btn El
var answer3BtnEl = document.getElementById('answer3'); // Start Quiz button Btn El
var answer4BtnEl = document.getElementById('answer4'); // Start Quiz button Btn El
var enterInitialsEl = document.getElementById("end-screen");
var finalScoreDisplay = document.getElementById('final-score');
var enterInitialText = document.getElementById('initials');

var answerCorrectWrong = document.getElementById('answerCorrectWrong');

var submitScoreEl = document.getElementById('submit')

answer1BtnEl.style.display = 'none';
answer2BtnEl.style.display = 'none';
answer3BtnEl.style.display = 'none';
answer4BtnEl.style.display = 'none';
answerCorrectWrong.style.display = 'none';

htmlTimeLeft.textContent = timeLeft;

answer1BtnEl.addEventListener("mouseover", function () {

    answerCorrectWrong.style.display = 'none';
});

answer2BtnEl.addEventListener("mouseover", function () {

    answerCorrectWrong.style.display = 'none';

});

answer3BtnEl.addEventListener("mouseover", function () {

    answerCorrectWrong.style.display = 'none';

});

answer4BtnEl.addEventListener("mouseover", function () {

    answerCorrectWrong.style.display = 'none';

});

startQuizButtonEl.addEventListener('click', function () {
    startQuizButtonEl.style.display = 'none';
    startQuizSection.style.display = 'none';
    questionDisplayEl.classList.remove("hide");
    score = 0; // Score is 0 again.
    timeLeft = 60;
    htmlTimeLeft.textContent = timeLeft; //Counter to display once more to make look smoother.
    finalAnswerCheck = 0; // Check if last question and wrong.
    checkTimes = 1; // Check timer for funciton patch.
    var timeInterval = setInterval(function () {
        if (score === 1) { // For any wrong answer, remove a point
            highScore -= 10;
        }

        score = 0; // move the score back to 0 to check for another wrong answer.


        if (timeLeft >= 1 && finalAnswerCheck !== 1) {
            //Assign text content to the question from our object
            questionTitle.textContent = questionsObject.correct[questionNumber];
        }
        answer1BtnEl.textContent = answersObject.answers[answerNumber][0];
        answer2BtnEl.textContent = answersObject.answers[answerNumber][1];
        answer3BtnEl.textContent = answersObject.answers[answerNumber][2];
        answer4BtnEl.textContent = answersObject.answers[answerNumber][3];
        choice.append(answer1BtnEl);
        choice.append(answer2BtnEl);
        choice.append(answer3BtnEl);
        choice.append(answer4BtnEl);
        htmlTimeLeft.textContent = timeLeft;
        console.log("time left:" + timeLeft)
        //timeLeft -= 1;

        if (timeLeft >= 1 && finalAnswerCheck !== 1) {
            //Assign text content to the question from our object
            questionTitle.textContent = questionsObject.correct[questionNumber];

            questionDisplayEl.style.display = ""; // Allow the questions to be displayed
            answer1BtnEl.style.display = ""; // Allow our buttons to appear
            answer2BtnEl.style.display = "";
            answer3BtnEl.style.display = "";
            answer4BtnEl.style.display = "";

            //Display asnwers to the question
            answer1BtnEl.textContent = answersObject.answers[answerNumber][0];
            answer2BtnEl.textContent = answersObject.answers[answerNumber][1];
            answer3BtnEl.textContent = answersObject.answers[answerNumber][2];
            answer4BtnEl.textContent = answersObject.answers[answerNumber][3];

            choice.appendChild(answer1BtnEl);
            timeLeft -= 1;
            htmlTimeLeft.textContent = timeLeft;
            console.log("time left:" + timeLeft)


            answer1BtnEl.addEventListener("click", function () {

                if (questionTitle.textContent === "The condition statement if/else is enclosed with the following:" && answer1BtnEl.textContent === "Parentheses") {
                    console.log("Correct");
                    // timeLeft += 1; // Add a second for a correct answer as it will take one second to move to the next question
                    questionNumber = 2; // Move to the next question which is the third questions
                    answerNumber = 4;
                    answerCorrectWrong.style.display = "";
                    answerCorrectWrong.textContent = "Correct!";
                    new Audio('./assets/sfx/correct.wav').play();
                    answerCorrectWrong.style.borderTop = "solid #800080";
                    answerCorrectWrongGrid.appendChild(answerCorrectWrong);
                } else {

                    //Assign wrong values based incorrect answers.

                    switch (answer1BtnEl.textContent) {
                        case "Strings":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wrong!";
                            answerCorrectWrong.style.borderTop = "solid #800080";
                            new Audio('./assets/sfx/incorrect.wav').play();
                            score = 1; // Give user a 10+ score
                            questionNumber = 1; // Move to the next question which is the second question
                            answerNumber = 1;
                            break;
                        case "Number of strings":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wrong!";
                            new Audio('./assets/sfx/incorrect.wav').play();
                            answerCorrectWrong.style.borderTop = "solid #800080";

                            score = 1; // Give user a 10+ score
                            questionNumber = 3; // Move to the next question which is the second question
                            answerNumber = 2;
                            break;
                        case "Javascript":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wrong!";
                            new Audio('./assets/sfx/incorrect.wav').play();
                            answerCorrectWrong.style.borderTop = "solid #800080";

                            score = 1; // Give user a 10+ score
                            questionNumber = 4; // Move to the next question which is the second question
                            answerNumber = 3;
                            break;
                        case "Commas":
                            console.log("Correct");
                            //timeLeft += 1; // Add a second for a correct answer as it will take one second to move to the next question
                            //questionNumber = 2; // Move to the next question
                            //game over
                            answerCorrectWrong.style.display = ""; // Enables text content on correct and wrong answers
                            answerCorrectWrong.textContent = "Correct!";
                            new Audio('./assets/sfx/correct.wav').play();
                            answerCorrectWrong.style.borderTop = "solid #800080";
                            answerCorrectWrongGrid.appendChild(answerCorrectWrong);
                            //window.alert("Game Over"); Game is over at this point.
                            questionNumber = 0; // Game is over, no more questions to show.
                            answerNumber = 0; // Game is over, no more answers to show.
                            console.log("I'm here" + timeInterval);
                            answer1BtnEl.style.display = 'none';
                            answer2BtnEl.style.display = 'none';
                            answer3BtnEl.style.display = 'none';
                            answer4BtnEl.style.display = 'none';
                            answerCorrectWrong.style.display = 'none'; // When time is over correct or wrong will go away.
                            //answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
                            enterInitialsEl.classList.remove('hide');
                            questionDisplayEl.classList.add('hide');
                            enterInitialsEl.style.display = ""; // Display Message Enter initials

                            finalAnswerCheck = 1; // Final Wrong
                            lastQuestionWrong();
                            finalScoreDisplay.textContent = highScore; // Assign the latest high score.

                            //Exit the quiz/timer.
                            clearInterval(timeInterval);
                            break;

                    }
                }


            });

            answer2BtnEl.addEventListener("click", function () {

                if (questionTitle.textContent === "Strings must be enclosed with:" && answer2BtnEl.textContent === "Curly brackets") {
                    console.log("Correct");
                    //timeLeft += 1; // Add a second for a correct answer as it will take one second to move to the next question
                    //questionNumber = 2; // Move to the next question
                    //game over
                    answerCorrectWrong.style.display = ""; // Enables text content on correct and wrong answers
                    answerCorrectWrong.textContent = "Correct!";
                    new Audio('./assets/sfx/correct.wav').play();
                    answerCorrectWrong.style.borderTop = "solid #800080";
                    answerCorrectWrongGrid.appendChild(answerCorrectWrong);
                    //window.alert("Game Over"); Game is over at this point.
                    questionNumber = 0; // Game is over, no more questions to show.
                    answerNumber = 0; // Game is over, no more answers to show.
                    console.log("I'm here" + timeInterval);
                    answer1BtnEl.style.display = 'none';
                    answer2BtnEl.style.display = 'none';
                    answer3BtnEl.style.display = 'none';
                    answer4BtnEl.style.display = 'none';
                    answerCorrectWrong.style.display = 'none'; // When time is over correct or wrong will go away.
                    //answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
                    questionTitle.textContent = "You have finished the quiz!";
                    enterInitialsEl.classList.remove('hide');
                    questionDisplayEl.classList.add('hide')
                    enterInitialsEl.style.display = ""; // Display Message Enter initials

                    finalScoreDisplay.textContent = highScore; // Assign the latest high score.
                    //Exit the quiz/timer.
                    clearInterval(timeInterval);
                } else {

                    switch (answer2BtnEl.textContent) {
                        case "Boolean":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wrong!";
                            new Audio('./assets/sfx/incorrect.wav').play();
                            answerCorrectWrong.style.borderTop = "solid #800080";

                            score = 1; // Give user a 10+ score
                            questionNumber = 1; // Move to the next question which is the second question
                            answerNumber = 1;
                            break;
                        case "Curly Brackets":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wrong!";
                            new Audio('./assets/sfx/incorrect.wav').play();
                            answerCorrectWrong.style.borderTop = "solid #800080";

                            score = 1; // Give user a 10+ score
                            questionNumber = 2; // Move to the next question which is the second question
                            answerNumber = 4;
                            console.log(score);
                            break;
                        case "Other arrays":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wrong!";
                            new Audio('./assets/sfx/incorrect.wav').play();
                            answerCorrectWrong.style.borderTop = "solid #800080";
                            score = 1; // Give user a 10+ score
                            questionNumber = 3; // Move to the next question which is the second question
                            answerNumber = 2;
                            break;
                        case "Terminal/bash":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wrong!";
                            new Audio('./assets/sfx/incorrect.wav').play();
                            answerCorrectWrong.style.borderTop = "solid #800080";
                            score = 1; // Give user a 10+ score
                            questionNumber = 4; // Move to the next question which is the second question
                            answerNumber = 3;
                            break;


                    }
                }




            });

            answer3BtnEl.addEventListener("click", function () {

                if (questionTitle.textContent === "Commonly used datatypes DO NOT include?" && answer3BtnEl.textContent === "Alerts") {
                    console.log("Correct");
                    //timeLeft += 1; // Add a second for a correct answer as it will take one second to move to the next question
                    questionNumber = 1; // Move to the next question which is the second question
                    answerNumber = 1;
                    answerCorrectWrong.style.display = ""; // Enables text content on correct and wrong answers
                    answerCorrectWrong.textContent = "Correct!";
                    new Audio('./assets/sfx/correct.wav').play();
                    answerCorrectWrong.style.borderTop = "solid #800080";
                    answerCorrectWrongGrid.appendChild(answerCorrectWrong);
                } else if (questionTitle.textContent === "A very useful tool to debug arrays is:" && answer3BtnEl.textContent === "For loops") {
                    console.log("Correct");
                    //timeLeft += 1; // Add a second for a correct answer as it will take one second to move to the next question
                    questionNumber = 4; // Move to the next question which  is the fifth question
                    answerNumber = 3;
                    answerCorrectWrong.style.display = ""; // Enables text content on correct and wrong answers
                    answerCorrectWrong.textContent = "Correct!";
                    new Audio('./assets/sfx/correct.wav').play();
                    answerCorrectWrong.style.borderTop = "solid #800080";
                    answerCorrectWrongGrid.appendChild(answerCorrectWrong);
                } else if (questionTitle.textContent === "The condition statement if/else is enclosed with the following:" && answer3BtnEl.textContent === "Quotes") {
                    console.log("Inside the case now");
                    answerCorrectWrong.style.display = "";
                    answerCorrectWrong.textContent = "Wrong!";
                    new Audio('./assets/sfx/incorrect.wav').play();
                    answerCorrectWrong.style.borderTop = "solid #800080";
                    score = 1; // Give user a 10+ score
                    questionNumber = 2; // Move to the next question which is the second question
                    answerNumber = 4;
                }

                else {

                    switch (answer3BtnEl.textContent) {
                        case "Booleans":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wrong!";
                            new Audio('./assets/sfx/incorrect.wav').play();
                            answerCorrectWrong.style.borderTop = "solid #800080";
                            score = 1; // Give user a 10+ score
                            questionNumber = 3; // Move to the next question which is the second question
                            answerNumber = 2;
                            break;
                        case "Quotes":
                            console.log("Inside the case now");
                            score = 1; // Give user a 10+ score
                            questionNumber = 0; // Game is over, no more questions to show.
                            answerNumber = 0; // Game is over, no more answers to show.
                            console.log("I'm here" + timeInterval);
                            answer1BtnEl.style.display = 'none';
                            answer2BtnEl.style.display = 'none';
                            answer3BtnEl.style.display = 'none';
                            answer4BtnEl.style.display = 'none';
                            answerCorrectWrong.style.display = 'none'; // When time is over correct or wrong will go away.
                            //answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
                            enterInitialsEl.classList.remove('hide');
                            questionDisplayEl.classList.add('hide');
                            enterInitialsEl.style.display = ""; // Display Message Enter initials

                            finalAnswerCheck = 1; // Final Wrong
                            lastQuestionWrong();
                            finalScoreDisplay.textContent = highScore; // Assign the latest high score.
                            //Exit the quiz/timer.
                            clearInterval(timeInterval);

                            break;
                    }

                }

            });

            answer4BtnEl.addEventListener("click", function () {

                if (questionTitle.textContent === "Arrays can be used to store the following" && answer4BtnEl.textContent === "All of the above") {
                    console.log("Correct");
                    // timeLeft += 1; // Add a second for a correct answer as it will take one second to move to the next question
                    //Game is overquestionNumber = 4; // Move to the next question
                    questionNumber = 3; // Move to the next question which is the fourth question
                    answerNumber = 2;
                    answerCorrectWrong.style.display = ""; // Enables text content on correct and wrong answers
                    answerCorrectWrong.textContent = "Correct!"
                    new Audio('./assets/sfx/correct.wav').play();
                    answerCorrectWrong.style.borderTop = "solid #800080";
                    answerCorrectWrongGrid.appendChild(answerCorrectWrong);

                } else {

                    switch (answer4BtnEl.textContent) {
                        case "Numbers":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wrong!";
                            new Audio('./assets/sfx/incorrect.wav').play();
                            answerCorrectWrong.style.borderTop = "solid #800080";
                            score = 1; // Give user a 10+ score
                            questionNumber = 1; // Move to the next question which is the second question
                            answerNumber = 1;
                            break;
                        case "Square Brackets":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wrong!";
                            new Audio('./assets/sfx/incorrect.wav').play();
                            answerCorrectWrong.style.borderTop = "solid #800080";
                            score = 1; // Give user a 10+ score
                            questionNumber = 2; // Move to the next question which is the second question
                            answerNumber = 4;
                            break;
                        case "Console.log":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wrong!";
                            new Audio('./assets/sfx/incorrect.wav').play();
                            answerCorrectWrong.style.borderTop = "solid #800080";
                            score = 1; // Give user a 10+ score
                            questionNumber = 4; // Move to the next question which is the second question
                            answerNumber = 3;
                            break;
                        case "Parentheses":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wrong!";
                            new Audio('./assets/sfx/incorrect.wav').play();
                            answerCorrectWrong.style.borderTop = "solid #800080";
                            score = 1; // Give user a 10+ score
                            //questionNumber = 4; // Move to the next question which is the second question
                            //answerNumber = 3;
                            questionNumber = 0; // Game is over, no more questions to show.
                            answerNumber = 0; // Game is over, no more answers to show.
                            console.log("I'm here" + timeInterval);
                            answer1BtnEl.style.display = 'none';
                            answer2BtnEl.style.display = 'none';
                            answer3BtnEl.style.display = 'none';
                            answer4BtnEl.style.display = 'none';
                            answerCorrectWrong.style.display = 'none'; // When time is over correct or wrong will go away.
                            //answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers

                            enterInitialsEl.classList.remove('hide');
                            questionDisplayEl.classList.add('hide');
                            enterInitialsEl.style.display = ""; // Display Message Enter initials
                            finalAnswerCheck = 1; // Final Wrong
                            lastQuestionWrong();
                            finalScoreDisplay.textContent = highScore; // Assign the latest high score.
                            //Exit the quiz/timer.
                            clearInterval(timeInterval);
                            break;

                    }

                }

            });

        }
        else if (timeLeft <= 0) {
            timeLeft = 0;
            console.log("I'm here" + timeInterval);
            questionNumber = 0; // Reset all questions
            answerNumber = 0; // Reset all possible answers.
            answer1BtnEl.style.display = 'none';
            answer2BtnEl.style.display = 'none';
            answer3BtnEl.style.display = 'none';
            answer4BtnEl.style.display = 'none';
            answerCorrectWrong.style.display = 'none'; // When time is over correct or wrong will go away.
            //answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
            questionTitle.textContent = "Game Over!. Try again by clicking on \"Click Start Quiz\"";

            clearInterval(timeInterval);
            htmlTimeLeft.textContent = timeLeft;
            //gridContainer.appendChild(questionDisplayEl);

            //displayMessage();
        }
    }, 1000)
});

function lastQuestionWrong() {
    if (finalAnswerCheck === 1 && checkTimes === 1) {
        highScore -= 10;
        checkTimes = 2;
        return highScore
    }

}


submitScoreEl.addEventListener("click", function () { // Submit high scores


    var quizLocalStorage = "quiz";
    var quizUserDetails = "";
    var value = [];

    //If good input the value will be assign properly.
    quizUserDetails = quizLocalStorage + enterInitialText.value
    value = [quizUserDetails, highScore] // Create an array for validation


    // Add test entry @local storage in order to be able to get the lentgh of the local storage.
    // If user clears the data at local storage the below code will not work unless there is at least on entry.
    if (!localStorage.length) {
        localStorage.setItem("test", "test");
    }


    for (var i = 0; i < localStorage.length; i++) {

        var checkUser = "";
        var checkUserValue = [];

        // Assign value again
        quizUserDetails = quizLocalStorage + enterInitialText.value;

        // Check if assigned value exist in the local storage
        checkUser = localStorage.getItem(quizUserDetails);
        // quizInitial + score will be checked against the input from the user to validate if exist already in local storage

        if (checkUser == null) { // New user, no need to split
            localStorage.setItem(quizUserDetails, value); // Value is equal to 
            window.alert("Your score of " + highScore + " has been submitted!")
            break;
        } else if (checkUser != null) {
            checkUserValue = checkUser.split(","); // Split since the ojbect exist in local storage


        }
        if (quizUserDetails == checkUserValue[0] && highScore == checkUserValue[1]) {


            // Only insert if the current highScore is higher, 
            // otherwise let the user know they had a higher score alreay
            localStorage.setItem(quizUserDetails, value); // Value is equal to 
            window.alert(highScore + " " + "is the latest entry for user initial " + enterInitialText.value + ". Entry will not be added.")
            break;
        } else if (enterInitialText.value == "") {
            window.alert("Please enter an initial");
            break;
        } else if (quizUserDetails == checkUserValue[0] && highScore > checkUserValue[1]) {
            // New high score submitted!
            localStorage.setItem(quizUserDetails, value); // Value is equal to 
            window.alert("New high score of " + highScore + " has been submitted!.\nYour previous score was " + checkUserValue[1])
            break;
        } else if (quizUserDetails == checkUserValue[0] && highScore < checkUserValue[1]) {
            // Your previous code was higher!
            localStorage.setItem(quizUserDetails, value); // Value is equal to 
            window.alert("Your previous code of " + checkUserValue[1] + " was higher. Entry will not be added.");
            break;

        } else { // New entry all together
            localStorage.setItem(quizUserDetails, value); // Value is equal to 
            window.alert("Your score of " + highScore + " has been submitted!")
            break;
        }

    }

});

