const str = "pink flag red flag black flag blue flag green flag red flag flag green";
console.log(/(?<my_red_flag>red)/gi.exec(str))