import {Component, Input, Output} from "@angular/core";
import {ValueField} from "../value-field";
import {TableEntry} from "./tableEntry";
import {Message} from "primeng/components/common/api";
import {MessageService} from "primeng/components/common/messageservice";

@Component({
    selector: "path-table",
    templateUrl: "table.component.html",
    providers: [MessageService]
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

    private _tableEntry: TableEntry;

    private _title: string;
    private _readString: string;
    private _sorting: boolean;
    private _pagination: boolean;
    private _paginationAnz: number;
    private _paginationMax: number;

    private _message: Message[] = [];
    private _counter: number;

    get counter(): number {
        return this._counter;
    }

    set counter(value: number) {
        this._counter = value;
    }

    get message(): Message[] {
        return this._message;
    }

    set message(value: Message[]) {
        this._message = value;
    }

    get pagination(): boolean {
        return this._pagination;
    }

    set pagination(value: boolean) {
        this._pagination = value;
    }

    get paginationAnz(): number {
        return this._paginationAnz;
    }

    set paginationAnz(value: number) {
        this._paginationAnz = value;
    }

    get paginationMax(): number {
        return this._paginationMax;
    }

    set paginationMax(value: number) {
        this._paginationMax = value;
    }

    get sorting(): boolean {
        return this._sorting;
    }

    set sorting(value: boolean) {
        this._sorting = value;
    }

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
        this.counter = 0;
        this._pagination = false;
        this.paginationMax = 100;
        if (modelFormField["header"] != null) {
            this._listOfHeader = modelFormField["header"];
        }
        if (modelFormField["row"] != null) {
            this._listOfData = modelFormField["row"];
            for (const entryModel of modelFormField["row"]) {
                const entry = new TableEntry(this.getForm(), this.translationService);
                entry.key = this.counter;
                entry.col1 = entryModel.col1;
                entry.col2 = entryModel.col2;
                entry.col3 = entryModel.col3;
                entry.col4 = entryModel.col4;
                entry.col5 = entryModel.col5;
                this._entries.push(entry);
                this.counter++;
            }
        }
        if (modelFormField["title"] != null) {
            this._title = modelFormField["title"];
        }
        if (modelFormField["readonly"] != null) {
            this.readonly = modelFormField["readonly"];
        }
        if (modelFormField["sorting"] != null) {
            this._sorting = modelFormField["sorting"];
        }
        if (modelFormField["paginationNumb"] != null) {
            this._pagination = true;
            this._paginationAnz = modelFormField["paginationNumb"];
        }
        if (modelFormField["paginationMax"] != null) {
            this._paginationMax = modelFormField["paginationMax"];
        }
    }

    public delete() {
        for (const e of this.selectedEntries) {
            const index = this.entries.indexOf(e);
            this.entries = this.entries.filter((val, i) => i !== index);
            this.tableEntry = null;
            this.selectedEntries = [];
        }
    }
    public addRow() {
        if (this._entries.length < this._paginationMax) {
            const newTableEntry = new TableEntry(this.getForm(), this.translationService);
            newTableEntry.key = this.counter;
            newTableEntry.col1 = "Click to edit";
            newTableEntry.col2 = "Click to edit";
            newTableEntry.col3 = "Click to edit";
            newTableEntry.col4 = "Click to edit";
            newTableEntry.col5 = "Click to edit";
            this._entries.push(newTableEntry);
            this.counter++;
        } else {
            this.showError();
        }
    }
    showError() {
        this._message = [];
        this._message.push({severity: "error", summary: "Error: ", detail: "Maximum number of entries reached"});
    }
}
