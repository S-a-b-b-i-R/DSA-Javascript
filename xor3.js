// Given two strings consisting of digits 0 and 1 only, find the XOR of the two strings.
// debug the given function strings_xor to find the XOR of the two given strings appropriately.

process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
    var strings = input.trim().split("\n");
    var string1 = strings[0];
    var string2 = strings[1];
    var result = strings_xor(string1, string2);
    console.log(result);
});

function strings_xor(string1, string2) {
    var result = "";
    for (var i = 0; i < string1.length; i++) {
        if (string1[i] !== string2[i]) {
            result += "1";
        } else {
            result += "0";
        }
    }
    return result;
}
