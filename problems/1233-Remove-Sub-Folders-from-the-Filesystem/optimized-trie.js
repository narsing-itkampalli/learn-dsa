import { runTest } from "../index.js";

// Time: O(n × L)
// Space: O(n * L) - same

class FolderTrie {
    folders = {};

    tryInsert(pathSegments) {
        let current = this.folders;
        const len = pathSegments.length;

        for (let i = 0; i < len; i++) {
            const segment = pathSegments[i];

            if (!(segment in current)) {
                current[segment] = {};
                current = current[segment];
            }else {
                if(i === len-1) current[segment] = {};
                else if(Object.keys(current[segment]).length === 0) break;
                current = current[segment];
            }
        }
    }

    getArray() {
        function dfs(folders, basePath = '') {
            const paths = [];

            for (const key in folders) {
                const currentPath = `${basePath}/${key}`;

                if (Object.keys(folders[key]).length > 0) {
                    paths.push(...dfs(folders[key], currentPath));
                } else {
                    paths.push(currentPath);
                }
            }

            return paths;
        }

        return dfs(this.folders);
    }
}

/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
    const trie = new FolderTrie();

    for (let path of folder) {
        trie.tryInsert(path.split('/').slice(1));
    }

    return trie.getArray();
};

runTest(removeSubfolders);