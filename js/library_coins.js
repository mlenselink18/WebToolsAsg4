"use strict";

class ChangeMaker
{
    constructor(dollars)
    {
        this.dollarInput = dollars;
        this.quarters = 0;
        this.dimes = 0;
        this.nickels = 0;
        this.pennies = 0;
    } 

    MakeQuarters()
    {
        let remainder = this.dollarInput;

        this.quarters = Math.floor(remainder/25);
        return this.quarters;
    }

    MakeDimes()
    {
        let remainder = this.dollarInput;
        let quarters = 0;
        quarters = Math.floor(remainder/25);
        remainder = remainder%25;

        this.dimes = Math.floor(remainder/10);
        return this.dimes;
    }

    MakeNickels()
    {
        let remainder = this.dollarInput;
        let quarters = 0;
        let dimes = 0;

        quarters = Math.floor(remainder/25);
        remainder = remainder%25;

        dimes = Math.floor(remainder/10);
        remainder = remainder%10;

        this.nickels = Math.floor(remainder/5);
        if(this.nickels == NaN)
            this.nickels = 0;
        return this.nickels;
    }

    MakePennies()
    {
        let quarters = 0;
        let dimes = 0;
        let nickels = 0;
        let remainder = this.dollarInput;

        quarters = Math.floor(remainder/25);
        remainder = remainder%25;

        dimes = Math.floor(remainder/10);
        remainder = remainder%10;

        nickels = Math.floor(remainder/5);
        remainder = remainder%5;
        
        this.pennies = remainder;
        if(this.pennies == NaN)
            this.pennies = 0;
        return this.pennies;
    }
}