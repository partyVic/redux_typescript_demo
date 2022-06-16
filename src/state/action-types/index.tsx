// use enum to group all the contants together

// enum: https://www.typescriptlang.org/docs/handbook/enums.html
// Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. 
// TypeScript provides both numeric and string-based enums.

export enum ActionType {
    DEPOSIT = 'deposit',
    WITHDRAW = 'withdraw',
    BANKRUPT = 'bankrupt'
}