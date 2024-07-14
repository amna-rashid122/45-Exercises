/*______________________________________________________________________________________________________________________
---------------------------------------------------Question#2----------------------------------------------------------
Personal Message: Store a person’s name in a variable, and print a message to that person.
 Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”*/
let personName = "Eric";
console.log("hello", personName, "would you like to learn some python today?");

/*____________________________________________________________________________________________________________________
 ----------------------------------------------------Question#3-----------------------------------------------------
 Name Cases: Store a person’s name in a variable, and then print that person’s name 
 in lowercase, uppercase, and titlecase.*/
let MyName: string = "Amna";
console.log(MyName.toUpperCase());
console.log(MyName.toLowerCase());
console.log(MyName.charAt(0).toUpperCase() + MyName.slice(1).toLowerCase());

/*____________________________________________________________________________________________________________________
 --------------------------------------------------Question#4---------------------------------------------------------
  Famous Quote: Find a quote from a famous person you admire. 
 Print the quote and the name of its author. Your output should look something like the following, 
including the quotation marks:
  Albert Einstein once said, “A person who never made a mistake never tried anything new.”*/
console.log(
  'Reon Schutte once said,"The way to get started is to quit talking and begin doing"'
);

/*____________________________________________________________________________________________________________
--------------------------------------------------Question#5----------------------------------------------------
 famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called
 famous_person. Then compose your message and store it in a new variable called message. Print your message.*/
let famousPerson = "Reon Schutte";
let message =
  'once said,"The way to get started is to quit talking and begin doing"';
console.log(famousPerson, message);

/*_____________________________________________________________________________________________________________________
--------------------------------------------------Question#6---------------------------------------------------
 Stripping Names: Store a person’s name, and include some whitespace characters
  at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once.
  Print the name once, so the whitespace around the name is displayed. Then print the name
   after stripping the white spaces.*/
let myName = "\t\n Amna \t\n";
console.log(myName);
console.log(myName.trim());

/*__________________________________________________________________________________________________________________
-----------------------------------------------Question#7---------------------------------------------------------
 Number Eight: Write addition, subtraction, multiplication, and division operations
 that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
Question#8. You should create four lines that look like this:
console.log(5 + 3)*/
console.log(5 + 3)
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);

/*_________________________________________________________________________________________________________________
--------------------------------------------------Question#9--------------------------------------------------------
 favorite Number: Store your favorite number in a variable. Then, using that variable, 
create a message that reveals your favorite number. Print that message.*/
let myFavouriteNumber = 8;
console.log(`my fovourite number is ${myFavouriteNumber}`);

/*___________________________________________________________________________________________________________________
-------------------------------------------------Question#10---------------------------------------------------------
 Adding Comments: Choose two of the programs you’ve written, and add at least one 
comment to each. If you don’t have anything specific to writebecause your programs are too simple
 at this point, just add your name and the current date at the top of each program file.
Then write one sentence describing what the program does.*/

/*Comments in Typescript are annotations within the code used for documentation or
to temporarily disable parts of it , and they are ignored by the compiler during code execution

// I took Q7 in this question we have to perform 4 different operations*/
console.log(5 + 3); // this will add numbers
console.log(10 - 2); // this will subtract numbers
console.log(2 * 4); // this will multiply numbers
console.log(16 / 2); // this will divide numbers

/* Here i took another question in this question we have to store a person's name 
in a variable and print them a message*/

let Message = "Amna"; // it store person's name in variable
console.log(`Hello ${Message} would you like to learn some Typescript today?`);
// here we print a message to that person

/*__________________________________________________________________________________________________________________
-----------------------------------------------------Question#11-----------------------------------------------------
  Names: Store the names of a few of your friends in a array called names.
  Print each person’s name by accessing each element in the list, one at a time.*/
let names = ["Amna", "Hamza", "Kulsoom", "Rasheed", "Miral"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);

