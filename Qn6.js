function addStudent(id, refreshCallback)
{
    refreshCallback();  
}

function refreshStudentList() {
         document.write("Hello");
}

addStudent(1, refreshStudentList);ā