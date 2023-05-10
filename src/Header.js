import { NavLink } from 'react-router-dom';
import logo from './assets/sort.png';
import githubLogo from './assets/github-mark.png';
import bubbleSortIcon from './assets/bubble.png';
import insertionSortIcon from './assets/insertion.png';
import selectionSortIcon from './assets/selection.png';
import quickSortIcon from './assets/quick.png';
import mergeSortIcon from './assets/merge.png';
import heapSortIcon from './assets/heap.png';

export const tabs = [
    { path: "/bubble-sort", label: "Bubble Sort", icon: bubbleSortIcon },
    { path: "/insertion-sort", label: "Insertion Sort", icon: insertionSortIcon },
    { path: "/selection-sort", label: "Selection Sort", icon: selectionSortIcon },
    { path: "/quick-sort", label: "Quick Sort", icon: quickSortIcon },
    { path: "/merge-sort", label: "Merge Sort", icon: mergeSortIcon },
    { path: "/heap-sort", label: "Heap Sort", icon: heapSortIcon },
];

export default function Header() {
    return(
        <nav className="header">
            <LogoArea />
            <div className="spaceHolder" />
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



