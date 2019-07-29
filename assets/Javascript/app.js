let correctAnswers = 0;
let incorrectAnswers = 0;
let totalScore = 0;
let quizTimer = 45;
const questionOne = "1. How many NBA championships did Michael Jordan win with the Chicago Bulls?"
const questionTwo = "2. Who is the all-time leading scorer (total points) in NHL history?"
const questionThree = "3. Which American Football team won the first two Super Bowls?"
const questionFour = "4. Who holds the record for most no-hitters thrown in MLB history?"
const questionFive = "5. Who holds the record for the most touchdowns thrown in a single NFL season?"
const questionSix = "6. Which NHL team is located in Illinois?"
const questionSeven = "7. When was the 3 point line first introduced in an NBA game?"
const questionEight = "8. Who has the most homeruns in MLB history for a non-American born player?"
const questionNine = "9. Who is the shortest player in NBA history?"
const questionTen = "10. How many NHL teams are located in the state of New York?"



$(document).ready(function(){

    let quizTimer = 45;

    let counter=setInterval(timer, 1000);

    function timer() {
        
        quizTimer=quizTimer-1;
        
        if (quizTimer <= 0)
        {
            clearInterval(counter);
            
            return;
        }
    }

    $("#startButton").on("click", function(){

        let quizTimer = 45;

        let counter=setInterval(timer, 1000);

        function timer() {
        
                quizTimer=quizTimer-1;
            
                if (quizTimer <= 0) {
                
                    clearInterval(counter);
                
                    return;
                }
            $("#timer").text("Time : " + quizTimer);
        }
        
        $("#startButton").toggle();
        $("#quizForm").toggle();
        $("#questionOne").text(questionOne);
        $("#questionTwo").text(questionTwo);
        $("#questionThree").text(questionThree);
        $("#questionFour").text(questionFour);
        $("#questionFive").text(questionFive);
        $("#questionSix").text(questionSix);
        $("#questionSeven").text(questionSeven);
        $("#questionEight").text(questionEight);
        $("#questionNine").text(questionNine);
        $("#questionTen").text(questionTen);

        $("#submitBtn").on("click", function(){
            $("#quizForm").toggle();
            $("#resultSheet").toggle();
            $("#correctScore").text("Correct Answers : " + correctAnswers)
            $("#incorrectScore").text("Incorrect Answers : " + incorrectAnswers)
            $("#totalScore").text("Score : " + totalScore);

        });
  
    });



});