/*__________________________________________________________________________________________________________________
-------------------------------------------------------Question#12--------------------------------------------------
  Greetings: Start with the array you used in Exercise 11,
 but instead of just printing each person’s name, print a message to them. 
 The text of each message should be the same, but each message should be personalized with 
 the person’s name.*/
let PersonNames = ["Amna", "Hamza", "Kulsoom", "Rasheed", "Miral"];
console.log(`Hello ${PersonNames[0]}, How are you? I hope you are doing good`);
console.log(`Hello ${PersonNames[1]}, How are you? I hope you are doing good`);
console.log(`Hello ${PersonNames[2]}, How are you? I hope you are doing good`);
console.log(`Hello ${PersonNames[3]}, How are you? I hope you are doing good`);
console.log(`hello ${PersonNames[4]}, How are you? I hope you are doing good`);

/*_____________________________________________________________________________________________________________________
 ----------------------------------------------------Question#13----------------------------------------------------
 our Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
 and make a list that stores several examples. Use your list to print a series of statements about these items,
  such as “I would like to own a Honda motorcycle.”*/
let transportationMode = ["Toyota Corolla", "Land Cruiser Prado", "SUV"];
transportationMode.forEach((Mode) =>
  console.log(`I would like to buy a ${Mode}`)
);
console.log(`But ${transportationMode[1]} is my Dream Car`);

/*___________________________________________________________________________________________________________________
----------------------------------------------- -Question#14---------------------------------------------------------
 Guest List: If you could invite anyone, living or deceased, to dinner, 
who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner.*/
let GuestList = ["Khizra", "Esha", "Fatima"];
GuestList.forEach((invitation) =>
  console.log(`"Hey ${invitation}, Let's make this weekend unforgettable with a cozy dinner at my place!
     Come for the food, stay for the laughter.`)
);

/*__________________________________________________________________________________________________________________
----------------------------------------------------------Question#15----------------------------------------------------
 Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest
 who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
let newGuestList = ["khizra", "Esha", "Fatima"];

console.log(`${newGuestList[1]} is not coming`);

newGuestList.splice(1, 1, "Minahil");

newGuestList.forEach((newinvitation) =>
  console.log(`"Hey ${newinvitation}, Let's make this weekend unforgettable with a cozy dinner at my place!
     Come for the food, stay for the laughter.`)
);

/*___________________________________________________________________________________________________________________
------------------------------------------------- Question#16---------------------------------------------------------
 More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people
 that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages,one for each person in your list.*/
let moreGuests = ["khizra", "eisha", "fatima"];
console.log(
  `${moreGuests[0]} will unfortunately be unable to join us for dinner."`
);

moreGuests.splice(0, 1, "Mariam");

console.log(`Hello everyone, we have secured a larger dining table. Therefore, we can extend 
  our invitation to additional guests."`);

moreGuests.unshift("sobia");
moreGuests.push("Hafsa");

let middleGuest: number = Math.floor(moreGuests.length / 2);
moreGuests.splice(middleGuest, 0, "Asala");
moreGuests.forEach((moreinvitation) =>
  console.log(`"Hey ${moreinvitation}, Let's make this weekend unforgettable with a cozy dinner at my place!
     Come for the food, stay for the laughter.`)
);

/*_________________________________________________________________________________________________________________
------------------------------------------ Question#17--------------------------------------------------------------
 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a 
name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure 
you actually have an empty list at the end of your program.*/

let shrinkGuestList = ["khizra", "eisha", "fatima"];
console.log(`${shrinkGuestList[1]} is not coming`);
shrinkGuestList.splice(0, 1, "Mariam");

console.log(`Hello everyone, we have secured a larger dining table. Therefore, we can extend 
  our invitation to additional guests."`);

shrinkGuestList.unshift("sobia");
shrinkGuestList.push("Hafsa");

let mddleGust: number = Math.floor(shrinkGuestList.length / 2);
shrinkGuestList.splice(middleGuest, 0, "Asala");

