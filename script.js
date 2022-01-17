let number = '';
let dice = '';
let mod = '';
let dc = '';

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
    let success = 0;
    let fail = 0;
    for(let i = 1; i < dice + 1; i++) {
        console.log("hey");
        if (i >= dc) {
            success++;
        } else {
            fail++;
        }
    }
    console.log(success);
    console.log(fail);
    let percentage = success / (success + fail);
    percentage = percentage * 100;
    percentage = percentage.toFixed(2);
    $(".result").html(`${percentage}% Chance of Success`);
}