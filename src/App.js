import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let posts = "강남 고기 맛집";
  let [title] = useState(["harry porter", "death note", "hello"]);
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{title[0]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>2월 20일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[2]}</h3>
        <p>2월 25일 발행</p>
        <hr />
      </div>
      <div style={{ color: "blue", fontSize: "30px" }}>Hi</div>
      <h4>{posts}</h4>
    </div>
  );
}

export default App;
