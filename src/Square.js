import { Flipped } from "react-flip-toolkit";
import pointerIcon from "./assets/pointer.png";

export default function Square({ number, flipId }) {
    return(
        <Flipped
            flipId={flipId}
        >
            <div className="squareArea">
                <div className={`square ${number.isActive ? "active" : number.isSorted ? "sorted" : ""} ${number.isSeperated ? "seperated" : ""}`}>
                    {number.number}
                </div>
                <div className={`pointer ${number.isSeperated ? "seperated" : ""}`}>
                    {number.isPointed &&
                        <img src={pointerIcon} alt="Pointer Icon" height="28px" />}
                </div>
            </div>
        </Flipped>
    )
}