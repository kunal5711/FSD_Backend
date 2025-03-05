document.addEventListener("DOMContentLoaded", () => {
  const students = [
    { id: 1, name: "Yash", rollno: 11, class: 4, section: "A" },
    { id: 2, name: "Aarav", rollno: 12, class: 4, section: "A" },
    { id: 3, name: "Ishita", rollno: 15, class: 5, section: "B" },
    { id: 4, name: "Rohan", rollno: 9, class: 3, section: "C" },
    { id: 5, name: "Sanya", rollno: 18, class: 6, section: "A" }
  ];

  const classFilter = document.getElementById("classFilter");
  const sectionFilter = document.getElementById("sectionFilter");
  const rollnoFilter = document.getElementById("rollnoFilter");
  const studentList = document.getElementById("studentList");

  const classes = [...new Set(students.map(s => s.class))];
  classes.forEach(cls => {
    const option = document.createElement("option");
    option.value = cls;
    option.textContent = cls;
    classFilter.appendChild(option);
  });


  const sections = [...new Set(students.map(s => s.section))];
  sections.forEach(sec => {
    const option = document.createElement("option");
    option.value = sec;
    option.textContent = sec;
    sectionFilter.appendChild(option);
  });

  function filterStudents() {
    const classValue = classFilter.value;
    const sectionValue = sectionFilter.value;
    const rollnoValue = rollnoFilter.value;

    const filtered = students.filter(student => { 
      return (
        (classValue ? student.class === Number(classValue) : true) &&
        (sectionValue ? student.section === sectionValue : true) &&
        (rollnoValue ? student.rollno === Number(rollnoValue) : true)
      );
    });

    displayStudents(filtered);
  }

  function displayStudents(studentArr) {
    studentList.innerHTML = "";
    if (studentArr.length === 0) {
      studentList.innerHTML = "<li>No students found.</li>";
      return;
    }
    studentArr.forEach(student => {
      const li = document.createElement("li");
      li.textContent = ${student.name} (Class ${student.class}, Section ${student.section}, Roll ${student.rollno});
      studentList.appendChild(li);
    });
  }

  [classFilter, sectionFilter, rollnoFilter].forEach(input => {
    input.addEventListener("change", filterStudents);
    input.addEventListener("input", filterStudents);
  });


  displayStudents(students);
});