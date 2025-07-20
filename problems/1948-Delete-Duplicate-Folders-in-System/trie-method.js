import { runTest } from "../index.js";

// Time Complexity: O(n * L + k^2)  
// Space Complexity: O(k + n * L)

/**
 * @param {string[][]} paths
 * @return {string[][]}
 */
var deleteDuplicateFolder = function(paths) {
    const root = createTrieNode('/');

    for (const path of paths) {
        trieInsert(root, path);
    }

    const visited = new Map();
    markRepeating(root, visited);

    const res = [];
    for (const [childFolder, childNode] of root.child.entries()) {
        savePath(childNode, [], res);
    }

    return res;
}

function createTrieNode(folder) {
    return {
        folder,
        remove: false,
        child: new Map()
    };
}

function trieInsert(root, path) {
    let node = root;
    for (const s of path) {
        if (!node.child.has(s)) {
            node.child.set(s, createTrieNode(s));
        }
        node = node.child.get(s);
    }
}

function markRepeating(root, visited) {
    let subfolder = '';

    const sortedChildren = Array.from(root.child.entries()).sort(([a], [b]) => a.localeCompare(b));
    for (const [childFolder, childNode] of sortedChildren) {
        subfolder += markRepeating(childNode, visited);
    }

    if (subfolder.length > 0) {
        if (visited.has(subfolder)) {
            visited.get(subfolder).remove = true;
            root.remove = true;
        } else {
            visited.set(subfolder, root);
        }
    }

    return `[${root.folder}${subfolder}]`;
}

function savePath(root, currPath, res) {
    if (root.remove) return;

    currPath.push(root.folder);
    res.push([...currPath]);

    for (const [childFolder, childNode] of root.child.entries()) {
        savePath(childNode, currPath, res);
    }

    currPath.pop();
}

runTest(deleteDuplicateFolder);