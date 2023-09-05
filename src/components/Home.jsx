import { tabs } from './Header.jsx';
import { NavLink } from "react-router-dom";
import Footer from './Footer.jsx';

/**
 * The home page with an application description and navigation to tabs.
 * @author - Liyang, Keke
 * @returns {JSX.Element} - The rendered JSX Component.
 */
export default function Home() {
    return (
        <div className="home">
            <p className="home-header">
                " Discover Sorting Algorithms Through Animation! "
            </p>
            <div className="home-description">
                <p>Sorting algorithms are techniques used to organize data into a specific order.</p>
                <p>These algorithms are the building blocks of computer science and data management.</p>
                <p>We simplify complex concepts through animated guides helping you understand algorithms from the ground up.</p>
            </div>
            <NavArea />
            <Footer />
        </div>
    )
}

/**
 * Navigation to different algorithm routes.
 * @author - Liyang
 * @returns {JSX.Element} - The rendered JSX Component.
 */
function NavArea() {
    return (
        <div className="navArea">
            {tabs.map((tab) => (
                <NavLink
                    id={tab.path.replace("/", "")}
                    to={tab.path}
                    className="nav"
                >
                    <img
                        src={tab.icon}
                        alt={tab.label + " Icon"}
                        height="20px"
                    />
                    {tab.label}
                    <span> </span>
                </NavLink>
            ))}
        </div>
    )
}