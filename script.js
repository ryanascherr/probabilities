let number = '';
let dice = '';
let mod = '';
let dc = '';
let success = 0;
let fail = 0;

$(".calculate").click(function() {
    number = parseInt($(".number").val());
    dice = parseInt($(".size").val());
    mod = parseInt($(".mod").val());
    dc = parseInt($(".dc").val());

    handleErrorMessage();

    handleCalculation();
});

function handleErrorMessage() {
    if (isNaN(number) || isNaN(dice) || isNaN(mod) || isNaN(dc)){
        $(".error-message").html("All must be numbers");
        $(".result").html("");
        return;
    }
    $(".error-message").html("");
    $(".result").html("");
}

function handleCalculation() {
    success = 0;
    fail = 0;
    if (number == 1) {
        for (let roll = 1; roll < dice + 1; roll++) {
            if (roll + mod >= dc) {
                success++;
            } else {
                fail++;
            }
        }
    }
    if (number > 1) {
        for (let roll = 1; roll < dice + 1; roll++) {
            testFunction(roll);
        } 
    }
    let percentage = ((success / (success + fail)) * (100)).toFixed(2);
    $(".result").html(`${percentage}% Chance of Success`);
}

function testFunction(roll) {
    for (let roll2 = 1; roll2 < dice +1; roll2++) {
        if (roll + roll2 + mod >= dc) {
            success++;
        } else {
            fail++;
        }
    }
}