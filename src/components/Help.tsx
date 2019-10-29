

function parseCols(data: string | Array<number>): Array<number> {
    return typeof data === 'string' ? data.split(',').map(i => parseInt(i)) : data;
}

//function parseArray(children: any | Array<any>): Array<any> {
//    return Array.isArray(children) ? children : [children];
//}

function parseArray(value: any | Array<any> | undefined): Array<any> {
    return Array.isArray(value) ? value : value ? [value] : [];
}

function generateId(prefix: string = '_') {
    return prefix + Math.random().toString(36).substr(2, 9);
};
function popoverAling(mode: 'auto' | 'top' | 'left' | 'right' | 'bottom', element: HTMLElement, popover: HTMLElement): 'top' | 'left' | 'right' | 'bottom' {
    if (mode === 'auto') {
        let popoverWidth = popover.offsetWidth;
        let popoverHeight = popover.offsetHeight;
        let winWidth = window.innerWidth / 2;
        let winHeight = window.innerHeight / 2;
        if (element.offsetLeft + element.offsetWidth + popoverWidth > winWidth) { //top
            mode = 'left';
        } else if (element.offsetTop - popoverHeight < 0) {
            mode = 'left';
        } else if (element.offsetLeft - popoverWidth > winWidth) {
            mode = 'right';
        } else if (element.offsetTop + popoverHeight > winHeight) {
            mode = 'top';
        } else {
            mode = 'top';
        }
    }
    if (mode === 'left') {
        popover.style.left = (element.offsetLeft - popover.offsetWidth) + 'px';
        popover.style.top = (element.offsetTop - element.offsetHeight / 4) + 'px';
    } else if (mode === 'right') {
        popover.style.left = (element.offsetLeft + element.offsetWidth) + 'px';
        popover.style.top = (element.offsetTop - element.offsetHeight / 4) + 'px';
    } else if (mode === 'bottom') {
        popover.style.left = (element.offsetLeft) + 'px';
        popover.style.top = (element.offsetTop + element.offsetHeight) + 'px';
    } else {
        popover.style.left = (element.offsetLeft) + 'px';
        popover.style.top = (element.offsetTop - popover.offsetHeight - 5) + 'px';
    }
    return mode;
}

function diffTimeLiteral(from: Date, to?: Date): string {
    to = to || new Date()
    let millis = to.getTime() - from.getTime();
    if (millis > 60000) {
        let minutes = Math.floor(millis / 60000).toFixed(2);
        return 'hace ' + minutes + ' min';
    }
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return 'hace ' + seconds + ' seg';
}

function isFunction(fn?: any): boolean {
    return typeof fn === 'function';
}

function isEmpty(it: undefined | Array<any> | object | string) {
    return (it === undefined || it === null)
        ||
        (Array.isArray(it) && it.length === 0)
        ||
        (it.constructor === Object && Object.keys(it).length === 0)
        ||
        (it.toString().trim().length === 0);
}

function appendAttr(attr: string, value?: any, target?: object, _default?: object): object {
    let result: any = target || {};
    if (_default) {
        result = Object.assign(result, _default);
    }
    result[attr] = value;
    return result;
}

export default {
    parseCols,
    parseArray,
    generateId,
    appendAttr,
    popoverAling,
    diffTimeLiteral,
    isFunction,
    isEmpty
}