import { useState } from 'react'

export default function UserInput() {
    return(
        <div className="userInput">
            <InputArea />
            <ButtonArea />
        </div>
    )
}

function InputArea() {
    const [numbers, setNumbers] = useState([
        {id: 1, number: -1},
        {id: 2, number: -1},
        {id: 3, number: -1}
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
                {id: numbersLength + 1, number: -1}
            ])
        }
    }

    return(
        <div>
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
            <ul>
                {numbers.map(number => (
                    <li key={number.id}>
                        {number.number}
                    </li>
                ))}
            </ul>
        </div>
    )
}

function ButtonArea() {
    return(
        <div>
            <button>▶/■</button>
            <button>▶▶</button>
            <button>◀◀</button>
        </div>
    )
}