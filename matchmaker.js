function CalculateCompatability () {

    const RESPONSE = [
        5, /* Strongly Agree */
        4, /* Agree */
        3, /* Neutral */
        2, /* Disagree */
        1, /* Strongly Disagree */
    ]
    const SCORE = 25;
    let Question1Answer = document.getElementById("question1").selectedOptions[0].value;
    let Question2Answer = document.getElementById("question2").selectedOptions[0].value;
    let Question3Answer = document.getElementById("question3").selectedOptions[0].value;
    let Question4Answer = document.getElementById("question4").selectedOptions[0].value;
    let Question5Answer = document.getElementById("question5").selectedOptions[0].value;

    console.log(document.getElementById("question1").selectedOptions[0].text);
    console.log(document.getElementById("question1").selectedOptions[0].value);
    console.log(Question1Answer);
    console.log(document.getElementById("question2").selectedOptions[0].text);
    console.log(document.getElementById("question2").selectedOptions[0].value);
    console.log(Question2Answer);
    console.log(document.getElementById("question3").selectedOptions[0].text);
    console.log(document.getElementById("question3").selectedOptions[0].value);
    console.log(Question3Answer);
    console.log(document.getElementById("question4").selectedOptions[0].text);
    console.log(document.getElementById("question4").selectedOptions[0].value);
    console.log(Question4Answer);
    console.log(document.getElementById("question5").selectedOptions[0].text);
    console.log(document.getElementById("question6").selectedOptions[0].value);
    console.log(Question5Answer);
let Question1Compatability = 5 - Math.abs(Question1Answer - RESPONSE[0])
let Question2Compatability = 5 - Math.abs(Question2Answer - RESPONSE[0])
let Question3Compatability = 5 - Math.abs(Question3Answer - RESPONSE[0])
let Question4Compatability = 5 - Math.abs(Question4Answer - RESPONSE[0])
let Question5Compatability = 5 - Math.abs(Question5Answer - RESPONSE[4])



let TotalScore = Question1Compatability + Question2Compatability + Question3Compatability + Question4Compatability + Question5Compatability;

TotalScore *= 100 / SCORE;
TotalScore = Math.round(TotalScore);
console.log("tc=" + TotalScore);

document.getElementById("Compatability").innerHTML = "Our compatability is a " + TotalScore;






























}