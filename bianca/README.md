 Sparse Matrix Operations in JavaScript

This project focuses on implementing efficient and memory-conscious operations—Addition, Subtraction, and Multiplication—on large sparse matrices using JavaScript, without relying on external libraries. It's built as part of a Data Structures and Algorithms course assignment.

---

## 📁 Project Directory Layout

```
/bianca/matrix/
├── codes/
│   └── source/
│       ├── script.js              
│       └── response.js      
├── sample_inputs/
│   ├── matrix1.txt              
│   ├── matrix2.txt
│   ├── matrix3.txt
│   └── matrix4.txt
└── README.md                   # Project details and instructions
```

---

## ✅ Key Features

* Load and parse sparse matrices from text files.
* Utilize an object-based structure for efficient storage of non-zero elements.
* Support for:

  * Matrix Addition
  * Matrix Subtraction
  * Matrix Multiplication
* Comprehensive error handling and input validation.
* Command-line interface for interactive user input.

## 📄 Input File Format

Each matrix is defined in a `.txt` file with the format below:

```
rows=8433
cols=3180
(0, 381, -694)
(0, 128, -838)
(0, 639, 857)
...
```

* The first two lines specify the number of rows and columns.
* Each following line indicates a non-zero value in the form `(row, col, value)`.
* Any cell not listed is assumed to hold a value of 0.

---

## 🚀 Getting Started

### 1. Clone the Project

```bash
git clone <your-repo-url>
cd dsa/matrix/
```

### 2. Ensure Proper File Placement

* Code files go in: `/code/src/`
* Input matrices are placed in: `/sample file/`

### 3. Run the Application

```bash
cd code/src
node script.js
```

You’ll be prompted with:

```
Select operation:
1 - Addition
2 - Subtraction
3 - Multiplication
Enter choice (1/2/3):
```
## 🔧 Implementation Details

### `matrix` Class

```js
new matrix(filePath)              // Load matrix from a file
new matrix(numRows, numCols)     // Create a new empty matrix
```

Non-zero elements are internally represented using a nested object format: `row: { col: value }`.

### Key Methods

* `getElement(row, col)` – Retrieves the value at a specific position.
* `setElement(row, col, value)` – Updates the value; removes the entry if set to 0.
* `add(matrixB)` – Returns the sum of two matrices.
* `subtract(matrixB)` – Returns the difference between two matrices.
* `multiply(matrixB)` – Computes the matrix product.

### Validation and Error Handling

* Skips empty or whitespace-only lines.
* Throws descriptive errors for:

  * Mismatched dimensions during addition/subtraction
  * Invalid input format or unsupported characters

---

## 🧪 Example Usage

To subtract `matrix4.txt` from `matrix1.txt`:

1. Confirm both matrices have the same dimensions.
2. Modify `script.js`:

```js
const matrixA = new matrix('./../../sample_inputs/matrix1.txt');
const matrixB = new matrix('./../../sample_inputs/matrix4.txt');
```

3. Run the script:

```bash
node script.js
```

Choose option `2` when prompted for subtraction.