shrinkGuestList.forEach((shrinkinvitation) =>
  console.log(`"Hey ${shrinkinvitation}, Let's make this weekend unforgettable with a cozy dinner at my place!
     Come for the food, stay for the laughter.`)
);

console.log(
  "Unfortunely, new dinner table wont arrive in time for the dinner, so I have space for only 2 guests for dinner"
);
while (shrinkGuestList.length > 2) {
  let removeGuest = shrinkGuestList.pop();
  console.log(`Sorry, ${removeGuest} I cant invite you to dinner`);
}
console.log("invitation to the last 2 guests");
shrinkGuestList.forEach((guestinvitation) =>
  console.log(`Hey ${guestinvitation} you are still invited for dinner`)
);

shrinkGuestList.pop();
shrinkGuestList.pop();

console.log(shrinkGuestList, "Empty List");

/*________________________________________________________________________________________________________________________
-------------------------------------------------Question#18-------------------------------------------------------------
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order
 has changed.*/

let favouritePlaces = ["Switzerland", "Maldives", "Norway", "japan", "Bali"];
console.log("Orignal Order", favouritePlaces);

console.log("Alphabetical Order", [...favouritePlaces].sort());

console.log("Still in Orignal Order", favouritePlaces);

console.log("reverse Order", [...favouritePlaces].reverse());

console.log("still in its orginal order", favouritePlaces);

console.log(" Orignal Array reverse order", favouritePlaces.reverse());

console.log("back to orignal order", favouritePlaces.reverse());

console.log("sorted in alphabetical order", favouritePlaces.sort());

console.log("orginal array in reversed order", favouritePlaces.reverse());

/*___________________________________________________________________________________________________________________
---------------------------------------------------Question#19------------------------------------------------------
Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
print a message indicating the number of people you are inviting to dinner.*/

let guestList = ["khizra", "esha", "fatima"];
let lengthofList = guestList.length;
console.log(`I am  inviting ${lengthofList} guests to dinner`);

/*____________________________________________________________________________________________________________________
---------------------------------------------------Question#20---------------------------------------------------------
Think of something you could store in a array. For example, you could make a list of mountains, rivers,
 countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.*/

let languages = ["Chinies", "Urdu", "Korean", "English", "German", "Japanies"];
console.log("list of languages");
languages.forEach((languages) => console.log(languages));

/*_____________________________________________________________________________________________________________________
------------------------------------------------Question#21-----------------------------------------------------------
They think of something you could store in a TypeScript Object.
 Write a program that creates Objects containing these items.*/

type person = {
  name: string;
  age: number;
  gender: string;
};
let person = {
  Name: "Amna",
  Age: "16",
  Gender: "Female",
};
console.log(person);

/*_________________________________________________________________________________________________________________
---------------------------------------------------Question#22------------------------------------------------------
Intentional Error: If you haven’t received an array index error in one of your programs yet,
 try to make one happen. Change an index in one of your programs to produce an index error.
  Make sure you correct the error before closing the program.*/

let fruits = ["Strawberry", "Grapes", "Cherry", "Kiwi", "Pineapple"];

// index error
console.log(fruits[6]);

// error removed
console.log(fruits[4]);

/*_________________________________________________________________________________________________________________
 ----------------------------------------------Question#23----------------------------------------------------------
Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction 
for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

let language = "korean";
/*test no#01
................................TRUE STATEMENT...............................*/
console.log("is language == 'korean'? I predict True");
console.log(language == "korean");
//................................FALSE STATEMENT.............................
console.log("Is language =='English'? I pridict false");
console.log(language == "English");

/*test no#02
...................................TRUE STATEMENT.................................*/
let car = "SUV";

console.log("is car  == ' SUV'? I predict true");
console.log(car == "SUV");
//...................................FALSE STATEMENT...............................

console.log(car == "SUV");

