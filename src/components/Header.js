import { Link } from "react-router-dom"
import { Nav } from "./appStyles"

function Header(props) {
    // inline style for the nav tag
    // const navStyle ={
    //     display: "flex",
    //     justifyContent: "space-around",
    //     border: "3px solid black",
    //     padding: "8px",
    //     width: "90%",
    //     margin: "auto",
    // };

    return (
        <header>
            <h1>My Portfolio Page</h1>
            <Nav>
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/projects">PROJECTS</Link>
            </Nav>
        </header>
    )
}

export default Header