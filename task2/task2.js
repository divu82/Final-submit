var subval=document.querySelector('.subject')
var beginnerdata = [ 
    { title: "QUESTION 1", question: "1) In JavaScript, what is a block of statement:", option: ["Conditional block", "block that combines a number of statements into a single compound statement", "both conditional block and a single statement", "block that contains a single statement"], answer: "both conditional block and a single statement" },
    { title: "QUESTION 2", question: "2) The function and var are known as:", option: ["Keywords", "Data types", "Declaration statements", "Prototypes"], answer: "Declaration statements" },
    { title: "QUESTION 3", question: "3) Which type of JavaScript language is __", option: ["Object-Oriented", "Object-Based", "Assembly-language", "High-level"], answer: "Object-Based" },
    { title: "QUESTION 4", question: "4) Which of the following variables takes precedence over the others if the names are the same?", option: ["Global variable", "The local element", "The two of the above", "None of the above"], answer: "The local element" },
    { title: "QUESTION 5", question: "5) Which one of the following is the correct way for calling the JavaScript code?", option: ["Preprocessor", "Triggering Event", "RMI", "Function/Method"], answer: "Function/Method" },
];

var interdata = [
    { title: "QUESTION 1", question: "1) What is the purpose of the `map` function in JavaScript?", option: ["To create a new array with the results of calling a provided function on every element in the array", "To remove elements from an array", "To concatenate two arrays", "To find the index of a particular element"], answer: "To create a new array with the results of calling a provided function on every element in the array" },
    { title: "QUESTION 2", question: "2) What does the term 'closure' refer to in JavaScript?", option: ["A function defined inside another function, with access to the outer function's variables", "A built-in method for closing web browser windows", "A type of loop structure", "An object-oriented programming concept"], answer: "A function defined inside another function, with access to the outer function's variables" },
    { title: "QUESTION 3", question: "3) What is the purpose of the `localStorage` object in web browsers?", option: ["To store key-value pairs in a web browser with no expiration time", "To store data that will be automatically deleted when the browser is closed", "To store session-specific information on the server", "To retrieve data from an external API"], answer: "To store key-value pairs in a web browser with no expiration time" },
    { title: "QUESTION 4", question: "4) How can you check if a variable is an array in JavaScript?", option: ["Using the `typeof` operator", "Using the `isArray` method", "Checking if it has a `length` property", "All of the above"], answer: "All of the above" },
    { title: "QUESTION 5", question: "5) What is the purpose of the `bind` method in JavaScript?", option: ["To create a new function that, when called, has its `this` keyword set to a specific value", "To add an event listener to an HTML element", "To concatenate two strings", "To convert a string to a number"], answer: "To create a new function that, when called, has its `this` keyword set to a specific value" }
];

var prodata = [
    { title: "QUESTION 1", question: "1) What is the event loop in JavaScript and how does it work?", option: ["It handles asynchronous operations by putting them in the message queue and executing them in a loop", "It's a loop that continuously renders elements on the page", "It's a mechanism for looping through arrays in JavaScript", "It's a way to prevent infinite loops in JavaScript"], answer: "It handles asynchronous operations by putting them in the message queue and executing them in a loop" },
    { title: "QUESTION 2", question: "2) Explain the concept of 'closures' in JavaScript and provide an example.", option: ["Closures allow functions to retain access to variables from their containing (enclosing) scope even after the scope has finished executing", "Closures are used to close web browser windows", "Closures refer to a type of loop structure in JavaScript", "Closures are used for creating objects in JavaScript"], answer: "Closures allow functions to retain access to variables from their containing (enclosing) scope even after the scope has finished executing" },
    { title: "QUESTION 3", question: "3) What is prototypal inheritance in JavaScript?", option: ["It's a way of creating objects based on other objects, allowing for the reuse of code and properties", "It's a method for inheriting styles in CSS", "It's a way of organizing code into classes and objects", "It's a mechanism for handling errors in JavaScript"], answer: "It's a way of creating objects based on other objects, allowing for the reuse of code and properties" },
    { title: "QUESTION 4", question: "4) How does 'hoisting' work in JavaScript?", option: ["Hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase", "Hoisting is a way of animating elements on a web page", "Hoisting is a type of error in JavaScript", "Hoisting is a feature for handling user input in forms"], answer: "Hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase" },
    { title: "QUESTION 5", question: "5) Explain the 'this' keyword in JavaScript and how its value is determined.", option: ["The 'this' keyword refers to the object that the function is a property of or the object that is currently being constructed", "The 'this' keyword is used for creating asynchronous functions", "The 'this' keyword is a placeholder for variable values in JavaScript", "The 'this' keyword is used to define custom events in JavaScript"], answer: "The 'this' keyword refers to the object that the function is a property of or the object that is currently being constructed" }
];
let timerSeconds =0;
let timerInterval; 
var previousflag=false;
var marks=0;
let selectedOption = '';
let index=0; 
let savedAnswers = [];
function startquis(){
    let name=document.getElementById("name").value.trim();
    let  subject=document.getElementById("subject");
    let level=document.getElementById("level").value;-
    console.log(level); //
    let isValid=true;
    if(name =="")
    {
        document.querySelector("#errname").innerHTML ="Please Enter First Name";
        document.querySelector("#name").style.borderColor="red";
        isValid = false;
    }
    else{
        document.querySelector("#errname").innerHTML = "";
        document.querySelector("#name").style.borderColor="green";
    }
    if(subject =="CHOOSE YOR SUBJECTS")
    {
        document.querySelector("#errsubject").innerHTML ="Please Select Subject";
        document.querySelector("#subject").style.borderColor="red";
        isValid = false;
    }
    else{
        document.querySelector("#errsubject").innerHTML = "";
        document.querySelector("#subject").style.borderColor="green";
    }
    if(level =="SELECT YOUR LEVELS")
    {
        document.querySelector("#errlevel").innerHTML ="Please Select Difficulty Level";
        document.querySelector("#level").style.borderColor="red";
        isValid = false;
    }
    else
    {
        document.querySelector("#errlevel").innerHTML = "";
        document.querySelector("#level").style.borderColor="green";
    }      
    if(isValid){
        index = 0; 
        marks = 0;
        assignment();
        document.querySelector(".timer").style.visibility="visible";
        document.querySelector(".marks").style.visibility="visible";
        document.querySelector(".main-div").classList.add("deactive");
        document.querySelector(".question-div").classList.add("active");
    }
}
document.querySelector("#next").addEventListener("click", () => {
    document.getElementById('option1').checked = false;
    document.getElementById('option2').checked = false;
    document.getElementById('option3').checked = false;
    document.getElementById('option4').checked = false;
    assignment();
});

