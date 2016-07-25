// Type definitions for ag-grid v4.2.5-4c89157dfe91c1f392e9a8bdf09c9c12cbc95ef5-ef
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
export interface Filter {
    getGui(): any;
    isFilterActive(): boolean;
    doesFilterPass(params: any): boolean;
    afterGuiAttached?(params?: {
        hidePopup?: Function;
    }): void;
    onNewRowsLoaded?(): void;
    destroy?(): void;
    getApi?(): any;
}
