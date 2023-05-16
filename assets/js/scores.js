var quizUsers = "";
var substringTest = "";
var highScoresInd = "";
var highScoreElement = document.getElementById('highscores');
var scoreClearButtonElement = document.getElementById('clear');

for (var i = 0; i < localStorage.length; i++) {
    var checkUserValue = [];

    quizUsers = localStorage.getItem(localStorage.key(i));
    substringTest = quizUsers.substring(0, 4)
    if (substringTest == "quiz") {
        checkUserValue = quizUsers.split(",");
        var userName = checkUserValue[0];
        highScoresInd = "User " + userName.substring(4) + " high score is: " + checkUserValue[1] + "\n";
        var lineItem = document.createElement('LI');
        var lineItemText = document.createTextNode(highScoresInd);
        lineItem.append(lineItemText);
        highScoreElement.append(lineItem);
    }
}
//When the game ends, it should display their score and give the user the ability to save their initials and their score
scoreClearButtonElement.addEventListener('click', function () {
    localStorage.clear();
    window.location.reload();
});