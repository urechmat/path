import {Component, Input, Output} from "@angular/core";
import {ValueField} from "../value-field";

@Component({
    selector: "path-slider",
    templateUrl: "slider-field.component.html"
})
export class SliderFieldComponent {
    @Input("field")
    @Output("field")
    field: SliderField;
}

export class SliderField extends ValueField<number> {
    private _min: number;
    private _max: number;


    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        if (modelFormField["min"] != null) {
            this._min = modelFormField["min"];
        } else {
            this._min = 0;
        }
        if (modelFormField["max"] != null) {
            this._max = modelFormField["max"];
        } else {
            this._max = 100;
        }
    }

    // Getter & Setter
    get min(): number {
        return this._min;
    }

    set min(value: number) {
        this._min = value;
    }

    get max(): number {
        return this._max;
    }

    set max(value: number) {
        this._max = value;
    }

}



