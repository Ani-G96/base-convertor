const reader = require('readline-sync');
const utils= require('./converter');

const inpNumber = reader.questionInt("Please enter the number = ");
const option = reader.questionInt("Please enter option: \n 1:Binary \n 2:Hexadecimal = ");

if(option === 1){
  console.log(utils.convertToBinary(inpNumber));
}else if(option === 2){
  console.log(utils.convertToHexa(inpNumber));
}else if(typeof option === "number"){
  console.log("There is no options!");
}else{
  console.log("Imported value should be number");
}