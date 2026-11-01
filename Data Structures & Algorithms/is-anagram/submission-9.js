class Solution {
    isAnagram(s, t) {
        let count = 0 //4
       if(s.length !== t.length){
        return false;
       }
       return s.split("").sort().join("")==t.split("").sort().join("");
    }
}

//let unique = set;
//for (let s)

//dlwaaty ana ayza string ashof howa howa nafs el hroof zy el tany wla la
//momken a3mel for loop htlef hawalen kol index fy awel string w baad keda tshofo mawgood fy el string el tany w how many times