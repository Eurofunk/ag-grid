// Type definitions for ag-grid v4.2.5-4c89157dfe91c1f392e9a8bdf09c9c12cbc95ef5-ef
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { GridOptions } from "./entities/gridOptions";
export declare class Grid {
    private context;
    private static enterpriseBeans;
    private static RowModelClasses;
    static setEnterpriseBeans(enterpriseBeans: any[], rowModelClasses: any): void;
    constructor(eGridDiv: HTMLElement, gridOptions: GridOptions, globalEventListener?: Function, $scope?: any, $compile?: any, quickFilterOnScope?: any);
    private getRowModelClass(gridOptions);
    destroy(): void;
}
