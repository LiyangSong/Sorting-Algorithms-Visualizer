export function deepCopy (obj) {
    let copiedObj;

    if (typeof obj !== "object" || obj === null) {
        return obj
    }

    copiedObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        copiedObj[key] = deepCopy(obj[key])
    }

    return copiedObj;
}