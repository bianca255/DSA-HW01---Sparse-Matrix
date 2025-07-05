const readline = require('readline');
const response = require('./response');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Select operation:");
console.log("1 - Addition");
console.log("2 - Subtraction");
console.log("3 - Multiplication");

rl.question("Enter choice (1/2/3): ", function (op) {
 const file1 = './sample file/matrixfile1.txt';
const file2 = './sample file/matrixfile3.txt';
 try {
    const matrixfile1 = response.fromFile(file1);
    const matrixfile2 = response.fromFile(file2);

    let result;
    if (op == '1') {
      result = matrixfile1.add(matrixfile2);
    } else if (op == '2') {
      result = matrixfile1.subtract(matrixfile2);
    } else if (op == '3') {
      result = matrixfile1.multiply(matrixfile2);
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