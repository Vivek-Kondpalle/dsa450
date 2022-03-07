// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

// TC = O(n)    only 1 traversal is needed
// SC = O(1)    
const sort012 = function(arr, n){
    let low = 0;
    let mid = 0;
    let high = n - 1;
    let temp = 0;

    while(mid <= high){
        if(arr[mid] === 0){
            temp = arr[mid];
            arr[mid] = arr[low];
            arr[low] = temp;
            low++;
            mid++;
        } else if(arr[mid] === 1){
            mid++;
        } else {
            temp = arr[high];
            arr[high] = arr[mid];
            arr[mid] = temp;
            high--;
        }
    }

    return arr;
}

const array = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1, 0 , 2, 1, 0, 0, 1, 2, 2, 1, 1, 0 ];
console.log(sort012(array, array.length))