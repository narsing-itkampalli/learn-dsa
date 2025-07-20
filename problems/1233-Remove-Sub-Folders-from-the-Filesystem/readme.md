# 1233. Remove Sub-Folders from the Filesystem

[https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/](https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/)

## 💡 Approach 1: Trie Simulation
`trie-simulation.js`

- A custom tree-like structure (`FolderSystem`) is built to simulate a file system.
- Each folder is split into components (`/a/b/c` → `['a', 'b', 'c']`)
- Before adding a folder, we check if any of its parent paths already exist.
- If not, we add it to the tree and include it in the result.


### ✅ Solution Highlights

- Folders are sorted by length so that parents come before subfolders.
- Tree structure avoids adding nested sub-paths.
- Uses JavaScript objects to simulate a trie.


### ⏱️ Time and Space Complexity

#### Time Complexity:

1. **Sorting folders** – `O(n log n)`
2. **Iterating through each folder** – `O(n)`
3. **For each folder:**
   * `split()` the path → O(L)
   * `has()` → O(L)
   * `add()` → O(L) if it's not a subfolder

✅ **Total Time:** `O(n log n + n * L)`

#### Space Complexity:

* `FolderSystem` stores folder paths as nested objects → O(n \* L)
* `res` array → O(n) in worst case
* `path` temp arrays → reused per iteration, negligible

✅ **Total Space:** `O(n * L)`

## 💡 Approach 2: Optimized Trie

`optimized-trie.js`

* Removed sorting → saved **O(n log n)** time.
* Removed separate `has()` check → insertion now does both check & insert in one pass.
* No `res` array during insertion → final output collected via DFS traversal.
* Stops early if a parent folder already exists.

### ⏱️ Time & Space Comparison

| Step            | Before (`FolderSystem`) | Now (`FolderTrie`)       |
| --------------- | ----------------------- | ------------------------ |
| Sort folders    | `O(n log n)`            | ❌ **Removed**            |
| Check + Insert  | `O(n × L)` (separate)   | ✅ `O(n × L)` (merged)    |
| Collect output  | During insert (`res[]`) | DFS after insert         |
| **Total Time**  | `O(n log n + n × L)`    | ✅ **`O(n × L)`**         |
| **Total Space** | `O(n × L)`              | ↔️ **Same** (`O(n × L)`) |
