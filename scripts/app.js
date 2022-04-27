
let num = '12345';


function addString(num) {

    let x = ''+ num;
    let numStr = (''+ num).split(''); // ['1', '2', '3', '4']
    let result = 0;
    for(let i = 0; i<numStr.length; i++) {
        result = result + (+numStr[i])
    }
    if((''+result).length === 1) {
        return result;
    } else {

        addString(result);
    }
}

const result = addString(193);
console.log(result);