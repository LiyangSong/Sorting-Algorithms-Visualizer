import { NavLink } from 'react-router-dom';
import logo from './assets/sort-down.png';
import githubLogo from './assets/github-mark.png';

export const tabs = [
    { path: "/bubble-sort", label: "Bubble Sort" },
    { path: "/insertion-sort", label: "Insertion Sort" },
    { path: "/selection-sort", label: "Selection Sort" },
    { path: "/quick-sort", label: "Quick Sort" },
    { path: "/merge-sort", label: "Merge Sort" },
    { path: "/heap-sort", label: "Heap Sort" },
];

export default function Header() {
    return(
        <nav className="header">
            <LogoArea />
            <TabArea />
            <LinkArea />
        </nav>
    )
}

function LogoArea() {
    return(
        <a href="/home" className="header_logoArea">
            <img src={logo} alt="Web Logo" height="50px" width="50px"/>
            <div>Sorting Algorithms Visualizer</div>
        </a>

    )
}

function TabArea() {
    return(
        <div className="header_tabArea">
            {tabs.map((tab) => (
                <NavLink
                    key={tab.label}
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
        <a href="https://github.com/LiyangSong/Sorting-Algorithms-Visualizer" target="_blank" className="header_linkArea">
            <img src={githubLogo} alt="Github Logo" height="30px"/>
        </a>
    )
}



