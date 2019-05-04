import {Component, Input, Output} from "@angular/core";
import {ValueField} from "../value-field";

@Component({
    selector: "path-toggle",
    templateUrl: "toggle.component.html"
})
export class ToggleComponent {
    @Input("field")
    @Output("field")
    field: Toggle;
}

export class Toggle extends ValueField<boolean> {

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        this.value = false;
        if (modelFormField["checked"] != null) {
            this.value = modelFormField["checked"];
        }
    }
}



