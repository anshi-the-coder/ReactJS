import { useState } from 'react';
import Counter from './components/Counter';
import JsonDispaly from './components/JsonDisplay';
import Biodata from './components/Biodata';


function App() {
  const[mainCounter,setMainCounter]=useState(0)

  return(
    <>
      {/* <Counter setMainCounter={setMainCounter}/>
      <JsonDispaly/> */}
      <Biodata/>
    </>
  )
}

export default App;
