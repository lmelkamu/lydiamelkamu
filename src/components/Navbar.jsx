import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="logo">LM</h1>
            <ul className="nav-menu">
                <li className="nav-item">
                    <a href="#home" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#resume" className="nav-link">Resume</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link">Contact</a>
                </li>
            </ul>
        </nav>
    );
} export default Navbar;