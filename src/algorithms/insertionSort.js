import { deepCopy } from "../utils.js";

export default function insertionSort(numbers, step) {
    const result = insertionSortResult(startNumbers);
    const currentResult = result.find(r => r.step === step);
    return [currentResult.numbers, currentResult.log];
}

function insertionSortResult(startNumbers){
    let result = [{
        step: 0,
        numbers: startNumbers,
        log: "Start Numbers."
    }];
    let currentStep = 0;
    let currentNumbers = deepCopy(startNumbers);

    for (let i = 1; i < arr.length; i++) {
        let key = deepCopy(currentNumbers[i]);
        let j = i - 1;
        while (j >= 0 && parseInt(currentNumbers[j].number) > parseInt(key.number)) {
            currentStep++;
            currentNumbers[j + 1] = deepCopy(currentNumbers[j]);
            currentNumbers[j + 1].isActive = true;
            j--;
            result.push({
                step: currentStep,
                numbers: deepCopy(currentNumbers),
                log: `Move ${key.number} to the left.`,
            });
        }
        currentNumbers[j + 1] = deepCopy(key);
        currentNumbers[i].isSorted = true;
        result.push({
            step: currentStep,
            numbers: deepCopy(currentNumbers),
            log: `${key.number} is set.`,
        });
        for (let n = 0; n < currentNumbers.length; n++) {
            currentNumbers[n].isActive = false;
        }
    }
    result.push({
        step: currentStep + 1,
        numbers: deepCopy(currentNumbers),
        log: "All set. Sorting completed."
    });
    return result;
}