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
            handleSecondRoll(roll);
        } 
    }
    let percentage = ((success / (success + fail)) * (100)).toFixed(2);
    $(".result").html(`${percentage}% Chance of Success`);
}

function handleSecondRoll(roll) {
    for (let roll2 = 1; roll2 < dice +1; roll2++) {
        if (roll + roll2 + mod >= dc) {
            success++;
        } else {
            fail++;
        }
    }
}
// let extraThings = numberOfDice - 1;
// for (let roll = 1; roll < Math.pow(dice, number));

// for (let roll = 1; roll < Math.pow(dice, number); roll++) {
//     if (roll + mod >= dc) {
        
//     }
// }
// let quantity = 0;

// bruteForceAllNdNCombinations();

// function bruteForceAllNdNCombinations(sides, quantity){    
//     console.log(quantity);
//     quantity = 3;
//     sides = 6;
//     var rolls = [];
//     console.log(quantity);
//     if (quantity > 1) { // if there is more than one dice to roll
//       var nMinus1Rolls = bruteForceAllNdNCombinations(sides, quantity-1)
//       nMinus1Rolls.forEach(roll => { 
//          for (var i = 1; i <= sides; i++) {
//           rolls.push(roll.concat(i))
//         }
//       })
//       console.log(quantity);
//     } else { // if we are only rolling 1 dice
//       for (var i = 1; i <= sides; i++) {
//         rolls.push([i])     
//       }  
//     }
//     console.log(quantity);
//     console.log(rolls);
//     // return rolls;
//   }