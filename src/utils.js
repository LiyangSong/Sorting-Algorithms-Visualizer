export function deepCopy(obj) {
    let copiedObj;

    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    copiedObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        copiedObj[key] = deepCopy(obj[key]);
    }

    return copiedObj;
}

export function swap(array, i, j) {
    let temp = deepCopy(array[i]);
    array[i] = deepCopy(array[j]);
    array[j] = temp;
}