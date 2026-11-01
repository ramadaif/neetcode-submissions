class Solution{
    hasDuplicate(nums){
        let Unique = new Set(nums);

        return Unique.size !== nums.length;
    }
}
