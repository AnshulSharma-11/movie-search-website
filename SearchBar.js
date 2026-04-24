import React, { useState } from 'react'

export default function SearchBar({ searchShow }) {

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchShow(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movie or series..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit">Search</button>
    </form>
  )
};
  
