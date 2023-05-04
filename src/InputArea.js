export default function InputArea({
    numbers,
    onStartSorting,
    onNumberChange,
    onAddLength,
    onReduceLength
}) {
    return(
        <div className="inputArea">
            <div>
                <button onClick={onReduceLength}>－</button>
                {numbers.map(number => (
                    <input
                        key={number.id}
                        onChange={e => {
                            onNumberChange(
                                number.id,
                                e.target.value
                            )
                        }}
                    />
                ))}
                <button onClick={onAddLength}>＋</button>
            </div>
            <button onClick={onStartSorting} className="startSortingButton">Start Sorting</button>
        </div>
    )
}

