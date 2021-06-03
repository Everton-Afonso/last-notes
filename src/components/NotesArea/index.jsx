import React from "react";
import NoteFrom from "../NoteForm";

import "./styles.css";

export default function NotesArea(props) {
  return (
    <article className="notes-area">
      {props.children}
      <NoteFrom />
    </article>
  );
}
