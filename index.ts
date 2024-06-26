
import inquirer from "inquirer";

const currency: any = {

    USD: 1,
    EUR: 0.91,
    INR:74,
    PKR: 280
}

const answar = await inquirer.prompt([{
    name:"from",
    type:"list",
    message: "Enter From Curruncy",
    choices:["USD", "ERU", "INR", "PKR"]
},
{
    name:"to",
    type:"list",
    message: "Enter To Curruncy",
    choices:["USD", "ERU", "INR", "PKR"]
},

{
    name: "amount",
    message:"Enter Your amount",
    type:"number"
}

])
let from_amount = currency[answar.from]
let to_amount = currency[answar.to]
let amount = answar.amount
let base_amount = amount / from_amount // USD base currency
let converted_amount = base_amount * to_amount
console.log(converted_amount)