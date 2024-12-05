function foo(a, b, depth = 0) {
  if (depth > 1000) { // added depth limit to prevent stack overflow
    throw new Error("Maximum recursion depth exceeded");
  }
  if (a === b) {
    return true;
  } else if (a > b) {
    return false; 
  } else {
    return foo(a + 1, b, depth + 1);
  }
}

console.log(foo(1, 5)); // will not cause stack overflow
console.log(foo(1,10000)); // throws an error indicating max recursion depth exceeded