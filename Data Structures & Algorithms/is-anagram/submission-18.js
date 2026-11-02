

//let unique = set;
//for (let s)

//dlwaaty ana ayza string ashof howa howa nafs el hroof zy el tany wla la
//momken a3mel for loop htlef hawalen kol index fy awel string w baad keda tshofo mawgood fy el string el tany w how many times


//hena ana baamel split ly el string aashan tebaa letters w baadaha b sort aashan a join it a ashoof law homa equal wla la

class Solution{
    isAnagram(s,t){
        let counterS = [];
        let counterT = [];

        if (s.length !== t.length){
            return false;
        }

        for (let i = 0 ; i < s.length ; i++){
            counterS[s[i]] = (counterS[s[i]] || 0 ) + 1;
            counterT[t[i]] = (counterT[t[i]] || 0) + 1;
        }

        for (let c in counterS){
            if(counterS[c] !== counterT[c] || 0){
                return false
            }
        }
        return true;
    }
}