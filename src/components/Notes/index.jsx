import React from "react";
import { useHighlight } from "../../context/HighlightContext";
import { useNoteList } from "../../context/NoteListContext";
import Note from "../Note";

import "./styles.css";

export default function Notes() {
  const { noteList } = useNoteList();
  const { highlight, setHighlight } = useHighlight();

  return (
    <section className="notes">
      {noteList.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
          highlight={highlight}
          setHighlight={setHighlight}
        />
      ))}
    </section>
  );
}
