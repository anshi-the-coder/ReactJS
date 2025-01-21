import React, { useEffect, useState } from "react";

function jsonDisplay() {
  const [response, setResponse] = useState({});
  useEffect(() => { 
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setResponse(json);
      });
  }, []); //useEffect me phela para jayega arrow function doosra jayega list

  return (
    <div>
      <h1>Resonse Data</h1>
      <ul>
        {response.entries(data).map(([key, value]) => (
          <li key={key}>
            <strong>{key}</strong>: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default jsonDisplay;
