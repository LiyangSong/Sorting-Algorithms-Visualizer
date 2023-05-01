import { NavLink } from 'react-router-dom';
import logo from './assets/sorting-arrows-pastel-96.png';
import githubLogo from './assets/github-mark.png';

export default function Header() {
    return(
        <nav className="navBar">
            <LogoArea />
            <TabArea />
            <LinkArea />
        </nav>
    )
}

function LogoArea() {
    return(
        <a href="/" className="navBar_logoArea">
            <img src={logo} alt="Web Logo" height="50px" width="50px"/>
            <div>Sorting Algorithms Visualizer</div>
        </a>

    )
}

function TabArea() {
    const tabs = [
        { path: "/bubble-sort", label: "Bubble Sort" },
        { path: "/insertion-sort", label: "Insertion Sort" },
        { path: "/selection-sort", label: "Selection Sort" },
        { path: "/quick-sort", label: "Quick Sort" },
        { path: "/merge-sort", label: "Merge Sort" },
        { path: "/heap-sort", label: "Heap Sort" },
    ];

    return(
        <div className="navBar_tabArea">
            {tabs.map(tab => (
                <NavLink
                    to={tab.path}
                    className={({ isActive }) => (
                        isActive ? "activeTab" : "tab"
                    )}
                >
                    {tab.label}
                </NavLink>
            ))}
        </div>
    )
}

function LinkArea() {
    return(
        <div className="navBar_linkArea">
            <a href="https://github.com/LiyangSong/Sorting-Algorithms-Visualizer" target="_blank">
                <img src={githubLogo} alt="Github Logo" height="30px"/>
            </a>
        </div>
    )
}