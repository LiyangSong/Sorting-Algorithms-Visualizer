import clock from './assets/clock.png'
import complexitypic from './assets/complexity.png'

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
        "bubbleSort": {t:"O(n²)",s:"O(1)"},
        "insertionSort":{t:"O(n²)",s:"O(1)"},
        "selectionSort":{t:"O(n²)",s:"O(1)"},
        "quickSort":{t:"O(nlog(n))",s:"O(log(n))"},
        "mergeSort":{t:"O(nlog(n))",s:"O(n)"},
        "heapSort":{t:"O(nlog(n))",s:"O(1)"},
    }

    return(
        <div className="description">
            <div className="title">{sortType.toUpperCase()}</div>
            <div className="description-text">{descriptions[sortType]}</div>
            <div className="complexity-text">
                <img src={clock} height="25px" width="25px"/>
                <span>&nbsp;{complexity[sortType].t}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <img src={complexitypic} height="25px" width="25px"/>
                <span>&nbsp;{complexity[sortType].s}</span>
            </div>
        </div>
    )
}