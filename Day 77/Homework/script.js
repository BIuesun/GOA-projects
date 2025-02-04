function createObject(keys, values) {
    let obj = {};
    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i] || null; // თუ მნიშვნელობა არ არსებობს ჩავწეროთ null
    }
    return obj;
}

console.log(createObject(["name", "age"], ["Luka",16]));
