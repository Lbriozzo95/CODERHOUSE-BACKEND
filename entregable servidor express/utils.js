function makeId(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ123456789'; 
    var charactersLength = characters.length;

    for(var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// function makeIdNumber (id = 0){
//     while (true){
//         yield id;
//         id++;
//     }
// }

// module.exports = makeIdNumber;
module.exports = makeId;