/*test no#03
.......................................TRUE STATEMENT............................*/
let subject = "computer";
console.log("is subject =='computer'? I predict true");
console.log(subject == "computer");
//......................................FALSE STSTEMENT............................
console.log("Is subject == 'science'? I predict false");
console.log(subject == "science");

/*test no#04
.........................................TRUE STSTEMENT..............................*/
let pen = "Black";
console.log("is pen =='Black'? I predict true");
console.log(pen == "Black");
//......................................FALSE STSTEMENT............................
console.log("Is pen == 'Blue'? I predict false");
console.log(pen == "Blue");

/*test no#04
.........................................TRUE STSTEMENT..............................*/
let fruit = "kiwi";
console.log("is fruit =='kiwi'? I predict true");
console.log(fruit == "kiwi");
//......................................FALSE STSTEMENT............................
console.log("Is fruit == 'Apple'? I predict false");
console.log(fruit == "Apple");

/*_____________________________________________________________________________________________________________-
-----------------------------------------------Question#24-----------------------------------------------------
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
 write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/

//test no#01

// Tests for equality and inequality with strings

let Mycar = "parado";
console.log(Mycar == "parado"); // true

console.log(Mycar != "parado"); // false

//  Tests using the lower case function

console.log(Mycar.toLowerCase() == "parado"); // true
console.log(Mycar.toLowerCase() == "Parado"); // false

// Numerical tests involving equality and inequality,
let num1 = 7;
let num2 = 4;
console.log(num1 != num2); // true
console.log(num1 == num2); //  false)

// greater than and less than
console.log(num1 > num2); // true
console.log(num1 < num2); // false

// greater than or equal to, and less than or equal to

console.log(num1 >= num2); // true
console.log(num1 <= num2); // false

// Tests using "and" and "or" operators

console.log(num1 > num2 && num1 != num2); // true

console.log(num1 < num2 || num1 == num2); // false

// Test whether an item is in a array
let vegetables = ["Carrot", "Chilli", "Capsicum", "Cucumber"];
console.log('Is "Cucumber" in vegetables?');

console.log(vegetables.includes("Cucumber"));

// Test whether an item is not in a array
console.log('Is "Cucumber" not in vegetables?');

console.log(!vegetables.includes("Cucumber"));

/*________________________________________________________________________________________________________________
------------------------------------------------------Question#25---------------------------------------------------

Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color
 and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player 
just earned 5 points.

• Write one version of this program that passes the if test and another that fails.
 (The version that fails will have no output.)*/

let AlienColor = "green";

if (AlienColor === "green") {
  console.log("congratulations you earned 5 points");
}
if (AlienColor === "red") {
  console.log("Falis");
}

/*________________________________________________________________________________________________________________
 -----------------------------------------------Question#26--------------------------------------------------------

Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/

let alienColour = "green";

if (alienColour == "green") {
  console.log(" congratulations! you earned 5 point");
} else {
  console.log("you earned 10 points");
}

if (alienColour == "red") {
  console.log("congratulations! you earned 5 point");
} else {
  console.log("you earned 10 points");
}

/*____________________________________________________________________________________________________________________
-------------------------------------------------------Question#27----------------------------------------------------
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

//      version 1
let Aliencolor = "green";
if (Aliencolor === "green") {
  console.log("(version 1) Alien is green , You earned 5 points");
} else if (Aliencolor === "yellow") {
  console.log("Alien is yellow, You earned 10 points");
} else {
  console.log("Alien is red, You earned 15 points");
}

//  version 2

let AlienColor2 = "red";
if (AlienColor2 === "yellow") {
  console.log("Alien is yellow , You earned 5 points");
} else if (AlienColor2 === "red") {
  console.log("(version 2) Alien is red, You earned 10 points");
} else {
  console.log("Alien is green, You earned 15 points");
}

//  version 3
let AlienColor3 = "green";
if (AlienColor3 === "yellow") {
  console.log("Alien is yellow , You earned 5 points");
} else if (AlienColor3 === "red") {
  console.log("Alien is red, You earned 10 points");
} else {
  console.log("(version 3) Alien is green, You earned 15 points");
}

/*________________________________________________________________________________________________________________
--------------------------------------------------Question#28------------------------------------------------
Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age,
 and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.*/

