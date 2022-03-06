class Solution{
    getMinMax(arr,n){
        
        if(arr.length === 1){
            return [arr[0], arr[0]];
        }
        
        if(arr.length === 0){
            return [0, 0];
        }
        
        let min = Infinity;
        let max = 0;
        
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
            
            if(arr[i] < min){
                min = arr[i];
            }
        }
        
        return [min, max];
    }
}