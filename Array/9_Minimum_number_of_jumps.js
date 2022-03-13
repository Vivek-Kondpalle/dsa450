const minJumps = function(arr, n){
    if(n <= 1){
        return 0;
    }

    if(arr[0] === 0){
        return -1;
    }

    let maxReach = arr[0];
    let step = arr[0];
    let jump = 1;

    for(let i = 1; i < n; i++){
        if(i == n-1){
            return jump;
        }

        maxReach = Math.max(maxReach, i + arr[i]);

        step--;

        if(step === 0){
            jump++;

            if(i >= maxReach){
                return -1;
            }

            step = maxReach - i;
        }
    }

    return -1;
}

const arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8,9];
// const arr = [2,1,0,3];
// const arr = [];
// const arr = [0,1,2,3];
console.log(minJumps(arr, arr.length));