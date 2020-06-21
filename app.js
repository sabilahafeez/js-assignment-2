
//                      Chapter - 21 - 25 String Method 
// ===========================================================================

// Answer - 1

// FirstName = prompt("Enter your First name : ")
// LastName = prompt("Enter your Last name : ")

// FUllName = FirstName + "     " + LastName;

// document.write(FUllName)


// Answer - 2
 //FavMOb = prompt("Enter your favourite mobile : ")
 //FavLeng = FavMOb.length;

 //document.write("My favourite mobile is  :  " + FavMOb + "<br>" + "Length of String is : " + FavLeng)


// Answer - 3

 //var nationality = "Pakistani";
 //document.write("String : " + nationality + "<br>")
 //document.write("Index of 'n' :  " + nationality.indexOf("n"));



// Answer - 4

// var Greeting = "Hello World ";
 //document.write("String : " + Greeting + "<br>")
 //document.write("Index of 'n' :  " + Greeting.lastIndexOf("l"));


// Answer - 5

// var nationality = "Pakistani";
// document.write("String : " + nationality + "<br>")
// document.write("Character at the index of 3 :  " + nationality.charAt(3))


// Answer - 6

// FirstName = prompt("Enter your First name : ")
// LastName = prompt("Enter your Last name : ")

// FUllName = FirstName.concat("    " + LastName)
// document.write(FUllName)



// Answer - 7
 
//document.write("city: Hyderabad" + "<br>");
 
 //word = "Hyder";

 //newWord = word.replace( "Hyder","Islam");

 //document.write("After replacement: " + newWord + "abad")


// Task - 8
 

 //var message = "Ali and Sami are best friends They play cricket and football together.";
 //document.write(message + "<br>");

 //message = message.replace("and", "&");
 //document.write(message);



// Answer - 9
// value = "472";
// document.write("Value :  " + value + "<br>")
// document.write("Type  : " + typeof(value) + "<br>")

// document.write("Value :  " + parseInt(value) + "<br>")
// document.write("Type  :  " + typeof(parseInt(value)) + "<br>")


// Answer-10
 //word = prompt("Enter a word :");
 //document.write("User input : " + word + "<br>");
 //capitalWord = word.toUpperCase();
 //document.write("Upper case :  " + capitalWord);



// Answer - 11

 //name = prompt("Enter a word :");
 //document.write("User input : " + name + "<br>");
 //document.write("Title case :  " + name[0].toUpperCase() + name.slice(1, ));




//  Answer - 12

// var num = 35.36;
// document.write("Number  : " + num + "<br>")

// S = String(num);

// After = S.replace(".", "")
// document.write("Result  :  " + After)




// Answer -13
// var user = prompt("enter name :  ")
// SpChar = "!@.,";
// for (var i = 0; i < user.length; i++) {
//     if (SpChar.indexOf(user.charAt(i)) != -1) {
//         alert("Please enter a valid username");
//     }
// }


// Answer - 14
// items = ["cake", "apple pie", "cookie", "chips", "patties"]

// user_input = prompt("Welcome to ABC bakery ! What do you want to order Sir/Mam'm").toLowerCase();

// if (items.indexOf(user_input) !== -1) {
//     alert(user_input + "  is Available at index   " + items.indexOf(user_input))
// } else {
//     alert("We are sorry ! " + user_input + "  is not  Available in out bakery ")

// }




// Answer- 15


// var str = "123456789";

// if (str.match(user[0]) && user.length !== 6) {

//     alert("Sory Its not Starts with Letter / Password Must be along 6 Character ")
// } else {

//     alert("Valid Passowrd")
// }



//  Answer - 16

// var university = "University of Karachi";
// for (var i = 0; i < university.length; i++) {

//     document.write(university[i] + "<br>")

// }



// Answer - 17
// user = prompt("Enter a string : ")
// for (var i = 0; i < user.length; i++) {

//     LastChar = user.slice(user.length - 1)
// }
// document.write("User input is : " + user + "<br>")
// document.write("Last Character is : " + LastChar)


// Answer - 18
// var sentence = ("the quick brown fox jumps over the lazy dog ");
// document.write("Text :   " + sentence + "<br>")

// FindWord = "the";
// var x = 0,
//     y = 0;

// for (i = 0; i < Sentence.length; i++) {
//     if (Sentence[i] == FindWord[0]) {
//         for (j = i; j < i + FindWord.length; j++) {
//             if (Sentence[j] == FindWord[j - i]) {
//                 y++;
//             }
//             if (y == FindWord.length) {
//                 x++;
//             }
//         }
//         y = 0;
//     }
// }
// document.write("There are   " + x + "   occerence(s) of the word  " + "'the'.")

//                      Chapter - 26 - 30 Math Method 
// ===========================================================================

// Answer - 1


// positive_float = parseFloat(prompt("Enter a Positive Integer"))
// document.write(("Number: " + positive_float) + " <br> ");

