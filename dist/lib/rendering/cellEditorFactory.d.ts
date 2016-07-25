// Type definitions for ag-grid v4.2.5-4c89157dfe91c1f392e9a8bdf09c9c12cbc95ef5-ef
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { ICellEditor } from "./cellEditors/iCellEditor";
export declare class CellEditorFactory {
    private static TEXT;
    private static SELECT;
    private static DATE;
    private static POPUP_TEXT;
    private static POPUP_SELECT;
    private context;
    private gridOptionsWrapper;
    private cellEditorMap;
    private init();
    addCellEditor(key: string, cellEditor: {
        new (): ICellEditor;
    }): void;
    createCellEditor(key: string | {
        new (): ICellEditor;
    }): ICellEditor;
}
