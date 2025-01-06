document.addEventListener("DOMContentLoaded", () => {

    // USER INPUT VARIBALES
// starting invested balance and added money each time
const startingAmount = document.getElementById("starting-amount")
const additionalAmount = document.getElementById("additional-amount")

// percentage return rate
const returnRate = document.getElementById("Rate-Of-Return")

// dropdown menu for selecting the frequency of investing
const dropDown = document.getElementById("dropDown")

// years of growth
const growth = document.getElementById("Years")

// calculation button
const button = document.getElementById("button")

// calculation output
const output = document.getElementById("output")

const dropDownMenu = {
    'Annually': 1,
    'Semi-Annually': 2,
    'Quarterly': 4,
    'Monthly': 12, 
    'Bi-Weekly': 26, 
    'Weekly': 52,
    'Daily': 365
}



// Main function to execute all subfunctions 
const finalCalculation = () => {
moneyInput()

percentageRate()

compoundInterest()
}

// Calculates the starting amount, how much the user wants to add on top of it, and how often
const moneyInput = () => {
const selectedOption = dropDown.value;
console.log("Selected: ", selectedOption)

const freqMultiplier = dropDownMenu[selectedOption];


total = (Number(additionalAmount.value) * freqMultiplier) + Number(startingAmount.value)


}

// Calculates the user's desired percentage rate and applies it to the total investment
const percentageRate = () => {

const userPercentage = returnRate.value
const calculatedPercentage = total * (1 + Number(userPercentage) / 100)

}

// Calculates the compound interest over the entire investment and displays the final result
const compoundInterest = () => {

    const principal = Number(startingAmount.value);
    const additionalContribution = Number(additionalAmount.value);
    const rate = Number(returnRate.value) /100;
    const years = Number(growth.value);
    const selectedOption = dropDown.value;
    const n = dropDownMenu[selectedOption];

    const A = principal * Math.pow(1 + rate/n, n*years) + additionalContribution * (Math.pow(1 + rate/n, n*years) - 1) / (rate/n); 

   output.innerText = `After ${years} years with a ${rate*100}% annual return, your investment will grow to $${A.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}.`

}


button.addEventListener("click", finalCalculation)


});