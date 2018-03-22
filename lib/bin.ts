#!/usr/bin/env node

import { folderToTree } from './index';
console.log(folderToTree(process.cwd()));
