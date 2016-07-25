// Type definitions for ag-grid v4.2.5-4c89157dfe91c1f392e9a8bdf09c9c12cbc95ef5-ef
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { RowNode } from "../../entities/rowNode";
import { IRowNodeStage } from "../../interfaces/iRowNodeStage";
export declare class FlattenStage implements IRowNodeStage {
    private gridOptionsWrapper;
    private selectionController;
    private eventService;
    private context;
    private columnController;
    execute(rootNode: RowNode): RowNode[];
    private recursivelyAddToRowsToDisplay(rowsToFlatten, result, nextRowTop);
    private addRowNodeToRowsToDisplay(rowNode, result, nextRowTop);
    private createFooterNode(groupNode);
}
