/*const Product = {
    Productname : "Parker Jotter Standard Ballpoint Pen",
    rating : 4.7,
    offer : 270,
    price : 599,
    inStock : true

};


const Profile = { // User Profile Object this contains user details and is a bundle of key value pairs.
    Name: "Aananaya Mathur",
    Followers: 59600000,//these are also key value pairs
    nOOFposts : 120,
    isVerified : true,
    following : 150,
    bio : "Travel Enthusiast | Food Lover | Photographer"
};
console.log(Profile['Name', 'Followers', 'bio']);

//comment in single line

/*
This is a 
multi-line comment


a + b; // Addition operation
a - b; // Subtraction operation
a * b; // Multiplication operation
a / b; // Division operation
a % b; // Modulus operation
a++;    // Increment operation
a--;    // Decrement operation
a += b; // Addition assignment
a -= b; // Subtraction assignment
a *= b; // Multiplication assignment
a /= b; // Division assignment
a %= b; // Modulus assignment
a == b; // Equality comparison, comparision of value only
a === b; // Strict equality comparison, comparision of value and type
a != b; // Inequality comparison
a !== b; // Strict inequality comparison
a > b;  // Greater than comparison
a < b;  // Less than comparison
a >= b; // Greater than or equal to comparison
a <= b; // Less than or equal to comparison
a && b; // Logical AND
a || b; // Logical OR
!a;     // Logical NOT
condition ? expr1 : expr2; // Ternary operator
typeof a; // Type checking
a = 10;
b = 5;
*/
/*
alert("Hello");
this is an alert box that displays a message to the user
this is used to take input from the user

let num = prompt("Enter a number:");
if(num % 5 === 0)
console.log("Multiple of 5:", num);
else
console.log("Not a multiple of 5:", num);


let scores = 56;
if (scores >= 90) {
    console.log("Grade A");
} else if (scores <= 89 && scores >= 70) {
    console.log("Grade B");
} else if (scores <= 69 && scores >= 60) {
    console.log("Grade C");
} else if (scores <= 59 && scores >=50) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}
    

for (let i = 1; i <= 10; i++) {
    console.log("Iteration number:", i);
}
    
let count =1;
while(count <= 5) {
    console.log("Aananaya Mathur");
    count++;
}

let i = 10;
do {
    console.log("Value of i is:", i);
    i--;
    } while (i >= 5);
     

for(let i of "Aananaya") {
    console.log(i);
}// this helps to iterate over each character in the string "Aananaya"


for (let i in Profile) {
    console.log(i);
}// this helps to iterate over each key in the Profile object


for (let i =0; i <=100; i++) {
    console.log(i);
}
    
for (let i=0;i<=100;i++)
    {
        if(i%2===0)
        {
            console.log("Evem Numbers", i);
        }
    };

let gamenum = prompt("Guess a number between 1 and 10");
let constNum = 5;
while (gamenum != constNum){
    gamenum = prompt("Wrong guess, try again!");
}
console.log("Congratulations! You guessed the correct number.");


//sThis is a template literal example
let name = "Aananaya";
let age = 20;
let city = "New Delhi";             
let introduction = `My name is ${name} // string interpolation can also be used to calculate arithematic equations and after calculating gives value, I am ${age} years old and I live in ${city}.`;
console.log(introduction);

let str ="Hello\t World!";
console.log("Hello,\nWorld!");
console.log("Hello,\tWorld!");
console.log(str.length)

String Methods: strings are immutable

let sampleString = "    Hello, Full      Stack Developer!     ";
console.log(sampleString.toUpperCase());
console.log(sampleString.toLowerCase());
console.log(sampleString.trim());// removes whitespace from both ends of a string
console.log(sampleString.slice(7, 21));// extracts a section of a string and returns it as a new string
console.log(sampleString.replace("Full", "MERN"));// replaces a specified value with another value in a string
console.log(sampleString.includes("Stack"));// checks if a string contains a specified value and returns true or false
console.log(sampleString.indexOf("Developer"));// returns the index of the first occurrence of a specified value in a string
console.log(sampleString.replace("Developer", "Engineer"));// replaces a specified value with another value in a string
console.log(sampleString.charAt(5));// returns the character at a specified index in a string
console.log(sampleString.split(" "));// splits a string into an array of substrings based on a specified separator
console.log(sampleString.concat(" Let's build something amazing!"));// concatenates two or more strings and returns a new string


let fullname = prompt("Enter your full name without spaces:");
let sym = "@";
let username = sym + fullname + fullname.length;
console.log("Your username is:", username);


//Arrays

let marks = [85, 92, 78, 90, 88];
console.log(marks);
console.log("Number of subjects:", marks.length);
console.log("Marks in 3rd subject:", marks[2]); // Accessing elements
marks[4] = 95; // Modifying elements
console.log("Updated marks:", marks);           
marks.push(89,58,86); // Adding elements
console.log("Marks after adding a new subject:", marks);
marks.pop(); // Removing last element
console.log("Marks after removing last subject:", marks);
console.log("Index of 90:", marks.indexOf(90)); // Finding index
for(let i=0;i<marks.length;i++) {
    console.log("Marks of each students:", marks[i]) 
}
for (let mark of marks){
    console.log("Marks scored:", mark);
}
let st = [85,97,44,37,76,60];
let sum =0;
let avg =0;
for(let i =0;i<st.length;i++){
    sum += st[i];
}
avg = sum/st.length;
console.log("Average marks:", avg);

let items = [250,300,470,600,810];
for(let i=0;i<items.length;i++){
    offer = items[i]/10;
    items[i] = items[i] - offer;
}
console.log("Items after discount:", items);
console.log(marks.toString());
console.log(marks.join(" - "));//joins all array elements into a string with a specified separator
console.log(marks.shift());//removes the first element from an array and returns that element
console.log(marks.unshift(100));//adds one or more elements to the beginning of an array and returns the new length of the array
console.log(marks.slice(1,4));//returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
console.log(marks.reverse());//reverses the order of the elements in an array
console.log(marks.sort((a,b) => a-b));//sorts the elements of an array in ascending order   
console.log(marks.sort((a,b) => b-a));//sorts the elements of an array in descending order
console.log(marks.splice(2,1));//removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements
console.log(marks.splice(2,0,99));//inserts new element at index 2 without removing any element
console.log(marks.splice(3,1,77));//removes 1 element at index 3 and inserts 77 at that position
console.log(marks.splice(3,1,55))
console.log(marks.concat(items));//merges two or more arrays and returns a new array


let companies = ["Bloomberg","Microsoft", 'Uber',"Google", "IBM", "Netflix"];
//rEmove the first company from the array
companies.shift();
console.log("After removing first company:", companies);
companies.splice(1,1,"Ola");
console.log("After replacing 3rd company with Ola:", companies);
companies.push("Amazon");
console.log("After adding Amazon at the end:", companies);



//Function and Methoods
function myfunc(msg) {
    console.log("Welcome to my world!");
    console.log("Enjoy your stay here.");
    console.log(msg);
}
let msg = "Aaananaya Mathur";
myfunc(msg);


function sum(a,b) {
    sum = a+b;// a and b are like local variables of functions and have block scope of the function and parameters of the function sum
    //console.log("Sum is :", sum);
    return sum;
}
let val = sum(5,10);
console.log("sumis: ", val);


//Arroe Functions

function greet(name) {
    retuurn `Hello, ${name}! Welcome aboard`;
}

//using arrow recreate the above function
const arrowSum = (name) => {// if need to execute function need to store it in a variable (arrowSum)
    return `Hello, ${name}! Welcome aboard`;
};//need to call on console arrowSum("Aananaya");

function mul(a,b){
    return a*b;
}
let multi = (a,b) => {
    return (a*b);
}// if only one statement is there we can skip the curly braces and return keyword



function vowelsCount(Str) {
    let count =0;
    let vowels = ['a','e','i','o','u','A','E','O','I','U'];
    for(let i of Str) {
        for(let z =0;z<vowels.length;z++)
        {
            if(i === vowels[z]){
                count++;
            }
        }
    }
    return count;
    

}

let vowelss = prompt("Enter a string :");
let result = vowelsCount(vowelss);
console.log("Number of vowels in the string:", result);


const vowelsCount = (Str) => {
    let vowels = ['a','e','i','o','u','A','E','O','I','U'];;
    let count =0;
    for(let i of Str) {
        for(let z = 0;z < vowels.length; z++){
            if(i ===vowels[z]){
                count++;
            }
        }
    }
    return count;
}
let str = "Abcde Fghij";
let result = vowelsCount(str);
console.log("Number of vowels in arrow function:", result);


// Arrays + map
let numbers = [1,2,3,4,5];
let squarednumbers = numbers.map((n) => n*n);
console.log("Squared Numbers:", squarednumbers);

// Arrays + filter
let evennumbers = numbers.filter((n) => n % 2 ===0);
console.log("Even Numbers:", evennumbers);
// Arrays + reduce
let sumofnumbers = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of Numbers:", sumofnumbers);

Answer of Exercise 1:

const prices = [100,200,300];
let pricesWithTax = prices.map((price) => price*18/100 +price);
console.log("Prices with Tax:", pricesWithTax);


//Answer of Exercise 2:

const users = [
    {name: "Aananaya", age: 20},
    {name: "Rohan", age: 17},
    {name: "Saanvi", age: 22},
    {name: "Aditya", age: 15}
]
let adults = users.filter(users => users.age >= 18);
console.log("Adult users: ", adults);


//Answer of Exercise 3:

const cart = [
  { name: "Apple", price: 30 },
  { name: "Milk", price: 50 },
  { name: "Bread", price: 25 },
];
let totalPrice = cart.reduce((sum, n) => sum +n.price, 0);
console.log("Total Price:", totalPrice);


//fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => { console.log(data); })
    .catch((error) => {console.error('Error fetching data:', error); });

//A Promise is an object that represents a value that will arrive later (success or failure).
//fetch returns a Promise:

//.then → when it succeeds

//.catch → when it fail


//Async/Await
async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }       
}
fetchData();

//Pattern
async function someName() {
  try {
    const res = await fetch("URL");
    const data = await res.json();
    // use data
  } catch (err) {
    // handle error
  }
}

//Async function always returns a Promise, so you can use .then and .catch with it as well:
//these are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

//Exercise 4

async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        console.log("Length of users: ", users.length);
        console.log("Name of the first user: ", users[0].name);
    }
    catch (error) {
        console.error('Error fetching users:', error);
    }
} 
getUsers();

*/
