const findMissing = (str)=>{
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    let arrStr = str.toLowerCase().split('')
    let indexAlph = alpha.slice(alpha.indexOf(arrStr[0]),alpha.indexOf(str.charAt(arrStr.length-1))+1).split('')
    let missing = indexAlph.filter((ltr)=>{
        return arrStr.indexOf(ltr)<0
    })

    return missing[0];
}

module.exports = findMissing;
