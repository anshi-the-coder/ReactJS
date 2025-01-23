import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
 //import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import{
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message, 
      type: type,
    });
    setTimeout(()=>{
      setAlert(null)
    }, 3000)

  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
            showAlert("Dark mode has been enabled" , "success:");
            document.title= 'TextUtils- Dark Mode'
            // setInterval(()=>{
            //   document.title= 'TextUtils is Amazing  Mode'
            // }, 2000)
            // setInterval(()=>{
            //   document.title= 'Install TextUtils now'
            // }, 1500)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("light mode has been enabled" , "success : ");
       document.title= 'TextUtils- Light Mode'
    }
  };
  return (
    <>
      {/* <Routes> */}
      {/* <Route exact path="/about" element={<About/> }/> */}
      {/* <Route exact path="/" element={<h1>Home</h1>} /> */}
      {/* <Route path="/about" element={<About/>} /> */}
      {/* <Route path="/dashboard" element={<h1>Dashboard...</h1>} />
      <Route path="/others" element={<h1>Others.....</h1>} /> */}
    {/* </Routes> */}
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container" my-3>
         <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
         
      </div>
     
    </>
  );
}
export default App;
