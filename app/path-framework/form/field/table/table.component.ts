import {Component, Input, Output} from "@angular/core";
import {ValueField} from "../value-field";
import {TableEntry} from "./tableEntry";

@Component({
    selector: "path-table",
    templateUrl: "table.component.html"
})
export class TableComponent {
    @Input("field")
    @Output("field")
    field: Table;
}

export class Table extends ValueField<any> {
    private _listOfData: any[] = [];
    private _listOfHeader: any[] = [];

    private _entries: TableEntry[] = [];
    private _selectedEntries: TableEntry[] = [];

    private i = 0;

    private _tableEntry: TableEntry;

    private _title: string;
    private _readString: string;

    get readString(): string {
        return this._readString;
    }

    set readString(value: string) {
        this._readString = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get selectedEntries(): TableEntry[] {
        return this._selectedEntries;
    }

    set selectedEntries(value: TableEntry[]) {
        this._selectedEntries = value;
    }

    get tableEntry(): TableEntry {
        return this._tableEntry;
    }

    set tableEntry(value: TableEntry) {
        this._tableEntry = value;
    }

    get entries(): TableEntry[] {
        return this._entries;
    }

    set entries(value: TableEntry[]) {
        this._entries = value;
    }

    get listOfData(): any[] {
        return this._listOfData;
    }

    set listOfData(value: any[]) {
        this._listOfData = value;
    }

    get listOfHeader(): any[] {
        return this._listOfHeader;
    }

    set listOfHeader(value: any[]) {
        this._listOfHeader = value;
    }

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        if (modelFormField["header"] != null) {
            this._listOfHeader = modelFormField["header"];
        }
        if (modelFormField["row"] != null) {
            this._listOfData = modelFormField["row"];
        }
        for (const entryModel of modelFormField["row"]) {
            const entry = new TableEntry(this.getForm(), this.translationService);
            entry.col1 = entryModel.col1;
            entry.col2 = entryModel.col2;
            entry.col3 = entryModel.col3;
            entry.col4 = entryModel.col4;
            entry.col5 = entryModel.col5;
            this._entries.push(entry);
        }
        if (modelFormField["title"] != null) {
            this._title = modelFormField["title"];
        }
        if (modelFormField["readonly"] != null) {
            this.readonly = modelFormField["readonly"];
        }
    }

    public delete() {
        for (const e of this.selectedEntries) {
            const index = this.entries.indexOf(e);
            this.entries = this.entries.filter((val, i) => i !== index);
            this.tableEntry = null;
        }
    }
    public addRow() {
        const newTableEntry = new TableEntry(this.getForm(), this.translationService);
        newTableEntry.col1 = "Click to edit";
        newTableEntry.col2 = "Click to edit";
        newTableEntry.col3 = "Click to edit";
        newTableEntry.col4 = "Click to edit";
        newTableEntry.col5 = "Click to edit";
        this._entries.push(newTableEntry);
    }
}

