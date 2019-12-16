"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseCols(data) {
    return typeof data === 'string' ? data.split(',').map(i => parseInt(i)) : data;
}
function insertArray(source, index, value) {
    let target = [];
    if (index < source.length) {
        source.forEach((it, i) => {
            target.push(it);
            if (i === index) {
                target.push(value);
            }
        });
    }
    else {
        target.push(value);
    }
    return target;
}
function parseArray(value) {
    return (Array.isArray(value) ? value : value ? [value] : []).filter(it => !!it);
}
function generateId(prefix = '_') {
    return prefix + Math.random().toString(36).substr(2, 9);
}
;
function setPosition(mode, popover, position) {
    if (mode === 'left') {
        popover.style.left = (position.left - popover.offsetWidth) + 'px';
        popover.style.top = (position.top - position.height / 4) + 'px';
    }
    else if (mode === 'right') {
        popover.style.left = (position.left + position.width) + 'px';
        popover.style.top = (position.top - position.height / 4) + 'px';
    }
    else if (mode === 'bottom') {
        popover.style.left = (position.left) + 'px';
        popover.style.top = (position.top + position.height) + 'px';
    }
    else {
        popover.style.left = (position.left) + 'px';
        popover.style.top = (position.top - popover.offsetHeight - 5) + 'px';
    }
    return {
        left: popover.offsetLeft,
        top: popover.offsetTop,
        width: popover.offsetWidth,
        height: popover.offsetHeight
    };
}
function getPosition(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        width: el.offsetWidth,
        height: el.offsetHeight
    };
}
function popoverAling(mode, reference, popover) {
    let position = getPosition(reference);
    if (mode === 'auto') {
        let winWidth = window.innerWidth;
        let pos = setPosition(mode = "left", popover, position);
        if (pos.left < 0) {
            pos = setPosition(mode = "right", popover, position);
            if (winWidth < pos.left + pos.width) {
                pos = setPosition(mode = "top", popover, position);
                if (pos.top < 0) {
                    pos = setPosition(mode = "bottom", popover, position);
                }
            }
        }
    }
    else {
        setPosition(mode, popover, position);
    }
    return mode;
}
function diffTimeLiteral(from, to) {
    to = to || new Date();
    let millis = to.getTime() - from.getTime();
    if (millis > 60000) {
        let minutes = Math.floor(millis / 60000).toFixed(2);
        return 'hace ' + minutes + ' min';
    }
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return 'hace ' + seconds + ' seg';
}
function isFunction(fn) {
    return typeof fn === 'function';
}
function isEmpty(it) {
    return (it === undefined || it === null)
        ||
            (Array.isArray(it) && it.length === 0)
        ||
            (it.constructor === Object && Object.keys(it).length === 0)
        ||
            (it.toString().trim().length === 0);
}
function appendAttr(attr, value, target, _default) {
    let result = target || {};
    if (_default) {
        result = Object.assign(result, _default);
    }
    result[attr] = value;
    return result;
}
function base64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
}
exports.default = {
    base64toBlob,
    parseCols,
    parseArray,
    insertArray,
    generateId,
    appendAttr,
    popoverAling,
    diffTimeLiteral,
    isFunction,
    isEmpty
};