// Round = Math.round(parseFloat(positive_float));
// document.write("Round of Value : " + Round + " <br> ")


// FloorRound = Math.round(parseFloat(positive_float));
// document.write("Floor Value : " + FloorRound + " <br> ")

// CeilRound = Math.ceil(parseFloat(positive_float));
// document.write("Ceil  Value : " + CeilRound)





// Answer - 2

// Negative_float = parseFloat(prompt("Enter a Positive Integer"))
// document.write(("Nnumber: " + Negative_float) + " <br> ");

// Round = Math.round(parseFloat(Negative_float));
// document.write("Round of Value : " + Round + " <br> ")


// FloorRound = Math.round(parseFloat(Negative_float));
// document.write("Floor Value : " + FloorRound + " <br> ")

// CeilRound = Math.ceil(parseFloat(Negative_float));
// document.write("Ceil  Value : " + CeilRound)



// Answer - 3

// var num = +prompt("Enter a Positive Integer");
// Absolute = Math.abs(num)

// document.write("The absolute value of " + num + " is " + Absolute)


// Answer- 4 

// number = Math.random() * 5;
// document.write("Random Dice value is : " + Math.floor(number) + "<br>")

// numbers = Math.random() * 7;
// document.write("Random Dice value is : " + Math.floor(numbers))


// Answer- 5
// number = Math.random() * 5;
// numbers = Math.round(number)
// if (numbers % 2 == 0) {
//     document.write(numbers + "<br> Random value of coin :  Heads")

// } else {
//     document.write(numbers + "<br> Random value of coin :  Tails")
// }

// document.write("<br>")

// number1 = Math.random() * 5;
// numbers1 = Math.round(number1)

// if (numbers1 % 2 == 0) {
//     document.write(numbers1 + "<br> Random value of coin :  Heads")

// } else {
//     document.write(numbers1 + "<br> Random value of coin : Tails")
// }

// // Answer - 6

// number = Math.random() * 101;
// numbers = Math.round(number)

// document.write("Random number between 1 to 100 : " + numbers)



// Answer-7

// user = prompt("Enter your Weight")

// if (user === "50kgs") {

//     a1 = user.replace("kgs", " Kilogram")
//     document.write(a1)

// } else if (user === "50kg") {

//     a2 = user.replace("kg", " Kilogram")
//     document.write(a2)

// } else if (parseInt(user) === 50) {

//     document.write((user) + " Kilogram ")

// } else if (parseFloat(user) === 50.2) {

//     document.write((user) + " Kilogram ")

// }


// Answer - 8
// user_input = +prompt("Enter a number between 1 to 10")
// number = Math.random() * 11;
// numbers = Math.round(number)
// if (numbers != user_input) {

//     document.write("Sorry ! Try again")
// } else {
//     document.write("Congratulation ! You Win")

// }



//                      Chapter - 31 - 34 Date Method 
// ===========================================================================

// Answer - 1

// var d = new Date();
// document.write(d)


// Answer - 2

// // CurrentMonth = d.getMonth();
// month = ["January", "Febrary", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"]
// var currentMonth = month[d.getMonth()];
// document.write("Current Month : " + currentMonth)



// Answer - 3

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var theDay = d.getDay();
// var nameOfToday = dayNames[theDay];
// document.write("Today is " + nameOfToday)


// Answer - 4

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var theDay = d.getDay();
// var nameOfToday = dayNames[theDay];
// if (nameOfToday == "Sat" || nameOfToday == "Sun") {
//     document.write("Its Fun day ")
// } else {
//     document.write("No Fun Day ! beacuse today is  " + nameOfToday)
// }

// Answer - 5

// var theDay = d.getDate();
// var d = new Date();
// if (theDay <= 16) {
//     document.write("Last Days of the month")

// } else {
//     document.write("First fifteen  days of the month")
// }




// Answer - 6 
// var d = new Date();
// document.write("Current Date : " + d + "<br>")
// document.write("Elapsed time 1 jan 1970 : " + d.getTime() + "<br>");
// document.write("Elpsed time in minutes : " + d.getMinutes());



// Answer - 7
// var d = new Date();
// var Time = d.getHours();

// if (Time >= 12) {
//     alert("It's PM")
// } else {



//     alert("It's AM")


// }



// Answer - 8

// var d = new Date();
// var LaterDate = new Date();
// LaterDate.setFullYear(2020, 11, 31, 12, 0, 0, 0);
// document.write("Later Date : " + LaterDate)



// Answer - 9  
// var LaterDate = new Date();
// LaterDate.setFullYear(2020, 3, 23);
// document.write("Later Date : " + LaterDate)
// document.write(LaterDate[d.getDay()]);





//                      Chapter - 34 - 38 Function
// ===========================================================================


// Answer - 1
// function CurrentDateTime() {
//     var d = new Date();
//     document.write(d)
// }
// CurrentDateTime();




// Answer- 2
// function fullname() {

//     FUllName = FirstName + "     " + LastName;
//     document.write(FUllName)

