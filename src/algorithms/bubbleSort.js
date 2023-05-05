import {deepCopy} from "../utils.js";

export default function bubbleSort(startNumbers, step) {
    const result = bubbleSortResult(startNumbers);
    const currentResult = result.find(r => r.step === step);
    const currentNumbers = currentResult.numbers;
    const currentLog = currentResult.log;

    return [currentNumbers, currentLog];
}

function bubbleSortResult(startNumbers) {
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
            currentNumbers[j].isActive = true;
            currentNumbers[j + 1].isActive = true;

            let temp = deepCopy(currentNumbers[j]);
            let log;

            if (parseInt(currentNumbers[j].number) <= parseInt(currentNumbers[j + 1].number)) {
                log = `${currentNumbers[j].number} <= ${currentNumbers[j + 1].number}, no swap.`
            } else {
                log = `Swap ${currentNumbers[j].number} and ${currentNumbers[j + 1].number}.`;
                currentNumbers[j] = deepCopy(currentNumbers[j + 1]);
                currentNumbers[j + 1] = temp;
            }

            if (j === i - 2) {
                currentNumbers[j + 1].isSorted = true;
                log += ` ${currentNumbers[j + 1].number} is set.`
                if (i === 2) {
                    currentNumbers[j].isSorted = true;
                    log += ` ${currentNumbers[j].number} is set.`
                }
            }

            result.push({
                step: currentStep,
                numbers: deepCopy(currentNumbers),
                log: log
            })

            for (let n = 0; n < currentNumbers.length; n++) {
                currentNumbers[n].isActive = false;
            }
        }
    }

    return result
}