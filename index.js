const webpack = require('webpack');
const path = require('path');
const http = require('http');
const fs = require('fs');
const configure = require('./lib/configure.js');

function cli(enrtyFile) {
    const compiler = webpack(configure(enrtyFile));

    compiler.run((err, stats) => {
        if (err) {
            console.log(err);
        }
    });
}

module.exports.cli = cli;
