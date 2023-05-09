function toCamelCase(str) {
    let arr = str.split(/-|_| /);

    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    
    return arr.join('')
}

let myString = "java script excersises"
let camelCaseString = toCamelCase(myString)
console.log(camelCaseString) 