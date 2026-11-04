class Solution {
    topKFrequent(nums, k) {
        let count = {};
        let map = []

        for(let i = 0 ; i < nums.length ; i++){
            
           count[nums[i]] = (count[nums[i]] || 0) + 1;
        }

        for(let num in count){
           map.push(Number(num))  
        }
    
        map.sort((a,b) => count[b]-count[a]);

        return map.slice(0,k)
}
}
