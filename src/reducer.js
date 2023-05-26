import bubbleSortResult from './algorithms/bubbleSort.js';
import insertionSortResult from './algorithms/insertionSort.js';
import selectionSortResult from './algorithms/selectionSort.js';
import quickSortResult from './algorithms/quickSort.js';
import mergeSortResult from './algorithms/mergeSort.js';
import heapSortResult from './algorithms/heapSort.js';
import { deepCopy } from "./utils.js";

const initialNumbers = [
    {id: 1, number: null, isActive: false, isSorted: false, isPointed: false},
    {id: 2, number: null, isActive: false, isSorted: false, isPointed: false},
    {id: 3, number: null, isActive: false, isSorted: false, isPointed: false},
    {id: 4, number: null, isActive: false, isSorted: false, isPointed: false},
    {id: 5, number: null, isActive: false, isSorted: false, isPointed: false}
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
    AUTORUN: "autoRun",
    JUMPTOSTART: "jumpToStart",
    JUMPTOCOMPLETE: "jumpToComplete"
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
                    isSorted: false,
                    isPointed: false
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
                    isSorted: false,
                    isPointed: false
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
                [newState.currentNumbers, newState.log] = runSort(action.sortType, newState.startNumbers, newState.step);
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
                [newState.currentNumbers, newState.log] = runSort(action.sortType, newState.startNumbers, newState.step);
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

        case "jumpToStart": {
            return {
                ...state,
                step: 0,
                status: "ready to run",
                currentNumbers: deepCopy(state.startNumbers),
                log: "Ready to sort."
            };
        }

        case "jumpToComplete": {
            let newState = {...state, status: "complete"};
            newState.step = getSortResult(action.sortType, newState.startNumbers).length - 1;
            [newState.currentNumbers, newState.log] = runSort(action.sortType, newState.startNumbers, newState.step);
            return newState;
        }
    }
}

function runSort(sortType, startNumbers, step) {
    const result = getSortResult(sortType, startNumbers);
    const currentResult = result.find(r => r.step === step);
    return [currentResult.numbers, currentResult.log];
}

function getSortResult(sortType, startNumbers) {
    let result;
    switch (sortType) {
        case "bubbleSort":
            result = bubbleSortResult(startNumbers);
            break;
        case "insertionSort":
            result = insertionSortResult(startNumbers);
            break;
        case "selectionSort":
            result = selectionSortResult(startNumbers);
            break;
        case "quickSort":
            result = quickSortResult(startNumbers);
            break;
        case "mergeSort":
            result = mergeSortResult(startNumbers);
            break;
        case "heapSort":
            result = heapSortResult(startNumbers);
            break;
    }
    return result;
}