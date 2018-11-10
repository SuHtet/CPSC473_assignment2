// Student object

var myObj = {
    "student": [
        {"firstname":"John", "lastname":"Smith", "Courses":["CPSC121 : A" , "CPSC131 : B+"]},
        {"firstname":"Gio", "lastname":"Gonzalez", "Courses":["CPSC121 : A+" , "CPSC131 : B+"]},
        {"firstname":"James", "lastname":"Tran", "Courses":["CPSC121 : A-" , "CPSC131 : B+"]}
    ]
}

//Function to search students by their last LastName

function myTestFunction() {
  var found = false;
  var i = 0;
  var foundList = [];

var searchName = document.getElementById("searchName").value;

//loop to go through all the students in the array
for (i = 0; i < myObj.student.length; i++){
    if (searchName == myObj.student[i].lastname) {
      foundList.push(myObj.student[i].firstname + " " + myObj.student[i].lastname + "<br/>" );

    }
}

document.getElementById("studentsFound").innerHTML = foundList;
}

// To print out student names and their grades
function printO(){
  var searchedName = document.getElementById("studentsFound").innerHTML;
  document.getElementById("gradesTitle").innerHTML = "Grades for " + " "+ searchedName;
  var text = "<ul>";

  if(searchedName == searchName){
    text = myObj.student[0].Courses;
  }
  else{
    text = myObj.student[1].Courses;
  }
   text += "</ul>";
  document.getElementById("GPASelection").innerHTML = text;
}
