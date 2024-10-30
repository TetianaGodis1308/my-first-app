// import logo from './logo.svg';
import './App.css';
import ANAKIN_IMAGE from './assets/ANAKIN_IMAGE.jpeg'
import RAY_IMAGE from './assets/RAY_IMAGE.jpeg'

import { PostComponent } from './components/PostComponent';

const data = {
  author : {
    name: "Anakin Skywalker",
    photo: ANAKIN_IMAGE,
    nickname: "@dart_vader"
    },
    content : "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image : RAY_IMAGE,
    date : "26 лют."
}


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <PostComponent className = {data}/>
    </div>
  );
}

export default App;
