import {Component, Input, Output} from "@angular/core";
import {ValueField} from "../value-field";
import {TableEntry} from "./TableEntry";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
    selector: "path-table",
    templateUrl: "table.component.html"
})
export class TableComponent {
    @Input("field")
    @Output("field")
    field: Table;
}

export class Table extends ValueField<number> {
    private _listOfData: any[] = [];
    private _listOfHeader: any[] = [];

    private _entries: TableEntry[] = [];
    private _selectedEntries: TableEntry[] = [];

    private _selectedEntry: TableEntry;
    newEntry: boolean;

    private _tableEntry: TableEntry;

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

    get selectedEntry(): TableEntry {
        return this._selectedEntry;
    }

    set selectedEntry(value: TableEntry) {
        this._selectedEntry = value;
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
    }

    public onRowSelect(event) {
        this.newEntry = false;
        this._tableEntry = this.cloneEntry(event.data);
    }

    public cloneEntry(e: TableEntry): TableEntry {
        const tableEntry = new TableEntry(this.getForm(), this.translationService);
        tableEntry.col1 = e.col1;
        tableEntry.col2 = e.col2;
        tableEntry.col3 = e.col3;
        tableEntry.col4 = e.col4;
        tableEntry.col5 = e.col5;
        return tableEntry;
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
    /*
        public delete() {
            const index = this.cars.indexOf(this.selectedEntry);
            this.entries = this.entries.filter((val, i) => i !== index);
        }

        delete() {
            let index = this.cars.indexOf(this.selectedCar);
            this.cars = this.cars.filter((val, i) => i != index);
            this.car = null;
            this.displayDialog = false;
        }**/
}

