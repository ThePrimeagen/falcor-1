var Rx = require('rx');
var benchmark = require('benchmark');
var testRunner = require('./testRunner');
global.Rx = Rx;
var testConfig = require('./testConfig')();
var config = testConfig.config;
var models = testConfig.models;

function node(value) {
    return {value: value, left: null, right: null};
}

var root = node(20);

var next = root.left = node(26);
next = next.right = node(23);
next = next.left = node(25);
next = next.right = node(24);

function existsOdd(node, value) {
    if (node.value === value) {
        return true;
    }

    var right, left;
    return value > node.value && (right = node.right) && exists(right, value) ||
            (left = node.left) && exists(left, value);
}

function exists(node, value) {
    if (node.value === value) {
        return true;
    }

    var right, left;
    if (value > node.value) {
       right = node.right;
       if (right) {
          return exists(right, value);
       }
    } else {
        left = node.left;
        if (left) {
            return exists(left, value);
        }
    }

    return false;
}


testConfig.repeatInConfig('extra var', 1, exists.bind(null, root, 24), config.tests);
testConfig.repeatInConfig('conditional assignment', 1, existsOdd.bind(null, root, 24), config.tests);

testRunner(benchmark, config, 10, function(totalResults) {
    var fs = require('fs');
    fs.writeFileSync('out.csv', totalResults.join('\n'))
});
