import { useState } from 'react'

export default function InputArea({ onStartSorting }) {
    const [numbers, setNumbers] = useState([
        {id: 1, number: null},
        {id: 2, number: null},
        {id: 3, number: null},
        {id: 4, number: null},
        {id: 5, number: null}
    ]);
    let numbersLength = numbers.length;

    function handleNumberChange(id, number) {
        setNumbers(numbers.map(n => {
            if (n.id === id) {
                return {id: id, number: number};
            } else {
                return n;
            }
        }));
    }

    function handleAddLength() {
        if (numbersLength < 10) {
            setNumbers([
                ...numbers,
                {id: numbersLength + 1, number: null}
            ])
        }
    }

    function handleReduceLength() {
        if (numbersLength > 2) {
            setNumbers(
                numbers.slice(0, numbersLength - 1)
            )
        }
    }

    return(
        <div className="inputArea">
            <div>
                <button onClick={handleReduceLength}>－</button>
                {numbers.map(number => (
                    <input
                        key={number.id}
                        onChange={e => {
                            handleNumberChange(
                                number.id,
                                e.target.value
                            )
                        }}
                    />
                ))}
                <button onClick={handleAddLength}>＋</button>
            </div>
            <button onClick={onStartSorting} className="startSortingButton">Start Sorting</button>
        </div>
    )
}

