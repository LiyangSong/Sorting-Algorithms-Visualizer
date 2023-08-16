import deepCopy from '../utils/deepCopy.js';
import swap from '../utils/swap.js';

/**
 * Implement Heap Sort and record results of algorithm in each step.
 * @author - Liyang
 * @param {{id: number, number: string, isActive: boolean, isSorted: boolean, isPointed: boolean, isSeperated: boolean, isHeaped: boolean}[]} startNumbers - Pass valid user input as start numbers of sorting algorithm.
 * @returns {{step: number, numbers: Object[], log: string}[]} - Sorting result and log in each step.
 */
const heapSortResult = (startNumbers) => {
    let result = [{
        step: 0,
        numbers: startNumbers,
        log: "Start Numbers."
    }];
    let currentStep = 0;
    let currentNumbers = deepCopy(startNumbers);
    let log;

    for (let n = 0; n < currentNumbers.length; n++) {
        currentNumbers[n].isHeaped = true;
    }
    currentStep++;
    result.push({
        step: currentStep,
        numbers: deepCopy(currentNumbers),
        log: "Build the heap tree."
    });

    const heapify = (array, heapSize, rootIndex) => {
        let largestIndex = rootIndex;
        let leftChildIndex = 2 * rootIndex + 1;
        let rightChildIndex = 2 * rootIndex + 2;

        array[rootIndex].isActive = true;

        if (leftChildIndex < heapSize) {
            array[leftChildIndex].isActive = true;
            if (parseInt(array[leftChildIndex].number) > parseInt(array[largestIndex].number)) {
                log = `${array[leftChildIndex].number} > ${array[rootIndex].number}.`
                largestIndex = leftChildIndex;
            }
        }

        if (rightChildIndex < heapSize) {
            array[rightChildIndex].isActive = true;
            if (parseInt(array[rightChildIndex].number) > parseInt(array[largestIndex].number)) {
                log = `${array[rightChildIndex].number} > ${array[rootIndex].number}.`
                largestIndex = rightChildIndex;
            }
        }

        currentStep++;

        if (largestIndex !== rootIndex) {
            log += ` Swap root: ${array[rootIndex].number} and element: ${array[largestIndex].number}.`;

            swap(array, rootIndex, largestIndex);
            result.push({
                step: currentStep,
                numbers: deepCopy(array),
                log: log,
            });

            heapify(array, heapSize, largestIndex);
        } else {
            log = `Root: ${array[rootIndex].number} is already largest or a leaf node.`
            result.push({
                step: currentStep,
                numbers: deepCopy(array),
                log: log,
            });
        }

        array[rootIndex].isActive = false;
        if(leftChildIndex < heapSize) {
            array[leftChildIndex].isActive = false;
        }
        if(rightChildIndex < heapSize) {
            array[rightChildIndex].isActive = false;
        }
    };

    const heapSort = (array) => {
        const n = array.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(array, n, i);
        }

        currentStep++;
        log = `Maximum heap has been built.`
        result.push({
            step: currentStep,
            numbers: deepCopy(array),
            log: log,
        });

        for (let i = n - 1; i > 0; i--) {
            currentStep++;
            log = `Put root: ${array[0].number} at the end of array.
                ${array[0].number} is set.`;
            array[0].isActive = true;
            array[i].isActive = true;
            swap(array, 0, i);
            array[i].isSorted = true;
            result.push({
                step: currentStep,
                numbers: deepCopy(array),
                log: log,
            });

            array[0].isActive = false;
            array[i].isActive = false;

            heapify(array, i, 0);
        }
    };

    heapSort(currentNumbers);

    currentNumbers[0].isSorted = true;
    currentStep++;
    result.push({
        step: currentStep,
        numbers: deepCopy(currentNumbers),
        log: "All set.\nSorting completed."
    })

    for (let n = 0; n < currentNumbers.length; n++) {
        currentNumbers[n].isHeaped = false;
    }
    currentStep++;
    result.push({
        step: currentStep,
        numbers: deepCopy(currentNumbers),
        log: "Recover array format.",
    });

    return result;
};

export default heapSortResult;
