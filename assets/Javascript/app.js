let correctAnswers = 0;
let incorrectAnswers = 0;
let quizTimer = 60;
const questionOne = "1. How many NBA championships did Michael Jordan win with the Chicago Bulls after his return from playing baseball?"
const questionTwo = "2. Who is the 2nd all-time leading scorer (total points) in NHL history, behind Wayne Greyzky?"
const questionThree = "3. Which American Football team won the first two Super Bowls?"
const questionFour = "4. Who holds the record for most no-hitters thrown in MLB history?"
const questionFive = "5. The record for most TDs thrown in a single NFL game is 7. Who is the most recent QB to do so?"
const questionSix = "6. Who holds the record for most points scored as an NHL rookie?"
const questionSeven = "7. When was the 3 point line first introduced in an NBA game?"
const questionEight = "8. Who has the most homeruns in MLB history for a non-American born player?"
const questionNine = "9. Who is the shortest player in NBA history?"
const questionTen = "10. How many NHL teams are located in the state of New York?"



$(document).ready(function(){

    $("#startButton").on("click", function(){

        let quizTimer = 60;
        let counter=setInterval(timer, 1000);
        function timer() {

            quizTimer=quizTimer-1;

                if (quizTimer == 0) {

                    alert("Times up!")
                        
                    if ($("input[name=question1]:checked").val() === "C") {
                                correctAnswers++;
                            } else {
                                incorrectAnswers++;
                            }
                            if ($("input[name=question2]:checked").val() === "B") {
                                correctAnswers++;
                            } else {
                                incorrectAnswers++;
                            }
                            if ($("input[name=question3]:checked").val() === "A") {
                                correctAnswers++;
                            } else {
                                incorrectAnswers++;
                            }
                            if ($("input[name=question4]:checked").val() === "C") {
                                correctAnswers++;
                            } else {
                                incorrectAnswers++;
                            }
                            if ($("input[name=question5]:checked").val() === "A") {
                                correctAnswers++;
                            } else {
                                incorrectAnswers++;
                            }
                            if ($("input[name=question6]:checked").val() === "D") {
                                correctAnswers++;
                            } else {
                                incorrectAnswers++;
                            }
                            if ($("input[name=question7]:checked").val() === "A") {
                                correctAnswers++;
                            } else {
                                incorrectAnswers++;
                            }
                            if ($("input[name=question8]:checked").val() === "D") {
                                correctAnswers++;
                            } else {
                                incorrectAnswers++;
                            }
                            if ($("input[name=question9]:checked").val() === "A") {
                                correctAnswers++;
                            } else {
                                incorrectAnswers++;
                            }
                            if ($("input[name=question10]:checked").val() === "B") {
                                correctAnswers++;
                            } else {
                                incorrectAnswers++;
                            }
            
                            clearInterval(counter);
                            $("#quizForm").toggle();
                            $("#resultSheet").toggle();
                            $("#correctScore").text("Correct Answers : " + correctAnswers)
                            $("#incorrectScore").text("Incorrect Answers : " + incorrectAnswers)
                            $("#totalScore").text("Score : " + ((correctAnswers / 10) * 100 ) + "%");


                        
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
                if ($("input[name=question1]:checked").val() === "C") {
                    correctAnswers++;
                } else {
                    incorrectAnswers++;
                }
                if ($("input[name=question2]:checked").val() === "B") {
                    correctAnswers++;
                } else {
                    incorrectAnswers++;
                }
                if ($("input[name=question3]:checked").val() === "A") {
                    correctAnswers++;
                } else {
                    incorrectAnswers++;
                }
                if ($("input[name=question4]:checked").val() === "C") {
                    correctAnswers++;
                } else {
                    incorrectAnswers++;
                }
                if ($("input[name=question5]:checked").val() === "A") {
                    correctAnswers++;
                } else {
                    incorrectAnswers++;
                }
                if ($("input[name=question6]:checked").val() === "D") {
                    correctAnswers++;
                } else {
                    incorrectAnswers++;
                }
                if ($("input[name=question7]:checked").val() === "A") {
                    correctAnswers++;
                } else {
                    incorrectAnswers++;
                }
                if ($("input[name=question8]:checked").val() === "D") {
                    correctAnswers++;
                } else {
                    incorrectAnswers++;
                }
                if ($("input[name=question9]:checked").val() === "A") {
                    correctAnswers++;
                } else {
                    incorrectAnswers++;
                }
                if ($("input[name=question10]:checked").val() === "B") {
                    correctAnswers++;
                } else {
                    incorrectAnswers++;
                }

                clearInterval(counter);
                $("#quizForm").toggle();
                $("#resultSheet").toggle();
                $("#correctScore").text("Correct Answers : " + correctAnswers)
                $("#incorrectScore").text("Incorrect Answers : " + incorrectAnswers)
                $("#totalScore").text("Score : " + ((correctAnswers / 10) * 100 ) + "%");

            
        });

        $("#resetBtn").on("click", function(){
            location.reload();
        });

        
  
    });



});