let personStage = 100;
if (personStage < 2) {
  console.log("You are a baby");
} else if (personStage >= 2 && personStage < 4) {
  console.log("You are a toddler");
} else if (personStage >= 4 && personStage < 13) {
  console.log("You are a kid");
} else if (personStage >= 13 && personStage < 20) {
  console.log("You are a teenager");
} else if (personStage >= 20 && personStage < 65) {
  console.log("You are an adult");
} else {
  console.log("You are an elder");
}

/*______________________________________________________________________________________________________________
----------------------------------------Question#29-------------------------------------------------------------
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if 
statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
 If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

let favoriteFruit = ["Strawberry", "Cheery", "Kiwi"];

if (favoriteFruit.includes("Strawberry")) {
  console.log("Strawberry is my favorite fruit");
}
if (favoriteFruit.includes("Cheery")) {
  console.log("Cherry is my favorite fruit");
}
if (favoriteFruit.includes("Mango")) {
  console.log("i like Mango");
}
if (favoriteFruit.includes("Kiwi")) {
  console.log("Kiwi is my favorite fruit");
}
if (favoriteFruit.includes("Banana")) {
  console.log("I like Banana");
}

/*________________________________________________________________________________________________________________
--------------------------------------------------Question#30-----------------------------------------------------

Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that
 will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to
  each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/

let userName = ["Admin", "Amna", "Khizra", "Fatima"];
userName.forEach((login) => {
  if (login === "Admin")
    console.log(`Hello ${login}, would you like to see a status report?`);
  else {
    console.log(`Hello ${login}, thank you for logging in again🤍`);
  }
});

/*_________________________________________________________________________________________________________________
----------------------------------------------------Question#31----------------------------------------------------
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/

let Usernames = ["Sania", "Amna", "Mariam", "Minahil"];
Usernames = [];
if (Usernames.length === 0) {
  console.log("We need to find some users!😑");
} else {
  console.log("ALL USERS HAS BEEN REMOVED!");
}

/*________________________________________________________________________________________________________________
----------------------------------------------Question#32----------------------------------------------------------
Checking Usernames: Do the following to create a program that simulates how websites ensure that 
everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames
 are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, 
print a message that the person will need to enter a new username. If a username has not been used,
 print a message saying that the username is available.*/

let current_userNames = ["Amna", "Sania", "Eisha", "Minahil"];
let new_usersNames = ["kulsoom", "Rasheed", "Amna", "Sania", "Mariam"];

new_usersNames.forEach((users) => {
  let condition01 = current_userNames.some(
    (current_userNames1) =>
      current_userNames1.toLowerCase() === users.toLowerCase()
  );
  if (condition01) {
    console.log(`sorry this ${users} username is not available`);
  } else {
    console.log(`this ${users} username is aveilable`);
  }
});

