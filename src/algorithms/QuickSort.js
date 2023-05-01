export default function QuickSort() {
    return(
        <p>
            Quicksort is a sorting algorithm based on the divide and conquer approach where an array is divided into subarrays by selecting a pivot element (element selected from the array).
            While dividing the array, the pivot element should be positioned in such a way that elements less than pivot are kept on the left side and elements greater than pivot are on the right side of the pivot.
            The left and right subarrays are also divided using the same approach. This process continues until each subarray contains a single element.
            At this point, elements are already sorted. Finally, elements are combined to form a sorted array.
        </p>
    )
}