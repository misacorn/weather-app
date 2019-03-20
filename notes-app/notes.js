const fs = require("fs");

const getNotes = () => {
  return "Your notes are ...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body
    });
    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note title taken!");
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const selected = notes.filter(note => note.title === title)
  const afterRemoval = notes.filter(note => note.title !== title);
  if (selected.length === 0) {
    console.log("No note was removed.")
  } else {
    saveNotes(afterRemoval);
    console.log("A note was removed");
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  return fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote
};
