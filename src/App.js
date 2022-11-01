import { FaSlack, FaGithub } from "react-icons/fa";
import "./App.css";
import profilePic from "./assets/person2.jpg";
import i4g from "./assets/i4g.jpg";

const App = () => {
  const links = [
    {
      id: 1,
      idString: "twitter",
      href: "https://twitter.com/thegr8khallie",
      LinkTo: "Twitter Link",
    },
    {
      id: 2,
      idString: "slack",
      href: "https://",
      LinkTo: "Slack link",
    },
    {
      id: 3,
      idString: "btn__zuri",
      href: "https://training.zuri.team",
      LinkTo: "Zuri team",
    },
    {
      id: 4,
      idString: "books",
      href: "http://books.zuri.team",
      LinkTo: "Zuri Books",
    },
    {
      id: 5,
      idString: "book__python",
      href: "https://books.zuri.team/python-for-beginners?ref_id=topboy",
      LinkTo: "Python Books",
    },
    {
      id: 6,
      idString: "pitch",
      href: "https://background.zuri.team",
      LinkTo: "Background checks for coders",
    },
    {
      id: 7,
      idString: "book__design",
      href: "https://books.zuri.team/design-rules",
      LinkTo: "Design Books",
    },
  ];
  return (
    <div className="App">
      <header className="hero-section">
        <section className="user-info">
          <div className="img-container">
            <img src={profilePic} alt="Avatar" id="profile__img" />
          </div>
          <h1 className="seller-name">Chiamaka Opara</h1>
        </section>
      </header>
      <ul className="affiliate-links">
        {/* Links List */}
        {links.map((i) => {
          return (
            <li className="affiliate-link" id={i.idString} key={i.id}>
              <a href={i.href} target="_blank" rel="noopener noreferrer">
                <button>{i.LinkTo}</button>
              </a>
            </li>
          );
        })}
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
