import { useState } from "react";
import { FaSlack, FaTwitter, FaGithub } from 'react-icons/fa';
import "./App.css";
import profilePic from './assets/person2.jpg';
import i4g from './assets/i4g.jpg'

const App = () => {
  const [floatingButton, setFloatingButton] = useState()
  return (
    <div className="App">
      <header className="hero-section">
        <section className="user-info">
          <div className="img-container"><img src={profilePic} alt="Profile Picture" id="profile__img" /></div>
          <h1 className="seller-name">Chiamaka Opara</h1>
          <div><a href="https://twitter.com/thgr8khallie" target="_blank" rel="noopener noreferrer" id="twitter"><FaTwitter /> @thegr8khallie</a></div>
          <div><a href="https://" target="_blank" rel="noopener noreferrer" ><FaSlack /> @talk2okwundu</a></div>
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
            <a href="https://books.zuri.team/python-for-beginners?ref_id=talk2okwundu" target="_blank" rel="noopener noreferrer"></a>
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
      <div className="social-icons-container"><FaSlack /> <FaGithub /></div>
      <footer>
        <div className="branding">Zuri<span />Internship</div>
        <div className="branding">HNG Internship 9 frontend task</div>
        <div className="branding"><img src={i4g} alt="Ingressive for good" /></div>
      </footer>
    </div>
  )
}

export default App;
