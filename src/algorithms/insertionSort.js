import deepCopy from '../utils/deepCopy.js';
import swap from '../utils/swap.js';

/**
 * Run Insertion Sort and record results of algorithm in each step.
 * @author - Yue
 * @param {{id: number, number: string, isActive: boolean, isSorted: boolean, isPointed: boolean, isSeperated: boolean, isHeaped: boolean}[]} startNumbers - Pass valid user input as start numbers of sorting algorithm.
 * @returns {{step: number, numbers: Object[], log: string}[]} - Sorting result and log in each step.
 */
const insertionSortResult = (startNumbers) => {
    let result = [{
        step: 0,
        numbers: startNumbers,
        log: "Start Numbers."
    }];
    let currentStep = 0;
    let currentNumbers = deepCopy(startNumbers);
    currentStep++;
    currentNumbers[0].isSorted=true;
    result.push({
        step: currentStep,
        numbers: deepCopy(currentNumbers),
        log: `${currentNumbers[0].number} is in the sorted part.`,
    });

    for (let i = 1; i < currentNumbers.length; i++) {
        let key = deepCopy(currentNumbers[i]);
        let j = i;
        currentNumbers[j].isActive = true;
        while (j > 0 && parseInt(currentNumbers[j].number) < parseInt(currentNumbers[j-1].number)) {
            currentStep++;
            currentNumbers[j].isActive = true;
            currentNumbers[j - 1].isActive = true;
            swap(currentNumbers, j, j - 1);
            j--;
            result.push({
                step: currentStep,
                numbers: deepCopy(currentNumbers),
                log: `Move ${key.number} to the left.`,
            });
        }
        currentStep++;
        currentNumbers[j].isSorted=true;
        result.push({
            step: currentStep,
            numbers: deepCopy(currentNumbers),
            log: `${key.number} is in the sorted part.`,
        });
        for (let n = 0; n < currentNumbers.length; n++) {
            currentNumbers[n].isActive = false;
        }
    }
    result.push({
        step: currentStep + 1,
        numbers: deepCopy(currentNumbers),
        log: "All set.\nSorting completed."
    });
    return result;
};

export default insertionSortResult;