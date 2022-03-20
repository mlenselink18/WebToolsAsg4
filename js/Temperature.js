"use strict";

const $ = selector => document.querySelector(selector);

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const convertTemp = () => {
    if($("#tempInput").value.trim() != "")
    {
        try
        {
            let temp = new convertedTemp(parseFloat($("#tempInput").value));
            $("#message").textContent = "";
            $("#tempOutput").append(temp.getNewTempLine());
        }
        catch
        {
            focusAndSelect("#tempInput");
            $("#message").textContent = "Please enter a valid number to convert";
            return;
        }
    }
    else
    {
        focusAndSelect("#tempInput");
        $("#message").textContent = "Please enter a valid number to convert";
        return;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    $("#buttonConvert").addEventListener("click", convertTemp);
});