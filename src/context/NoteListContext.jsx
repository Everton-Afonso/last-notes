import React, { useState, useContext, createContext } from "react";

const NoteListContext = createContext();

export default function NoteListProvider(props) {
  const [noteList, setNoteList] = useState([]);

  return (
    <NoteListContext.Provider
      value={{
        noteList,
        setNoteList,
      }}
    >
      {props.children}
    </NoteListContext.Provider>
  );
}

export function useNoteList() {
  const context = useContext(NoteListContext);

  const { noteList, setNoteList } = context;

  return { noteList, setNoteList };
}
