# Sparse Matrix Operations – DSA-HW01

This project provides a Node.js implementation for performing operations (addition, subtraction, multiplication) on **sparse matrices** stored in text files.

---

## 📁 Folder Structure

```
DSA-HW01---Sparse-Matrix/
└── bianca/
    └── matrix/
        ├── script.js
        ├── response.js
        └── sample file/
            ├── matrixfile1.txt
            └── matrixfile3.txt
└── README.md
```

---

## 📄 Matrix File Format

Each matrix file must follow the format below:

```
rows=<number of rows>
cols=<number of columns>
(row, col, value)
(row, col, value)
...
```

**Example:**
```
rows=3
cols=3
(3, 3, 6)
(6, 9, 1)
(5, 0, 9)
```

> Only non-zero elements are listed, which is standard for sparse matrices.

---

## 🚀 How to Run

1. **Install Node.js**  
   If not already installed, download it from [nodejs.org](https://nodejs.org).

2. **Navigate to the project directory**  
   Open your terminal and run:
   ```bash
   cd path/to/DSA-HW01---Sparse-Matrix/bianca/matrix
   ```

3. **Run the script**  
   ```bash
   node script.js
   ```

4. **Follow the prompts**  
   You will be asked to select an operation:
   ```
   Select operation:
   1 - Addition
   2 - Subtraction
   3 - Multiplication
   Enter choice (1/2/3):
   ```

5. **View the result**  
   The output matrix will be displayed in the terminal.

---

## 🔧 Matrix Operations

The operations are defined in `response.js` and executed via `script.js`. Make sure the matrix files you're working with are correctly formatted and located in:

```
bianca/matrix/sample file/
```

---

## 📌 Notes

- File Paths: If you move the files or run from a different directory, update file paths in `script.js` accordingly.
- Sparse Efficiency: This approach only stores non-zero elements to optimize memory and speed, especially for large matrices.


