const notes = [
  { title: "Mathematics I", branch: "CSE", semester: "1", subject: "Maths", link: "https://example.com/notes/maths1.pdf" },
  { title: "Operating System Notes", branch: "CSE", semester: "2", subject: "OS", link: "https://example.com/notes/os.pdf" },
  { title: "DBMS Concepts", branch: "CSE", semester: "2", subject: "DBMS", link: "https://example.com/notes/dbms.pdf" },
  { title: "Intro to AI", branch: "CSE AIML", semester: "1", subject: "AI", link: "https://example.com/notes/ai.pdf" },
  { title: "Machine Learning Basics", branch: "CSE AIML", semester: "2", subject: "ML", link: "https://example.com/notes/ml.pdf" },
  { title: "Python for AIML", branch: "CSE AIML", semester: "2", subject: "Python", link: "https://example.com/notes/python_aiml.pdf" },
  { title: "IoT Fundamentals", branch: "CSE IOT", semester: "1", subject: "IoT Fundamentals", link: "https://example.com/notes/iot_fundamentals.pdf" },
  { title: "Sensor Technologies", branch: "CSE IOT", semester: "2", subject: "Sensors", link: "https://example.com/notes/sensors.pdf" },
  { title: "Microcontroller Guide", branch: "CSE IOT", semester: "2", subject: "Microcontrollers", link: "https://example.com/notes/microcontrollers.pdf" },
  { title: "Data Science Intro", branch: "CSE DS", semester: "1", subject: "Data Science Basics", link: "https://example.com/notes/ds_basics.pdf" },
  { title: "Statistics Notes", branch: "CSE DS", semester: "2", subject: "Statistics", link: "https://example.com/notes/statistics.pdf" },
  { title: "Python for Data Science", branch: "CSE DS", semester: "2", subject: "Python for DS", link: "https://example.com/notes/python_ds.pdf" }
];

const container = document.getElementById("notesContainer");

const branches = [...new Set(notes.map(n => n.branch))];

branches.forEach(branch => {
  const branchDiv = document.createElement("div");
  branchDiv.className = "branch-block";
  branchDiv.innerHTML = `<h3>${branch}</h3>`;
  
  const branchNotes = notes.filter(n => n.branch === branch);
  const semesters = [...new Set(branchNotes.map(n => n.semester))];
  
  semesters.forEach(sem => {
    const semDiv = document.createElement("div");
    semDiv.className = "semester-block";
    semDiv.innerHTML = `<button class="sem-btn">Semester ${sem} ▼</button><div class="notes-list"></div>`;
    
    const notesList = semDiv.querySelector(".notes-list");
    branchNotes.filter(n => n.semester === sem).forEach(item => {
      const note = document.createElement("a");
      note.href = item.link;
      note.target = "_blank";
      note.className = "note-link";
      note.textContent = `${item.title} - ${item.subject}`;
      notesList.appendChild(note);
    });
    
    semDiv.querySelector(".sem-btn").addEventListener("click", () => {
      notesList.classList.toggle("open");
    });
    
    branchDiv.appendChild(semDiv);
  });
  
  container.appendChild(branchDiv);
});
