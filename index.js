function calculateInterest(amount, percentage) {
    let percentageValue = parseFloat(percentage) / 100;

    let interestAmount = amount * percentageValue;

    return interestAmount;
}
let amount = 1000;
let percentage = "15%";
let interest = calculateInterest(amount, percentage);
console.log("Interest amount:", interest);
