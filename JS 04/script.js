// q1:
var colors = ["Red", "Blue", "Green", "Yellow"];
console.log(colors[0])
console.log(colors[3])
colors[1] = "Black"
console.log(colors)

// q2:
var student = {
    name: "Ali",
    age: 20,
    city: "Karachi"
};
console.log(student.name)
console.log(student.city)
student.city = "Lahore"
console.log(student)

// q3:
var students = [
    {
        name: "Ali",
        marks: 70,
        atten: true
    },
    {
        name: "Ahmed",
        marks: 50,
        atten: false
    },
    {
        name: "Zubair",
        marks: 90,
        atten: true
    }
];
console.log(students[0].marks)
console.log(students[1].atten)
students[2].marks = 95
students[1].atten = true
console.log(students)

// q4:
var students = [
    {
        name: "Ali",
        marks: 70,
        atten: true
    },
    {
        name: "Ahmed",
        marks: 50,
        atten: false
    },
    {
        name: "Zubair",
        marks: 95,
        atten: true
    }
]
for (var i=0; i<students.length; i++){
    console.log(students[i].name + " - " + students[i].marks + " - " + students[i].atten)
}

// bonus question
var students = [
    {
        name: "Ali",
        marks: 70,
        atten: true
    },
    {
        name: "Ahmed",
        marks: 50,
        atten: false
    },
    {
        name: "Zubair",
        marks: 95,
        atten: true
    }
]
var totalMarks = 0;
for (var i=0; i<students.length; i++){
    totalMarks += students[i].marks;
}
console.log("Total Marks: " + totalMarks)
var averageMarks = totalMarks / students.length;
console.log("Average Marks: " + averageMarks)
for (var i=0; i<students.length; i++){
    students[i].marks += 5;
}
console.log(students)