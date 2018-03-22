# folder-to-tree

> print your folder to tree structure

## Install

```bash
    $ npm i folder-to-tree --save
```

```bash
    # command line usage
    $ npm i folder-to-tree -g
    $ folder2tree
```

a folder to tree npm module built with typescript

## Usage

```js
    export interface IFolder2JsonOptions {
        isIgnoreHiddenFolderOrFile: boolean; // default true
        ignoreFilePattern: RegExp; // deault to /node_modules/
        reachLeafNodeCallback: (leafPath: string) => any; // default to str=>str
    }
    import { folderToTree } from 'folder-to-tree';
    const json = folderToTree(dirName, options); // gets foler structure to json
```

