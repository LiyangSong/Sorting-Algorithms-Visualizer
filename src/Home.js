import { tabs } from './Header.js';
import { NavLink } from "react-router-dom";
import Footer from './Footer.js';

export default function Home() {
    return (
        <div className="home">
            <p className="home-description">
                The algorithm is the soul of programming, and sorting algorithms are the most classical algorithmic knowledge. They have undergone a long evolution, resulting in many different methods. Each algorithm has its specific use case, making it difficult to apply universally. Therefore, mastering some commonly used sorting algorithms is extremely important. So, open our webpage and learn with us!
            </p>
            <NavArea />
            <Footer />
        </div>
    )
}

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