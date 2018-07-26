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
var hourlyRate;

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

    // Third Section
    rent = parseInt(document.getElementById("rent").value);
    utilities = parseInt(document.getElementById("utilities").value);

    inPocket = 3 * (rent + utilities);
    var costAll = costSum + overhead + inPocket;
    pocketOverhead;
    $("#in-pocket").html("<b>In Pocket: </b> $" + inPocket);
    $("#pocket-overhead").html("<b>In Pocket + Overhead: </b> $" + costAll);

    // Fourth Section
    employmentRate = parseInt(document.getElementById("employment-rate").value);
    taxRate = parseInt(document.getElementById("tax-rate").value);
    processingRate = parseInt(document.getElementById("processing-rate").value);

    var incRequired = costAll / (employmentRate / 100) / (1 - (taxRate / 100)) /(1 - (processingRate / 100));
    console.log(incRequired);
    $("#inc-required").html("<b>Income Required: </b> $" + incRequired);

    // Final Spot
    hoursWorked = parseInt(document.getElementById("hours-worked").value);
    hourlyRate = incRequired / hoursWorked;
    console.log(hourlyRate);
    $("#hourly-rate").html("<b>Hourly Rate: </b> $" + hourlyRate);
});