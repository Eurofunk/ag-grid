// Type definitions for ag-grid v4.2.5-4c89157dfe91c1f392e9a8bdf09c9c12cbc95ef5-ef
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
export declare class TabbedLayout {
    private eGui;
    private eHeader;
    private eBody;
    private params;
    private afterAttachedParams;
    private static TEMPLATE;
    private items;
    private activeItem;
    constructor(params: TabbedLayoutParams);
    setAfterAttachedParams(params: any): void;
    getMinWidth(): number;
    showFirstItem(): void;
    private addItem(item);
    showItem(tabbedItem: TabbedItem): void;
    private showItemWrapper(wrapper);
    getGui(): HTMLElement;
}
export interface TabbedLayoutParams {
    items: TabbedItem[];
    cssClass?: string;
    onItemClicked?: Function;
    onActiveItemClicked?: Function;
}
export interface TabbedItem {
    title: Element;
    body: HTMLElement;
    afterAttachedCallback?: Function;
}
