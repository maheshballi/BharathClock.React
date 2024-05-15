import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CuurentTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center className="todo-container">
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
