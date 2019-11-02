

function parseCols(data: string | Array<number>): Array<number> {
    return typeof data === 'string' ? data.split(',').map(i => parseInt(i)) : data;
}

//function parseArray(children: any | Array<any>): Array<any> {
//    return Array.isArray(children) ? children : [children];
//}

function insertArray<T>(source: Array<T>, index: number, value: T): Array<T> {
    let target: T[] = [];
    if (index < source.length) {
        source.forEach((it, i) => {
            target.push(it);
            if (i === index) {
                target.push(value);
            }
        });
    } else {
        target.push(value);
    }
    return target;
}

function parseArray(value: any | Array<any> | undefined): Array<any> {
    return (Array.isArray(value) ? value : value ? [value] : []).filter(it => !!it);
}

function generateId(prefix: string = '_') {
    return prefix + Math.random().toString(36).substr(2, 9);
};
function popoverAling(mode: 'auto' | 'top' | 'left' | 'right' | 'bottom', reference: HTMLElement, popover: HTMLElement): 'top' | 'left' | 'right' | 'bottom' {
    let position = getPosition(reference);
    if (mode === 'auto') {
        let popoverWidth = popover.offsetWidth;
        let popoverHeight = popover.offsetHeight;
        let winWidth = window.innerWidth / 2;
        let winHeight = window.innerHeight / 2;
        if (position.left + position.width + popoverWidth > winWidth) { //top
            mode = 'left';
        } else if (position.top - popoverHeight < 0) {
            mode = 'left';
        } else if (position.left - popoverWidth > winWidth) {
            mode = 'right';
        } else if (position.top + popoverHeight > winHeight) {
            mode = 'top';
        } else {
            mode = 'top';
        }
    }
    if (mode === 'left') {
        popover.style.left = (position.left - popover.offsetWidth) + 'px';
        popover.style.top = (position.top - position.height / 4) + 'px';
    } else if (mode === 'right') {
        popover.style.left = (position.left + position.width) + 'px';
        popover.style.top = (position.top - position.height / 4) + 'px';
    } else if (mode === 'bottom') {
        popover.style.left = (position.left) + 'px';
        popover.style.top = (position.top + position.height) + 'px';
    } else {
        popover.style.left = (position.left) + 'px';
        popover.style.top = (position.top - popover.offsetHeight - 5) + 'px';
    }
    return mode;
}

function getPosition(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        width: el.offsetWidth,
        height: el.offsetHeight
    };
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
    insertArray,
    generateId,
    appendAttr,
    popoverAling,
    diffTimeLiteral,
    isFunction,
    isEmpty
}