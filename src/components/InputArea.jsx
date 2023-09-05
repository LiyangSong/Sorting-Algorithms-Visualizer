import reduceIcon from '../assets/reduce.svg';
import addIcon from '../assets/add.svg';

/**
 * The component allowing users to input numbers and filtering valid ones to start sorting algorithm.
 * @author - Liyang, Yue
 * @param {{id: number, number: string, isActive: boolean, isSorted: boolean, isPointed: boolean, isSeperated: boolean, isHeaped: boolean}[]} currentNumbers - The state passed from father component to show currently inputted numbers in input area.
 * @param {function} onStartSorting - The function triggered by clicking Start Sorting button.
 * @param {function} onInputNumber - The function triggered by inputting or changing a number in one `input`.
 * @param {function} onAddLength - The function triggered by clicking Add Length icon.
 * @param {function} onReduceLength - The function triggered by clicking Reduce Length icon.
 * @returns {JSX.Element} - The rendered JSX Component.
 */
export default function InputArea({
    currentNumbers,
    onStartSorting,
    onInputNumber,
    onAddLength,
    onReduceLength
}) {
    // The boolean to determine whether Start Sorting button should be disabled
    // by checking whether there are enough valid inputted numbers.
    const buttonDisableOrNot = () => {
        return currentNumbers.filter(number =>
            number.number !== "" && !(isNaN(number.number))
        ).length <= 1;
    }

    return(
        <div className="inputArea">
            <div className="inputButtons">
                <button
                    className="reduceButton"
                    onClick={onReduceLength}
                    title="Reduce Numbers"
                >
                    <img
                        src={reduceIcon}
                        alt="Reduce Length Icon"
                        height="30px"
                    />
                </button>

                <div className="spaceHolder" />

                <div className="inputs">
                    {currentNumbers.map(number => (
                        <input
                            key={number.id}
                            type="number"
                            value={number.number}
                            onChange={(e) => {
                                onInputNumber(number.id, e.target.value)
                            }}
                        />
                    ))}
                </div>

                <div className="spaceHolder" />

                <button
                    className="addButton"
                    onClick={onAddLength}
                    title="Add Numbers"
                >
                    <img
                        src={addIcon}
                        alt="Add Length Icon"
                        height="30px"
                    />
                </button>
            </div>

            <button
                className="startSortingButton"
                onClick={() => {
                    if (buttonDisableOrNot()) {
                        alert("Please enter two or more numbers.")
                    } else {
                        onStartSorting();
                    }
                }}
                title="Start Sorting (Enter)"
            >
                Start Sorting
            </button>
        </div>
    )
}

