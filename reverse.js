let args = process.argv.slice(2, process.argv.length);

console.log(args);
for (let i = 0; i < args.length; i++) {
  let arr = [...args[i]]
  for(let j = 0; j < arr.length / 2; j++) {
    let tmp = arr[j];
    arr[j] = arr[arr.length - j - 1];
    arr[arr.length - j - 1] = tmp;
  }
  console.log(arr.join(''));
} 
