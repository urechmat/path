import {Component, Input, Output} from "@angular/core";
import {ValueField} from "../value-field";
import {CheckboxGroupEntry} from "../checkbox/checkbox-group.component";

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
            const entry = new TableEntry();
            entry.col1 = entryModel.col1;
            entry.col2 = entryModel.col2;
            entry.col3 = entryModel.col3;
            entry.col4 = entryModel.col4;
            entry.col5 = entryModel.col5;
            this._entries.push(entry);
        }
    }

}


export class TableEntry {
    private _col1: any;
    private _col2: any;
    private _col3: any;
    private _col4: any;
    private _col5: any;

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

