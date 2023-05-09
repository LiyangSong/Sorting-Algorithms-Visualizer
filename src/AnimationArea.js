import Square from './Square.js';
import { Flipper } from "react-flip-toolkit";

export default function AnimationArea({ currentNumbers }) {
    return(
        <Flipper
            flipKey={currentNumbers.map((number) => number.id).join('')}
            className="animationArea"
        >
            {currentNumbers.map((number) => {
                return (
                    <Square
                        flipId={number.id}
                        number={number}
                    />
                )
            })}
        </Flipper>
    )
}