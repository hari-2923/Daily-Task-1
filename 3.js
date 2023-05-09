function remove_first_occurrence(str, searchStr) {
    let index = str.indexOf(searchStr);
    if (index === -1) {
      
      return str;
    }
    console.log(index);
    return str.slice(0, index-1) + str.slice(index + searchStr.length);
}

let myString = "The quick brown fox jumps over the lazy dog";
let newString = remove_first_occurrence(myString, "the");
console.log(newString)
