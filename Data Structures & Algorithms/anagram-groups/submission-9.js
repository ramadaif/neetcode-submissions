class Solution {
    
    groupAnagrams(strs) {
        let groups = {};
        //AAMLANA OBJECT AASHAN AHOT FEH EL RESULT W A GET RESULT BY KEYS
        for (let i = 0 ; i < strs.length ; i++){
           let words = strs[i]; // LOOP THROUGH WORDS
           
            let sorted = words.split("").sort().join(""); // LOOP THROUGH LETTERS OF EACH WORD

             if(groups[sorted]){
            groups[sorted].push(words); //LAW FEH GROUP FA PUSH EL WORDS LEL GROUP
        }
        else{
            groups[sorted]=[words]; //LAW MAFISH GROUPS CREATE BY THE VALUE THEN THE KEY
        }
        }
    
        return Object.values(groups); //RETURN EL VALUES BY EL RESULT
    }
}
//ayza a2asem el list into sublists w el kalam elly shabaho 
//ayza a3mel for loop aashan telef hawalen el words w baadaha for loop t compare them