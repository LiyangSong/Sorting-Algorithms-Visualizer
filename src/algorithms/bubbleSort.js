export default function bubbleSort(numbers, step) {
    const result = bubbleSortResult(numbers)
    const currentResult = result.find(r => r.step === step)
    const currentNumbers = currentResult.numbers
    const currentLog = currentResult.log

    return currentNumbers;
}

function bubbleSortResult(numbers) {
    let result = [{
        step: 0,
        numbers: numbers,
        log: "Initial Numbers."
    }];
    let currentStep = 0;

    let currentNumbers = numbers.slice();
    for (let i = 0; i < currentNumbers.length - 1; i++) {
        currentNumbers[i].isActive = true;
        for (let j = i + 1; j < currentNumbers.length; j++) {
            let temp = currentNumbers[i];
            let log = "";
            if (parseInt(currentNumbers[i].number) > parseInt(currentNumbers[j].number)) {
                currentStep++;
                currentNumbers[j].isActive = true;

                log = "Swap ${currentNumbers[i].number} and ${currentNumbers[j].number}.";
                currentNumbers[i] = currentNumbers[j];
                currentNumbers[j] = temp;
                result.push({
                    step: currentStep,
                    numbers: currentNumbers,
                    log: log
                })

                currentNumbers[j].number.isActive = false;
            }
        }
        currentNumbers[i].number.isActive = false;
        currentNumbers[i].number.isOrdered = true;
    }
    return result
}