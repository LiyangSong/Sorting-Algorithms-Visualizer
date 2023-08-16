import deepCopy from './deepCopy';

/**
 * Swap two objects in array with deepCopy.
 * @author - Liyang
 * @param {object[]} array - One array of objects.
 * @param {number} i - Index of one object in array.
 * @param {number} j - Index of one object in array.
 */
const swap = (array, i, j) => {
    let temp = deepCopy(array[i]);
    array[i] = deepCopy(array[j]);
    array[j] = temp;
};

export default swap;