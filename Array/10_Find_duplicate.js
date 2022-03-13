// TC = O(n)
// SC = O(n)
const findDuplicate = function(arr){
    const num = new Map();

    for(let i = 0; i < arr.length; i++){
        if(!num[arr[i]]){
            num[arr[i]] = true;
        } else {
            return arr[i]
        }
    }

}

// const arr = [1,3,4,2,2];
// const arr = [3,1,3,4,2];
const arr = [2,2,2,2,2];
console.log(findDuplicate(arr));