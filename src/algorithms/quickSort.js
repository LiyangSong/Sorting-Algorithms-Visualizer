import deepCopy from '../utils/deepCopy.js';
import swap from '../utils/swap.js';

/**
 * Implement Quick Sort and record results of algorithm in each step.
 * @author - Liyang
 * @param {{id: number, number: string, isActive: boolean, isSorted: boolean, isPointed: boolean, isSeperated: boolean, isHeaped: boolean}[]} startNumbers - Pass valid user input as start numbers of sorting algorithm.
 * @returns {{step: number, numbers: Object[], log: string}[]} - Sorting result and log in each step.
 */
const quickSortResult = (startNumbers) => {
    let result = [{
        step: 0,
        numbers: startNumbers,
        log: "Start Numbers."
    }];
    let currentStep = 0;
    let currentNumbers = deepCopy(startNumbers);

    const partition = (array, lowIndex, highIndex) => {
        let pivotIndex = highIndex;
        let tempIndex = lowIndex;
        array[pivotIndex].isPointed = true;
        array[tempIndex].isPointed = true;

        currentStep++;
        let log = `Pivot: ${array[pivotIndex].number}.
            Temporary pivot: ${array[tempIndex].number}.`;
        result.push({
            step: currentStep,
            numbers: deepCopy(array),
            log: log
        });

        for (let i = lowIndex; i < highIndex; i++) {
            array[i].isActive = true;
            currentStep++;
            if (parseInt(array[i].number) >= parseInt(array[pivotIndex].number)) {
                log = `${array[i].number} >= pivot: ${array[pivotIndex].number}.`
                if (i !== tempIndex) {
                    log += `\nNo swap.`;
                } else {
                    log += `\nSet ${array[i].number} as temporary pivot.`;
                }
                result.push({
                    step: currentStep,
                    numbers: deepCopy(array),
                    log: log
                });
            } else {
                array[tempIndex].isActive = true;
                log = `${array[i].number} < pivot: ${array[pivotIndex].number}.`
                if (i !== tempIndex) {
                    log += `\nSwap ${array[i].number} and temporary pivot: ${array[tempIndex].number}.`;
                } else {
                    log += `\nMove forward temporary pivot.`
                }
                swap(array, i, tempIndex);
                result.push({
                    step: currentStep,
                    numbers: deepCopy(array),
                    log: log
                });

                array[tempIndex].isActive = false;
                array[i].isPointed = false;
                tempIndex++;
                array[tempIndex].isPointed = true;
            }
            array[i].isActive = false;
        }

        currentStep++;
        log = `Swap pivot: ${array[pivotIndex].number} and temporary pivot: ${array[tempIndex].number}.
            Pivot: ${array[pivotIndex].number} is set.`;
        array[pivotIndex].isActive = true;
        array[tempIndex].isActive = true;
        swap(array, pivotIndex, tempIndex);

        result.push({
            step: currentStep,
            numbers: deepCopy(array),
            log: log
        });

        array[pivotIndex].isActive = false;
        array[pivotIndex].isPointed = false;
        array[tempIndex].isActive = false;
        array[tempIndex].isSorted = true;
        array[tempIndex].isPointed = false;

        return tempIndex;
    };

    const quickSort = (array, lowIndex, highIndex) => {
        if (lowIndex >= highIndex) {
            return;
        }

        let pivotIndex = partition(array, lowIndex, highIndex);
        quickSort(array, lowIndex, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, highIndex);
    };

    quickSort(currentNumbers, 0, currentNumbers.length - 1);

    for (let n = 0; n < currentNumbers.length; n++) {
        currentNumbers[n].isSorted = true;
    }

    result.push({
        step: currentStep + 1,
        numbers: deepCopy(currentNumbers),
        log: "All set.\nSorting completed.",
    });

    return result;
};

export default quickSortResult;

