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
    export interface IFolder2TreeOptions {
        isIgnoreHiddenFolderOrFile: boolean; // default to true
        ignoreFilePattern: RegExp; // default to /node_modules/
        reachLeafNodeCallback: (leafPath: string) => string; // default to render leafNode absolute file path
    }
    import { folderToTree } from 'folder-to-tree';
    const json = folderToTree(dirName, options); // reads folder structure into json
```

