const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function employeeBonus(emps){

  for (let i=0; i< employees.length; i ++){
    //console.log(emps[i]);
    
   bonusCalc(emps[i])
   console.log(emps[i].name, bonusCalc2(emps[i]));
   
  }
  
}
let RatingSalary = 0;
let totalBonusPer = 0

function bonusCalc(employee){
    //let bonusAmount= 0;
    //console.log(employee);


    
  if (employee.reviewRating <= 2 ){
    RatingSalary = 0.0;
    return RatingSalary;
  }
  else if (employee.reviewRating == 3 && employee.annualSalary > 65000 ){
    //bonusAmount = (employee.annualSalary) * 0.03;
    RatingSalary= .03;
    //return bonusAmount;
    return RatingSalary;
  }
  else if (employee.reviewRating == 3 && employee.annualSalary < 65000 ){
    //bonusAmount= (employee.annualSalary)* 0.04 
    RatingSalary = .04;
    //return bonusAmount;
    return RatingSalary;
  }
  else if (employee.reviewRating == 4 && employee.annualSalary > 65000) {
    //bonusAmount = (employee.annualSalary) * 0.05;
    RatingSalary = .05;
    //return bonusAmount;
    return RatingSalary;
  }
  else if (employee.reviewRating == 4 && employee.annualSalary < 65000 ) {
    //bonusAmount = (employee.annualSalary) * 0.06
  RatingSalary = .06;
    //return bonusAmount;
  return RatingSalary;
  }
  else if (employee.reviewRating == 5 && employee.annualSalary > 65000) {
    //bonusAmount = (employee.annualSalary) * 0.09;
  RatingSalary = .09;
    //return bonusAmount;
  return RatingSalary;
  }
  else if (employee.reviewRating == 5 && employee.annualSalary < 65000 ) {
    //bonusAmount = (employee.annualSalary) * 0.10
  RatingSalary = .10;
    //return bonusAmount;
  return RatingSalary;
  }
  console.log(bonusAmount);
  
}// end of function bonusCalc

function bonusCalc2(employee){
  if (employee.employeeNumber > 999 && employee.reviewRating > 2){
    totalBonusPer = RatingSalary + .05;
    return totalBonusPer
  }
  else if (employee.employeeNumber < 999 && employee.reviewRating > 2){
    totalBonusPer = bonusCalc(employee);
    return totalBonusPer;
  }
  else if (employee.reviewRating <= 2){
    totalBonusPer = 0.0;
    return totalBonusPer;
  }
}


console.log( bonusCalc(employees[0]) );
console.log(employeeBonus(employees));



