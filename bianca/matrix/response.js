const readline = require('readline');
const script = require('./script');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Select operation:");
console.log("1 - Addition");
console.log("2 - Subtraction");
console.log("3 - Multiplication");

rl.question("Enter choice (1/2/3): ", function (op) {
const file1 = 'sample-inputs/samplefile4.txt';
const file2 = 'sample-inputs/samplefile6.txt';

  try {
    const matrix3 = output.fromFile(file1);
    const matrix4 = output.fromFile(file2);

    let result;
    if (op == '1') {
      result = matrix1.add(matrix3);
    } else if (op == '2') {
      result = matrix1.subtract(matrix3);
    } else if (op == '3') {
      result = matrix1.multiply(matrix3);
    } else {
      console.log("Invalid option");
      rl.close();
      return;
    }

    console.log("Result:");
    result.print();
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    rl.close();
  }
});