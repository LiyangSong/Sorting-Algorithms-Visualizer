import { deepCopy, swap } from "../utils";

export default function heapSortResult(startNumbers) {

    let result = [{
        step: 0,
        numbers: startNumbers,
        log: "Start Numbers."
    }];
    let currentStep = 0;
    let currentNumbers = deepCopy(startNumbers);

    for (let n = 0; n < currentNumbers.length; n++) {
        currentNumbers[n].isHeaped = true;
    }

    console.log(currentNumbers);
    result.push({
        step: currentStep + 1,
        numbers: currentNumbers,
        log: "Build the heap tree."
    })

    // heapSort(currentNumbers);

    // for (let n = 0; n < currentNumbers.length; n++) {
    //     currentNumbers[n].isSorted = true;
    // }
    //
    // result.push({
    //     step: currentStep + 1,
    //     numbers: deepCopy(currentNumbers),
    //     log: "All set.\nSorting completed.",
    // });

    return result;
}
