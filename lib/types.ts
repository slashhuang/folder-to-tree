export interface IMap<T> {
   [key: string]: T;
}
export interface IException {
    code: number;
    message: string;
}

export interface IFolder2TreeOptions {
    isIgnoreHiddenFolderOrFile: boolean; // default true
    ignoreFilePattern: RegExp;
    reachLeafNodeCallback: (leafPath: string) => any;
}