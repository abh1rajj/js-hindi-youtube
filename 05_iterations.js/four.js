const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java","cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

// const map = new Map()  //not iterable hence wont work
// map.set('IN', "India")
// map.set('USA', "Unites States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }