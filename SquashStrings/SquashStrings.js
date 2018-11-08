let input = "aabbeezzzzzzzebbeqqqeea"
console.log("Initial input:", input)

// Convert input to charArray
let charArr = input.split('');

let stack = []

for (let i = 0; i < charArr.length; i++) {

  if (stack.length > 0 && charArr[i] == stack[stack.length-1][0]) {
    
    // If the previous char is the same iterate the index
    let indexSoFar = stack[stack.length - 1][1];

    // Check if time to squash
    if (indexSoFar == 2) {
      stack.pop();
      stack.pop();
      // Store character in order to further compare it
      let tempChar = charArr[i]
      
      while(i+1 <= charArr.length-1 && tempChar==charArr[i+1]) {
        i++;
      }
    } else {
      stack.push([charArr[i], indexSoFar+1]);
    }

  } else {
    stack.push([charArr[i], 1])
  }
}

console.log(
  "Final output: string squashed and output is", 
  stack.reduce((acc, cur) => acc + cur[0], '') || 'empty'
);
