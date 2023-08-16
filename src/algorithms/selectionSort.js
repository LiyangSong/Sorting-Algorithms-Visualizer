import deepCopy from '../utils/deepCopy.js';
import swap from '../utils/swap.js';

/**
 * Run Selection Sort and record results of algorithm in each step.
 * @author - Yue
 * @param {{id: number, number: string, isActive: boolean, isSorted: boolean, isPointed: boolean, isSeperated: boolean, isHeaped: boolean}[]} startNumbers - Pass valid user input as start numbers of sorting algorithm.
 * @returns {{step: number, numbers: Object[], log: string}[]} - Sorting result and log in each step.
 */
const selectionSortResult = (startNumbers) => {
    let result = [{
        step: 0,
        numbers: startNumbers,
        log: "Start Numbers."
    }];
    let currentStep = 0;
    let currentNumbers = deepCopy(startNumbers);
    for (let i = 0; i < currentNumbers.length - 1; i++) {
        let minIndex = i;
        currentStep++;
        currentNumbers[minIndex].isActive = true;
        result.push({
          step: currentStep,
          numbers: deepCopy(currentNumbers),
          log: `${currentNumbers[minIndex].number} is the minimum from position ${i+1} to position ${minIndex+1}.`,
        });
    
        for (let j = i + 1; j < currentNumbers.length; j++) {
          currentStep++;
          if (parseInt(currentNumbers[j].number) < parseInt(currentNumbers[minIndex].number)) {
            currentNumbers[minIndex].isActive = false;
            minIndex = j;
            currentNumbers[minIndex].isActive = true;
            result.push({
              step: currentStep,
              numbers: deepCopy(currentNumbers),
              log: `${currentNumbers[minIndex].number} is the minimum from position ${i+1} to position ${j+1}.`,
            });
          }
          else{
            result.push({
                step: currentStep,
                numbers: deepCopy(currentNumbers),
                log: `${currentNumbers[minIndex].number} is the minimum from position ${i+1} to position ${j+1}.`,
              });
          }
        }
    
        if (minIndex !== i) {
          // Swap values
          swap(currentNumbers, i, minIndex);
          currentStep++;
          result.push({
            step: currentStep,
            numbers: deepCopy(currentNumbers),
            log: `Swap ${currentNumbers[i].number} and ${currentNumbers[minIndex].number}.`,
          });
        }
        currentNumbers[i].isSorted = true;
        currentStep++;
        result.push({
            step: currentStep,
            numbers: deepCopy(currentNumbers),
            log: `${currentNumbers[i].number} is sorted.`,
        });
        for (let n = 0; n < currentNumbers.length; n++) {
            currentNumbers[n].isActive = false;
        }
        for (let n = 0; n < i; n++) {
            currentNumbers[i].isSorted = true;
        }
    }
    currentNumbers[currentNumbers.length - 1].isSorted = true;
    result.push({
        step: currentStep + 1,
        numbers: deepCopy(currentNumbers),
        log: "All set.\nSorting completed."
    });

    return result;
};

export default selectionSortResult;