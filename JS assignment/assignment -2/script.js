// Array
let students = ["Aiman", "Javeria", "Mahnoor", "Maham", "Anushah"];
console.log(students)


// remove last one(Anushah) ...using pop
students.pop()
console.log(students)


// add at the last(Sameera) ... using push
students.push("Sameera")
console.log(students)



// removing 1st value (Aiman)... using shift
students.shift()
console.log(students)



// Adding in the beginning of Array
students.unshift("Anaya")
console.log(students)



// Now using splice
students.splice(3, 2, "Abiha")
console.log(students)



// add as an index
let vegetable = []
console.log(vegetable)

vegetable[0] = "tomato"
console.log(vegetable)







// TOPIC: For Loop ... 1st printing hello 10 times
for (var i=0; i<=10; i++){
    console.log("hello", i);
}


// Now printing the table of 2
for (var a=1; a<=10; a++){
    console.log("2", "*", a, "=", a*2)
}




// Now printing the table of 3
for(var b=1; b<=10; b++){
    console.log("3", "*", b, "=", b*3)

}



// Now agian printing the table of 2, upto 20
for(let c=1; c<=20; c++){
   console.log("2", "*", c, "=", c*2)
}




// alert practice strt
alert("Hey! this is Aiman Maroof");
alert("Welcome to the CodingWorld");
alert("Are you Ready?");
alert("let's start");



// Now making question using prompt
let capital = prompt("What is the capital of Pakistan?");

// adding if else step
if(capital === "islamabad"){
    alert("Correct! The capital of Pakistan is Islamabad");
} else{
    alert("Incorrect. The correct answer is Islamabad");
}
