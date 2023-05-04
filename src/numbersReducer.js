import bubbleSort from './algorithms/bubbleSort.js'
export default function numbersReducer(numbers, action) {
    switch(action.type) {
        case "changeNumber": {
            return numbers.map(number => {
                if (number.id === action.id) {
                    return {id: action.id, number: action.nextNumber};
                } else {
                    return number;
                }
            })
        }

        case "addLength": {
            if (numbers.length < 10) {
                return [
                    ...numbers,//previous numbers
                    {id: numbers.length + 1, number: null}
                ]
            } else {
                return numbers;
            }
        }

        case "reduceLength": {
            if (numbers.length > 2) {
                return numbers.slice(0, numbers.length - 1)
            } else {
                return numbers;
            }
        }

        case "bubbleSort": {
            return bubbleSort(numbers)
        }
    }
}