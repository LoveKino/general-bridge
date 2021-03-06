'use strict';

let {
    child
} = require('../../apply/process');

let {
    delay
} = require('jsenhance');

let handler = null;

let call = child({
    add: (a, b) => a + b,

    doubleSub: (a, b) => {
        return call('sub', [a, b]).then(res => {
            return res * 2;
        });
    },

    testCallback: (fun, a, b) => {
        handler = fun;
        return fun(a, b);
    },

    callHandler: (a, b) => {
        return handler(a, b);
    },

    error: () => {
        let err = new Error('err');
        err.data = {
            a: 1
        };
        throw err;
    },

    rejectError: () => {
        let err = new Error('err');
        err.data = {
            a: 1
        };
        return Promise.reject(err);
    },

    delay
});
