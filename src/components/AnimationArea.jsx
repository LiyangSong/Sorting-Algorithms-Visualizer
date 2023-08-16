import Square from './Square.jsx';
import { Flipper } from "react-flip-toolkit";


/**
 * The component containing square animations and control buttons.
 * @author - Liyang
 * @param {{id: number, number: string, isActive: boolean, isSorted: boolean, isPointed: boolean, isSeperated: boolean, isHeaped: boolean}[]} currentNumbers - The array of numbers in current step of result.
 * @returns {JSX.Element} - The rendered JSX Component.
 */
export default function AnimationArea({ currentNumbers }) {
    // Use a state to indicate whether squares should be shown in heap tree format.
    const isHeaped = currentNumbers.some((number) => number.isHeaped);

    // The heap tree structure.
    // Notice that total number of nodes is 10 as no more than 10 numbers would be inputted.
    const treeDepth = [
        {depth: 0, numberIndex: [0]},
        {depth: 1, numberIndex: [1, 2]},
        {depth: 2, numberIndex: [3, 4, 5, 6]},
        {depth: 3, numberIndex: [7, 8, 9]},
    ];

    /**
     * The component containing squares in a given depth of the heap tree.
     * @author - Liyang
     * @param {number} depth - The depth of the heap tree from 0 to 3.
     * @returns {JSX.Element} - The rendered JSX Component.
     */
    function TreeLine({ depth }) {
        return (
            <div className={`treeLine line-${depth}`}>
                {/* Filter numbers that belong to current line of heap tree by index of number */}
                {currentNumbers
                    .filter((number, index) =>
                        treeDepth.find(t => t.depth === depth)
                            .numberIndex.includes(index))
                    .map((number, index) => {
                        return (
                            <Square
                                flipId={number.id}
                                key={number.id}
                                number={number}
                                index={index}
                            />
                        )
                })}
            </div>
        )
    }

    return(
        <Flipper
            // Combine all number ids and isHeaped as key to determine whether square positions have changed.
            // When flipKey changed, generate animations by `react-flip-toolkit` package.
            flipKey={`${currentNumbers.map((number) => number.id).join('')}-${isHeaped}`}
            className="animationArea"
        >
            {/* According to isHeaped, display squares as tree format or flex format. */}
            {isHeaped ? (
                <div className="treeChart">
                    <div className="treeGrid">
                        <TreeLine depth={0} />
                        <TreeLine depth={1} />
                        <TreeLine depth={2} />
                        <TreeLine depth={3} />
                    </div>

                    {/* Draw lines in the heap tree. */}
                    <svg>
                        <line x1="212" y1="18" x2="120" y2="68" />
                        {currentNumbers.length > 2 &&
                            <line x1="212" y1="18" x2="304" y2="68" />
                        }
                        {currentNumbers.length > 3 &&
                            <line x1="120" y1="68" x2="74" y2="118" />
                        }
                        {currentNumbers.length > 4 &&
                            <line x1="120" y1="68" x2="166" y2="118" />
                        }
                        {currentNumbers.length > 5 &&
                            <line x1="304" y1="68" x2="258" y2="118" />
                        }
                        {currentNumbers.length > 6 &&
                            <line x1="304" y1="68" x2="350" y2="118" />
                        }
                        {currentNumbers.length > 7 &&
                            <line x1="74" y1="118" x2="48" y2="168" />
                        }
                        {currentNumbers.length > 8 &&
                            <line x1="74" y1="118" x2="94" y2="168" />
                        }
                        {currentNumbers.length > 9 &&
                            <line x1="166" y1="118" x2="140" y2="168" />
                        }
                    </svg>
                </div>
            ) : (
                currentNumbers.map((number) => {
                    return (
                        <Square
                            flipId={number.id}
                            key={number.id}
                            number={number}
                            index={-1}
                        />
                    )
                })
            )}
        </Flipper>
    )
}