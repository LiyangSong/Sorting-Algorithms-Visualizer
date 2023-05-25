import { deepCopy, swap } from "../utils.js";

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
            currentNumbers[j].isActive = true;
            currentNumbers[j + 1].isActive = true;

            let log;

            if (parseInt(currentNumbers[j].number) <= parseInt(currentNumbers[j + 1].number)) {
                log = `${currentNumbers[j].number} <= ${currentNumbers[j + 1].number}, no swap.`
            } else {
                log = `Swap ${currentNumbers[j].number} and ${currentNumbers[j + 1].number}.`;
                swap(currentNumbers, j, j + 1);
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
            });

            for (let n = 0; n < currentNumbers.length; n++) {
                currentNumbers[n].isActive = false;
            }
        }
    }
    result.push({
        step: currentStep + 1,
        numbers: deepCopy(currentNumbers),
        log: "All set. Sorting completed."
    });
    return result;
}