// }
// FirstName = prompt("Enter your First name : ")
// LastName = prompt("Enter your Last name : ")

// fullname()



// Answer- 3
// function AddTwoNumbers(a, b) {

//     return a + b;


// }
// FirstName = +prompt("Enter your First Number : ")
// LastName = +prompt("Enter your Second Number : ")
// No = AddTwoNumbers(FirstName, LastName)
// document.write("Sum of  two Numbers : " + No)


// Answer- 4
// function GreatherTHree(a, b, c) {

//     if (a > b && a > c) {
//         return "A is greater  " + parseInt(a);

//     } else if (b > a && b > c) {
//         return "B is greater  " + parseInt(b);
//     } else
//         return "C is greater  " + parseInt(c);
// }

// FirstNo = +prompt("Find Greather In three Numbers \n Enter First Number : ")
// SecNo = +prompt("Enter Second Number : ")
// ThirNo = +prompt("Enter Third Number : ")

// No = GreatherTHree(FirstNo, SecNo, ThirNo)
// document.write(No)


// Answer- 5
// function Square(no) {

//     return no ** 2;

// }
// No = +prompt("Enter Number for compute square : ")
// Sq = Square(No)
// document.write("Square of " + No + "   is   " + Sq)




// Answer- 6

// function factorialize(num) {
//     if (num === 0 || num === 1)
//         return 1;
//     for (var i = num - 1; i >= 1; i--) {
//         num = num * i;


//     }
//     return num;
// }
// no = +prompt("Enter a no: ")
// a = factorialize(no);
// document.write("Factorial of the " + no + " is " + a)





// // Answer - 7  
// function Counting(St, End) {
//     for (var i = St; i <= End; i++) {

//         document.write(i, "<br>")
//     }
// }
// Start = +prompt("Enter Starting Number ")
// End = +prompt("Enter Ending Number ")

// Counting(Start, End);




// Answer - 8


// function calculateHypotenuse(base, Prependicular) {
//     function calculateSquare(side) {
//         return side * side;
//     }
//     return Math.sqrt(calculateSquare(base) + calculateSquare(Prependicular));
// }

// Base = +prompt("Enter base of the Traiangle")
// Prep = +prompt("Enter prependicular of the Traiangle")

// document.write("Hypotenuse of triangle is :  " + calculateHypotenuse(Base, Prep));


// Answer - 9

// function AreaRec(width, height) {
//     return width * height;
// }
// height = +prompt("Enter the height of the triangle")
// Area = AreaRec(10, height)

// document.write("Area of Rectangle is : " + Area)




// Answer - 10


// function checkPalindrome(OriginalInput) {
//     StringSplit = OriginalInput.split("");
//     var StringJoined = StringSplit.reverse().join("");
//     if (OriginalInput == StringJoined) {
//         document.write(OriginalInput + " is palindrome");
//     } else {
//         document.write(OriginalInput + " is not palindrome");
//     }
// }
// InputString = prompt("Enter String")
// checkPalindrome(InputString)




// Answer - 11

// function titleCase(str) {
//     strs = str.toLowerCase().split(' ');
//     for (var i = 0; i < strs.length; i++) {
//         strs[i] = strs[i].charAt(0).toUpperCase() + strs[i].slice(1);
//     }
//     return strs.join(' ');
// }
// Strings = prompt("Enter a String : ")
// document.write(titleCase(Strings))


// Answer - 12

// function longestWord(string) {
//     var SplitedString = string.split(" ");
//     var longestWord = 0;

//     for (var i = 0; i < SplitedString.length - 1; i++) {
//         if (longestWord < SplitedString[i].length) {
//             longestWord = SplitedString[i].length;
//             var FindWord = SplitedString[i];
//         }
//     }
//     return FindWord;
// }
// SentenceORWord = prompt("Enter a Sentence or word : ")
// document.write(longestWord(SentenceORWord))


// Answer - 13
// function LetterFinder(Strings, Letter) {
//     var x = 0,
//         y = 0;

//     for (i = 0; i < Strings.length; i++) {
//         if (Strings[i] == Letter[0]) {
//             for (j = i; j < i + Letter.length; j++) {
//                 if (Strings[j] == Letter[j - i]) {
//                     y++;
//                 }
//                 if (y == Letter.length) {
//                     x++;
//                 }
//             }
//             y = 0;
//         }
//     }
//     document.write("There are   " + x + "   occerence(s) of the word  " + Letter)
// }
// Strings = prompt("Enter a String : ")
// Letter = prompt("Enter a Letter which you want to find")
// LetterFinder(Strings, Letter)


// Answer - 14

// function calcCircumference(r) {

//     return 2 * 3.142 * r;
// }
// Radius = prompt("Enter a Radius : ")

// document.write("Circumfernce of Circle is : " + calcCircumference(Radius))



// function calcArea(r) {

//     return 3.142 * r * r;
// }
// Radius = prompt("Enter a Radius : ")

// document.write("Area of Circle is " + calcArea(Radius))