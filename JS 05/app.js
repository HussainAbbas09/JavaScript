console.log("-------------------level 1-------------------")

function sayHello (){
    console.log("Hello  World")
}
sayHello()



function showName (name){
    console.log(name)
}
showName("Aun")


function add (a,b){
    return a + b
}
console.log(add(2,3))



function sub (a,b){
    return a - b
}
console.log(sub(8,3))



function mult (a,b){
    return a * b
}
console.log(mult(2,3))



function square (a){
    return a**2
}
console.log(square(3))


function cube (a){
    return a**3
}
console.log(cube(2))

function getFullName (firstName, lastName){
    console.log(`${firstName} ${lastName}`)
}
getFullName("Aun","Zaidi")




console.log("-------------------level 2-------------------")

function isEven(a){
    if( a%2 == 0){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
isEven(2)
isEven(3)


function isPositive(a){
    if( a >= 0){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
isPositive(2)
isPositive(-3)


function findGreater(a,b){
    if( a > b){
        console.log(a)
    }
    else{
        console.log(b)
    }
}
findGreater(2,3)


function canVote(a){
    if( a >= 18){
        console.log("Eligible")
    }
    else{
        console.log("Not Eligible")
    }
}
canVote(45)
canVote(12)




function checkNum(num){
    if( num%2 == 0){
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
}
checkNum(2)
checkNum(3)

function getGrade(marks){
    if(marks >= 80){
        console.log("A Grade")
    }
    else if(marks >= 70){
        console.log("B Grade")
    }
    else if(marks >= 60){
        console.log("C Grade")
    }
    else if(marks >= 50){
        console.log("D Grade")
    }
    else if(marks < 50){
        console.log("Fail")
    }

}

getGrade(98)
getGrade(76)
getGrade(65)
getGrade(57)
getGrade(49)


function isDivisibleBy5(num){
    if(num%5 == 0){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
isDivisibleBy5(10)
isDivisibleBy5(9)



console.log("-------------------level 3-------------------")

function getLength(str){
    var length = 0;
    for (let i = 0; i < str.length; i++) {
        length += 1;
    }
    console.log(length)
}
getLength("Aun")


function toUpperCase(str){  
    console.log(str.toUpperCase())
}
toUpperCase("aun")


function getFirstCharacter(str){
    console.log(str[0])
}
getFirstCharacter("Aun")


function getLastCharacter(str){
    console.log(str[str.length-1])
}
getLastCharacter("Aun")


function isLongWord(word){
    if(word.length > 5){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
isLongWord("Animal")


function calculateDiscount(price, discount){
    let result = ((price/100) * discount)
    console.log(result)
}

calculateDiscount(1000,20)


function calculateAge(birthYear, currentYear){
    console.log(currentYear - birthYear)
}
calculateAge(2004, 2026);


function convertToMinutes(hours){
    console.log(hours * 60)
}
convertToMinutes(2)
