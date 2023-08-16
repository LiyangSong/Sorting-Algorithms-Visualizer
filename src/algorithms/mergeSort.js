import { deepCopy } from "../utils";

/**
 * Implement Merge Sort and record results of algorithm in each step.
 * @author - Liyang
 * @param {{id: number, number: string, isActive: boolean, isSorted: boolean, isPointed: boolean, isSeperated: boolean, isHeaped: boolean}[]} startNumbers - Pass valid user input as start numbers of sorting algorithm.
 * @returns {{step: number, numbers: Object[], log: string}[]} - Sorting result and log in each step.
 */
const mergeSortResult = (startNumbers) => {
    let result = [{
        step: 0,
        numbers: startNumbers,
        log: "Start Numbers."
    }];
    let currentStep = 0;
    let currentNumbers = deepCopy(startNumbers);
    let log;

    const merge = (array, lowIndex, midIndex, highIndex) => {
        currentStep++;
        log = `Merge array [${lowIndex}, ${midIndex}] and [${midIndex + 1}, ${highIndex}].`
        for (let n = lowIndex; n <= highIndex; n++) {
            array[n].isActive = true;
        }
        result.push({
            step: currentStep,
            numbers: deepCopy(array),
            log: log
        });

        let i = lowIndex;
        let j = midIndex + 1;
        let k = 0;
        let mergedArray = [];

        while (i <= midIndex && j <= highIndex) {
            currentStep++;
            array[i].isPointed = true;
            array[j].isPointed = true;
            if (parseInt(array[i].number) <= parseInt(array[j].number)) {
                log = `${array[i].number} <= ${array[j].number}.
                    Place ${array[i].number} in position ${k} in merged array.`
                result.push({
                    step: currentStep,
                    numbers: deepCopy(array),
                    log: log
                });
                array[i].isPointed = false;
                mergedArray[k] = deepCopy(array[i]);
                i++;
            } else {
                log = `${array[i].number} > ${array[j].number}.
                    Place ${array[j].number} in position ${k} in merged array.`;
                result.push({
                    step: currentStep,
                    numbers: deepCopy(array),
                    log: log
                });
                array[j].isPointed = false;
                mergedArray[k] = deepCopy(array[j]);
                if (j === highIndex) {
                    mergedArray[k].isSeperated = false;
                }
                j++;
            }
            k++;
        }

        while (i <= midIndex) {
            array[i].isPointed = true;
            currentStep++;
            log = `Place remaining ${array[i].number} in position ${k} in merged array.`;
            result.push({
                step: currentStep,
                numbers: deepCopy(array),
                log: log
            });
            array[i].isPointed = false;
            mergedArray[k] = deepCopy(array[i]);
            i++;
            k++;
        }

        while (j <= highIndex) {
            array[j].isPointed = true;
            currentStep++;
            log = `Place remaining ${array[j].number} in position ${k} in merged array.`;
            result.push({
                step: currentStep,
                numbers: deepCopy(array),
                log: log
            });
            array[j].isPointed = false;
            mergedArray[k] = deepCopy(array[j]);
            if (j === highIndex) {
                mergedArray[k].isSeperated = false;
            }
            j++;
            k++;
        }

        currentStep++;
        log = `Merge complete.`
        for (let m = 0; m < mergedArray.length; m++) {
            array[lowIndex + m] = deepCopy(mergedArray[m]);
        }

        for (let n = lowIndex; n < highIndex; n++) {
            array[n].isSeperated = false;
        }
        array[highIndex].isSeperated = true;

        result.push({
            step: currentStep,
            numbers: deepCopy(array),
            log: log
        })

        for (let n = lowIndex; n <= highIndex; n++) {
            array[n].isActive = false;
        }
    };

    const mergeSort = (array, lowIndex, highIndex) => {
        if (lowIndex >= highIndex) {
            return;
        }

        let midIndex = Math.floor((lowIndex + highIndex) / 2);
        array[midIndex].isSeperated = true;
        array[midIndex].isPointed = true;
        currentStep++;
        log = `Separate array [${lowIndex}, ${highIndex}] by ${array[midIndex].number}.`;
        result.push({
            step: currentStep,
            numbers: deepCopy(array),
            log: log
        });
        array[midIndex].isPointed = false;

        mergeSort(array, lowIndex, midIndex);
        mergeSort(array, midIndex + 1, highIndex);
        merge(array, lowIndex, midIndex, highIndex);
    };

    mergeSort(currentNumbers, 0, currentNumbers.length - 1);

    for (let n = 0; n < currentNumbers.length; n++) {
        currentNumbers[n].isSorted = true;
    }

    result.push({
        step: currentStep + 1,
        numbers: currentNumbers,
        log: "All set.\nSorting completed.",
    });

    return result;
};

export default mergeSortResult;