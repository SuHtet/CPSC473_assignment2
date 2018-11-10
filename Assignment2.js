var myObj = {
    "student": [
        {"firstname":"John", "lastname":"Smith", "Courses":["CPSC121 : A" , "CPSC131 : B+"]},
        {"firstname":"James", "lastname":"Tran", "Courses":["CPSC21 : A+" , "CPSC131 : B+"]},
        {"firstname":"Gio", "lastname":"Gonzalez", "Courses":["CPSC121 : A-" , "CPSC131 : B+"]}
    ]
}

function myTestFunction() {
  var found = false;
  var i = 0;
  var foundList = [];

var searchName = document.getElementById("searchName").value;

for (i = 0; i < myObj.student.length; i++){
    if (searchName == myObj.student[i].lastname) {
      foundList.push(myObj.student[i].firstname + " " + myObj.student[i].lastname + "<br/>" );

    }
}

document.getElementById("studentsFound").innerHTML = foundList;
}

function printO(){
  var searchedName = document.getElementById("studentsFound").innerHTML;
  document.getElementById("gradesTitle").innerHTML = "Grades for " + " "+ searchedName;
  var text = "<ul>";

  if(searchedName == "John Smith"){
    text = myObj.student[0].Courses;
  }
  else{
    text = myObj.student[1].Courses;
  }
   text += "</ul>";
  document.getElementById("GPASelection").innerHTML = text;
}
