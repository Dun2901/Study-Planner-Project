import "./App.css";
import StudyGoal from "./components/Study Goals/study-goals";
import DevPlan from "./components/Development Plan/dev-plan";

function App() {
  return (
  <div className="App">
    <div className="m-12">hello</div>
    <div className="m-12"><StudyGoal /></div>
    <DevPlan />
  </div>
  );
}

export default App;
