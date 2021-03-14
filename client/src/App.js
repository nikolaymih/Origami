import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <h1>Lets Begin</h1>

      <nav className={style.navigation}>
        <ul>
          <li className='listItem'><img src="white-origami-bird.png" alt="White Origami"/></li>
          <li className="listItem"><a href="#">Goint to 1</a></li>
          <li className="listItem"><a href="#">Goint to 2</a></li>
          <li className="listItem"><a href="#">Goint to 3</a></li>
          <li className="listItem"><a href="#">Goint to 4</a></li>
          <li className="listItem"><a href="#">Goint to 5</a></li>
          <li className="listItem"><a href="#">Goint to 6</a></li>
          <li className="listItem"><a href="#">Goint to 7</a></li>
          <li className="listItem"><a href="#">Goint to 8</a></li>
          <li className="listItem"><a href="#">Goint to 9</a></li>
          <li className="listItem"><a href="#">Goint to 10</a></li>
          <li className="listItem"><a href="#">Goint to 11</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
