declare function assertChildren(children: any | any[] | undefined): any[];
declare type Mapper = (it: any) => any;
declare const _default: {
    assertChildren: typeof assertChildren;
    selectHeader: (children: any[]) => any;
    selectTitle: (children: any[], mapper?: Mapper | undefined) => any;
    selectContent: (children: any[]) => any;
    selectFooter: (children: any[]) => any;
    appendClassName: (item: any, className: string) => any;
};
export default _default;
