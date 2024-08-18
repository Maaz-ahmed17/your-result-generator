
let subject1 = prompt("Enter subject 1 name:");
let subject2 = prompt("Enter subject 2 name:");
let subject3 = prompt("Enter subject 3 name:");
let subject4 = prompt("Enter subject 4 name:");
let subject5 = prompt("Enter subject 5 name:");
let subject6 = prompt("Enter subject 6 name:");


let totalMarks = 100;
let obtainedMarks1 = parseInt(prompt(`Enter obtained marks for ${subject1}:`));
let obtainedMarks2 = parseInt(prompt(`Enter obtained marks for ${subject2}:`));
let obtainedMarks3 = parseInt(prompt(`Enter obtained marks for ${subject3}:`));
let obtainedMarks4 = parseInt(prompt(`Enter obtained marks for ${subject4}:`));
let obtainedMarks5 = parseInt(prompt(`Enter obtained marks for ${subject5}:`));
let obtainedMarks6 = parseInt(prompt(`Enter obtained marks for ${subject6}:`));


let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3 + obtainedMarks4 + obtainedMarks5 + obtainedMarks6;
let totalMarksAllSubjects = totalMarks * 6;
let percentage = (totalObtainedMarks / totalMarksAllSubjects) * 100;


document.write("<h1>Result</h1>");
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write(`<tr><td>${subject1}</td><td>${totalMarks}</td><td>${obtainedMarks1}</td></tr>`);
document.write(`<tr><td>${subject2}</td><td>${totalMarks}</td><td>${obtainedMarks2}</td></tr>`);
document.write(`<tr><td>${subject3}</td><td>${totalMarks}</td><td>${obtainedMarks3}</td></tr>`);
document.write(`<tr><td>${subject4}</td><td>${totalMarks}</td><td>${obtainedMarks4}</td></tr>`);
document.write(`<tr><td>${subject5}</td><td>${totalMarks}</td><td>${obtainedMarks5}</td></tr>`);
document.write(`<tr><td>${subject6}</td><td>${totalMarks}</td><td>${obtainedMarks6}</td></tr>`);
document.write("<tr><td>Total</td><td>" + totalMarksAllSubjects + "</td><td>" + totalObtainedMarks + "</td></tr>");
document.write("<tr><td>Percentage</td><td></td><td>" + percentage.toFixed(2) + "%</td></tr>");
document.write("</table>");
