import {Component, Input, Output} from "@angular/core";
import {ValueField} from "../value-field";
import {MessageService} from "primeng/components/common/messageservice";

@Component({
    selector: "path-accordion",
    templateUrl: "accordion.component.html",
    providers: [MessageService]
})
export class AccordionComponent {
    @Input("field")
    @Output("field")
    field: Accordion;
}

export class Accordion extends ValueField<any> {
    private _accordionEntries: AccordionEntry[] = [];
    private _multiple: boolean;

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        if (modelFormField["multiple"] != null) {
            this._multiple = modelFormField["multiple"];
        }
        if (modelFormField["accordion"] != null) {
            for (const entryModel of modelFormField["accordion"]) {
                const entry = new AccordionEntry();
                entry.title = entryModel.title;
                entry.text = entryModel.text;
                this._accordionEntries.push(entry);
            }
        }
    }

    get multiple(): boolean {
        return this._multiple;
    }

    set multiple(value: boolean) {
        this._multiple = value;
    }

    get accordionEntries(): AccordionEntry[] {
        return this._accordionEntries;
    }

}
export class AccordionEntry {
    private _title: string;
    private _text: string;

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }
}


