import {Component, Input, Output} from "@angular/core";
import {ValueField} from "../value-field";
import {Message} from "primeng/components/common/api";
import {MessageService} from "primeng/components/common/messageservice";
import {IForm} from "../../../pathinterface";
import {TranslationService} from "../../../service/translation.service";

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

    get accordionEntries(): AccordionEntry[] {
        return this._accordionEntries;
    }

    set accordionEntries(value: AccordionEntry[]) {
        this._accordionEntries = value;
    }

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        if (modelFormField["accordion"] != null) {
            for (const entryModel of modelFormField["accordion"]) {
                const entry = new AccordionEntry();
                entry.title = entryModel.title;
                entry.text = entryModel.text;
                this._accordionEntries.push(entry);
            }
        }
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


