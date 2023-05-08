import { tabs } from './Header.js'
import { NavLink } from "react-router-dom";
export default function Home() {
    return (
        <div className="home">
            <p>description</p>
            <NavArea />
        </div>
    )
}

function NavArea() {
    return (
        <div className="navArea">
            {tabs.map((tab) => (
                <NavLink
                    key={tab.label}
                    to={tab.path}
                    className={({ isActive }) => (
                        isActive ? "activeNav" : "nav"
                    )}
                >
                    {tab.label}
                </NavLink>
            ))}
        </div>
    )
}