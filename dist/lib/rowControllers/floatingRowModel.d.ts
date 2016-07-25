// Type definitions for ag-grid v4.2.5-4c89157dfe91c1f392e9a8bdf09c9c12cbc95ef5-ef
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { RowNode } from "../entities/rowNode";
export declare class FloatingRowModel {
    private gridOptionsWrapper;
    private eventService;
    private context;
    private floatingTopRows;
    private floatingBottomRows;
    init(): void;
    isEmpty(floating: string): boolean;
    isRowsToRender(floating: string): boolean;
    getRowAtPixel(pixel: number, floating: string): number;
    setFloatingTopRowData(rowData: any[]): void;
    setFloatingBottomRowData(rowData: any[]): void;
    private createNodesFromData(allData, isTop);
    getFloatingTopRowData(): RowNode[];
    getFloatingBottomRowData(): RowNode[];
    getFloatingTopTotalHeight(): number;
    getFloatingBottomTotalHeight(): number;
    private getTotalHeight(rowNodes);
}
