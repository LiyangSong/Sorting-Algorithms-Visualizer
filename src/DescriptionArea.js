export default function DescriptionArea({ sortType }) {
    const descriptions = {
        "bubbleSort": "Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are in the intended order.",
        "insertionSort": "Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration.",
        "selectionSort": "Selection sort is a sorting algorithm that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.",
        "quickSort": "Quicksort is a sorting algorithm based on the divide and conquer approach where an array is divided into subarrays by selecting a pivot element.",
        "mergeSort": "Merge Sort is based on Divide and Conquer. A problem is divided into multiple sub-problems that are solved individually and combined to form the final solution.",
        "heapSort": "Heap sort works by visualizing the elements of the array as a special kind of complete binary tree called a heap."
    }

    const complexity={
        "bubbleSort": "Time Complexity:O(n²)       Space Complexity:O(1)",
        "insertionSort": "Time Complexity:O(n²)       Space Complexity:O(1)",
        "selectionSort": "Time Complexity:O(n²)       Space Complexity:O(1)",
        "quickSort": "Time Complexity:O(nlog(n))       Space Complexity:O(log(n))",
        "mergeSort": "Time Complexity:O(nlog(n))       Space Complexity:O(n)",
        "heapSort": "Time Complexity:O(nlog(n))       Space Complexity:O(1)",

    }

    return(
        <div className="description">
            <div className="title">{sortType.toUpperCase()}</div>
            <div className="description-text">{descriptions[sortType]}</div>
            <div className="complexity-text">{complexity[sortType]}</div>
        </div>
    )
}