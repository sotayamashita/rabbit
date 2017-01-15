#!/usr/bin/env node

const argv = process.argv.slice(2);
// TODO: Create common interface instead of creating cli method to make it simple
require('../').cli(argv[0]);
