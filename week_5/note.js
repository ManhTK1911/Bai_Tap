let StickyNote = function (color) {
    this.id = 0;
    this.title = "";
    this.content = "";
    this.color = color;
    this.addTitle = function (title) {
        this.title = title;
    };
    this.addContent = function (content) {
        this.content = content;
    };
    this.getHtml = function () {
        let str = `<div class="note"><div class="title"><input value="${this.title}" disabled>
                        <textarea class="content" disabled>${this.content}</textarea></div></div>`;
        return str;
    }
}
let Board = function (name) {
    this.notes = [];
    this.addNote = function (note) {
        note.id = this.notes.length;
        this.notes.push(note);
    };
    this.displayNote = function (board) {
        board.innerHTML = "";
        for (let i = 0; i < this.notes.length; i++) {
            board.innerHTML += this.notes[i].getHtml() + `<button type="button" onclick="deleteNote(${i})">Delete<button`;
        }
    };
    this.deleteNote = function (index) {
        this.notes.splice(index, 1);
    }
};
let board = new Board();
let display = document.getElementById("board");

function addNote(title, content) {
    let newTitle = document.getElementById('inputTitle').value;
    let newContent = document.getElementById('inputContent').value;
    let note = new StickyNote("green");
    note.addTitle(title);
    note.addContent(content);
    board.addNote(note);
    board.displayNote(display);
}

function deleteNote(index) {
    board.deleteNote(index);
    board.displayNote(display);
}