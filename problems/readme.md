# 📁 DSA Problems

This folder contains individual problem folders with well-structured solution files, test cases, and a shared testing system.

Each problem has:
- Its own folder named as `problemNumber-title-in-kebab-case`
- One or more solution files (named after the method used like `brute-force.js`, `sorting.js`, etc.)
- A `testcases.js` file that holds the input data
- A `README.md` describing the problem and approach (optional but recommended)

---

## 📦 Folder Structure

```

problems/
├── index.js                  # Shared test runner
├── 16-3sum-closest/
│   ├── brute-force.js        # Solution using brute-force
│   ├── sorting.js            # Optimized solution using sorting
│   ├── testcases.js          # List of test cases
│   └── README.md             # Problem description and explanation
├── 1-two-sum/
│   ├── hash-map.js
│   ├── testcases.js
│   └── README.md
...

```

---

## ⚙️ How to Use

Every solution file should:
1. Define the solution function (e.g., `threeSumClosest`)
2. Import `runTest` from `../index.js`
3. Call `runTest(yourFunction)` at the end

### ✅ Example: `brute-force.js`

```js
import { runTest } from '../index.js';

var threeSumClosest = function(nums, target) {
    const n = nums.length;
    let result = Infinity;

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                const current = nums[i] + nums[j] + nums[k];
                if (Math.abs(target - current) < Math.abs(target - result)) {
                    result = current;
                }
            }
        }
    }

    return result;
};

runTest(threeSumClosest);
```


## 🧪 Test Cases Format

Each problem must have a `testcases.js` file in the same folder.

### Example:

```js
export default [
    [[-1, 2, 1, -4], 1],  // Expected: 2
    [[0, 0, 0], 1],       // Expected: 0
];
```

* Each element is an array of arguments that will be spread into the function call: `func(...args)`
* The expected value should be printed or asserted inside your function for accuracy (optional)

---

## 🧠 `runTest()` Function

Located in `problems/index.js`, it:

* Automatically detects the `testcases.js` relative to the calling solution file
* Imports and runs all test cases
* Logs the result and runtime

---

## 🧩 Naming Conventions

* Folder: `problemNumber-title-in-kebab-case`
* Solution file: method used (`brute-force.js`, `sorting.js`, `hash-map.js`, etc.)
* Test file: always `testcases.js`
* Shared test runner: `index.js`

---

## ✍️ Optional README for Each Problem

Each problem folder can have its own `README.md` describing:

* Problem statement
* Approach used in each solution
* Time and space complexity

This keeps each folder self-contained and informative.

---

<p align="center">Happy Coding 🚀</p>