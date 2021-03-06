'use strict';

let {
    reduce, compact
} = require('bolzano');

let {
    isObject
} = require('basetype');

/**
 * make a mirror of sandbox for the client, easy to call
 */
module.exports = (call, path) => {
    return call('publicBoxMirror', [path], 'system').then((box) => {
        return mirror(box, path, call);
    });
};

let mirror = (box, path = '', call) => {
    if (box === 'f') {
        return (...args) => call(path, args);
    } else if (isObject(box)) {
        return reduce(box, (prev, item, name) => {
            prev[name] = mirror(item, compact([path, name]).join('.'), call);

            return prev;
        }, {});
    }
};
