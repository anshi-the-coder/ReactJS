import React, { useEffect, useState } from "react";

function JsonDispaly(props) {
  const [response, setResponse] = useState({});
  useEffect(() => { 
    console.log("Chala ya nahi....")
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setResponse(json);
        console.log(json)
      });
  }, []); //useEffect me phela para jayega arrow function doosra jayega list

  return (
    <div>
      <h1>Resonse Data</h1>
      <ul>
        {
          Object.entries(response).map(([key, value]) => (
            <li key={key}>
              <strong>{key}</strong>: {value.toString()}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default JsonDispaly;
