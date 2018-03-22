import { folderToTree } from "../lib";


describe("test folderToTree ", () => {
  it("should return json object", async () => {
    // for local test only
    const ROOT_DIR: string ='/Users/slashhuang/personal-repo/node/folder-to-tree';
    const ret = await folderToTree(ROOT_DIR);
    expect(ret).toBeTruthy();
  });
  it("should return undefined", async () => {
    const ROOT_DIR: string ='/dfsafasdXXX';
    const ret = folderToTree(ROOT_DIR);
    expect(ret).toBe(undefined);
  });
});
