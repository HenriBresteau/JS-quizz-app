class Question {
    constructor (text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choices){
        return this.answer === choices;
    }
}
    let questions = [
        new Question(
            "Quelle méthode Javascript permet de filtrer les éléménts d'un tableau",
            ['indexof()','map()','reduce()','filter()'],
            'filter()'),
        new Question(
            "Quelle méthode Javascript permet de vérifier si un élémént figure dans un tableau",
            ['isNAN()','includes()','findIndex()','isOdd()'],
            'includes()'),
        new Question(
            "Quelle méthode tranforme du JSON en un objet Javascript ? ",
            ['JSON.parse()','JSON.stringyfy()','JSON.object()','JSON.toJS()'],
            'JSON.parse()'),
        new Question(
            "Quelle object Javascript permet d'arrondir à l'entier le plus proche ? ",
            ['Math.ceil()','Math.floor()','Math.round()','Math.random()'],
            'Math.round()'),
    ];


class Quiz {
    constructor (questions) {
        this.score = 0;
        this.questions = questions;
        this.currentQuestionIndex=0
    }
    getCurrentQuestion(){
        return this.questions[this.currentQuestionIndex];
    }
    guess(answer){
        if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.currentQuestionIndex++;
    }
    hadEnded(){
        return this.currentQuestionIndex >= this.questions.length;
    }
}

// REGROUP ALL FUNCTION RELATIVE TO THE APP DISPLAY
const display = {

}


// GAME LOGIC
quizApp = () =>{
    if (quiz.hasEnded()) {
        // END
    } else {
        // QUESTION
        // CHOICE
        // PROGRESS
    }
}
// CREATE QUIZ
let quiz = new Quiz(questions);
quizApp();
console.log(quiz);