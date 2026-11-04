class Solution {
    
    groupAnagrams(strs) {
        let groups = {};
        for (let i = 0 ; i < strs.length ; i++){
           let words = strs[i];
           
            let sorted = words.split("").sort().join("");

             if(groups[sorted]){
            groups[sorted].push(words);
        }
        else{
            groups[sorted]=[words];
        }
        }
    
        return Object.values(groups);
    }
}
//ayza a2asem el list into sublists w el kalam elly shabaho 
//ayza a3mel for loop aashan telef hawalen el words w baadaha for loop t compare them