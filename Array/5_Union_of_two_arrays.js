// Given two arrays a[] and b[] of size n and m respectively. The task is to find union between these two arrays. Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only one occurrence of element should be printed in the union.

// Example 1:
// Input:
// 5 3
// 1 2 3 4 5
// 1 2 3
// Output: 
// 5

// Example 2:
// Input:
// 6 2 
// 85 25 1 32 54 6
// 85 2 
// Output: 
// 7


// TC = O(n + m - min(n,m))
// SC = O(n + m)
const doUnion = function(a, n, b, m){
    if(n === 0){
        return m;
    }

    if(m === 0){
        return n;
    }

    let i = 0;
    let j = 0;
    let unionArray = [];

    // O(min(n,m))
    while(i < n && j < m){
        if(a[i] > b[j]){
            unionArray.push(b[j]);
            j++;
        } else if(a[i] < b[j]){
            unionArray.push(a[i]);
            i++;
        } else {
            unionArray.push(b[j]);
            j++;
            i++;
        }
    }

    // O(n - min(n,m))
    while(i < n){
        unionArray.push(a[i]);
        i++;
    }

    // O(m - min(n,m))
    while(j < m){
        unionArray.push(b[j]);
        j++;
    }

    return unionArray.length;
}


// TC = O(n + m)
// SC = O(n + m)
const doUnionMap = function(a, m, b, n){
    let mp = new Map();

    for(let i = 0; i < m; i++){
        mp.set(a[i], true);
    }

    for(let i = 0; i < n; i++){
        mp.set(b[i], true);
    }

    return mp.size;
}

const a = [1, 2, 3, 4, 5];
const b = [1, 2, 3];
console.log(doUnionMap(a, a.length, b, b.length));