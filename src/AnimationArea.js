import Square from './Square.js'
import { useEffect, useState } from "react";

export default function AnimationArea({ currentNumbers }) {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
            console.log(window.innerWidth, window.innerHeight)
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    return(
        <div className="animationArea">
            {currentNumbers.map((number, index) => {
                return (
                    <Square
                        key={number.id}
                        number={number}
                        style={{
                            left: (windowSize.width + 40 - currentNumbers.length * 100) / 2 + index * 100
                        }}
                    />
                )
            })}
        </div>
    )
}