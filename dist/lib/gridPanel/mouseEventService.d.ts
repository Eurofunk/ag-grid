// Type definitions for ag-grid v4.2.5-4c89157dfe91c1f392e9a8bdf09c9c12cbc95ef5-ef
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { GridCell } from "../entities/gridCell";
export declare class MouseEventService {
    private gridPanel;
    private columnController;
    private rowModel;
    private floatingRowModel;
    private gridOptionsWrapper;
    getCellForMouseEvent(mouseEvent: MouseEvent): GridCell;
    private getFloating(mouseEvent);
    private getFloatingRowIndex(mouseEvent, floating);
    private getRowIndex(mouseEvent, floating);
    private getBodyRowIndex(mouseEvent);
    private getContainer(mouseEvent);
    private getColumn(mouseEvent);
    private getColumnsForContainer(container);
    private getXForContainer(container, mouseEvent);
}
