export default function Description({ sortType }) {
    const descriptions = {
        "bubbleSort": "Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are in the intended order.",
        "insertionSort": "Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration.",
        "selectionSort": "Selection sort is a sorting algorithm that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.",
        "quickSort": "Quicksort is a sorting algorithm based on the divide and conquer approach where an array is divided into subarrays by selecting a pivot element (element selected from the array).\n" +
            "While dividing the array, the pivot element should be positioned in such a way that elements less than pivot are kept on the left side and elements greater than pivot are on the right side of the pivot.\n" +
            "The left and right subarrays are also divided using the same approach. This process continues until each subarray contains a single element.",
        "mergeSort": "Merge Sort is based on Divide and Conquer Algorithm. A problem is divided into multiple sub-problems. Sub-problems are solved individually and combined to form the final solution.",
        "heapSort": "Heap sort works by visualizing the elements of the array as a special kind of complete binary tree called a heap."
    }

    return(
        <div className="description">
            {descriptions[sortType]}
        </div>
    )
}