import "./App.css";
import { HelloFrom } from "../../components/hello-from/hello-from";

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <HelloFrom source="options" />
    </div>
  );
};

export default App;
