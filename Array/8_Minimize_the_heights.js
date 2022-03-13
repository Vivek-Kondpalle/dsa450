const getMinDiff = function(arr, n, k){
    arr.sort((a,b) => a-b);

    let ans = arr[n - 1] - arr[0];

    let tempmax = arr[n - 1];
    let tempmin = arr[0];

    for(let i = 1; i < n; i++){
        tempmin = Math.min(arr[0] + k, arr[i] - k);
        tempmax = Math.max(arr[i - 1] + k, arr[n - 1] - k);
        ans = Math.min(ans, tempmax - tempmin);
    }

    return ans;
}

// const arr = [1,5,15,10];
// const k = 3;

// const arr = [1, 15, 10];
// const k = 6;

// const arr = [4,6];
// const k = 10;

// const arr = [6,10];
// const k = 3;

// const arr = [1, 10, 14, 14, 14, 15];
// const k = 6;

// const arr = [1,2,3];
// const k = 2;

console.log(getMinDiff(arr, arr.length, k))