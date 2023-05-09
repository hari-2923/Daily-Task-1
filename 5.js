let String_Chop = (string, chopSize=1) => {
    let arr = []
    for(let i = 0; i < string.length; i+= chopSize){
        let chunk = string.slice(i, i + chopSize)
        arr.push(chunk)
    }
    return arr;
}

let result1 = String_Chop("Shuvarnna", 2)
console.log(result1)