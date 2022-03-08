// Given an unsorted array arr[] of size N having both negative and positive integers. The task is place all negative element at the end of array without changing the order of positive element and negative element.

// Example 1:
// N = 8
// arr[] = {1, -1, 3, 2, -7, -5, 11, 6 }
// Output : 
// 1  3  2  11  6  -1  -7  -5

// Example 2: 
// N=8
// arr[] = {-5, 7, -3, -4, 9, 10, -1, 11}
// Output :
// 7  9  10  11  -5  -3  -4  -1


// TC = O(n)
// SC = O(n)
const segregateElements = function(array, arr_size){
    let segregatedArray = [];

    for(let i = 0; i < arr_size; i++){
        if(array[i] > 0){
            segregatedArray.push(array[i]);
        }
    }

    for (let i = 0; i < arr_size; i++) {
        if(array[i] < 0){
            segregatedArray.push(array[i]);
        }
    }

    return segregatedArray;
}

// const array = [1, -1, 3, 2, -7, -5, 11, 6];
const array = [-5, 7, -3, -4, 9, 10, -1, 11];
console.log(segregateElements(array, array.length));