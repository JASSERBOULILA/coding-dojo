function solution(str) {
    let res = "";
    let arr = [];
    i = 0;
    if (str == "") {
        return [];
    }
    if (str.length % 2 === 0) {
        for (let i = 0; i < str.length; i += 2) {
            arr.push(str.substring(i, i + 2));
        }
    } else if (str.length % 2 != 0) {
        for (let i = 0; i < str.length; i+=2) {
            if (i+2 >str.length ) {
                console.log(i);
                console.log((str.substring(i, str.length)) + "_");
                arr.push((str.substring(i, str.length)) + "_");
            } else {
                arr.push(str.substring(i, i + 2));
            }
        }

    }
    return arr;
}


console.log(solution("abcdefg"));