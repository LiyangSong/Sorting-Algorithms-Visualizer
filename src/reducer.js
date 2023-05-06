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
    currentNumbers: initialNumbers,
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
    STEPBACKWARD: "stepBackward",
    AUTORUN: "autoRun"
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
            let newState = {...state};
            if (state.currentNumbers.some((number) => number.isSorted === false) || state.currentNumbers.some((number) => number.isActive === true)) {
                newState.step ++;
                newState.status = state.status === "auto running" ? "auto running" : "manually running";
                switch (action.sortType) {
                    case "bubbleSort":
                        newState.currentNumbers = bubbleSort(newState.startNumbers, newState.step)[0]
                        newState.log = bubbleSort(newState.startNumbers, newState.step)[1];
                        break;
                    case "insertionSort":
                        newState.currentNumbers = insertionSort(newState.startNumbers, newState.step)[0];
                        newState.log = insertionSort(newState.startNumbers, newState.step)[1];
                        break;
                    case "selectionSort":
                        newState.currentNumbers = selectionSort(newState.startNumbers, newState.step)[0];
                        newState.log = selectionSort(newState.startNumbers, newState.step)[1];
                        break;
                    case "quickSort":
                        newState.currentNumbers = quickSort(newState.startNumbers, newState.step)[0];
                        newState.log = quickSort(newState.startNumbers, newState.step)[1];
                        break;
                    case "mergeSort":
                        newState.currentNumbers = mergeSort(newState.startNumbers, newState.step)[0];
                        newState.log = mergeSort(newState.startNumbers, newState.step)[1];
                        break;
                    case "heapSort":
                        newState.currentNumbers = heapSort(newState.startNumbers, newState.step)[0];
                        newState.log = heapSort(newState.startNumbers, newState.step)[1];
                        break;
                }
            } else {
                newState.status = "complete";
            }
            return newState;
        }

        case "stepBackward": {
            let newState = {...state};
            if (newState.step > 0) {
                newState.step--;
                newState.status = "manually running";
                switch (action.sortType) {
                    case "bubbleSort":
                        newState.currentNumbers = bubbleSort(newState.startNumbers, newState.step)[0]
                        newState.log = bubbleSort(newState.startNumbers, newState.step)[1];
                        break;
                    case "insertionSort":
                        newState.currentNumbers = insertionSort(newState.startNumbers, newState.step)[0];
                        break;
                    case "selectionSort":
                        newState.currentNumbers = selectionSort(newState.startNumbers, newState.step)[0];
                        break;
                    case "quickSort":
                        newState.currentNumbers = quickSort(newState.startNumbers, newState.step)[0];
                        break;
                    case "mergeSort":
                        newState.currentNumbers = mergeSort(newState.startNumbers, newState.step)[0];
                        break;
                    case "heapSort":
                        newState.currentNumbers = heapSort(newState.startNumbers, newState.step)[0];
                        break;
                }
            } else {
                newState.status = "ready to run";
            }
            return newState;
        }

        case "autoRun": {
            switch(state.status) {
                case "ready to run": {
                    return {
                        ...state,
                        status: "auto running"
                    };
                }

                case "pause": {
                    return {
                        ...state,
                        status: "auto running"
                    };
                }

                case "manually running": {
                    return {
                        ...state,
                        status: "auto running"
                    };
                }

                case "auto running": {
                    return {
                        ...state,
                        status: "pause"
                    };
                }

                case "complete": {
                    return {
                        ...state,
                        status: "auto running",
                        log: "Ready to sort.",
                        step: 0,
                        currentNumbers: deepCopy(state.startNumbers)
                    };
                }
            }
        }
    }
}