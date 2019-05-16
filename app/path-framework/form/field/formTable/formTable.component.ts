import {Component, Input, Output} from "@angular/core";
import {ValueField} from "../value-field";
import {IForm} from "../../../pathinterface";
import {TranslationService} from "../../../service/translation.service";

@Component({
    selector: "path-form-table",
    templateUrl: "formTable.component.html"
})
export class FormTableComponent {
    @Input("field")
    @Output("field")
    field: FormTable;
}

export class FormTable extends ValueField<any> {
    private _listOfData: any[] = [];
    private _listOfHeader: any[] = [];
    private _scrollable: boolean;

    private _entries: TableEntry[] = [];
    private _selectedEntries: TableEntry[] = [];

    private _tableEntry: TableEntry;

    private _title: string;
    private _readString: string;
    private _sorting: boolean;

    private _counter: number;

    constructor(form: IForm, translationService: TranslationService) {
        super(form, translationService);
        this.value = [];
    }

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        this.counter = 0;
        this.width = 2;
        this.readonly = true;
        this._sorting = false;
        this._scrollable=true;
        if (modelFormField["headerRow"] != null) {
            this._listOfHeader = modelFormField["headerRow"];
        }
        if (modelFormField["rows"] != null) {
            this._listOfData = modelFormField["rows"];
            for (const entryModel of modelFormField["rows"]) {
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
        if (modelFormField["scrollable"] != null) {
            this._scrollable = modelFormField["scrollable"];
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
        const newTableEntry = new TableEntry();
        newTableEntry.key = this.counter;
        newTableEntry.col1 = "Click to edit";
        newTableEntry.col2 = "Click to edit";
        newTableEntry.col3 = "Click to edit";
        newTableEntry.col4 = "Click to edit";
        newTableEntry.col5 = "Click to edit";
        this.value.push(newTableEntry);
        this.counter++;
    }

    // Getter & Setter
    get counter(): number {
        return this._counter;
    }

    set counter(value: number) {
        this._counter = value;
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

    get scrollable(): boolean {
        return this._scrollable;
    }

    set scrollable(value: boolean) {
        this._scrollable = value;
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
