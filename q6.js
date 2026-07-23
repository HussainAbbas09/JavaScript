var StudentName = prompt("Enter your name");
var EnglishMarks = Number(prompt("Enter your English marks"));
var MathMarks = Number(prompt("Enter your Math marks"));
var ScienceMarks = Number(prompt("Enter your Science marks"));
var TotalMarks = EnglishMarks + MathMarks + ScienceMarks;
var Percentage = (TotalMarks / 300) * 100;
alert("Student Name: " + StudentName + "\nTotal Marks: " + TotalMarks + "\nPercentage: " + Percentage.toFixed(2) + "%");