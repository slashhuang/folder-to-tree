"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var defaultOption = {
    isIgnoreHiddenFolderOrFile: true,
    ignoreFilePattern: /node_modules/,
    reachLeafNodeCallback: function (leafPath) { return leafPath; },
};
var buildTreeModel = function (linkNodeRef, currentDirName, options) {
    var listStrNode = (fs.readdirSync(currentDirName, { encoding: 'utf8' }) || [])
        .filter(function (subFileName) {
        var isIgnorePattern = options.ignoreFilePattern.test(subFileName);
        var hiddenFileRegPattern = /^\..*/;
        if (options.isIgnoreHiddenFolderOrFile) {
            return !hiddenFileRegPattern.test(subFileName) && !isIgnorePattern;
        }
        else {
            return !isIgnorePattern;
        }
    });
    for (var index = 0; index < listStrNode.length; index++) {
        var currentFileName = listStrNode[index];
        var currentFileAbsPath = path.resolve(currentDirName, currentFileName);
        var isFileFolder = fs.statSync(currentFileAbsPath).isDirectory();
        if (isFileFolder) {
            var subTreeNode = {};
            linkNodeRef[currentFileName] = subTreeNode;
            buildTreeModel(subTreeNode, currentFileAbsPath, options);
        }
        else {
            linkNodeRef[currentFileName] = options.reachLeafNodeCallback(currentFileAbsPath);
        }
    }
    return linkNodeRef;
};
function folderToTree(dirName, options) {
    if (options === void 0) { options = defaultOption; }
    var isDirNameNotValid = fs.existsSync(dirName);
    if (!isDirNameNotValid) {
        return undefined;
    }
    else {
        var RootNode = {};
        return buildTreeModel(RootNode, dirName, options);
    }
}
exports.folderToTree = folderToTree;
//# sourceMappingURL=index.js.map