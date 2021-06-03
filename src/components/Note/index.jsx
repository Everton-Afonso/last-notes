import React from "react";
import { useHighlight } from "../../context/HighlightContext";

import "./styles.css";

export default function Note(props) {
  const { highlight, setHighlight } = useHighlight();

  return (
    <div
      className={`note ${highlight ? "highlight" : ""}`}
      onClick={() => {
        setHighlight(!highlight);
      }}
    >
      <h2 className="title">{props.title}</h2>
      <hr />
      <p className="note-description">{props.description}</p>
    </div>
  );
}
