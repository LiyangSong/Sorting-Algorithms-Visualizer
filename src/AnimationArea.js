import Square from './Square.js';
import { Flipper } from "react-flip-toolkit";

export default function AnimationArea({ currentNumbers, isHeaped }) {
    console.log(currentNumbers);
    const treeDepth = [
        {depth: 0, numberIndex: [0]},
        {depth: 1, numberIndex: [1, 2]},
        {depth: 2, numberIndex: [3, 4, 5, 6]},
        {depth: 3, numberIndex: [7, 8, 9]},
    ];

    function TreeLine({ depth }) {
        return (
            <div className={`treeLine line-${depth}`}>
                {currentNumbers
                    .filter((number, index) => treeDepth.find(t => t.depth === depth).numberIndex.includes(index))
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
            flipKey={`${currentNumbers.map((number) => number.id).join('')}-${isHeaped}`}
            className="animationArea"
        >
            {isHeaped ? (
                <div className="treeChart">
                    <div className="treeGrid">
                        <TreeLine depth={0} />
                        <TreeLine depth={1} />
                        <TreeLine depth={2} />
                        <TreeLine depth={3} />
                    </div>
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
                        />
                    )
                })
            )}
        </Flipper>
    )
}