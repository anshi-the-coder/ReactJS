import { useState } from 'react';
import Counter from './components/Counter';
import JsonDispaly from './components/JsonDisplay';


function App() {
  const[mainCounter,setMainCounter]=useState(0)

  return(
    <>
      <Counter setMainCounter={setMainCounter}/>
      <JsonDispaly/>
    </>
  )
}

export default App;
