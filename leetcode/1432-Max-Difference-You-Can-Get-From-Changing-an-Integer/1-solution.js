var maxDiff = function(num) {
    let str1 = num.toString();
    let str2 = str1;

    let idx = [...str1].findIndex(ch => ch !== '9');
    if (idx !== -1) {
        const ch = str1[idx];
        str1 = str1.replace(new RegExp(ch, 'g'), '9');
    }

    for (let i = 0; i < str2.length; i++) {
        const ch = str2[i];

        if (i === 0) {
            if (ch !== '1') {
                str2 = str2.replace(new RegExp(ch, 'g'), '1');
                break;
            }
        } else {
            if (ch !== '0' && ch !== str2[0]) {
                str2 = str2.replace(new RegExp(ch, 'g'), '0');
                break;
            }
        }
    }

    return parseInt(str1) - parseInt(str2);
};