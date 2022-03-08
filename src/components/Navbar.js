import logo from "./logo.svg"

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <img src={logo} className="nav-logo" alt="logo" />
            <h3 className="nav-logo-text">React Facts</h3>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    )
}