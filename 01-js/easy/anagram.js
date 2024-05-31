/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let ans = true;
  // Convert strings to arrays for comparison
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  
  // Check if lengths are different
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  // Sort arrays to compare them easily
  arr1.sort();
  arr2.sort();
  
  // Compare sorted arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      ans = false;
      break;
    }
    
  }
  
  return ans;
}
module.exports = isAnagram;
