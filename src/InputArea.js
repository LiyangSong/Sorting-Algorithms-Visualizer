export default function InputArea({
    currentNumbers,
    onStartSorting,
    onInputNumber,
    onAddLength,
    onReduceLength
}) {
    return(
        <div className="inputArea">
            <div>
                <button onClick={onReduceLength}>－</button>
                {currentNumbers.map(number => (
                    <input
                        key={number.id}
                        onChange={(e) => {
                            onInputNumber(number.id, e.target.value)
                        }}
                    />
                ))}
                <button onClick={onAddLength}>＋</button>
            </div>
            <button onClick={onStartSorting} className="startSortingButton">Start Sorting</button>
        </div>
    )
}

