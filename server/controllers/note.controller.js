import Lane from '../models/lane';
import Note from '../models/note';
import uuid from 'uuid';

export function getSomething(req, res) {
  return res.status(200).end();
}

export function addNote(req, res) {
  const { note, laneId } = req.body;

  if (!note || !note.task || !laneId) {
    res.status(400).end();
  }

  const newNote = new Note({
    task: note.task,
  });

  newNote.id = uuid();
  newNote.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    Lane.findOne({ id: laneId })
      .then(lane => {
        lane.notes.push(saved);
        return lane.save();
      })
      .then(() => {
        res.json(saved);
      });
  });
}

export function deleteNote(req, res) {
  const noteId = req.params.noteId;
  Note.findOne({ id: req.params.noteId }).exec((err, note) => {
    if (err) {
      res.status(500).send(err);
    }

    Lane.findOne({ notes: note_id })
    .then(lane => {
      const updatedNotes = lane.notes.filter(note => note.id !== noteId);
      lane.update({ notes: updatedNotes }, err => {
        if (err) {
          res.status(500).send(err);
        }
      });
    })
    .then(() => {
      note.remove();
    })
    .then(() => {
      res.status(200).end();
    });
  });
}

export function editNote(req, res) {
  Note.findOne({ id: req.params.noteId }).exec((err, note) => {
    if (err) {
      res.status(500).send(err);
    }

    note.task = req.body.task;
    note.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(saved);
    });
  });
}