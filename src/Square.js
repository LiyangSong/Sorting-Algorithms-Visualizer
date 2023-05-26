import { Flipped } from "react-flip-toolkit";
import pointerIcon from "./assets/pointer.png";

export default function Square({ number, flipId }) {
    return(
        <Flipped
            flipId={flipId}
        >
            <div className="squareArea">
                <div className={number.isActive ? "activeSquare" : number.isSorted ? "sortedSquare" : "square"}>
                    {number.number}
                </div>
                <div className="pointer">
                    {number.isPointed &&
                        <img src={pointerIcon} alt="Pointer Icon" height="28px" />}
                </div>
            </div>
        </Flipped>
    )
}