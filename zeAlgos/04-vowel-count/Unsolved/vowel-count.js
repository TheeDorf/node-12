// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    let vCount = 0;
    const vowels = ["a","e","i","o","u"];
   let str1 = str.toLowerCase()
   for (let char of str1){
    if (vowels.includes(char)){
        vCount++;
    }
   } 
   return vCount;


};
