// Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.

// Example 1:
// Input:
// N = 5
// Arr[] = {1,2,3,-2,5}
// Output:
// 9

// Example 2:
// Input:
// N = 4
// Arr[] = {-1,-2,-3,-4}
// Output:
// -1

// TC = O(n)
// SC = O(1)
// Does not work if all elements are -ve
const maxSubarraySum = function(arr, n){
    let maxSum = 0;
    let currentSum = 0;

    for(let i=0; i<n; i++){
        currentSum = currentSum + arr[i];

        if(currentSum > maxSum){
            maxSum = currentSum;
        }

        if(currentSum < 0){
            currentSum = 0
        }
    }

    return maxSum;
}


// TC = O(n)
// SC = O(1)
// works for every case
const maxSubarraySum2 = function(arr, n){
    let maxSum = arr[0];
    let currentSum = arr[0];

    for(let i = 1; i < n; i++){
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// let arr = [1,2,3,-2,5];
// let arr = [5,-4,-2,6,-1];
// let arr = [-1,-2,-3,-4];
let arr = [-1,-2,-3,7,-2,-4,2];
console.log(maxSubarraySum2(arr, arr.length));