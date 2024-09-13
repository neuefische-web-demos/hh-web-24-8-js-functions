console.clear();
const cohort = "Sharks";
// function declaration:
function printPersonalData() {
  const name = "Alex";
  const age = 25;
  console.log(name + " is " + age + " years old" + cohort);
}

// function call
printPersonalData();
printPersonalData();
printPersonalData();
printPersonalData();
printPersonalData();
printPersonalData();

// function declaration with parameters:
function printPersonalData2(name, age) {
  console.log(name + " is " + age + " years old");
}

// function call with arguments:
printPersonalData2("Rebecca", 20);
printPersonalData2("Max Müller", 44);
printPersonalData2("Ibo", 31);

function calculateSum(a, b) {
  const result = a + b;
  return result;
}

//console.log(result);
const sum1 = calculateSum(5, 6);
const sum2 = calculateSum(sum1, 100);
console.log(sum1);
console.log(sum2);

// function declaration with parameter and return value
function checkInputString(inputString) {
  if (inputString.length > 3) {
    return true;
  } else {
    return false;
  }
}

const isValid = checkInputString("Hello");
console.log(isValid);
// ...
console.log("--------------------------");
greet();

function greet() {
  console.log("Hello");
}
// fat arrow function declaration:

const greetSharks = (name, age) => {
  console.log("Hello Sharks " + name);
};

greetSharks("Thilda");

const calc = (a, b) => a + b;

calc(5, 6);
