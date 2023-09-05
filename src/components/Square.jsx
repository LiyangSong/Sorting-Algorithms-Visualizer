import { Flipped } from "react-flip-toolkit";
import pointerIcon from '../assets/pointer.svg';

/**
 * The component using shape to represent one `number` in `currentNumbers`.
 * Class will be changed according to properties of `number` to apply different styles.
 * @author - Liyang
 * @param {{id: number, number: string, isActive: boolean, isSorted: boolean, isPointed: boolean, isSeperated: boolean, isHeaped: boolean}} number - One element of currentNumbers.
 * @param {number} flipId - Allow `react-flip-toolkit` to track one component in DOM.
 * @param {number} index - Index of `number` in the `currentNumbers` list.
 * @returns {JSX.Element} - The rendered JSX Component.
 */
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