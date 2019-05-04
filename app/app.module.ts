import {NgModule, ModuleWithProviders, Injector} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {FileUploadComponent} from "./path-framework/form/field/file-upload/file-upload.component";
import {FormComponent} from "./path-framework/form/form.component";
import {ButtonGroupComponent} from "./path-framework/page/element/button-group/button-group.component";
import {ChartComponent} from "./path-framework/page/element/chart/chart.component";
import {AutoCompleteComponent} from "./path-framework/form/field/auto-complete/auto-complete-field.component";
import {TextFieldComponent} from "./path-framework/form/field/text/text-field.component";
import {DateFieldComponent} from "./path-framework/form/field/date/date-field.component";
import {RadioGroupComponent} from "./path-framework/form/field/radio/radio-group.component";
import {CheckboxGroupComponent} from "./path-framework/form/field/checkbox/checkbox-group.component";
import {FormFieldLabelComponent} from "./path-framework/form/field/form-field-label.component";
import {ProgressBarComponent} from "./path-framework/form/field/progress-bar/progress-bar.component";
import {LabelFieldComponent} from "./path-framework/form/field/label/label-field.component";
import {FieldListFieldComponent} from "./path-framework/form/field/fieldList/field-list-field.component";
import {NumberFieldComponent} from "./path-framework/form/field/number/number-field.component";
import {TranslationFieldComponent} from "./path-framework/form/field/translation/translation-field.component";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {DraggableDirective} from "./path-framework/form/draggable.directive";
import {BackButtonComponent} from "./path-framework/page/element/button/back-button.component";
import {LinkButtonComponent} from "./path-framework/page/element/button/link-button.component";
import {PageDeleteButtonComponent} from "./path-framework/page/element/button/page-delete-button.component";
import {ButtonComponent} from "./path-framework/page/element/button/button.component";
import {PageLabelComponent} from "./path-framework/page/element/label/page-label.component";
import {ListComponent} from "./path-framework/page/element/list/list.component";
import {CustomDirective} from "./path-framework/page/element/custom/custom.directive";
import {CustomContainerComponent} from "./path-framework/page/element/custom/custom-container.component";
import {ElementListComponent} from "./path-framework/page/element/element-list/element-list.component";
import {BreadcrumbComponent} from "./path-framework/page/element/breadcrumb/breadcrumb.component";
import {FormTableComponent} from "./path-framework/form/field/formTable/formTable.component";
import {AccordionComponent} from "./path-framework/form/field/accordion/accordion.component";
import {SliderFieldComponent} from "./path-framework/form/field/slider/slider-field.component";
import {ToggleComponent} from "./path-framework/form/field/toggle/toggle.component";
import {ButtonModule} from "primeng/primeng";
import {TableModule} from "primeng/table";
import {AccordionModule} from "primeng/accordion";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessagesModule} from "primeng/messages";
import {MessageModule} from "primeng/message";



@NgModule({
    imports:      [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        TableModule,
        ButtonModule,
        MessagesModule,
        MessageModule,
        AccordionModule,
        BrowserAnimationsModule,
        BsDatepickerModule.forRoot(),
        TooltipModule.forRoot()
    ],
    declarations: [
        DraggableDirective,
        LabelFieldComponent,
        FieldListFieldComponent,
        FormComponent,
        ChartComponent,
        AutoCompleteComponent,
        ProgressBarComponent,
        TextFieldComponent,
        TranslationFieldComponent,
        NumberFieldComponent,
        DateFieldComponent,
        RadioGroupComponent,
        CheckboxGroupComponent,
        FormFieldLabelComponent,
        BackButtonComponent,
        LinkButtonComponent,
        PageDeleteButtonComponent,
        ButtonComponent,
        PageLabelComponent,
        ListComponent,
        CustomDirective,
        CustomContainerComponent,
        ElementListComponent,
        ButtonGroupComponent,
        BreadcrumbComponent,
        FileUploadComponent,
        FormTableComponent,
        AccordionComponent,
        SliderFieldComponent,
        ToggleComponent
    ],
    exports:      [
        DraggableDirective,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        BsDatepickerModule,
        TooltipModule,
        LabelFieldComponent,
        FieldListFieldComponent,
        FormComponent,
        ChartComponent,
        AutoCompleteComponent,
        ProgressBarComponent,
        TextFieldComponent,
        TranslationFieldComponent,
        NumberFieldComponent,
        DateFieldComponent,
        RadioGroupComponent,
        CheckboxGroupComponent,
        FormFieldLabelComponent,
        BackButtonComponent,
        LinkButtonComponent,
        PageDeleteButtonComponent,
        ButtonComponent,
        PageLabelComponent,
        ListComponent,
        CustomDirective,
        CustomContainerComponent,
        ElementListComponent,
        ButtonGroupComponent,
        BreadcrumbComponent,
        FileUploadComponent,
        FormTableComponent,
        AccordionComponent,
        SliderFieldComponent,
        ToggleComponent
    ],
})
export class AppModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: AppModule, providers: []};
    }
}
