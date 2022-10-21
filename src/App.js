import { FaSlack, FaGithub } from "react-icons/fa";
import "./App.css";
import profilePic from "./assets/person2.jpg";
import i4g from "./assets/i4g.jpg";

const App = () => {
  return (
    <div className="App">
      <header className="hero-section">
        <section className="user-info">
          <div className="img-container">
            <img src={profilePic} alt="Profile Picture" id="profile__img" />
          </div>
          <h1 className="seller-name">Chiamaka Opara</h1>
        </section>
      </header>
      <ul className="affiliate-links">
        <li className="affiliate-link">
          <a
            href="https://twitter.com/thegr8khallie"
            target="_blank"
            rel="noopener noreferrer"
            id="twitter"
          >
            <button id="btn__zuri">Twitter Link</button>
          </a>
        </li>
        <li className="affiliate-link" id="slack-link">
          <a href="https://" target="_blank" rel="noopener noreferrer">
            <button id="btn__zuri">Slack Link</button>
          </a>
        </li>
        <li className="affiliate-link">
          <a
            href="https://training.zuri.team"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button id="btn__zuri">Zuri Team</button>
          </a>
        </li>
        <li className="affiliate-link">
          <a
            href="http://books.zuri.team"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button id="books">Zuri Books</button>
          </a>
        </li>
        <li className="affiliate-link">
          <a
            href="https://books.zuri.team/python-for-beginners?ref_id=talk2okwundu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button id="book__python">Python Books</button>
          </a>
        </li>
        <li className="affiliate-link">
          <a
            href="https://background.zuri.team"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button id="pitch">Background checks for coders</button>
          </a>
        </li>
        <li className="affiliate-link">
          <a
            href="https://books.zuri.team/design-rules"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button id="book__design">Design books</button>
          </a>
        </li>
      </ul>
      <div className="social-icons-container">
        <span>
          <FaSlack />
        </span>
        <span>
          <FaGithub />
        </span>
      </div>
      <footer>
        <div id="zuri-icon">
          Zuri <span /> Internship
        </div>
        <div id="hng-icon">HNG Internship 9 frontend task</div>
        <div id="i4g-icon">
          <img src={i4g} alt="Ingressive for good" />
        </div>
      </footer>
    </div>
  );
};

export default App;
