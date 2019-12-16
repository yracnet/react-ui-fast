import React from 'react';
import { Icon } from './Icon';


export interface PagerValue {
    index: number
    size: number
}

export interface PagerProps {
    value?: PagerValue,
    steps?: Array<number>,
    hide?: boolean,
    limit?: number, //limite de registro a paginar
    margin?: number,
    onPager?: (value: PagerValue) => void,
    size?: '' | 'lg' | 'sm',
}

export const Pager: React.FC<PagerProps> = (props) => {
    if (props.hide === true) {
        return null;
    }
    let goClick = function (indexGo: number, step: number) {
        if (props.onPager) {
            props.onPager({
                index: indexGo,
                size: step
            });
        }
    }

    let changeStep = function (event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) {
        if (props.onPager) {
            //to upper number
            let step = parseInt(event.currentTarget.value || '1');
            props.onPager({
                index: 1,
                size: step
            });
        }
    }

    const margin = props.margin || 2;
    let value = Object.assign({ index: 1, step: 10 }, props.value);
    //let value.index = props.index || 1;
    //let value.step = props.step || 10;
    const limit = props.limit || 100;
    const steps = props.steps ? props.steps : [10, 15, 20, 30, 50];
    const indexMax = Math.ceil(limit / value.size);
    if (value.index > indexMax) {
        value.index = indexMax;
    }
    let indexIni = value.index > margin ? value.index - margin : 1;
    let count = 2 * margin;
    if (indexIni + count > indexMax) {
        indexIni = indexMax - count + 1;
    }

    let pagerLinkHtml = [];
    while (count--) {
        let indexGo = indexIni + count;
        if (indexGo <= 0) {
            continue;
        }
        if (value.index === indexGo) {
            pagerLinkHtml.unshift(
                <li className="page-item active" key={'page-link-' + indexGo}>
                    <span className="page-link">
                        {indexGo}
                    </span>
                </li>
            );
        } else {
            pagerLinkHtml.unshift(
                <li className="page-item" key={'page-link-' + indexGo}>
                    <a className="page-link" href={'#page-' + indexGo} onClick={e => goClick(indexGo, value.size)}>
                        {indexGo}
                    </a>
                </li>
            );
        }
    }
    if (value.index > 1) {
        let indexBack = value.index - 1;
        pagerLinkHtml.unshift(
            <li className="page-item" key={'page-link-' + indexBack}>
                <a className="page-link"
                    href={'#page-' + indexBack}
                    onClick={e => goClick(indexBack, value.size)}>
                    <Icon name="angle-left" size="lg" />
                </a>
            </li>
        );
        pagerLinkHtml.unshift(
            <li className="page-item" key='page-link-start'>
                <a className="page-link" href="#page-1" onClick={e => goClick(1, value.size)}>
                    <Icon name="angle-double-left" size="lg" />
                </a>
            </li>
        );
    } else {
        pagerLinkHtml.unshift(
            <li className="page-item disabled" key='page-link-back'>
                <span className="page-link">
                    <Icon name="angle-left" size="lg" />
                </span>
            </li>
        );
        pagerLinkHtml.unshift(
            <li className="page-item disabled" key='page-link-start'>
                <span className="page-link">
                    <Icon name="angle-double-left" size="lg" />
                </span>
            </li>
        );
    }
    if (value.index < indexMax) {
        let indexNext = value.index + 1;
        pagerLinkHtml.push(
            <li className="page-item" key='page-link-next'>
                <a className="page-link"
                    href={'#page-' + indexNext}
                    onClick={e => goClick(indexNext, value.size)}>
                    <Icon name="angle-right" size="lg" />
                </a>
            </li>
        );
    } else {
        pagerLinkHtml.push(
            <li className="page-item disabled" key='page-link-next'>
                <span className="page-link">
                    <Icon name="angle-right" size="lg" />
                </span>
            </li>
        );
    }
    pagerLinkHtml.unshift(
        <li className="page-item">
            <select className="custom-select" value={value.size} onChange={changeStep}>
                {steps.map(it => <option key={it}>{it}</option>)}
            </select>
        </li>
    );
    pagerLinkHtml = pagerLinkHtml.map((it, i) => <li key={'page-' + i} {...it.props} />)
    return (
        <ul className={'pagination pagination-' + props.size}>
            {pagerLinkHtml}
        </ul>
    );
}