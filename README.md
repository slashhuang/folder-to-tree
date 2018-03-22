# folder-to-tree



## Install

```bash
    $ tnpm i folder-to-tree --save
```

```bash
    # command line usage
    $ tnpm i folder-to-tree -g
    $ folder2tree
```

a folder to tree npm module built with typescript

## Usage

```js
    export interface IFolder2JsonOptions {
        isIgnoreHiddenFolderOrFile: boolean; // default true
        ignoreFilePattern: RegExp;
        reachLeafNodeCallback: (leafPath: string) => any;
    }

    import { folderToTree } from 'folder-to-tree';
    const json = folderToTree(dirName, options); // gets foler structure to json
```

