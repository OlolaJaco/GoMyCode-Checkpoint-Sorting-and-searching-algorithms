function insertionSort(arr) {
    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Store the current element
        let current = arr[i];
        let j = i - 1;
        
        // Compare the current element with the sorted portion of the array
        // and shift elements to the right to make room for the current element
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Place the current element in its correct position
        arr[j + 1] = current;
    }
    
    return arr;
}

// Example usage
const array = [5, 2, 9, 1, 5, 6];
console.log('Original array:', array);
const sortedArray = insertionSort(array);
console.log('Sorted array:', sortedArray);
