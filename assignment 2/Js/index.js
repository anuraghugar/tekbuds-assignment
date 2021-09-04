// This function displays the Welcome message.
function WelcomeMessage(){
    let message = `Hello Anurag hugar, Good Evening....!!!!`;
    document.getElementById('message').innerHTML = message;
}

// This function accepts with multiple parameters.
function WithParameters(fname, lname, age){
    document.getElementById('details').innerHTML = `My name is ${fname} ${lname}, I am ${age} years old.`;
}

// This function accepts objects as parameters.
function ObjectWithParameters(person){
    document.getElementById('details2').innerHTML = `My name is ${person.fname} ${person.lname}, I am ${person.age} years old.`;
}

// This functions accepts default parameters and display message.
function DefaultMessage(message="Hello, Anurag Hugar, Good Morning"){
    document.getElementById('message2').innerHTML = message;
}

// This functions displays person details.
function PersonDetails(){
    let person = {
        firstName: "Anurag",
        lastName: "Hugar",
        age: 25,
        Hobbies: ["Music", "Cricket", "Football", "Basketball"]
    }

    document.getElementById('message3').innerHTML = 'My name is ' + person.firstName + person.lastName + ', I am ' + person.age + ' years old...';
    document.getElementById('message4').innerHTML = person.Hobbies;
}

function EmployeeDetails(){
    let employeeDetails = [
        {empId: 1001, empFname: "Anurag", empLName: "Hugar", designation: "Frontend developer"},
        {empId: 1002, empFname: "Ishwar", empLName: "Deoolkar", designation: "Senior Frontend developer"},
        {empId: 1003, empFname: "Sagar", empLName: "Ghadi", designation: "UI developer"},
        {empId: 1004, empFname: "Kiran", empLName: "Ghadi", designation: "Civil Engineer"},
        {empId: 1005, empFname: "Pramod", empLName: "Khare", designation: "Digital marketer"},
        {empId: 1006, empFname: "Rajesh", empLName: "Sharma", designation: "Businessmen"},
    ]
    let html = ``;
    for(var i = 0; i < employeeDetails.length; i++){
        html += `<div class="col-3 data-empid="${employeeDetails[i].empId}">
                    <div class="box-shadow">
                        <h3>${employeeDetails[i].empFname} ${employeeDetails[i].empLName}</h3>
                        <p>${employeeDetails[i].designation}</p>
                    </div>
                </div>`;
    }
    document.getElementById('employeeDetails').innerHTML = html;
}
EmployeeDetails();