import logo from "./logo.svg";
import "./App.css";
import Screen from "./components/Screen.jsx";
import Bulb from "./components/Bulb.jsx";

function App() {
  return (
    <>
      <div className='main'>
        <Screen />
        <Bulb />
      </div>
    </>
  );
}

export default App;
