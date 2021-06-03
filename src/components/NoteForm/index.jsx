import React, { useState } from "react";
import { FaBan, FaCheck } from "react-icons/fa";
import { useNoteList } from "../../context/NoteListContext";

import "./styles.css";

export default function NoteFrom() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const { noteList, setNoteList }  = useNoteList();

  function titleHandler(e) {
    setTitle(e.target.value);
  }

  function descriptionHandler(e) {
    setDescription(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    setNoteList([
      ...noteList,
      {
        id: String(Math.floor(Math.random() * 1000)),
        title,
        description
      }
    ]);
  }

  return (
    <form className="note-menu">
      <div>
        <label htmlFor="title">Título</label>
        <input
          id="title"
          value={title}
          onChange={titleHandler}
          type="text"
          placeholder="Informe um título"
        />
      </div>

      <div>
        <label htmlFor="note">Nota</label>
        <textarea
          id="note"
          value={description}
          onChange={descriptionHandler}
          type="text"
          rows="10"
          placeholder="Escreva sua nota"
        />
      </div>

      <div className="buttons">
        <button className="cancel">
          <FaBan className="icon" />
        </button>
        <button type="submit" className="confirm" onClick={submitHandler}>
          <FaCheck className="icon" />
        </button>
      </div>
    </form>
  );
}
