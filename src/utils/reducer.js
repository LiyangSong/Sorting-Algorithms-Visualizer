import bubbleSortResult from '../algorithms/bubbleSort.js';
import insertionSortResult from '../algorithms/insertionSort.js';
import selectionSortResult from '../algorithms/selectionSort.js';
import quickSortResult from '../algorithms/quickSort.js';
import mergeSortResult from '../algorithms/mergeSort.js';
import heapSortResult from '../algorithms/heapSort.js';
import deepCopy from './deepCopy.js';

// Set all numbers as empty at the beginning.
const initialNumbers = [
    {id: 1, number: "", isActive: false, isSorted: false, isPointed: false, isSeperated: false, isHeaped: false},
    {id: 2, number: "", isActive: false, isSorted: false, isPointed: false, isSeperated: false, isHeaped: false},
    {id: 3, number: "", isActive: false, isSorted: false, isPointed: false, isSeperated: false, isHeaped: false},
    {id: 4, number: "", isActive: false, isSorted: false, isPointed: false, isSeperated: false, isHeaped: false},
    {id: 5, number: "", isActive: false, isSorted: false, isPointed: false, isSeperated: false, isHeaped: false}
];

// Set initial state.status as input to show the InputArea component
// to allow users inputting numbers.
export const initialState = {
    status: "input",
    startNumbers: [],
    currentNumbers: initialNumbers,
    step: 0,
    log: "Ready to sort."
};

// Define Action strings for convenience of usage.
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

/**
 * Call corresponding sorting algorithm and get result list.
 * @author - Liyang
 * @param {string} sortType - The current sorting algorithm.
 * @param {{id: number, number: string, isActive: boolean, isSorted: boolean, isPointed: boolean, isSeperated: boolean, isHeaped: boolean}[]} startNumbers - Pass valid user input as start numbers of sorting algorithm.
 * @returns {{step: number, numbers: Object[], log: string}[]} - Sorting result and log in each step.
 */
const getSortResult = (sortType, startNumbers) => {
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
};

/**
 * Call `getSortResult` to run corresponding sorting algorithm, and extract result in one specific step.
 * @author - Liyang
 * @param {string} sortType
 * @param {{id: number, number: string, isActive: boolean, isSorted: boolean, isPointed: boolean, isSeperated: boolean, isHeaped: boolean}[]} startNumbers - Pass valid user input as start numbers of sorting algorithm.
 * @param {number} step - Current step number.
 * @returns {[Object[], string]} - Sorting result and log in current step.
 */
const runSort= (sortType, startNumbers, step) => {
    const result = getSortResult(sortType, startNumbers);
    const currentResult = result.find(r => r.step === step);
    return [currentResult.numbers, currentResult.log];
};

/**
 * Receive current state and action as arguments and return updated state.
 * @author - Liyang
 * @param {{status: string, startNumbers: Object[], currentNumbers: Object[], step: number, log: string}} state - Current state.
 * @param {object} action - Action to be dispatched.
 * @returns {{status: string, startNumbers: Object[], currentNumbers: Object[], step: number, log: string}} - Updated state.
 */
const reducer = (state, action) => {
    switch(action.type) {
        case "initialize": {
            return initialState;
        }

        // Update 'currentNumbers' when users input a new number.
        case "inputNumbers": {
            const currentNumbers = state.currentNumbers.map((number) => {
                return number.id === action.id ? {
                    id: action.id,
                    number: action.inputNumber,
                    isActive: false,
                    isSorted: false,
                    isPointed: false,
                    isSeperated: false,
                    isHeaped: false
                } : {...number};
            });

            return {
                ...state,
                currentNumbers: currentNumbers
            };
        }

        // Add the length of 'currentNumbers' by 1 when add button is clicked in the input area.
        case "addLength": {
            const currentNumbers = state.currentNumbers.length < 10 ? [
                ...state.currentNumbers, {
                    id: state.currentNumbers.length + 1,
                    number: "",
                    isActive: false,
                    isSorted: false,
                    isPointed: false,
                    isSeperated: false,
                    isHeaped: false
                }
            ] : [...state.currentNumbers];

            return {
                ...state,
                currentNumbers: currentNumbers
            };
        }

        // Reduce the length of 'currentNumbers' by 1 when reduce button is clicked in the input area.
        case "reduceLength": {
            const currentNumbers = state.currentNumbers.length > 2 ?
                state.currentNumbers.slice(0, state.currentNumbers.length - 1) : [...state.currentNumbers];

            return {
                ...state,
                currentNumbers: currentNumbers
            };
        }

        // Filter valid numbers and change status from 'input' to 'ready to run'
        // to close input area and ready to run the sorting algorithm.
        case "startSorting": {
            const currentNumbers = state.currentNumbers.filter((number) =>
                number.number !== "" && !(isNaN(number.number))
            );

            return {
                ...state,
                status: "ready to run",
                startNumbers: deepCopy(currentNumbers),
                currentNumbers: currentNumbers
            };
        }

        // Add 'step' by 1 and render corresponding numbers in this step.
        case "stepForward": {
            // Handle a bug: when `auto running` and switch to another route directly,
            // the currently running interval may still trigger `stepForward` even with initial empty numbers.
            if(state.status === "input") return initialState;

            let newState = {...state};
            if (state.currentNumbers.some((number) => number.isSorted === false) ||
                state.currentNumbers.some((number) => number.isActive === true) ||
                state.currentNumbers.some((number) => number.isHeaped === true)) {
                newState.step ++;
                newState.status = state.status === "auto running" ? "auto running" : "manually running";
                [newState.currentNumbers, newState.log] = runSort(action.sortType, newState.startNumbers, newState.step);
            } else {
                newState.status = "complete";
            }
            return newState;
        }

        // Reduce 'step' by 1 and render corresponding numbers in this step.
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

        // Auto run, pause, or restart the sorting algorithm in different statuses.
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

        // Jump to step 0 and render corresponding numbers.
        case "jumpToStart": {
            return {
                ...state,
                step: 0,
                status: "ready to run",
                currentNumbers: deepCopy(state.startNumbers),
                log: "Ready to sort."
            };
        }

        // Jump to the last step and render corresponding numbers.
        case "jumpToComplete": {
            let newState = {...state, status: "complete"};
            newState.step = getSortResult(action.sortType, newState.startNumbers).length - 1;
            [newState.currentNumbers, newState.log] = runSort(action.sortType, newState.startNumbers, newState.step);
            return newState;
        }
    }
};

export default reducer;