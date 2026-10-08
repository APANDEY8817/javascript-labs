/**
 * CS302JSC — JavaScript Practical Lab Session 6
 * Hoisting & Closures
 * BCA/BIT Semester 5 | Dev Sanskriti Vishwavidyalaya
 */

// =============================================================================
// PART 1: HOISTING WITH VAR
// =============================================================================
console.group("--- PART 1: Hoisting with var ---");

// Task 1.1
console.log("Task 1.1 First check:", typeof city !== "undefined" ? city : undefined);
var city = "Haridwar";
console.log("Task 1.1 Second check:", city);

// Task 1.2
function showMessage() {
  console.log("Task 1.2 Inside func (before):", message);
  var message = "Hello";
  console.log("Task 1.2 Inside func (after):", message);
}
showMessage();

// Task 1.3 Shadow Trap
var testName = "global";
function testShadow() {
  console.log("Task 1.3 Shadowed var:", testName); // undefined due to local hoisting
  var testName = "local";
}
testShadow();

// Task 1.4 Magic Trick
console.log("Task 1.4 Food (before):", favFood);
var favFood = "Masala Dosa";
console.log("Task 1.4 Food (after):", favFood);

console.groupEnd();


// =============================================================================
// PART 2: FUNCTION HOISTING
// =============================================================================
console.group("--- PART 2: Function Hoisting ---");

// Guided Example
console.log("Square of 4:", square(4));
function square(n) {
  return n * n;
}

// Task 2.1 & 2.2 Error Demonstrations
try {
  sayHiVar();
} catch (err) {
  console.log("Task 2.1 Caught Error (var):", err.name + ": " + err.message);
}
var sayHiVar = function () {
  console.log("Hi!");
};

// Task 2.4 Overwriting Functions
console.log("Task 2.4 Same name resolution:", fnA());
function fnA() { return "First"; }
function fnA() { return "Second"; }

// Task 2.5 Top-Down Story
console.log(wakeUp());
console.log(eatBreakfast());
console.log(goToCollege());

function wakeUp() { return "1. Woke up at 6:00 AM in Shantikunj."; }
function eatBreakfast() { return "2. Had fresh breakfast."; }
function goToCollege() { return "3. Arrived at DSVV campus."; }

console.groupEnd();


// =============================================================================
// PART 3: LET, CONST & TEMPORAL DEAD ZONE (TDZ)
// =============================================================================
console.group("--- PART 3: let, const & TDZ ---");

// Task 3.1 & 3.2 TDZ checks
console.log("Task 3.2 typeof var before decl:", typeof xVar);
var xVar = 5;

try {
  console.log(typeof yLet);
  let yLet = 5;
} catch (err) {
  console.log("Task 3.2 typeof let in TDZ:", err.name + ": " + err.message);
}

try {
  console.log(PI);
  const PI = 3.14;
} catch (err) {
  console.log("Task 3.1 const in TDZ:", err.name + ": " + err.message);
}

console.groupEnd();


// =============================================================================
// PART 4: YOUR FIRST CLOSURE
// =============================================================================
console.group("--- PART 4: Closures ---");

// Task 4.1 Counter
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counterA = makeCounter();
const counterB = makeCounter();
console.log("counterA calls:", counterA(), counterA(), counterA(), counterA(), counterA());
console.log("counterB calls:", counterB(), counterB());

// Task 4.2 Out-of-scope check
try {
  console.log(count);
} catch (err) {
  console.log("Task 4.2 Accessing closure var externally:", err.name + ": " + err.message);
}

// Task 4.3 Multiplier Factory
function makeMultiplier(n) {
  return function (x) {
    return x * n;
  };
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log("Task 4.3 Multiplier results:", double(5), triple(5));

// Task 4.4 Greeter
function makeGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}
console.log("Task 4.4 Greeter:", makeGreeter("Namaste")("Aditi"));

// Task 4.5 Chai Counter
function makeCupCounter() {
  let cups = 0;
  return function () {
    cups++;
    return `Cup number ${cups} of chai`;
  };
}
const friendA = makeCupCounter();
const friendB = makeCupCounter();
console.log("Friend A:", friendA());
console.log("Friend A:", friendA());
console.log("Friend B:", friendB());

console.groupEnd();


// =============================================================================
// PART 5: PRIVATE DATA WITH CLOSURES
// =============================================================================
console.group("--- PART 5: Private Data ---");

// Task 5.3 Login Guard
function limiter(max) {
  let used = 0;
  return function () {
    if (used < max) {
      used++;
      return `Attempt ${used} of ${max}`;
    }
    return "Locked!";
  };
}
const testLogin = limiter(3);
console.log(testLogin());
console.log(testLogin());
console.log(testLogin());
console.log(testLogin());

