const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes are ...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title,
      body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const selected = notes.filter(note => note.title === title);
  const afterRemoval = notes.filter(note => note.title !== title);
  if (selected.length === 0) {
    console.log(chalk.red.inverse("No note was removed."));
  } else {
    saveNotes(afterRemoval);
    console.log(chalk.green.inverse("A note was removed"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach(note => console.log(note.title));
};

const readNotes = (title) => {
  const notes = loadNotes();
  const findNote = notes.find(note => note.title === title)
  findNote ? console.log(chalk.blue.inverse(findNote.title) + ": " + findNote.body) 
  : console.log(chalk.red.inverse("Cannot find note!"))
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
  removeNote,
  listNotes,
  readNotes,
};
