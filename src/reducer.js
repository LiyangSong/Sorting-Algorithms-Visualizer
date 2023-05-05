import bubbleSort from './algorithms/bubbleSort.js';
import insertionSort from './algorithms/insertionSort.js';
import selectionSort from './algorithms/selectionSort.js';
import quickSort from './algorithms/quickSort.js';
import mergeSort from './algorithms/mergeSort.js';
import heapSort from './algorithms/heapSort.js';
import { deepCopy } from "./utils.js";

const initialNumbers = [
    {id: 1, number: null, isActive: false, isSorted: false},
    {id: 2, number: null, isActive: false, isSorted: false},
    {id: 3, number: null, isActive: false, isSorted: false},
    {id: 4, number: null, isActive: false, isSorted: false},
    {id: 5, number: null, isActive: false, isSorted: false}
]

export const initialState = {
    status: "input",
    startNumbers: [],
    currentNumbers: [...initialNumbers],
    step: 0,
    log: "Ready to sort."
}

export const ACTION = {
    INITIALIZE: "initialize",
    INPUTNUMBERS: "inputNumbers",
    ADDLENGTH: "addLength",
    REDUCELENGTH: "reduceLength",
    STARTSORTING: "startSorting",
    SORTSTEPS: "sortSteps",
    STEPFORWARD: "stepForward",
    STEPBACKWARD: "stepBackward"
};

export default function reducer(state, action) {
    switch(action.type) {
        case "initialize": {
            return initialState;
        }

        case "inputNumbers": {
            const currentNumbers = state.currentNumbers.map((number) => {
                return number.id === action.id ? {
                    id: action.id,
                    number: action.inputNumber,
                    isActive: false,
                    isSorted: false
                } : {...number};
            });

            return {
                ...state,
                currentNumbers: currentNumbers
            };
        }

        case "addLength": {
            const currentNumbers = state.currentNumbers.length < 10 ? [
                ...state.currentNumbers, {
                    id: state.currentNumbers.length + 1,
                    number: null,
                    isActive: false,
                    isSorted: false
                }
            ] : [...state.currentNumbers];

            return {
                ...state,
                currentNumbers: currentNumbers
            };
        }

        case "reduceLength": {
            const currentNumbers = state.currentNumbers.length > 2 ?
                state.currentNumbers.slice(0, state.currentNumbers.length - 1) : [...state.currentNumbers];

            return {
                ...state,
                currentNumbers: currentNumbers
            };
        }

        case "startSorting": {
            const currentNumbers = state.currentNumbers.filter((number) =>
                number.number !== null && !(isNaN(number.number))
            );

            return {
                ...state,
                status: "ready to run",
                startNumbers: deepCopy(currentNumbers),
                currentNumbers: currentNumbers
            };
        }

        case "stepForward": {
            let copiedState = deepCopy(state);
            copiedState.status = "manually running";
            if (copiedState.currentNumbers.some((number) => number.isSorted === false)) {
                copiedState.step++;
                switch (action.sortType) {
                    case "bubbleSort":
                        copiedState.currentNumbers = bubbleSort(copiedState.startNumbers, copiedState.step)[0]
                        copiedState.log = bubbleSort(copiedState.startNumbers, copiedState.step)[1];
                        break;
                    case "insertionSort":
                        copiedState.currentNumbers = insertionSort(copiedState.startNumbers, copiedState.step)[0];
                        break;
                    case "selectionSort":
                        copiedState.currentNumbers = selectionSort(copiedState.startNumbers, copiedState.step)[0];
                        break;
                    case "quickSort":
                        copiedState.currentNumbers = quickSort(copiedState.startNumbers, copiedState.step)[0];
                        break;
                    case "mergeSort":
                        copiedState.currentNumbers = mergeSort(copiedState.startNumbers, copiedState.step)[0];
                        break;
                    case "heapSort":
                        copiedState.currentNumbers = heapSort(copiedState.startNumbers, copiedState.step)[0];
                        break;
                }
            }
            return copiedState;
        }

        case "stepBackward": {
            let copiedState = deepCopy(state);
            copiedState.status = "manually running";
            if (copiedState.step > 0) {
                copiedState.step--;
                switch (action.sortType) {
                    case "bubbleSort":
                        copiedState.currentNumbers = bubbleSort(copiedState.startNumbers, copiedState.step)[0]
                        copiedState.log = bubbleSort(copiedState.startNumbers, copiedState.step)[1];
                        break;
                    case "insertionSort":
                        copiedState.currentNumbers = insertionSort(copiedState.startNumbers, copiedState.step)[0];
                        break;
                    case "selectionSort":
                        copiedState.currentNumbers = selectionSort(copiedState.startNumbers, copiedState.step)[0];
                        break;
                    case "quickSort":
                        copiedState.currentNumbers = quickSort(copiedState.startNumbers, copiedState.step)[0];
                        break;
                    case "mergeSort":
                        copiedState.currentNumbers = mergeSort(copiedState.startNumbers, copiedState.step)[0];
                        break;
                    case "heapSort":
                        copiedState.currentNumbers = heapSort(copiedState.startNumbers, copiedState.step)[0];
                        break;
                }
            }
            return copiedState;
        }
    }
}