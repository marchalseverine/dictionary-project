
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="head-title">
    Dictionary React App
    </h1>
      </header>
      <Dictionary />
      <footer>
        <p> <a href="https://github.com/marchalseverine/dictionary-project" rel="noreferrer" target="_blank"> Open Source Code</a> by Séverine Marchal hosted in <a href ="https://www.netlify.com/" rel="noreferrer" target="_blank">Netlify</a> </p>
      </footer>
    </div>
  );
}

export default App;
