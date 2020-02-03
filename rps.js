
var userWin = 0;
var compWin = 0;
var tie = 0;

function rpsGame() {
    for (let i = 0; i < 3; i++) {
        var user = prompt('Choose rock(r), scissors(s), paper(p)');

        if (user != 'r' && user != 's' && user != 'p') {
            while (true) {
                user = prompt('Choose r,s,p ONLY!!!!');
                if (user == 'r' || user == 'p' || user == 's')
                    break;
            }
        }

        var computer_choices = ['r', 's', 'p'];
        var computer = computer_choices[Math.floor(Math.random() * computer_choices.length)];

        alert('User chooses ' + user);
        alert('Computer choose ' + computer);

        if ((user == 'r' && computer == 's') || (user == 's' && computer == 'p') ||
            (user == 'p' && computer == 'r')) {
            userWin++;
            alert('Your score is ' + userWin + ' ; computer\'s score is ' + compWin);
       
        } else if ((user == 's' && computer == 'r') || (user == 'p' && computer == 's') ||
            (user == 'r' && computer == 'p')) {
            compWin++;
            alert('Your score is ' + userWin + ' ; computer\'s score is ' + compWin);
        } else {
            tie++;
            alert('This is a tie');
        }
    }

    if (userWin > compWin) {
        alert('You win! :)');
    } else if (userWin < compWin) {
        alert('You lose! :( Try again!');
    } else {
        alert('It\'s a tie');
    }
}