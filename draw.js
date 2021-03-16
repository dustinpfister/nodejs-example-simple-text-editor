//let u = require('./utils.js');

let setCur = (x, y, out) => {
    x = x || 0;
    y = y || 0;
    out.write('\u001b[' + y + ';' + x + 'H');
}

let clearScreen = (out) => {
    out.write('\u001b[2J');
}
let colorsSet = (out) => {
    out.write('\u001b[47m');
    out.write('\u001b[30m');
};
let colorsDefault = (out) => {
    out.write('\u001b[39m\u001b[49m');
};

let drawPlayerStats = function (state, out) {
    let p = state.player,
    text = 'hp: ' + p.hp + '/' + p.hpMax +
        ', exp: ' + p.exp;
    setCur(1, state.h + 1, out);
    out.write(new Array(state.w).fill(' ').join(''));
    setCur(1, state.h + 1, out);
    out.write(text);
};

let updateScreen = exports.updateScreen = (doc, out) => {
    out = out || process.stdout;
    colorsSet(out);
    colorsDefault(out);
    setCur(0, doc.h + 2, out);
};

exports.newScreen = (state, out) => {
    out = out || process.stdout;
    clearScreen(out);
    setCur(1, 1, out);
    colorsSet(out);
    colorsDefault(out);
};