document.querySelector("#previous").addEventListener("click", () => { 
    previousflag=true;
    if(index>0)  {
        index--
        assignment();
    }
});

function assignment() 
{
    clearInterval(timerInterval);
    value=index;
     if (level.value == "beginner") {
        data = beginnerdata[index];
        timerSeconds=30;
    } else if (level.value == "intermidate") {
        data = interdata[index];
        timerSeconds=25;
    } else if (level.value == "pro") {
        data = prodata[index];
        timerSeconds=20;
    }
    if (index >= beginnerdata.length || index >= interdata.length || index >= prodata.length) {
        document.querySelector(".title").innerHTML = "RESULT";
        document.querySelector("#op1").innerHTML = "";
        document.querySelector("#op2").innerHTML = "";
        document.querySelector("#op3").innerHTML = "";
        document.querySelector("#op4").innerHTML = "";
        document.querySelector("#option1").remove();
        document.querySelector("#option2").remove();
        document.querySelector("#option3").remove();
        document.querySelector("#option4").remove();
        document.querySelector("#question").innerHTML = "WELL DONE!";
        document.querySelector(".question").classList.add("changeapperance");
        document.querySelector("#op1").innerHTML = "TOTAL MARKS: " + marks;
        document.querySelector("#op1").classList.add("totalMarks");
        document.querySelector(".marks").style.visibility="hidden";
        document.querySelector(".timer").style.visibility="hidden";
        // document.querySelector("#question").innerHTML = "TOTAL MARKS: ";
    }else if(previousflag==true){
        value=value-1;
        document.querySelector(".title").innerHTML = data.title;
        document.querySelector("#question").innerHTML = data.question;
        document.querySelector("#op1").innerHTML = data.option[0];
        document.querySelector("#op2").innerHTML = data.option[1];
        document.querySelector("#op3").innerHTML = data.option[2];
        document.querySelector("#op4").innerHTML = data.option[3];

        document.querySelector("#next").innerHTML = (index === 4) ? "FINISH" : "NEXT->";
        document.querySelector("#previous").style.display = (index === 0) ? "none" : "inline-block";
        previousflag=false;
    }
     else {
        document.querySelector(".title").innerHTML = data.title;
        document.querySelector("#question").innerHTML = data.question;
        document.querySelector("#op1").innerHTML = data.option[0];
        document.querySelector("#op2").innerHTML = data.option[1];
        document.querySelector("#op3").innerHTML = data.option[2];
        document.querySelector("#op4").innerHTML = data.option[3];

        document.querySelector("#next").innerHTML = (index === 4) ? "FINISH" : "NEXT->";
        document.querySelector("#previous").style.display = (index === 0) ? "none" : "inline-block";
        index++;
        startTimer(); 
    }
}

// taking value of selected option and calculating marks......................................
document.querySelector("#option1").addEventListener("click", () => {
    selectedOption = document.querySelector("#op1").innerHTML;
    saveAnswer(selectedOption);
    if (selectedOption == data.answer) {
        marks = marks + 5;
    }
});

document.querySelector("#option2").addEventListener("click", () => {
    selectedOption = document.querySelector("#op2").innerHTML;
    saveAnswer(selectedOption);
    if (selectedOption == data.answer) {
        marks = marks + 5;
    }
});

document.querySelector("#option3").addEventListener("click", () => {
    selectedOption = document.querySelector("#op3").innerHTML;
    saveAnswer(selectedOption);
    if (selectedOption ==data.answer) {
        marks = marks + 5;
    }
});

document.querySelector("#option4").addEventListener("click", () => {
    selectedOption = document.querySelector("#op4").innerHTML;
    saveAnswer(selectedOption);
    if (selectedOption == data.answer) {
        marks = marks + 5;
    }
});
function saveAnswer(answer) {
    savedAnswers[index - 1] = answer;
}
// timer.....................................
function startTimer() {
    timerInterval = setInterval(() => {
        document.querySelector(".time").textContent = timerSeconds + "s";

        if (timerSeconds === 0) {
            clearInterval(timerInterval);
            handleTimeout(); // Call a function to handle timeout (e.g., skip to the next question)
        }
        timerSeconds--;
    }, 1000);
}
function handleTimeout() {
    assignment();
}