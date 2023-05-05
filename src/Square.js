export default function Square({ number }) {
    return(
        <div
            className={number.isActive ? "activeSquare" : number.isSorted ? "sortedSquare" : "square"}
        >
            {number.number}
        </div>
    )
}