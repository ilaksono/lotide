let args = process.argv.slice(2,process.argv.length);
let a = [];
for (let i = 0; i < args.length; i++) {
  let word = [...args[i]];
  let first = word.shift();
  word.push(first);
  word.push('ay');
  a.push(word.join(''));
}
let newStr = a.join(' ');

console.log(newStr);