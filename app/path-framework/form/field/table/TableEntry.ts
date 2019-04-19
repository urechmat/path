import {FormField} from "../form-field";

export class TableEntry extends FormField {
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