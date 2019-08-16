function setup() {
  if (localStorage.getItem("notes") == null) {
    localStorage.setItem("notes", JSON.stringify({ notes: [] }));
  }
}

function clearStorage(notes = true) {
  localStorage.clear();
  document.getElementById("my-notes").innerHTML = `My Notes - 0`;
  if (notes) {
    showNotes();
  }
}

function showNotes() {
  let note = JSON.parse(localStorage.getItem("notes"));

  if (note != null) {
    note = note.notes;
    if (note != undefined) {
      let inner = ``;
      let count = 0;

      note.forEach(function(element, index) {
        inner += `
        <div class="card note-card my-3 mx-3 col-sm-3" style="width: 18rem;">
            <div class="card-body">
                <h2 class="card-title">Note ${index + 1}</h2>
                <p class="card-text">${element.slice(0, 120)}</p>
                <div class="card-footer">
                    <a href="" class="btn btn-primary" style="float: left;" data-toggle="modal" data-target="#delete-all-notification">View</a>
                    <button class="btn btn-danger" id="${index}" style="float: right"; onclick="deleteNote(this.id);">Delete</button>
                </div>
            </div>
        </div>
        `;
        count += 1;
        document.getElementById("my-notes").innerHTML = `My Notes - ${count}`;
      });

      document.getElementById("cards").innerHTML = inner;
    } else {
      document.getElementById("cards").innerHTML = `No notes to show`;
      localStorage.setItem("notes", JSON.stringify({ notes: [] }));
    }
  } else {
    setup();
    document.getElementById("cards").innerHTML = `No notes to show`;
  }
}

function addNote() {
  setup();

  let note = document.getElementById(`write-area`).value;

  if (note != ``) {
    noteArr = JSON.parse(localStorage.getItem("notes")).notes;
    noteArr.push(`${note}`);

    localStorage.setItem("notes", JSON.stringify({ notes: noteArr }));
    showNotes();
  }
}

function deleteNote(index) {
  notes = JSON.parse(localStorage.getItem("notes")).notes;

  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify({ notes: notes }));
  document.getElementById("my-notes").innerHTML = `My Notes - ${notes.length}`;
  showNotes();
}

setup();
