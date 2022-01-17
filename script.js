let number = '';
let dice = '';
let mod = '';
let dc = '';

$(".mod").val("+0");

$(".calculate").click(function() {
    number = $(".number").val();
    dice = $(".size").val();
    mod = $(".mod").val();
    dc = $(".dc").val();

    handleErrorMessage();

    handleCalculation();
   
});

function handleErrorMessage() {
    if (isNaN(number) || isNaN(dice) || isNaN(mod)) {
        $(".error-message").html("All must be numbers");
        $(".result").html("");
        return;
    }
    $(".error-message").html("");
}

function handleCalculation() {
    $(".result").html(Math.floor(Math.random() * 10 + 1));
}