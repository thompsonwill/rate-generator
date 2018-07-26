// Costs variables

var healthInsurance = 0;
var autoInsurance = 0;
var software = 0;
var etc = 0;
var costSum = 0;

// Business Overhead variables
var businessRent;
var businessInsurance;
var businessEtc;
var overhead;

// Personal variables
var rent;
var utilities;
var inPocket;
var pocketOverhead;

// Rates variables
var employmentRate;
var taxRate;
var processingRate;

// Calcs variables
var income;
var hoursWorked;

$("#business-overhead-text").html("<b>Expenses: </b> $" + costSum);

// Click event to add group members to firebase 
$("#calculate-rate").on("click", function (event) {
    event.preventDefault();

    // First Section
    healthInsurance = parseInt(document.getElementById("health-insurance").value);
    autoInsurance = parseInt(document.getElementById("auto-insurance").value);
    software = parseInt(document.getElementById("software").value);
    etc = parseInt(document.getElementById("etc").value);

    console.log(healthInsurance + autoInsurance + software + etc);
    costSum = healthInsurance + autoInsurance + software + etc;

    $("#business-overhead-text").html("<b>Expenses: </b> $" + costSum);

    // Second Section
    businessRent = parseInt(document.getElementById("business-rent").value);
    businessInsurance = parseInt(document.getElementById("business-insurance").value);
    businessEtc = parseInt(document.getElementById("business-etc").value);
    
    overhead = businessRent + businessInsurance + businessEtc;
    $("#second-overhead").html("<b>Expenses: </b> $" + overhead);

});