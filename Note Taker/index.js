window.addEventListener("load", () => {
    const form = document.getElementById("note-form");
    const noteInput = document.getElementById("note-input");
    const submit = document.getElementById("submit");
    const notes = document.getElementById("notes");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const noteValue = noteInput.value;


        const noteEl = document.createElement("div");
        noteEl.classList.add("noteEl");


        
        const noteNumber = document.createElement("div");
        noteNumber.classList.add("noteNumber");
        

    const inputNoteEl = document.createElement("input")
    inputNoteEl.classList.add("inputNoteEl");
    inputNoteEl.type = "text";
    inputNoteEl.value = noteValue;
    inputNoteEl.setAttribute("readonly", "readonly");
    noteEl.appendChild(inputNoteEl);
    
    inputNoteEl.appendChild(noteNumber);
        notes.appendChild(noteEl);

    })

    
})


