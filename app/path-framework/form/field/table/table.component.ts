import {Component, Input, Output} from "@angular/core";
import {ValueField} from "../value-field";
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
    private _options: any;
    get options(): any {
        return this._options;
    }

    set options(value: any) {
        this._options = value;
    }

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        this._options = {
            center: {lat: 47.377847, lng: 8.539834},
            zoom: 12
        };
    }
}
