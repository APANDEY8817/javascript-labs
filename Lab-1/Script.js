 console.log(typeof (10 + "5"));
  
 console.log(5 === "5"); 
 
 let x = 10; x += 5; 
  
console.log(x); 
  
console.log(true && false || true); 

 
 console.log(10 % 3);

 //Operator Precedence

 let val = 4 + 3 * 2 ** 2 - 6 / 3; 
 
 console.log("Value:", val);


 //Comparison Chaining

 console.log(1 < 2 < 3);
  console.log(3 > 2 > 1);

  // my own expression

  let answer = 5 + 3 * 2 > 10 && 10 % 3 === 1; 
  console.log("Answer:", answer);

// movie ticket
 
  let age = 25;
  
  let ticketPrice = age < 5 ? "Free" : age < 12 ? "₹100" : age < 60 ? "₹250" : "₹150"; console.log("Age:", age);
 console.log("Ticket:", ticketPrice);

//shipping

 let cartTotal = 1500; 
 
 let shipping = cartTotal >= 2000 ? "Free Shipping" : cartTotal >= 1000 ? "₹50" : "₹100"; console.log("Cart Total:", cartTotal); 
 
 console.log("Shipping:", shipping);



 //logical && ternaryop


 let isMember = true;
 let totalSpent = 6000; 
 let discountType = isMember && totalSpent >= 5000 ? "VIP Discount" : totalSpent >= 5000 ? "Regular Discount" : "No Discount"; 
 console.log("Discount:", discountType);

   //array agggrigation

   const marks = [75, 82, 68, 91, 55]; const total = marks[0] + marks[1] + marks[2] + marks[3] + marks[4]; const average = total / marks.length; const result = average >= 40 ? "Pass" : "Fail"; 
   console.log("Total:", total); 
   console.log("Average:", average); 
   console.log("Result:", result);
   
   //object aggrigation

   const item1 = { name: "Notebook", price: 60, qty: 3 }; 
   const item2 = { name: "Pen", price: 10, qty: 5 }; 
   const item3 = { name: "Bag", price: 800, qty: 1 }; 
   const item4 = { name: "Bottle", price: 300, qty: 2 }; 
   const subtotal1 = item1.price * item1.qty;
    const subtotal2 = item2.price * item2.qty; 
    const subtotal3 = item3.price * item3.qty; 
    const subtotal4 = item4.price * item4.qty; 
    const grandTotal = subtotal1 + subtotal2 + subtotal3 + subtotal4;
    console.log("Grand Total:", grandTotal);

    
    // type coercion
    console.log("5" + 3); 
    
    console.log("5" - 3); 
    
    console.log("abc" * 2); 
    
    console.log(NaN === NaN);
    
    console.log([] == false); 
    
     console.log("10" == 10); 
    
    console.log(null + 1); 
   

    console.log(typeof NaN);

     //billing check


     const product1 = { name: "Notebook", price: 60, qty: 3 }; 
     const product2 = { name: "Pen", price: 10, qty: 5 }; 
     const product3 = { name: "Bag", price: 800, qty: 1 };


     console.log(typeof product1.price);
console.log(typeof product2.price);
console.log(typeof product3.price);

const p1 = product1.price * product1.qty;
const p2 = product2.price * product2.qty;
const p3 = product3.price * product3.qty;


//totle

const aTotal =
    subtotal1 +subtotal2 +subtotal3;

console.log("Grand Total:", aTotal);

//discount

const discountPercent =
    total >= 5000 ? 20 :
    total >= 2000 ? 10 :
    total >= 1000 ? 5 :
    0;

const discountAmount =
    total * discountPercent / 100;

const afterDiscount =
    total- discountAmount;



    //gst

    const gstRate = 18;

const gstAmount =
    afterDiscount * gstRate / 100;

const finalPayable =
    afterDiscount + gstAmount;


    // free shippping


    const distinctItems = 3;

const freeShipping =
    afterDiscount >= 1500 ||
    distinctItems >= 3;



    //reciepe


console.log("==============================");
console.log("          RECEIPT");
console.log("==============================");

console.log(
    product1.name,
    "x", product1.qty,
    "Subtotal: ₹" + subtotal1
);

console.log(
    product2.name,
    "x", product2.qty,
    "Subtotal: ₹" + subtotal2
);

console.log(
    product3.name,
    "x", product3.qty,
    "Subtotal: ₹" + subtotal3
);

console.log("------------------------------");

console.log("Grand Total: ₹" + grandTotal);
console.log("Discount: " + discountPercent + "%");
console.log("Discount Amount: ₹" + discountAmount);
console.log("After Discount: ₹" + afterDiscount);
console.log("GST: ₹" + gstAmount);
console.log("Final Payable: ₹" + finalPayable);

console.log(
    "Shipping:",
    freeShipping ? "FREE" : "₹100 shipping charge"
);

console.log("==============================");




// debugging


let price = 500;

const discount = price * 0.1;

discount = discount + 5;

console.log("Final: " + fnal);




//we  cannot reassign a const variable.

//Use let if you need to change the value.

