window.addEventListener("load", () => {
    const form = document.getElementById("note-form");
    const noteTitle = document.querySelector("#note-title")
    const noteContent = document.querySelector("#note-content");
    const noteList = document.querySelector(".note-list");
    const deleteBtn = document.querySelector("#delete-btn");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const notes = document.createElement("div");
        notes.classList.add("notes")

        const noteItem = document.createElement("div");
        noteItem.classList.add("note-item");
        notes.appendChild(noteItem);

        const noteItemTitle = document.createElement("h3");
        noteItemTitle.classList.add("note-item-title");
        noteItemTitle.innerHTML = noteTitle.value;
        noteItem.appendChild(noteItemTitle);

        const noteItemContent = document.createElement("p");
        noteItemContent.classList.add("note-item-content");
        noteItemContent.innerHTML = noteContent.value;
        noteItem.appendChild(noteItemContent);

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("btn");
        removeBtn.classList.add("removeBtn");
        removeBtn.innerHTML = "Remove";
        noteItem.appendChild(removeBtn);

        noteList.appendChild(notes);

        removeBtn.addEventListener("click", () => {
            noteItem.remove();
        });

        deleteBtn.addEventListener("click", () => {
            notes.remove();
        })

        noteTitle.value = "";
        noteContent.value = "";

    })


})


