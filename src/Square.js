import { Flipped } from "react-flip-toolkit";
import pointerIcon from "./assets/pointer.png";

export default function Square({ number, flipId, index }) {
    return(
        <Flipped
            flipId={flipId}
        >
            <div
                className={`squareArea 
                    ${number.isSeperated ? "seperated" : ""}
                    ${number.isHeaped ? "heaped" : ""}
                    item-${index}`}
            >
                <div className={`square ${number.isActive ? "active" : number.isSorted ? "sorted" : ""}`}>
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