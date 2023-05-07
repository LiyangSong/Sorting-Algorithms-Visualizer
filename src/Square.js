export default function Square({ number, style }) {
    return(
        <div
            className={number.isActive ? "activeSquare" : number.isSorted ? "sortedSquare" : "square"}
            style={style}
        >
            {number.number}
        </div>
    )
}