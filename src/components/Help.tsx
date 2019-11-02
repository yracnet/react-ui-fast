
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

type ModeType = 'auto' | 'top' | 'left' | 'right' | 'bottom';
type PositionType = {
    left: number,
    top: number,
    width: number,
    height: number
};
function setPosition(mode: ModeType, popover: HTMLElement, position: PositionType): PositionType {
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
    return {
        left: popover.offsetLeft,
        top: popover.offsetTop,
        width: popover.offsetWidth,
        height: popover.offsetHeight
    };
}

function getPosition(el: HTMLElement): PositionType {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        width: el.offsetWidth,
        height: el.offsetHeight
    };
}

function popoverAling(mode: ModeType, reference: HTMLElement, popover: HTMLElement): ModeType {
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
    } else {
        setPosition(mode, popover, position);
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
    insertArray,
    generateId,
    appendAttr,
    popoverAling,
    diffTimeLiteral,
    isFunction,
    isEmpty
}