function CalculateCompatibility () {

    const RESPONSE = [
        5, /* Strongly Agree */
        1, /* Strongly Disagree */
    ]
    const MAX_SCORE = 25;
    let Question1Answer = document.getElementById("question1").selectedOptions[0].value;
    let Question2Answer = document.getElementById("question2").selectedOptions[0].value;
    let Question3Answer = document.getElementById("question3").selectedOptions[0].value;
    let Question4Answer = document.getElementById("question4").selectedOptions[0].value;
    let Question5Answer = document.getElementById("question5").selectedOptions[0].value;

    console.log("Statement 1 Answer");
    console.log(document.getElementById("question1").selectedOptions[0].text);
    console.log(document.getElementById("question1").selectedOptions[0].value);
    console.log(Question1Answer);

    console.log("Statement 2 Answer");
    console.log(document.getElementById("question2").selectedOptions[0].text);
    console.log(document.getElementById("question2").selectedOptions[0].value);
    console.log(Question2Answer);

    console.log("Statement 3 Answer");
    console.log(document.getElementById("question3").selectedOptions[0].text);
    console.log(document.getElementById("question3").selectedOptions[0].value);
    console.log(Question3Answer);

    console.log("Statement 4 Answer");
    console.log(document.getElementById("question4").selectedOptions[0].text);
    console.log(document.getElementById("question4").selectedOptions[0].value);
    console.log(Question4Answer);

    console.log("Statement 5 Answer");
    console.log(document.getElementById("question5").selectedOptions[0].text);
    console.log(document.getElementById("question6").selectedOptions[0].value);
    console.log(Question5Answer); 

    let Question1Compatibility = 5 - Math.abs(Question1Answer - RESPONSE[0]) 
    let Question2Compatibility = 5 - Math.abs(Question2Answer - RESPONSE[0]) 
    let Question3Compatibility = 5 - Math.abs(Question3Answer - RESPONSE[0]) 
    let Question4Compatibility = 5 - Math.abs(Question4Answer - RESPONSE[0]) 
    let Question5Compatibility = 5 - Math.abs(Question5Answer - RESPONSE[1])
 
    console.log("Compatibility1="+Question1Compatibility); 
    console.log("Compatibility2="+Question1Compatibility); 
    console.log("Compatibility3="+Question1Compatibility); 
    console.log("Compatibility4="+Question1Compatibility); 
    console.log("Compatibility5="+Question1Compatibility);
 
    let TotalScore = Question1Compatibility + Question2Compatibility + Question3Compatibility + Question4Compatibility + Question5Compatibility;
 
    TotalScore *= 100 / MAX_SCORE; 
    TotalScore = Math.round(TotalScore); 
    console.log("TotalScore=" + TotalScore);
 
    document.getElementById("compatibility").innerHTML = "Our compatibility is a " + TotalScore; 

    let LoverFriends = "You and Cameron should get married right away!";
    let JustFriends = "You and Cameron will make perfect friends.";
    let Notfriends = "You and Cameron should not be friends.";
 
    if (TotalScore >= 90) {
    document.getElementById("Friends").innerHTML = "Lover! " + LoverFriends;
}   else if (TotalScore < 90 && TotalScore >= 70) {
    document.getElementById("Friends").innerHTML = "Friends! " + JustFriends;
}   else if (TotalScore < 70) {
    document.getElementById("Friends").innerHTML = "NotFriends! " + Notfriends;
}
}