import { deepCopy, swap } from "../utils.js";

/**
 * Implement Bubble Sort and record results of algorithm in each step.
 * @author - Liyang
 * @param {Object[{id: number, number: string, isActive: boolean, isSorted: boolean, isPointed: boolean, isSeperated: boolean, isHeaped: boolean}]} startNumbers - Pass valid user input as start numbers of sorting algorithm.
 * @returns {Object[{step: number, numbers: Object[], log: string}]} - Sorting result and log in each step.
 */
export default function bubbleSortResult(startNumbers) {
    let result = [{
        step: 0,
        numbers: startNumbers,
        log: "Start Numbers."
    }];
    let currentStep = 0;
    let currentNumbers = deepCopy(startNumbers);

    for (let i = currentNumbers.length; i > 1; i--) {
        for (let j = 0; j < i - 1; j++) {
            currentStep++;
            // Show currently comparing number pairs by stylizing.
            currentNumbers[j].isActive = true;
            currentNumbers[j + 1].isActive = true;

            let log;

            // Compare and swap number pairs.
            if (parseInt(currentNumbers[j].number) <= parseInt(currentNumbers[j + 1].number)) {
                log = `${currentNumbers[j].number} <= ${currentNumbers[j + 1].number}.
                    No swap.`
            } else {
                log = `${currentNumbers[j].number} > ${currentNumbers[j + 1].number}.
                    Swap ${currentNumbers[j].number} and ${currentNumbers[j + 1].number}.`;
                swap(currentNumbers, j, j + 1);
            }

            // When comparing number pair is the last 2 number, set the last 1 as sorted.
            if (j === i - 2) {
                currentNumbers[j + 1].isSorted = true;
                log += `\n${currentNumbers[j + 1].number} is set.`
                // When comparing number pair is the only left 2 number, also set the left 1 as sorted.
                if (i === 2) {
                    currentNumbers[j].isSorted = true;
                    log += `\n${currentNumbers[j].number} is set.`
                }
            }

            // Add result of current step in result list.
            result.push({
                step: currentStep,
                numbers: deepCopy(currentNumbers),
                log: log
            });

            // After finishing current step, set all numbers as inactive.
            for (let n = 0; n < currentNumbers.length; n++) {
                currentNumbers[n].isActive = false;
            }
        }
    }

    // Add completed status in result list.
    result.push({
        step: currentStep + 1,
        numbers: deepCopy(currentNumbers),
        log: "All set.\nSorting completed."
    });
    return result;
}