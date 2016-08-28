'use strict';

let {caller, dealer} = require('./bridge');

let {stringify, parseJSON} = require('./serialize');

module.exports = {
    caller,
    dealer,
    stringify,
    parseJSON
};
