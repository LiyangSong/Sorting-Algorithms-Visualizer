import { Flipped } from "react-flip-toolkit";

export default function Square({ number, flipId }) {
    return(
        <Flipped
            flipId={flipId}
            key={flipId}
        >
            <div className={number.isActive ? "activeSquare" : number.isSorted ? "sortedSquare" : "square"}>
                {number.number}
            </div>
        </Flipped>
    )
}