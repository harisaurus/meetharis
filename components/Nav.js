import {THEME, BREAKPOINTS} from "../styles/theme"

const Nav = () => (
  <div className="nav">
    <h1 className="nav__name">Haris Mahmood</h1>

    <ul className="nav__links">
      <li><a className="nav__link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/harisaurus/">Instagram</a></li>
      <li><a className="nav__link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/harisaurus/">LinkedIn</a></li>
    </ul>

    <style jsx>{`
      .nav {
        display: flex;
        flex-align: center;
        justify-content: space-between;
        padding: 20px 0;
      }
      
      .nav__name, .nav__link {
        font-size: 1rem;
      }

      .nav__links {
        display: flex;
        flex-align: center;
        list-style-type: none;
      }

      .nav__link {
        color: ${THEME.text};
        display: block;
        margin-left: 1rem;
      }
    `}</style>
  </div>
);

export default Nav;