"use strict";

const $ = selector => document.querySelector(selector);

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    try{
        const input = parseFloat($("#dollarInput").value);
        if(input >= 100 || input <= 0 || $("#dollarInput").value == "")
        {
            alert("Input must be between greater than 0 and less than 100");
            focusAndSelect("#dollarInput");
            return;
        }
        else
        {    
            makeChange(input);
        }
    }
    catch
    {
        alert("Input must be a valid number");
        focusAndSelect("#dollarInput");
        return;
    }
};

const makeChange = (dollarInput) => {
    let changeMaker = new ChangeMaker(dollarInput);
    $("#quarters").value = changeMaker.MakeQuarters();
    $("#dimes").value = changeMaker.MakeDimes();
    $("#nickels").value = changeMaker.MakeNickels();
    $("#pennies").value = changeMaker.MakePennies();
};


document.addEventListener("DOMContentLoaded", () => {
 $("#buttonCalculate").addEventListener("click", processEntries);
});