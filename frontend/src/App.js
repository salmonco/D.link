import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const getData = async () => {
    try {
      const response = await fetch("/test");
      const data = await response.json();

      alert("GET", data);
    } catch (e) {
      console.log(e);
    }
  };

  const postData = async () => {
    try {
      const response = await fetch("/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Test",
          body: "I am testing!",
          userId: 1,
        }),
      });
      const data = await response.json();

      alert("POST", data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
    postData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
