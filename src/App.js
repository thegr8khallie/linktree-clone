import { useState } from "react";
import "./App.css";

const App = () => {
  const [floatingButton, setFloatingButton] = useState()
  return (
    <div className="App">
      <header className="hero-section">
        <section className="user-info">
          <div className="img-container"><img src="" alt="" id="profile__img" /></div>
          <h1 className="seller-name"></h1>
          <div><a href="https://twitter.com/thgr8khallie" target="_blank" rel="noopener noreferrer" id="twitter">@thegr8khallie</a></div>
          <div><a href="https://" target="_blank" rel="noopener noreferrer" >talk2okwundu</a></div>
        </section>
      </header>
      <ul className="affiliate-links">
        <li className="affiliate-link">
          <button id="btn__zuri">
            <a href="https://training.zuri.team" target="_blank" rel="noopener noreferrer"></a>
          </button>
        </li>
        <li className="affiliate-link">
          <button id='books'>
            <a href="http://books.zuri.team" target="_blank" rel="noopener noreferrer"></a>
          </button>
        </li>
        <li className="affiliate-link">
          <button id="book__python">
            <a href="https://books.zuri.team/python-for-beginners?ref_id=%3Cthegr8khallie%3E" target="_blank" rel="noopener noreferrer"></a>
          </button>
        </li>
        <li className="affiliate-link">
          <button id="pitch">
            <a href="https://background.zuri.team" target="_blank" rel="noopener noreferrer"></a>
          </button>
        </li>
        <li className="affiliate-link">
          <button id="book__design">
            <a href="https://books.zuri.team/design-rules" target="_blank" rel="noopener noreferrer"></a>
          </button>
        </li>
      </ul>
      <div className="social-icons-container"></div>
      <footer><div></div></footer>
    </div>
  )
}

export default App;
