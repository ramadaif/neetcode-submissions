class Solution {
    topKFrequent(nums, k) {
       let count = {};
       let map = [];

       for (let i = 0 ; i < nums.length ; i++){
        count[nums[i]] = (count [nums[i]] || 0) + 1;
       }

       for(let num in count){
        map.push(Number(num));
       }

       map.sort((a,b) => count[b] - count[a])

       return map.slice(0,k)
}
}

//first we are goint to count how much does each number appear and we are going to create an object for this
//2 - create an array to push values with its count easily
//3- sort them bec u need the high frequency
//4- and then begin from 0 till the k digit


