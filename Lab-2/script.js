
console.log("Hello from script.js!");

console.log("My name is  akhilesh");
console.log(5 + 5);
console.log("Comments don't run this part");
console.log("Fixed the missing closing quote and the line ran without any error");
console.log("console.log(Test) does not match test because JavaScript is case sensitive, Test and test are treated as two different names");

let studentName = "ram";
let studentAge = 20;
const collegeName = "Dev Sanskriti Vishwavidyalaya";
console.log(studentName, studentAge, collegeName);

let myName = "Shivu";
let rollNumber = 101;
let course = "BIT";
console.log(myName, rollNumber, course);

try {
  collegeName = "Some Other College";
} catch (error) {
  console.log(error.message);
}

console.log("1stYear is invalid because a variable name cannot start with a number");
console.log("student_name is valid");
console.log("let is invalid because it is a reserved keyword");
console.log("$marks is valid");
console.log("roll no is invalid because a variable name cannot contain a space");

if (true) {
  var a = "I am var";
  let b = "I am let";
  console.log(b);
}
console.log(a);
console.log("a is printed outside the block because var is function scoped, b cannot be printed outside the block because let is block scoped");

let city = "lucknow";
let population = 300000;
let isCapital = false;
let mayor;
let previousMayor = null;
console.log(typeof city, typeof population, typeof isCapital, typeof mayor, typeof previousMayor);

let cityName = "Haridwar";
let studentCount = 50;
let isPresent = true;
let notAssigned;
let emptyValue = null;
let bigNumber = 9007199254740993n;
let uniqueId = Symbol("id");
console.log(cityName, typeof cityName);
console.log(studentCount, typeof studentCount);
console.log(isPresent, typeof isPresent);
console.log(notAssigned, typeof notAssigned);
console.log(emptyValue, typeof emptyValue);
console.log(bigNumber, typeof bigNumber);
console.log(uniqueId, typeof uniqueId);

const student = {
  name: "mohit",
  rollNo: 20,
  course: "it"
};
console.log(student.name);

const subjects = ["JavaScript", "DBMS", "Networking"];
console.log(subjects[0], subjects[2]);
subjects.push("Web Development");
console.log(subjects);

student.isPassing = true;
console.log(student);

console.log(typeof null);
console.log("typeof null returns object because of an old bug in JavaScript that was never fixed to avoid breaking existing code");

let cartTotal = 500;
cartTotal += 150;
cartTotal -= 50;
console.log(cartTotal);

let id = "42";
console.log(id == 42, id === 42);

let num1 = 15;
let num2 = 4;
console.log(num1 + num2, num1 - num2, num1 * num2, num1 / num2, num1 % num2);

console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);
console.log("== compares values after converting the types, === compares both the value and the type without converting, that is why == gives true more often");

let age = 15;
let hasID = true;
console.log(age >= 18 && hasID);
console.log(age >= 18 || hasID);
console.log(!hasID);
console.log("used age 15 and hasID true so that age >= 18 && hasID prints false");

let marks1 = 55;
let marks2 = 30;
let result1 = marks1 >= 40 ? "Pass" : "Fail";
let result2 = marks2 >= 40 ? "Pass" : "Fail";
console.log(result1);
console.log(result2);

let subjectMarks1 = 78;
let subjectMarks2 = 85;
let subjectMarks3 = 92;
let total = subjectMarks1 + subjectMarks2 + subjectMarks3;
let average = total / 3;
let grade = average >= 90 ? "A" : average >= 75 ? "B" : average >= 40 ? "C" : "F";
console.log(typeof average);
console.log("Total: " + total + ", Average: " + average.toFixed(2) + ", Grade: " + grade);

let attendance = 80;
let isEligibleForScholarship = average >= 85 && attendance >= 75;
console.log(isEligibleForScholarship);

let fixedTotal1 = 10 + 5;
console.log(fixedTotal1);
console.log("the original line ended with a plus sign and nothing after it, which caused a syntax error, adding a second number fixed it");

let rate = 5;
rate = 10;
console.log(rate);
console.log("the original rate was declared with const so it could not be reassigned, changing it to let fixed the error");

let username = "admin";
console.log(username);
console.log("the original code tried to print username before it was declared with let, which is not allowed, moving the declaration above the console.log fixed it");

let secondAttempt = "retry";
console.log(secondAttempt);
console.log("2ndAttempt is invalid because a variable name cannot start with a number, renaming it to secondAttempt fixed it");
