#! /usr/bin/env node




import inquirer from "inquirer";


const Target = await inquirer.prompt([{
    message : "Enter Your First Number",
    type : "number",
    name : "Num1",
},
{
   
    message :"Enter An Operation",
    type : "list",
    name : "operator",
    choices : [ "Addition" , "Subtraction" , "division" , "Multiplication" ],
},

{
    message : "Enter Your Second Number",
    type : "number",
    name : "Num2",
 
}
])

if(Target.operator === "Addition"){
    console.log(Target.Num1 + Target.Num2)
}
else if(Target.operator === "Subtraction"){
    console.log(Target.Num1 - Target.Num2)
}
else if(Target.operator === "division"){
    console.log(Target.Num1 / Target.Num2)
}
else if(Target.operator === "Multiplication"){
    console.log(Target.Num1 * Target.Num2)
}