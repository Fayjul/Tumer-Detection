import './App.css';
import { Link, useNavigate } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="main-div">
        <form onSubmit={(event) => console.log('hello')}>
          <div className="brand">
            <img alt=""></img>
            <h1>Tumer Detection</h1>
          </div>

          <input
            type="email"
            placeholder="Email"
            name="email"
            // onChange={(e) => handleChange(e)}
          />

          <button type="submit"> Submit </button>
        </form>
      </div>
    </>
  );
}

export default App;
