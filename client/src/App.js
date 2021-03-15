import style from './App.module.css';
import Header from './components/Header/';

function App() {
  return (
    <div className={style.app}>
      <h1>Lets Begin</h1>

      <Header />
    </div>
  );
}

export default App;
