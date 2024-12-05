# JavaScript Stack Overflow Bug

This repository demonstrates a common error in JavaScript: stack overflow errors caused by uncontrolled recursion.  The `bug.js` file contains a recursive function that can easily lead to exceeding the maximum call stack size.  The solution, provided in `bugSolution.js`, addresses this by adding a check for the recursion depth to prevent the stack overflow.