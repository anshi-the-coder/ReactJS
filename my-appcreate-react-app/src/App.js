import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

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
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("light mode has been enabled" , "success : ");
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="AboutbTextUtils"/> */}
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        aboutText="About"
      />
      <Alert alert={alert} />
      <div className="container" my-3>
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}
export default App;