// Task 5.4 Secret Diary
function createDiary() {
  const entries = [];
  return {
    write(text) {
      entries.push(text);
      return "Entry recorded.";
    },
    read() {
      return [...entries];
    }
  };
}
const myDiary = createDiary();
myDiary.write("Learned closures and hoisting in DSVV lab.");
console.log("Diary content:", myDiary.read());
console.log("Direct access to entries:", myDiary.entries); // undefined

console.groupEnd();


// =============================================================================
// PART 6: CLOSURES IN LOOPS
// =============================================================================
console.group("--- PART 6: Closures in Loops ---");

const withVar = [];
for (var i = 0; i < 3; i++) {
  withVar.push(() => i);
}
console.log("Task 6.1 withVar:", withVar.map((f) => f())); // [3, 3, 3]

const withLet = [];
for (let j = 0; j < 3; j++) {
  withLet.push(() => j);
}
console.log("Task 6.1 withLet:", withLet.map((f) => f())); // [0, 1, 2]

// Task 6.2 & 6.3 Asynchronous timer demo
for (let m = 1; m <= 3; m++) {
  setTimeout(() => console.log("Task 6.3 fixed loop let:", m), 100);
}

console.groupEnd();


// =============================================================================
// PART 7: MINI PROJECT — SMART WALLET WITH LOGIN GUARD
// (Main code at the top; declarations hoisted below)
// =============================================================================
console.group("--- PART 7: Mini Project ---");

// Initialize Wallet & Guard
const wallet = createWallet(500);
const guard = limiter(3);

const initialBal = wallet.show();
console.log("Initial Balance:", initialBal); // 500

const afterAdd = wallet.add(200);
console.log("Add 200:", afterAdd); // 700

// Spend 150 after PIN verification
guard();
const afterSpend = wallet.spend(150);
console.log("Spend 150:", afterSpend); // 550

// Failed spend attempt
guard();
const failedSpend = wallet.spend(1000);
console.log("Spend 1000:", failedSpend); // Insufficient balance

const currentBal = wallet.show();
console.log("Current Balance:", currentBal); // 550

const history = wallet.history();
console.log("History:", history); // ['Added 200', 'Spent 150']

// Bonus discount calculation
const festive = makeDiscount(10);
const discounted = festive(500);
console.log("10% off 500:", discounted); // 450

// Update DOM elements
if (typeof document !== "undefined") {
  const initEl = document.getElementById("init-bal");
  const addEl = document.getElementById("add-bal");
  const spendEl = document.getElementById("spend-bal");
  const failEl = document.getElementById("failed-spend");
  const currEl = document.getElementById("curr-bal");
  const discEl = document.getElementById("discount-val");
  const histList = document.getElementById("history-log");

  if (initEl) initEl.textContent = `₹${initialBal}`;
  if (addEl) addEl.textContent = `₹${afterAdd}`;
  if (spendEl) spendEl.textContent = `₹${afterSpend}`;
  if (failEl) failEl.textContent = failedSpend;
  if (currEl) currEl.textContent = `₹${currentBal}`;
  if (discEl) discEl.textContent = `₹${discounted}`;

  if (histList) {
    histList.innerHTML = "";
    history.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      histList.appendChild(li);
    });
  }
}

console.groupEnd();

// --- HOISTED PROJECT FUNCTIONS ---

function createWallet(start) {
  let balance = start;
  const historyLog = [];

  return {
    add(amount) {
      balance += amount;
      historyLog.push(`Added ${amount}`);
      return balance;
    },
    spend(amount) {
      if (amount > balance) {
        return "Insufficient balance";
      }
      balance -= amount;
      historyLog.push(`Spent ${amount}`);
      return balance;
    },
    show() {
      return balance;
    },
    reset() {
      balance = start;
      return balance;
    },
    history() {
      return [...historyLog];
    }
  };
}

function makeDiscount(percent) {
  return function (price) {
    return price - price * (percent / 100);
  };
}


// =============================================================================
// PART 8: DEBUGGING CHALLENGE (SOLVED IMPLEMENTATIONS)
// =============================================================================
console.group("--- PART 8: Debugging Challenge ---");

// Snippet 1 Fixed
var total = 5;
console.log("Snippet 1 Fixed:", total);

// Snippet 2 Fixed
greetSnippet();
function greetSnippet() {
  console.log("Snippet 2 Fixed: Hi");
}

// Snippet 3 Fixed
function makeCounterFixed() {
  let c = 0;
  return function () {
    return ++c;
  };
}
const nextCounter = makeCounterFixed();
console.log("Snippet 3 Fixed:", nextCounter(), nextCounter());

// Snippet 4 Fixed
function makeCounter2Fixed() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const nFixed = makeCounter2Fixed();
console.log("Snippet 4 Fixed:", nFixed(), nFixed(), nFixed());

console.groupEnd();
                    
