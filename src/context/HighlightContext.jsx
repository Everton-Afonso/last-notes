import React, { useState, useContext, createContext } from "react";

const HighlightContext = createContext();

export default function HighlightProvider(props) {
  const [highlight, setHighlight] = useState(false);

  return (
    <HighlightContext.Provider
      value={{
        highlight,
        setHighlight,
      }}
    >
      {props.children}
    </HighlightContext.Provider>
  );
}

export function useHighlight() {
  const context = useContext(HighlightContext);

  const { highlight, setHighlight } = context;

  return { highlight, setHighlight };
}
