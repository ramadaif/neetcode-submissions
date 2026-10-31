class Solution{
    hasDuplicate(nums){
        let Unique = new Set(nums);

        if(nums.length !== Unique.size){
            return true;
        }
       return false;
    }
}
//ana ayza array w haymshy index by index law el index da mawgood marten fa return baa true 

