
// TC = O(n)
// SC = O(1)
const reverseArray = function(array, n){
    // using 2 pointers
    // for(let i = 0, j = array.length - 1; i < array.length/2, j > i; i++, j--){
    //     let temp = array[i];
    //     array[i] = array[j];
    //     array[j] = temp;
    // }

    let start = 0;
    let end = array.length - 1;

    while(start < end){
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }

    return array;
}

const array = [1,2,3,4,5,6,7,8,9];
// const array = [1,2,3,4,5,6,7,8,9,10];
console.log(reverseArray(array, 5));