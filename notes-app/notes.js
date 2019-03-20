const fs = require("fs");

const getNotes = () => {
  return "Your notes are ...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);
  // const duplicateNotes = notes.filter(function(note) {
  //   return note.title === title;
  // });

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

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  return fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function() {
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
  addNote
};
