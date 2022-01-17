$(".mod").val("+0");

$(".calculate").click(function() {
    let number = $(".number").val();
    let dice = $(".size").val();
    let mod = $(".mod").val();

    if (!number || !dice || !mod) {
        $(".error-message").html("You must fill in all inputs");
        $(".result").html("");
        return;
    };
    if (isNaN(number) || isNaN(dice) || isNaN(mod)) {
        $(".error-message").html("All must be numbers");
        $(".result").html("");
        return;
    }

    $(".error-message").html("");
   
    $(".result").html(Math.floor(Math.random() * 10 + 1));
});