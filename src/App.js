import "./App.css";
import home from "./images/home.png";
import list from "./images/list.png";
import camera from "./images/camera.png";
import heart from "./images/heart.png";
import user from "./images/user.png";

function App() {
  return (
    <div className="App">
      <header className="body"></header>

      <div className="footer">
        <img src={home} />
        <img src={list} />
        <img src={list} className="placeholder_icon" />
        <img src={camera} className="camera" />

        <img src={heart} />
        <img src={user} />
      </div>
    </div>
  );
}

export default App;
