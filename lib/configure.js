'use strict';

const path = require('path');
const webpack = require('webpack');

function configure(entryFile) {
    return {
        entry: [
            // the entry point of our app
            entryFile,
        ],
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, '../'),
        }
    }
}

module.exports = configure;
