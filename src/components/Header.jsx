import { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';
import logo from '../assets/sort.png';
import githubLogo from '../assets/github-mark.png';
import menuIcon from '../assets/menu.png';
import bubbleSortIcon from '../assets/bubble.png';
import insertionSortIcon from '../assets/insertion.png';
import selectionSortIcon from '../assets/selection.png';
import quickSortIcon from '../assets/quick.png';
import mergeSortIcon from '../assets/merge.png';
import heapSortIcon from '../assets/heap.png';

// Route path, name, and icon for each sorting algorithm.
export const tabs = [
    { path: "/bubble-sort", label: "Bubble Sort", icon: bubbleSortIcon },
    { path: "/insertion-sort", label: "Insertion Sort", icon: insertionSortIcon },
    { path: "/selection-sort", label: "Selection Sort", icon: selectionSortIcon },
    { path: "/quick-sort", label: "Quick Sort", icon: quickSortIcon },
    { path: "/merge-sort", label: "Merge Sort", icon: mergeSortIcon },
    { path: "/heap-sort", label: "Heap Sort", icon: heapSortIcon },
];

/**
 * A header component includes logo area, tab menu, and a link to GitHub repo.
 * @author - Liyang
 * @returns {JSX.Element} - The rendered JSX Component.
 */
export default function Header() {
    // 'dropDown' is used as a boolean state to determine whether tab menu is expanded.
    const [dropDown, setDropDown] = useState(false);
    let tabsRef = useRef();

    // When 'dropDown' changed, add an event listener to respond to mouse click or touch behavior.
    // When click or touch areas outside tabs, set 'dropDown' as false and close expanded tabs.
    useEffect(() => {
        const handler = (e) => {
            if (dropDown && tabsRef.current && !tabsRef.current.contains(e.target)) {
                setDropDown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropDown])

    return(
        <nav className="header">
            <a href="/home" className="header-logoArea">
                <img
                    src={logo}
                    alt="Web Logo"
                    height="50px"
                    width="50px"
                />
                <div>Sorting Algorithms Visualizer</div>
            </a>

            <div className="spaceHolder" />

            <div className="header-tabsArea" ref={tabsRef}>
                <button
                    className="menu"
                    onClick = {() => setDropDown(prev => !prev)}
                >
                    <img
                        src={menuIcon}
                        alt="Tab Menu"
                        height="25px"
                    />
                </button>

                {dropDown &&
                    <Tabs onOpenTab = {() => setDropDown(false)}/>
                }
            </div>

            <a
                className="header-gitlink"
                href="https://github.com/LiyangSong/Sorting-Algorithms-Visualizer"
                target="_blank"
                title="Visit Our GitHub Page"
            >
                <img
                    src={githubLogo}
                    alt="Github Logo"
                    height="30px"
                />
            </a>
        </nav>
    )
}

/**
 * Expanded tabs to provide navigation links to different algorithm routes.
 * @author - Liyang
 * @param {function} onOpenTab - The function triggered by clicking one expanded tab.
 * @returns {JSX.Element} - The rendered JSX Component.
 */
function Tabs({ onOpenTab }) {
    return (
        <div className="tabs">
            {tabs.map((tab) => (
                <NavLink
                    key={tab.label}
                    to={tab.path}
                    onClick={onOpenTab}
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



