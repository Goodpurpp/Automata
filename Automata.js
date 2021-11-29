fs = require('fs');
arg = process.argv;
let t = arg[2];
let ans = 0;
let text = fs.readFileSync(arg[3]);
text = text.toString();
let m = t.length;
let alph = new Array();

for (i = 0; i < m; i++)
    alph[t.charAt(i)] = 0;

del = new Array(m + 1)

for (j = 0; j <= m; j++)
    del[j] = new Array();

for (i in alph)
    del[0][i] = 0;

for (j = 0; j < m; j++) {
    prev = del[j][t.charAt(j)]
    del[j][t.charAt(j)] = j + 1;
    for (i in alph)
        del[j + 1][i] = del[prev][i]
}
for (j = 0; j <= m; j++) {
    let out = '';
    for (i in alph)
        out += del[j][i] + ' ';
    console.log(out)
}
let tmp = 0;
for (let i = 0; i < text.length; i++) {
    if (text[i] in alph)
        tmp = del[tmp][text[i]];
    else {
        tmp = 0;
    }
    if (tmp == t.length)
        ans++;
}
console.log('Количество подстрок в исходной строке: ' + ans);