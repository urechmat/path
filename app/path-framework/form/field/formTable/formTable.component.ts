import {Component, Input, Output} from "@angular/core";
import {ValueField} from "../value-field";
import {Message} from "primeng/components/common/api";
import {MessageService} from "primeng/components/common/messageservice";
import {IForm} from "../../../pathinterface";
import {TranslationService} from "../../../service/translation.service";

@Component({
    selector: "path-form-table",
    templateUrl: "formTable.component.html",
    providers: [MessageService]
})
export class FormTableComponent {
    @Input("field")
    @Output("field")
    field: FormTable;
}

export class FormTable extends ValueField<any> {
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

    constructor(form: IForm, translationService: TranslationService) {
        super(form, translationService);
        this.value = [];
    }
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
                const entry = new TableEntry();
                entry.key = this.counter;
                entry.col1 = entryModel.col1;
                entry.col2 = entryModel.col2;
                entry.col3 = entryModel.col3;
                entry.col4 = entryModel.col4;
                entry.col5 = entryModel.col5;
                this.value.push(entry);
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
            const index = this.value.indexOf(e);
            this.value = this.value.filter((val, i) => i !== index);
            this.tableEntry = null;
            this.selectedEntries = [];
        }
    }
    public addRow() {
        if (this.value.length < this._paginationMax) {
            const newTableEntry = new TableEntry();
            newTableEntry.key = this.counter;
            newTableEntry.col1 = "Click to edit";
            newTableEntry.col2 = "Click to edit";
            newTableEntry.col3 = "Click to edit";
            newTableEntry.col4 = "Click to edit";
            newTableEntry.col5 = "Click to edit";
            this.value.push(newTableEntry);
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

export class TableEntry {
    private _key: any;
    private _col1: any;
    private _col2: any;
    private _col3: any;
    private _col4: any;
    private _col5: any;

    get key(): any {
        return this._key;
    }

    set key(value: any) {
        this._key = value;
    }

    get col1(): any {
        return this._col1;
    }

    set col1(value: any) {
        this._col1 = value;
    }

    get col2(): any {
        return this._col2;
    }

    set col2(value: any) {
        this._col2 = value;
    }

    get col3(): any {
        return this._col3;
    }

    set col3(value: any) {
        this._col3 = value;
    }

    get col4(): any {
        return this._col4;
    }

    set col4(value: any) {
        this._col4 = value;
    }

    get col5(): any {
        return this._col5;
    }

    set col5(value: any) {
        this._col5 = value;
    }
}
