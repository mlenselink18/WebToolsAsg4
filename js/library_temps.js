"use strict";

class convertedTemp
{
    constructor(tempInput)
    {
        this.TempF = tempInput;
    }

    getTempC()
    {
        return ((this.TempF - 32 ) *  5 / 9 ).toFixed(2);
    }

    getFormattedTempF()
    {
        return this.TempF.toFixed(2)
    }

    getNewTempLine()
    {
        return (this.getFormattedTempF() + " Degrees F = " + this.getTempC() + " Degrees C \n");
    }
}