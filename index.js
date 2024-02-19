function showYoungestStudent(students) { 
    let youngestStudent=students[0];
    for (let i = 0; i< students.length; i++) {
        if (students[i].age < youngestStudent.age) {
            youngestStudent = students[i];   
        }
    }
    console.log(youngestStudent.name);
}
var students= [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 2 },
    { name: 'Charlie', age: 21 },
];
showYoungestStudent(students);