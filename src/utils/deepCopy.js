/**
 * Usually non-primitive data types like arrays and objects would perform shallow copy.
 * Deep Copy is a copy of object whose properties do not share the same references with source object.
 * Deep copied object can be modified without affecting the source object.
 * @author - Liyang
 * @param {Object} obj - Original object to be copied.
 * @returns {Object} - Deep copied object.
 */
const deepCopy = (obj) => {
    let copiedObj;

    // Base case that primitive data types are reached.
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    copiedObj = Array.isArray(obj) ? [] : {};

    // Recursively run deepCopy to go through the hierarchy of object.
    for (let key in obj) {
        copiedObj[key] = deepCopy(obj[key]);
    }

    return copiedObj;
};

export default deepCopy;