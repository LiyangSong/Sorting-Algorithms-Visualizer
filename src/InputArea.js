import reduceIcon from './assets/reduce.png';
import addIcon from './assets/add.png';
export default function InputArea({
    currentNumbers,
    onStartSorting,
    onInputNumber,
    onAddLength,
    onReduceLength,
    sortType
}) {
    function handleKeyPress (e) {
        if (e.key === "Enter") {
            onStartSorting();
        }
    }

    return(
        <div className="inputArea">
            <div className="inputButtons">
                <button
                    className="reduceButton"
                    onClick={onReduceLength}
                    title="Reduce Numbers"
                >
                    <img src={reduceIcon} alt="Reduce Length Icon" height="30px" />
                </button>
                <div className="spaceHolder" />
                <div className="inputs">
                    {currentNumbers.map(number => (
                        <input
                            key={sortType + number.id}
                            type="number"
                            value={number.number}
                            onChange={(e) => {
                                onInputNumber(number.id, e.target.value)
                            }}
                            onKeyDown={handleKeyPress}
                        />
                    ))}
                </div>
                <div className="spaceHolder" />
                <button
                    className="addButton"
                    onClick={onAddLength}
                    title="Add Numbers"
                >
                    <img src={addIcon} alt="Add Length Icon" height="30px" />
                </button>
            </div>
            <button
                className="startSortingButton"
                onClick={onStartSorting}
            >
                Start Sorting
            </button>
        </div>
    )
}

