import reduceIcon from './assets/reduce.png';
import addIcon from './assets/add.png';
export default function InputArea({
    currentNumbers,
    onStartSorting,
    onInputNumber,
    onAddLength,
    onReduceLength
}) {
    function handleKeyPress (e) {
        if (e.key === "Enter") {
            onStartSorting();
        }
    }

    return(
        <div className="inputArea">
            <div className="inputButtons">
                <button onClick={onReduceLength} className="reduceButton">
                    <img src={reduceIcon} alt="Reduce Length Icon" height="30px" />
                </button>
                <div className="spaceHolder" />
                <div className="inputs">
                    {currentNumbers.map(number => (
                        <input
                            key={number.id}
                            onChange={(e) => {
                                onInputNumber(number.id, e.target.value)
                            }}
                            onKeyDown={handleKeyPress}
                        />
                    ))}
                </div>
                <div className="spaceHolder" />
                <button onClick={onAddLength} className="addButton">
                    <img src={addIcon} alt="Add Length Icon" height="30px" />
                </button>
            </div>
            <button onClick={onStartSorting} className="startSortingButton">Start Sorting</button>
        </div>
    )
}

