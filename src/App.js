import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <Dictionary />
      <footer>
        <p>
          {" "}
          <a
            href="https://github.com/marchalseverine/dictionary-project"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            Open Source Code
          </a>{" "}
          by Séverine Marchal hosted in{" "}
          <a href="https://www.netlify.com/" rel="noreferrer" target="_blank">
            Netlify
          </a>{" "}
        </p>
      </footer>
    </div>
  );
}

export default App;
