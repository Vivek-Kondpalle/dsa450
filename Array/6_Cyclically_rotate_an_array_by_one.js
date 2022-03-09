// Given an array, rotate the array by one position in clock-wise direction.

// Example 1:
// Input:
// N = 5
// A[] = {1, 2, 3, 4, 5}
// Output:
// 5 1 2 3 4

// Example 2:
// Input:
// N = 8
// A[] = {9, 8, 7, 6, 4, 2, 1, 3}
// Output:
// 3 9 8 7 6 4 2 1


// TC = O(n)
// SC = O(1)
const rotate = function(arr, n){
    let temp = arr[n-1];

    for(let i = n-2; i >= 0; i--){
        arr[i+1] = arr[i];
    }

    arr[0] = temp;

    return arr;
}

// const a = [1, 2, 3, 4, 5];
const a = [1, 2, 3];
console.log(rotate(a, a.length));