/*___________________________________________________________________________________________________________________
------------------------------------------Question#33-----------------------------------------------------------
Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th,
 except 1, 2, and 3.

 • Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number.
 Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/

let ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// step 02 loop through the array
ordinalNumbers.forEach((number) => {
  //step 03 use of if-else chain to dermine the proper ordinal Ending
  if (number === 1) {
    console.log(`${number}st`);
  } else if (number === 2) {
    console.log(`${number}nd`);
  } else if (number === 3) {
    console.log(`${number}rd`);
  } else {
    console.log(`${number}th`);
  }
});

/*____________________________________________________________________________________________________________
  ------------------------------------------Qusetion#34--------------------------------------------------------
   Pizzas: Think of at least three kinds of your favorite pizza.
 Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing
 just the name of the pizza. For each pizza you should have one line of output containing 
 a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states 
how much you like pizza. The output should consist of three or more lines about 
the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/

let favoritePizza = [
  "BBQ Pizza",
  "Chicken Tikka Pizza",
  "Double Cheeze Margherita Pizza",
];
//
for (let i = 0; i < favoritePizza.length; i++) {
  console.log(favoritePizza[i]);
}

for (let i = 0; i < favoritePizza.length; i++) {
  console.log(`I like ${favoritePizza[i]}`);
}
console.log("margherita is classic and delicious");
console.log("chicken tikka is the craziest flavor pizza!");
console.log("BBQ pizza will always be onthe top off my pizza's list 😋 ");
console.log("I LOVEEE PIZZZA'S!!!!");

/*________________________________________________________________________________________________________
-------------------------------------------Question#35------------------------------------------------------
Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
 • Modify your program to print a statement about each animal, such as A dog would make a great pet.
  • Add a line at the end of your program stating what these animals have in common. 
  You could print a sentence such as Any of these animals would make a great pet!*/

let animals = ["cat", "dog", "parrot", "turtle"];

for (let i = 0; i < animals.length; i++) {
  console.log(`A ${animals[i]} is very humble and kind animal`);
}
console.log(
  "These animals share habits like grooming, exploring, social interaction, territoriality, feeding routines."
);

/*__________________________________________________________________________________________________________
-----------------------------------------------Question#36------------------------------------------------
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed 
on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it.
 Call the function.*/

 function make_shirt(size : string , printmessage: string){
  console.log(`you selected ${size} size shirt with ${printmessage} print on it`)
 }
 make_shirt ("small", "'never stop learning coz life never stops teaching!!'");

 /*_____________________________________________________________________________________________________________
 -------------------------------------------Question#37----------------------------------------------------------
 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that 
 reads I love TypeScript.
  Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
 function make_Shirt (size1 : string="large", printmessages : string ="I LOVE TYPEsCRIPT"){
  console.log(`This shirt is '${size1}' with  '${printmessages}' prints onit`);
 }
make_Shirt()
make_Shirt("small")
make_Shirt("medium" , " I'm a SUMMER lover 😎");

/*___________________________________________________________________________________________________________
------------------------------------------Question#38------------------------------------------------------------
Cities: Write a function called describe_city() that accepts the name of a city and its country.
     The function should print a simple sentence, such as Karachi is in Pakistan. 
     Give the parameter for the country a default value.
     Call your function for three different cities, at least one of which is not in the default country.
*/
 function describe_city(city : string = "lahore" , country : string = "PAKISTAN" ){
  console.log(`${city} is in ${country}`);
 }
 describe_city()
 describe_city("islamabad")
describe_city("KARACHI")
describe_city("Tokyo" , "Japan");

/*__________________________________________________________________________________________________________________
-------------------------------------------------Question#39--------------------------------------------------------
 City Names: Write a function called city_country() that takes in the name of a city and its country.
      The function should return a string formatted like this:

    "Lahore, Pakistan"

    Call your function with at least three city-country pairs, and print the value that’s returned.
*/
function city_country(city : string ="lahore", country : string= "PAKKISTAN"){
  console.log(`"${city},${country}"`)
}
city_country()
city_country("kARACHI")
city_country("ISlamabaad")

/*__________________________________________________________________________________________________________________
----------------------------------------------Question#40---------------------------------------------------------
Album: Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title, and it should return a Object containing these
 two pieces of information. Use the function to make three dictionaries representing different albums.
  Print each return value to show that Objects are storing the album information correctly. 
  Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
  If the calling line includes a value for the number of tracks, add that value to the album’s Object.
 Make at least one new function call that includes the number of tracks on an album.
*/

