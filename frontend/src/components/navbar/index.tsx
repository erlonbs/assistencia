import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import './styles.css';

function Navbar() {
  return (
    <header>
      <nav className ="container">
        <div className="assistencia-nav-content-title">
          <h1>Assistência Técnica Sara's</h1>
          <a href="https://github.com/erlonbs">
            <div className="assistencia-contact-container-gitImg">
              <GithubIcon />
              <p className="assistencia-contatct-link-gitName">/Erlonbs</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
  
}

export default Navbar;
