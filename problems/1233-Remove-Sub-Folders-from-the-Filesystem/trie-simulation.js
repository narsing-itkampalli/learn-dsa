import { runTest } from "../index.js";

// Time: O(n log n + n * L)
// Space: O(n * L)

class FolderSystem {
    folders = {};

    add(path) {
        let current = this.folders;

        for(let item of path) {
            if(!(item in current)) current[item] = {};
            current = current[item];
        }
    }

    has(path) {
        let current = this.folders;

        for(let item of path) {
            if(!(item in current)) return false;
            if(!Object.keys(current[item]).length) return true;
            current = current[item];
        }

        return false;
    }
}

/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    folder.sort((a, b) => a.length - b.length);
    const parent = new FolderSystem();
    const res = [];
    
    for(let item of folder) {
        const path = item.split('/').slice(1);

        if(!parent.has(path)) {
            parent.add(path);
            res.push(item);
        }
    }

    return res;
    
};

runTest(removeSubfolders);