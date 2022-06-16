import { ActionType } from '../action-types/index'

// ***** using below way may cause problem ------------------------------------------------------------
// b/c in case "bankrupt" doesn't have action.payload. This will throw error in typescript

// type Action = {
//     type: string,
//     payload?: number
// }
// const reducer = (state: number = initialState, action: Action) => {}
// ***** using above way may cause problem --------------------------------------------------------------



// better solution: to specific every case
// Literal Types : In addition to the general types string and number, we can refer to specific strings and numbers in type positions.
// eg:
// let x: "hello" = "hello";
// x = "hello"; <----- OK
// x = "howdy"; <----- ERROR

interface DepositAction {
    type: ActionType.DEPOSIT         // using Literal Types
    payload: number
}

interface WithdrawAction {
    type: ActionType.WITHDRAW
    payload: number
}

interface BankruptAction {
    type: ActionType.BANKRUPT
}

export type Action = DepositAction | WithdrawAction | BankruptAction