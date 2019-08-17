function setup() {
  if (localStorage.getItem("notes") == null) {
    localStorage.setItem("notes", JSON.stringify({ notes: [] }));
  }
}

function prompt(_notes = true, _prompt) {
  inner = `
  <div class="col-md-4">
    <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModal" aria-hidden="true">
      <div class="modal-dialog modal-danger modal-dialog-centered modal-" role="document">
          <div class="modal-content bg-gradient-danger">
            
              <div class="modal-header">
                  <h3 class="modal-title" id="modal-title-notification">Attention!</h3>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                  </button>
              </div>
              
              <div class="modal-body">
                
                  <div class="py-3 text-center">
                      <i class="ni ni-bell-55 ni-3x"></i>
                      <h4 class="heading mt-4">Are you sure want to delete all of your notes?</h4>
                  </div>
                  
              </div>
              
              <div class="modal-footer">
                  <button type="button" class="btn btn-white" onclick="clearStorage();" data-dismiss="modal">Yes, delete all</button>
                  <button type="button" class="btn btn-link text-white ml-auto" data-dismiss="modal">Close</button> 
              </div>  
          </div>
      </div>
    </div>
  </div>
  `;

  document.getElementById("delete-modal").innerHTML = inner;
  $("#deleteModal").modal();
}

function clearStorage(_notes=true) {
  localStorage.clear();
  document.getElementById("my-notes").innerHTML = `My Notes - 0`;
  if (_notes) {
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
                    <button class="btn btn-primary" id="${index}" style="float: left;" onclick="viewNote(this.id);"> View </button>
                    <button class="btn btn-danger" id="${index}" style="float: right"; onclick="deleteNote(this.id);"> Delete </button>
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

function viewNote(_id) {
  console.log(_id);
  modalBody = JSON.parse(localStorage.getItem("notes")).notes[_id];
  let inner = `
  <div class="col-md-4">
      <div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-labelledby="viewModal" aria-hidden="true">
      <div class="modal-dialog modal- modal-dialog-centered modal-" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h3 class="modal-title" id="modal-title-default">Note ${_id}</h3>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                  </button>
              </div>
              <div class="modal-body">
                <p>${modalBody}</p>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-success ml-auto" data-dismiss="modal">Close</button> 
              </div>
          </div>
      </div>
    </div>
  </div>
  `;

  document.getElementById(`view-modal`).innerHTML = inner;
  $("#viewModal").modal();
}

setup();
