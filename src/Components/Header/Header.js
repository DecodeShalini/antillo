import react from "react";
import "./Header.css";
function Header() {
  return (
    <div className="Header">
      <div>
        <a href="index.html" className="logo">
          <img
            src="https://www.antillocs.com/images/logo.png"
            alt="antillo-logo"
          />
        </a>
      </div>
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark headerNav">
    
            <ul className="navbar-nav">
              <li className="nav-item navItems">
                <a className="nav-link active" href="">
                  Home
                </a>
              </li>
              <li className="nav-item navItems">
                <a className="nav-link" href="">
                  Services
                </a>
              </li>
              <li className="nav-item navItems">
                <a className="nav-link" href="#">
                  Careers
                </a>
              </li>
              <li className="nav-item navItems">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item navItems">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          
        </nav>
      </div>
    </div>
  );
}
export default Header;