function make_album (artist_name: string, album_title: string, tracks?: number){
  let album : { artist : string,title : string, tracks? : number} ={
             artist: artist_name,
             title: album_title,
  }
     if (tracks !== undefined){
      album.tracks = tracks;
     }
  
     return album;
   }
  
  let album1= make_album("BTS", "love your self");
  let album2 = make_album("BlacckPink", "The album");
  let album3 = make_album("babyMonster","first step", 7);
  
   console.log(album1)
   console.log(album2)
   console.log(album3)

   /*___________________________________________________________________________________________________________
   -------------------------------------------Question#41----------------------------------------------------
   Magicians: Make a array of magician’s names. 
Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
   */
 let name_magicians = ["jk","rikve","vinsenzo","V"]
 function show_magicians (Magicians_Name: string[]){
  Magicians_Name.forEach(Magicians => {
          console.log(Magicians)
      });
  }
  
  show_magicians(name_magicians)
  
  /*_________________________________________________________________________________________________________________
  ----------------------------------------Question#42------------------------------------------------------------
Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each 
 magician’s name. 
Call show_magicians() to see that the list has actually been modified.
*/
let Magicians_Name1 = ["jk","rikve","vinsenzo","V"]
function show_magicians1 (Magicians_Name1: string[]){
Magicians_Name1.forEach(Magicians => {
        console.log(Magicians)
    });
}

function make_great (Magicians_Name1 : string[]){
    return Magicians_Name1.map(Magicians => `The Great ${Magicians}`)
    }

let great_magicians= make_great(Magicians_Name1)
show_magicians1(great_magicians)

/*_________________________________________________________________________________________________________________
---------------------------------------Question No 43 --------------------------------------------------------------

Q 43: Unchanged Magicians: Start with your work from Exercise 40.
 Call the function make_great() with a copy of the array of magicians’ names.
  Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one array with
 the Great added to each magician’s name.
*/

 let Magicians_Name2 = ["jk","rikve","vinsenzo","V"]
function show_magicians2 (Magicians_Name2: string[]){
Magicians_Name2.forEach(Magicians => {
        console.log(Magicians)
    });
}

function make_great1 (Magicians_Name2 : string[]){
    return Magicians_Name2.map(Magicians => `The Great ${Magicians}`)
    }

    let copy_magicians_name = Magicians_Name2.slice()

    let copy_great_name = make_great1(copy_magicians_name)

    console.log("Orginal array\n")
    show_magicians2(Magicians_Name2) 

    console.log("copy array\n")
    show_magicians2(copy_great_name)

    /*__________________________________________________________________________________________________________________
    -----------------------------------------Question No 44 -----------------------------------------------------------

    Q44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
    The function should have one parameter that collects as many items as the function call provides,
     and it should print a summary of the sandwich that is being ordered.
     Call the function three times, using a different number of arguments each time.*/

     function Sandwitch (...SandwitchItems: string[]){

        console.log("\n Making sandwitch with following items🥪 \n")

        SandwitchItems.forEach(items => console.log("." + items))

            console.log("\nEnjoy your Sandwitch 🥪😋\n")
        
     }
     Sandwitch("vegtables","coleslaw","Mayo","corn","ketchup")

     Sandwitch("chicken","coleslaw","cheese")

     Sandwitch("english masterd","coleslaw")

     /*________________________________________________________________________________________________________________
     --------------------------------------Question No 45 ---------------------------------------------------------------
          
    Q 45: Cars: Write a function that stores information about a car in a Object. 
    The function should always receive a manufacturer and a model name.
     It should then accept an arbitrary number of keyword arguments. 
     Call the function with the required information and two other name-value pairs, 
     such as a color or an optional feature.
     Print the Object that’s returned to make sure all the information was stored correctly*/

     function create_car(manufacturer: string, model: string, ...options: string[]) {
        let car: { [key: string]: any } = {
            manufacturer: manufacturer,
            model: model
          };
     
          options.forEach(option => {
              let [key, value] = option.split(":");
              car[key.trim()] = value.trim();
            });
            return car;
          }
          let my_car = create_car("Toyota", "Land Cruiser Prado", "color:black", "auto_dimming_mirror:true");
          console.log(my_car);



































