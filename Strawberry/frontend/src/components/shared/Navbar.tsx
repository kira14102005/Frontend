import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
    return (
        <div>
            <div className="container">
                <div>
                    <h1> Strawberries</h1>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Where to Go</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                    <div>
                        <GiHamburgerMenu />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
