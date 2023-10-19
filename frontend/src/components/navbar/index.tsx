import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import './styles.css';

function Navbar() {
  return (
    <header>
      <nav className ="container">
        <div className="container-title">
          <h1>Assistência Técnica Sara's</h1>
          <a href="https://github.com/erlonbs">
            <div className="container-gitImg">
              <GithubIcon />
              <p className="container-link-gitName">/Erlonbs</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
  
}

export default Navbar;
