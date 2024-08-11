module.exports = function check(str, bracketsConfig) {

    let stack = [];
    let open_brackets = [];
    let close_brackets = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        open_brackets.push(bracketsConfig[i][0]);
        close_brackets.push(bracketsConfig[i][1]);
    }

    for (let y = 0; y < str.length; y++) {
        if (open_brackets.includes(str[y]) && (close_brackets.includes(str[y]) == false)) {
            stack.push(str[y]);
        } else if (open_brackets.includes(str[y]) && (stack.length == 0)) {
            stack.push(str[y]);
        } else {
            for (let k = 0; k < bracketsConfig.length; k++) {
                if ((stack[stack.length - 1] == bracketsConfig[k][0]) && (str[y] == bracketsConfig[k][1])) {
                    stack.pop();
                }
            }
        }
    }

    if (stack.length == 0) {
        return true;
    } else {
        return false;
    }
}