// TC = O(n + m)
// SC = O(n + m)
const mergedArrays = function(arr1, arr2, N, M){
    let arr3 = [];

    if(arr1.length === 0){
        return arr2;
    }
    
    if(arr2.length === 0){
        return arr1;
    }

    let i = 0;
    let j = 0;

    while(i < N || j < M){
        if(i === N){
            arr3.push(arr2[j]);
            j++;
        } else if(j === M){
            arr3.push(arr1[i]);
            i++;
        } else if(arr1[i] < arr2[j]){
            arr3.push(arr1[i]);
            i++;
        } else if(arr1[i] > arr2[j]){
            arr3.push(arr2[j]);
            j++;
        }
    }

    return arr3;
}

// const arr1 = [1, 3, 5, 7];
// const arr2 = [0, 2, 6, 8, 9];
const arr1 = [1, 5, 9, 10, 15, 20];
const arr2 = [2, 3, 8, 13];
console.log(mergedArrays(arr1, arr2, arr1.length, arr2.length));