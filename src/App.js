import { useState } from "react";
import "./App.css";

const App = () => {
  const [floatingButton, setFloatingButton] = useState()
  return (
    <div className="App">
      <header className="hero-section">
        <section className="user-info">
          <div className="img-container"><img src="" alt="" /></div>
          <h1 className="seller-name"></h1>
        </section>
      </header>
      <ul className="affiliate-links">
        <li className="affiliate-link">
          <button>
            <a href="http://" target="_blank" rel="noopener noreferrer"></a>
          </button>
        </li>
        <li className="affiliate-link">
          <button>
            <a href="http://" target="_blank" rel="noopener noreferrer"></a>
          </button>
        </li>
        <li className="affiliate-link">
          <button>
            <a href="http://" target="_blank" rel="noopener noreferrer"></a>
          </button>
        </li>
        <li className="affiliate-link">
          <button>
            <a href="http://" target="_blank" rel="noopener noreferrer"></a>
          </button>
        </li>
        <li className="affiliate-link">
          <button>
            <a href="http://" target="_blank" rel="noopener noreferrer"></a>
          </button>
        </li>
        <li className="affiliate-link">
          <button>
            <a href="http://" target="_blank" rel="noopener noreferrer"></a>
          </button>
        </li>
        <li className="affiliate-link">
          <button>
            <a href="http://" target="_blank" rel="noopener noreferrer"></a>
          </button>
        </li>
      </ul>
      <div className="social-icons-container"></div>
      <footer><div></div></footer>
    </div>
  )
}

export default App;
